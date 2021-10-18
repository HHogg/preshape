import * as React from 'react';
import toJsxString from 'react-element-to-jsx-string';
import { CodeBlock, Appear, Box, Icons, Link, Text, ThemeSwitcher } from 'preshape';
import { RootContext } from '../Root';

export const ShowcaseContext = React.createContext<{
  setShowcaseCode: (node: React.ReactNode) => void;
}>({
  setShowcaseCode: () => {},
});

const toJsxStringOptions = {
  displayName: (element: React.ReactElement<any>): string =>
  element.type.displayName ||
  (element.type.name !== '_default' ? element.type.name : null) || // function name
  (element.type.render && element.type.render.name !== '_default' ? element.type.render.name : null) ||
    (typeof element.type === 'function' // function without a name, you should provide one
      ? 'No Display Name'
      : element.type),
  maxInlineAttributesLineLength: Infinity,
  functionValue: () => () => {},
};

const getCodeString = (node: React.ReactNode) => React.Children
  .toArray(node)
  .map((node) => toJsxString(node, toJsxStringOptions))
  .join('\n');

interface Props {
  children: React.ReactNode;
  disableCode?: boolean;
}

export default ({ children, disableCode }: Props) => {
  const { onChangeTheme, theme } = React.useContext(RootContext);
  const [code, setCode] = React.useState(getCodeString(children));
  const [isIsolatedExample, setIsIsolatedExample] = React.useState(false);
  const [isCodeExpanded, setIsCodeExpanded] = React.useState(false);

  const setShowcaseCode = (node: React.ReactNode) => {
    setIsIsolatedExample(true);
    setCode(getCodeString(node));
  };

  React.useEffect(() => {
    if (!isIsolatedExample) {
      setCode(getCodeString(children));
    }
  }, [children]);

  return (
    <ShowcaseContext.Provider value={ { setShowcaseCode } }>
      <Box
          backgroundColor="background-shade-2"
          borderRadius="x3"
          borderSize="x2"
          flex="vertical"
          gap="x2"
          paddingHorizontal="x3"
          paddingVertical="x2">
        <Box alignChildrenVertical="middle" flex="horizontal" gap="x4">
          <Box flex="horizontal" gap="x1" grow>
            <Box
                backgroundColor="negative-shade-1"
                borderRadius="full"
                borderSize="x2"
                height="0.75rem"
                width="0.75rem" />

            <Box
                backgroundColor="highlight"
                borderRadius="full"
                borderSize="x2"
                height="0.75rem"
                width="0.75rem" />

            <Box
                backgroundColor="positive-shade-1"
                borderRadius="full"
                borderSize="x2"
                height="0.75rem"
                width="0.75rem" />
          </Box>
          <Box>
            <ThemeSwitcher
                onChange={ onChangeTheme }
                theme={ theme } />
          </Box>
        </Box>

        <Box
            backgroundColor="background-shade-1"
            borderSize="x2"
            container
            paddingHorizontal="x6"
            paddingVertical="x12"
            scrollable
            textColor="text-shade-1">
          { children }
        </Box>

        { !disableCode && (
          <Box>
            <Appear
                animation="Expand"
                visible={ isCodeExpanded }
                visibleInitially={ false }>
              <CodeBlock
                  language="jsx"
                  paddingHorizontal="x6"
                  paddingVertical="x3"
                  size="x2"
                  wrap>
                { code }
              </CodeBlock>
            </Appear>

            <Text align="end" padding="x1">
              <Link
                  display="inline-block"
                  isTextLink
                  onClick={ () => setIsCodeExpanded(!isCodeExpanded) }
                  size="x2"
                  strong>
                <Box alignChildren="middle" flex="horizontal" gap="x1">
                  <Box>
                    { isCodeExpanded ? 'Hide code' : 'Show code' }
                  </Box>

                  <Box>
                    <Icons.Code size="16px" />
                  </Box>
                </Box>
              </Link>
            </Text>
          </Box>
        ) }
      </Box>
    </ShowcaseContext.Provider>
  );
};
