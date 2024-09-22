import { APIItemProps } from './ComponentDocumentation';
import KindRendererInterface from './KindRendererInterface';

const KindMap: {
  [key: number]: (props: APIItemProps) => JSX.Element;
} = {
  256: KindRendererInterface,
};

const KindRenderer = (props: APIItemProps) => {
  const { reflection } = props;

  const KindRenderer = KindMap[reflection.kind];

  if (!KindRenderer) {
    console.log(`No kind renderer for '${reflection.kind}'`);
    return null;
  }

  return <KindRenderer {...props} />;
};

export default KindRenderer;
