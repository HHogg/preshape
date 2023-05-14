import { FormEvent, useCallback, useMemo, useState } from 'react';
import {
  useForm,
  Form,
  FormErrorProps,
  FormProps,
  Input,
  InputLabel,
  Button,
  Buttons,
  Box,
  CheckBox,
  FormError,
  FormValidateFn,
  FormValidateError,
} from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramForm';

type FormState = {
  q1: string;
  q2: string;
  q3: string;
};

const Item: CatalogueItem<{
  Form: FormProps;
  FormError: FormErrorProps;
}> = {
  name: 'Form',
  description:
    'Form component with added abilities to communicate field-by-field error pattern through context.',
  Pictogram,
  apis: [
    {
      module: '"Form/Form"',
      name: 'FormProps',
      rename: 'Form',
    },
  ],
  showcase: {
    state: {
      Form: {},
      FormError: {},
    },
    Component: () => {
      const [config, setConfig] = useState({
        validateOnlyDirty: false,
        validateOnlySubmitted: false,
        validateOnlyOneAtATime: false,
      });

      const initial = useMemo<FormState>(
        () => ({
          q1: '',
          q2: '',
          q3: '',
        }),
        []
      );

      const getFormErrors = (
        state: FormState
      ): FormValidateError<FormState, string> => ({
        q1: state.q1 === '9' ? undefined : 'The answer is 9',
        q2: state.q2 === '27' ? undefined : 'The answer is 27',
        q3: state.q3 === '1' ? undefined : 'The answer is 1',
      });

      const validate = useCallback<FormValidateFn<FormState, string>>(
        (state, setError) => {
          setError(getFormErrors(state));
        },
        []
      );

      const form = useForm({
        initial,
        validate,
      });

      const handleSetValue =
        (field: keyof typeof form.state) =>
        (event: FormEvent<HTMLInputElement>) => {
          form.setState((s) => ({
            ...s,
            [field]: (event.target as HTMLInputElement).value,
          }));
        };

      const handleSubmit = () => {
        form.setSubmitted();
      };

      const handleReset = () => {
        form.reset();
      };

      const toggleConfig = (prop: keyof typeof config) => () => {
        setConfig((config) => ({
          ...config,
          [prop]: !config[prop],
        }));
      };

      return (
        <Box>
          <Form {...config} form={form} grow>
            <FormError name="q1" margin="x3">
              <InputLabel label="What is 3 x 3?">
                <Input
                  name="q1"
                  onChange={handleSetValue('q1')}
                  placeholder="Answer"
                  value={form.state.q1}
                />
              </InputLabel>
            </FormError>

            <FormError name="q2" margin="x3">
              <InputLabel label="What is 3 x 3 x 3?">
                <Input
                  name="q2"
                  onChange={handleSetValue('q2')}
                  placeholder="Answer"
                  value={form.state.q2}
                />
              </InputLabel>
            </FormError>

            <FormError name="q3" margin="x3">
              <InputLabel label="What is -1 x -1?">
                <Input
                  name="q3"
                  onChange={handleSetValue('q3')}
                  placeholder="Answer"
                  value={form.state.q3}
                />
              </InputLabel>
            </FormError>

            <Buttons gap="x2">
              <Button onClick={handleSubmit} type="button" variant="primary">
                Submit
              </Button>

              <Button onClick={handleReset} type="button">
                Reset
              </Button>
            </Buttons>
          </Form>

          <Box
            borderTop
            borderSize="x2"
            borderColor="background-shade-3"
            margin="x4"
            paddingTop="x4"
          >
            <CheckBox
              checked={config.validateOnlyDirty}
              onChange={toggleConfig('validateOnlyDirty')}
              margin="x1"
            >
              Validate only when dirty
            </CheckBox>

            <CheckBox
              checked={config.validateOnlySubmitted}
              onChange={toggleConfig('validateOnlySubmitted')}
              margin="x1"
            >
              Validate only when submitted
            </CheckBox>

            <CheckBox
              checked={config.validateOnlyOneAtATime}
              onChange={toggleConfig('validateOnlyOneAtATime')}
              margin="x1"
            >
              Validate only on input at a time
            </CheckBox>
          </Box>
        </Box>
      );
    },
    code: `
import { useCallback, useMemo } from 'react';
import { useForm, Form, FormValidateFn, FormState Input } from 'preshape';

const initial = useMemo<FormState>(() => ({
  someValue: '',
}), []);

const validate = useCallback<FormValidateFn<FormState, string>>(
  (state, setError) => {
    setError(doSomeValidationOnTheState(state));
  },
  []
);

const form = useForm({
  initial,
  validate,
});

<Form form={form}>
  <FormError name="q2" margin="x3">
    <InputLabel label="...">
      <Input
        onChange={handleSetValue}
        value={form.state.someValue}
      />
    </InputLabel>
  </FormError>
</Form>
    `,
  },
};

export default Item;
