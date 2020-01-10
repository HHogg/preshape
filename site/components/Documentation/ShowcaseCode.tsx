import * as React from 'react';
import { ShowcaseContext } from './Showcase';

export default ({ children }: React.PropsWithChildren<{}>) => {
  const { setShowcaseCode } = React.useContext(ShowcaseContext);

  setShowcaseCode(children);

  return children as JSX.Element;
};
