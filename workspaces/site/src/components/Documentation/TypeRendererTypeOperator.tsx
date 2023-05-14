import { JSONOutput } from 'typedoc';
import TypeRenderer, { TypeRendererProps } from './TypeRenderer';

interface Props extends TypeRendererProps {
  type: JSONOutput.TypeOperatorType;
}

const TypeRendererTypeOperator = (props: Props) => {
  return <TypeRenderer {...props} type={props.type.target} />;
};

export default TypeRendererTypeOperator;
