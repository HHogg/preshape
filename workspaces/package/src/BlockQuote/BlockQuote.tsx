import * as React from 'react';
import { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './BlockQuote.css';

/**
 * A component to indicate that the contents is an extended
 * quotation, by visually indenting and styling.
 */
export interface BlockQuoteProps extends TextProps {}

const BlockQuote: React.RefForwardingComponent<
  HTMLQuoteElement,
  Attributes<HTMLQuoteElement, BlockQuoteProps>
> = (props, ref) => {
  return (
    <Text
      paddingHorizontal="x6"
      paddingVertical="x1"
      {...props}
      className="BlockQuote"
      ref={ref}
      tag="blockquote"
      textColor="text-shade-3"
    />
  );
};

export default React.forwardRef(BlockQuote);
