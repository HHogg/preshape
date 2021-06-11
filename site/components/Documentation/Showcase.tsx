import * as React from 'react';
import toJsxString from 'react-element-to-jsx-string';
import { CodeBlock, Appear, Base, Icon, Link, Text, ThemeSwitcher } from 'preshape';
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
      <Base
          backgroundColor="background-shade-2"
          borderSize="x2"
          flex="vertical"
          gap="x2"
          paddingHorizontal="x3"
          paddingVertical="x2">
        <Base alignChildrenVertical="middle" flex="horizontal" gap="x4">
          <Base flex="horizontal" gap="x1" grow>
            <Base>
              <Icon
                  name="Circle"
                  size="1rem" />
            </Base>

            <Base>
              <Icon
                  name="Circle"
                  size="1rem" />
            </Base>

            <Base>
              <Icon
                  name="Circle"
                  size="1rem" />
            </Base>
          </Base>

          <Base>
            <ThemeSwitcher
                onChange={ onChangeTheme }
                theme={ theme } />
          </Base>
        </Base>

        <Base
            backgroundColor="background-shade-1"
            borderSize="x2"
            container
            paddingHorizontal="x6"
            paddingVertical="x12"
            scrollable
            textColor="text-shade-1">
          { children }
        </Base>

        { !disableCode && (
          <Base>
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
                <Base alignChildren="middle" flex="horizontal" gap="x1">
                  <Base>
                    { isCodeExpanded ? 'Hide code' : 'Show code' }
                  </Base>

                  <Base>
                    <Icon name="Code" size="1rem" />
                  </Base>
                </Base>
              </Link>
            </Text>
          </Base>
        ) }
      </Base>
    </ShowcaseContext.Provider>
  );
};
