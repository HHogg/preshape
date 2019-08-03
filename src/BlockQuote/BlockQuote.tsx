import * as React from 'react';
import Text, { Props as TextProps } from '../Text/Text';
import './BlockQuote.css';

interface Props extends TextProps {}

const BlockQuote: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Text
        color="shade-3"
        paddingHorizontal="x6"
        paddingVertical="x1"
        { ...props }
        Component="blockquote"
        className="BlockQuote" />
  );
};

export default BlockQuote;
