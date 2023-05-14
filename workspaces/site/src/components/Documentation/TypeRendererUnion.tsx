import { JSONOutput } from 'typedoc';
import TypeRenderer, { TypeRendererProps } from './TypeRenderer';

interface Props extends TypeRendererProps {
  type: JSONOutput.UnionType;
}

const TypeRendererUnion = (props: Props) => {
  const { reflection, onStateChange, state, type } = props;

  return (
    <>
      {type.types.map((type, index) => (
        <TypeRenderer
          key={index}
          onStateChange={onStateChange}
          state={state}
          reflection={reflection}
          type={type}
        />
      ))}
    </>
  );
};

export default TypeRendererUnion;
