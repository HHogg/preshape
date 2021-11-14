import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { ShowcaseContext } from './Showcase';

const ShowcaseCode = ({ children }: PropsWithChildren<{}>) => {
  const { setShowcaseCode } = useContext(ShowcaseContext);

  useEffect(() => {
    setShowcaseCode(children);
  }, []);

  return <>{children}</>;
};

export default ShowcaseCode;
