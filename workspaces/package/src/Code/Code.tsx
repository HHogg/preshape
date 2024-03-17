import { forwardRef } from 'react';
import { Text, TextProps } from '../Text/Text';
import { sizeX1Px } from '../variables';
import { Language, SyntaxHighlight } from './SyntaxHighlight';

export interface CodeProps extends TextProps {
  /**
   * Code content
   **/
  children?: string;
  /**
   * Language of the content to be highlighted. What ever language is
   * set here the matching Ace mode needs to be imported. For example.
   **/
  language?: Language;
}

export const Code = forwardRef<any, CodeProps>(
  ({ children, language = 'tsx', ...rest }, ref) => {
    return (
      <Text
        {...rest}
        ref={ref}
        tag="span"
        display="inline-block"
        monospace
        borderRadius="x2"
        borderSize="x1"
        backgroundColor="background-shade-3"
        borderColor="background-shade-4"
        size="x3"
        style={{
          padding: `${sizeX1Px * 0.25}px ${sizeX1Px * 1.5}px`,
          margin: `0 ${sizeX1Px * 0.5}`,
        }}
      >
        <SyntaxHighlight className="Code" language={language}>
          {children}
        </SyntaxHighlight>
      </Text>
    );
  }
);
