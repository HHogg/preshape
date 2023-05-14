import { JSONOutput } from 'typedoc';
import { TypeRendererProps } from './TypeRenderer';
import { getSource } from './documentation';
import TypeLabel from './TypeLabel';

interface Props extends TypeRendererProps {
  type: JSONOutput.ReflectionType;
}

const TypeRendererReflection = (props: Props) => {
  const source = getSource(props.reflection);

  if (source) {
    return <TypeLabel href={source}>{props.reflection.name}</TypeLabel>;
  }

  return null;
};

export default TypeRendererReflection;
