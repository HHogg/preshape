import * as React from 'react';
import Text, { Props as TextProps } from '../Text/Text';
import './BlockQuote.css';

interface Props extends TextProps {}

const BlockQuote: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Text
        paddingHorizontal="x6"
        paddingVertical="x1"
        { ...props }
        className="BlockQuote"
        Component="blockquote"
        textColor="text-shade-3" />
  );
};

export default BlockQuote;
