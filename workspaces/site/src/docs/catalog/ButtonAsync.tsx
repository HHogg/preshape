import { CheckIcon, XIcon } from 'lucide-react';
import { ButtonAsync, ButtonAsyncProps, Buttons } from 'preshape';
import { useEffect, useRef, useState } from 'react';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramButtonasync';

const Item: CatalogueItem<{
  ButtonAsync: ButtonAsyncProps;
}> = {
  name: 'ButtonAsync',
  description:
    'A button that can be used to show loading, success, and error states.',
  Pictogram,
  apis: [
    {
      module: '"Button/ButtonAsync"',
      name: 'ButtonAsyncProps',
      rename: 'ButtonAsync',
    },
  ],
  showcase: {
    state: {
      ButtonAsync: {
        isLoading: false,
        isSuccess: false,
        isError: false,
      },
    },
    Component: (props) => {
      const refSuccess = useRef<NodeJS.Timeout | null>(null);
      const refFailure = useRef<NodeJS.Timeout | null>(null);
      const [successState, setSuccessState] = useState({
        isLoading: false,
        isSuccess: false,
      });
      const [errorState, setErrorState] = useState({
        isLoading: false,
        isError: false,
      });

      const handleButtonSuccessClick = () => {
        setSuccessState({
          isLoading: true,
          isSuccess: false,
        });

        refSuccess.current = setTimeout(() => {
          setSuccessState({
            isLoading: false,
            isSuccess: true,
          });
        }, 2000);
      };

      const handleButtonFailureClick = () => {
        setErrorState({
          isLoading: true,
          isError: false,
        });

        refFailure.current = setTimeout(() => {
          setErrorState({
            isLoading: false,
            isError: true,
          });
        }, 2000);
      };

      useEffect(() => {
        return () => {
          if (refSuccess.current) {
            clearTimeout(refSuccess.current);
          }

          if (refFailure.current) {
            clearTimeout(refFailure.current);
          }
        };
      }, []);

      useEffect(() => {
        setSuccessState({
          isLoading: props.ButtonAsync.isLoading,
          isSuccess: false,
        });

        setErrorState({
          isLoading: props.ButtonAsync.isLoading,
          isError: false,
        });
      }, [props.ButtonAsync.isLoading]);

      useEffect(() => {
        setErrorState({
          isLoading: false,
          isError: props.ButtonAsync.isError,
        });
      }, [props.ButtonAsync.isError]);

      useEffect(() => {
        setSuccessState({
          isLoading: false,
          isSuccess: props.ButtonAsync.isSuccess,
        });
      }, [props.ButtonAsync.isSuccess]);

      return (
        <Buttons>
          <ButtonAsync
            isError={false}
            {...successState}
            onClick={handleButtonSuccessClick}
          >
            <CheckIcon size="1rem" />
            Async Success
          </ButtonAsync>

          <ButtonAsync
            isSuccess={false}
            {...errorState}
            error={
              errorState.isError
                ? (props.ButtonAsync.error ?? 'Something went wrong')
                : undefined
            }
            onClick={handleButtonFailureClick}
          >
            <XIcon size="1rem" />
            Async Failure
          </ButtonAsync>
        </Buttons>
      );
    },
    code: `
import { ButtonAsync } from 'preshape';

<ButtonAsync
  isError={false}
  isLoading={false}
  isSuccess={true}
  variant="secondary">
  ...
</ButtonAsync>

    `,
  },
};

export default Item;
