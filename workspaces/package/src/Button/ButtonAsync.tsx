import { AlertCircleIcon, FrownIcon, SmileIcon } from 'lucide-react';
import {
  Dispatch,
  forwardRef,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Appear } from '../Appear/Appear';
import { Box } from '../Box/Box';
import { Button, ButtonProps } from '../Button/Button';
import { Spinner } from '../Spinner/Spinner';
import { Tooltip } from '../Tooltip/Tooltip';

/**
 * A button that can be used to show loading, success, and error states.
 */
export interface ButtonAsyncProps extends ButtonProps {
  /** Error message that will be shown in the button */
  error?: string;
  /** Whether the button is in an error state */
  isError: boolean;
  /** Whether the button is in a loading state */
  isLoading: boolean;
  /** Whether the button is in a success state */
  isSuccess: boolean;
}

export const ButtonAsync = forwardRef<any, ButtonAsyncProps>(
  (
    {
      children,
      error,
      isError,
      isLoading,
      isSuccess,
      variant = 'secondary',
      ...rest
    },
    ref
  ) => {
    const refPrevIsError = useRef(isError);
    const refPrevIsSuccess = useRef(isSuccess);
    const [showSadFace, setShowSadFace] = useState(false);
    const [showHappyFace, setShowHappyFace] = useState(false);
    const refTimeout = useRef<number>(0);

    const setTimeoutState = (setState: Dispatch<SetStateAction<boolean>>) => {
      setState(true);
      window.clearTimeout(refTimeout.current);
      refTimeout.current = window.setTimeout(() => {
        setState(false);
      }, 2500);
    };

    useEffect(() => {
      if (isError && refPrevIsError.current === false) {
        refPrevIsError.current = true;
        setTimeoutState(setShowSadFace);
      } else {
        refPrevIsError.current = false;
      }
    }, [isError]);

    useEffect(() => {
      if (isSuccess && refPrevIsSuccess.current === false) {
        refPrevIsSuccess.current = true;
        setTimeoutState(setShowHappyFace);
      } else {
        refPrevIsSuccess.current = false;
      }
    }, [isSuccess]);

    useEffect(() => {
      if (isLoading) {
        setShowSadFace(false);
        setShowHappyFace(false);
      }
    }, [isLoading]);

    useEffect(() => {
      return () => {
        window.clearTimeout(refTimeout.current);
      };
    }, []);

    return (
      <Button
        {...rest}
        variant={
          isLoading || showHappyFace || showSadFace ? 'secondary' : variant
        }
        color={
          (showSadFace && 'negative') ||
          (showHappyFace && 'positive') ||
          rest.color
        }
        container
        ref={ref}
      >
        <Appear
          absolute="center"
          animation="Pop"
          visible={isLoading || showSadFace || showHappyFace}
        >
          <Box absolute="center">
            {isLoading && <Spinner />}
            {showHappyFace && <SmileIcon size="1.5rem" />}
            {showSadFace && <FrownIcon size="1.5rem" />}
          </Box>
        </Appear>

        <Appear
          alignChildrenVertical="middle"
          animation="Pop"
          gap="x2"
          flex="horizontal"
          visible={!isLoading && !showSadFace && !showHappyFace}
        >
          {children}
        </Appear>

        {error && (
          <Appear absolute="top-right">
            <Tooltip content={error}>
              <Box
                backgroundColor="negative-shade-5"
                borderRadius="full"
                style={{ transform: 'translate(50%, -50%)' }}
                textColor="white"
              >
                <AlertCircleIcon size="1.5rem" />
              </Box>
            </Tooltip>
          </Appear>
        )}
      </Button>
    );
  }
);
