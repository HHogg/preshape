import { JSONOutput } from 'typedoc';
import TypeLabel from './TypeLabel';
import { TypeRendererProps } from './TypeRenderer';
import { ApiStateValue } from './Types';

interface Props extends TypeRendererProps {
  type: JSONOutput.LiteralType;
}

const TypeRendererLiteral = (props: Props) => {
  const { onStateChange, state, type } = props;

  return (
    <TypeLabel
      active={state === type.value}
      clickable
      onClick={() => onStateChange(type.value as ApiStateValue)}
    >
      "{type.value as ApiStateValue}"
    </TypeLabel>
  );
};

export default TypeRendererLiteral;
