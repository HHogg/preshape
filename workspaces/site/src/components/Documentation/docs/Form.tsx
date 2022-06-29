import React, { FormEvent, useCallback, useMemo } from 'react';
import {
  useForm,
  Form,
  FormErrorProps,
  FormProps,
  Input,
  InputLabel,
  Button,
  Buttons,
} from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Form: FormProps;
  FormError: FormErrorProps;
}> = {
  name: 'Form',
  description:
    'Form component with added abilities to communicate field-by-field error pattern through context.',
  pictogram: require('../../SVGs/PictogramAppear').default,
  type: 'component',
  showcase: {
    Component: () => {
      const initial = useMemo(
        () => ({
          q1: '',
          q2: '',
          q3: '',
        }),
        []
      );

      const getFormErrors = (state: typeof initial) => ({
        q1: state.q1 === '9' ? undefined : 'The answer is 9',
        q2: state.q2 === '27' ? undefined : 'The answer is 27',
        q3: state.q3 === '1' ? undefined : 'The answer is 1',
      });

      const form = useForm({
        initial,
        validate: useCallback((state, setError) => {
          setError(getFormErrors(state));
        }, []),
      });

      const handleSetValue =
        (field: keyof typeof form.state) =>
        (event: FormEvent<HTMLInputElement>) => {
          form.setDirty(field);
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

      return (
        <Showcase>
          <Form form={form}>
            <InputLabel label="What is 3 x 3?" margin="x3">
              <Input
                name="q1"
                onChange={handleSetValue('q1')}
                placeholder="Answer"
                value={form.state.q1}
              />
            </InputLabel>

            <InputLabel label="What is 3 x 3 x 3?" margin="x3">
              <Input
                name="q2"
                onChange={handleSetValue('q2')}
                placeholder="Answer"
                value={form.state.q2}
              />
            </InputLabel>

            <InputLabel label="What is -1 x -1?" margin="x3">
              <Input
                name="q3"
                onChange={handleSetValue('q3')}
                placeholder="Answer"
                value={form.state.q3}
              />
            </InputLabel>

            <Buttons gap="x2">
              <Button onClick={handleSubmit} type="button" variant="primary">
                Submit
              </Button>

              <Button onClick={handleReset} type="button">
                Reset
              </Button>
            </Buttons>
          </Form>
        </Showcase>
      );
    },
    state: {
      Form: {},
      FormError: {},
    },
  },
  apis: [
    {
      module: '"Form/Form"',
      name: 'FormProps',
      rename: 'Form',
    },
  ],
};

export default Item;
