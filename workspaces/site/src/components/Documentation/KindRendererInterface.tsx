import TypePropTable from './TypePropTable';
import { APIItemProps } from './ComponentDocumentation';

interface Props extends APIItemProps {}

const KindRendererInterface = (props: Props) => {
  return <TypePropTable {...props} />;
};

export default KindRendererInterface;
