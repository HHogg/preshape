import { JSONOutput } from 'typedoc';
import TypeRendererIntrinsic from './TypeRendererIntrinsic';
import TypeRendererLiteral from './TypeRendererLiteral';
import TypeRendererReference from './TypeRendererReference';
import TypeRendererReflection from './TypeRendererReflection';
import TypeRendererTypeOperator from './TypeRendererTypeOperator';
import TypeRendererUnion from './TypeRendererUnion';
import { ApiValueController } from './Types';

export interface TypeRendererProps extends ApiValueController {
  reflection: JSONOutput.DeclarationReflection;
  type: JSONOutput.DeclarationReflection['type'];
}

const typeMap: Partial<
  Record<
    JSONOutput.SomeType['type'],
    (
      props: Omit<TypeRendererProps, 'type'> & { type: any }
    ) => JSX.Element | null
  >
> = {
  intrinsic: TypeRendererIntrinsic,
  literal: TypeRendererLiteral,
  reference: TypeRendererReference,
  reflection: TypeRendererReflection,
  union: TypeRendererUnion,
  typeOperator: TypeRendererTypeOperator,
};

const TypeRenderer = (props: TypeRendererProps) => {
  const TypeRenderer = props.type?.type && typeMap[props.type?.type];

  if (!TypeRenderer) {
    console.log(`No TypeRenderer for '${props.type?.type}'`);
    console.log(props.reflection);
    return null;
  }

  return <TypeRenderer {...props} type={props.type} />;
};

export default TypeRenderer;
