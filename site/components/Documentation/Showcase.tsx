import * as React from 'react';
import toJsxString from 'react-element-to-jsx-string';
import { CodeBlock, Appear, Flex, Icon, Link, Text, ThemeSwitcher } from 'preshape';
import SiteContext from '../SiteContext';

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
  const { onChangeTheme, theme } = React.useContext(SiteContext);
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
      <Flex
          backgroundColor="background-shade-2"
          borderSize="x2"
          direction="vertical"
          gap="x2"
          paddingHorizontal="x3"
          paddingVertical="x2">
        <Flex alignChildrenVertical="middle" direction="horizontal" gap="x4">
          <Flex direction="horizontal" gap="x1" grow>
            <Flex>
              <Icon
                  name="Circle"
                  size="1rem" />
            </Flex>

            <Flex>
              <Icon
                  name="Circle"
                  size="1rem" />
            </Flex>

            <Flex>
              <Icon
                  name="Circle"
                  size="1rem" />
            </Flex>
          </Flex>

          <Flex>
            <ThemeSwitcher
                onChange={ onChangeTheme }
                theme={ theme } />
          </Flex>
        </Flex>

        <Flex
            backgroundColor="background-shade-1"
            borderSize="x2"
            container
            paddingHorizontal="x6"
            paddingVertical="x12"
            scrollable
            textColor="text-shade-1">
          { children }
        </Flex>

        { !disableCode && (
          <Flex>
            <Appear
                animation="Expand"
                visible={ isCodeExpanded }
                visibleInitially={ false }>
              <CodeBlock
                  language="jsx"
                  paddingHorizontal="x6"
                  paddingVertical="x3"
                  size="x1"
                  wrap>
                { code }
              </CodeBlock>
            </Appear>

            <Text align="end" padding="x1">
              <Link
                  display="inline-block"
                  onClick={ () => setIsCodeExpanded(!isCodeExpanded) }
                  size="x1"
                  strong
                  underline>
                <Flex alignChildren="middle" direction="horizontal" gap="x1">
                  <Flex>
                    { isCodeExpanded ? 'Hide code' : 'Show code' }
                  </Flex>

                  <Flex>
                    <Icon name="Code" size="1rem" />
                  </Flex>
                </Flex>
              </Link>
            </Text>
          </Flex>
        ) }
      </Flex>
    </ShowcaseContext.Provider>
  );
};
