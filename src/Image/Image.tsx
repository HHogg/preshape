import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';
import './Image.css';

interface Props extends BaseProps {}

const Image: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Base { ...props }
        Component="img"
        className="Image" />
  );
};

export default Image;
