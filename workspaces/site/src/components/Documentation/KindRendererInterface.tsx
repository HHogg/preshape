import { APIItemProps } from './ComponentDocumentation';
import TypePropTable from './TypePropTable';

type Props = APIItemProps

const KindRendererInterface = (props: Props) => {
  return <TypePropTable {...props} />;
};

export default KindRendererInterface;
