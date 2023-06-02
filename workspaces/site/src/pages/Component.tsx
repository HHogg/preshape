import { Box, CodeBlock, CodeWindow, useMatchMedia } from 'preshape';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ModuleDocumentation from '../components/Documentation/ModuleDocumentation';
import { getModuleSummary } from '../components/Documentation/documentation';
import { Page } from '../components/Page/Page';
import PageChangeButton from '../components/Page/PageChangeButton';
import { PageSection } from '../components/Page/PageSection';
import { PageSubtitle } from '../components/Page/PageSubtitle';
import Showcase from '../components/Showcase/Showcase';
import { getCatalogItem } from '../docs';

export const ComponentPage = () => {
  const params = useParams<'id'>();
  const id = params.id?.toLocaleLowerCase();
  const item = getCatalogItem(id);
  const previousItem = getCatalogItem(id, -1);
  const nextItem = getCatalogItem(id, 1);
  const [state, setState] = useState(item?.showcase?.state ?? {});
  const match = useMatchMedia(['1000px', '1400px']);

  if (!item) {
    // 404 page?
    return null;
  }

  const { apis, name, description, showcase } = item;
  const summary = getModuleSummary(apis);

  return (
    <Page
      description={description}
      summary={[{ name: 'Demo' }, { name: 'Example usage' }, ...summary]}
      title={name}
    >
      <PageSection>
        <PageSubtitle>Demo</PageSubtitle>
        <Showcase file={name}>
          {showcase && <showcase.Component {...showcase.state} {...state} />}
        </Showcase>
      </PageSection>

      {showcase?.code && (
        <PageSection>
          <PageSubtitle>Example usage</PageSubtitle>
          <CodeWindow>
            <CodeBlock language="tsx" size="x3">
              {showcase.code}
            </CodeBlock>
          </CodeWindow>
        </PageSection>
      )}

      {apis && (
        <PageSection>
          <PageSubtitle>API</PageSubtitle>
          <ModuleDocumentation
            apis={apis}
            onStateChange={setState}
            state={state}
          />
        </PageSection>
      )}

      <PageSection
        alignChildrenHorizontal="between"
        flex={match('1000px') ? 'horizontal' : 'vertical'}
        gap="x16"
      >
        <Box basis="0" grow flex="horizontal" maxWidth="500px">
          {previousItem && (
            <PageChangeButton
              direction="previous"
              description={previousItem.description}
              title={previousItem.name}
              to={`/components/${previousItem.name}`}
            />
          )}
        </Box>

        <Box basis="0" grow flex="horizontal" maxWidth="500px">
          {nextItem && (
            <PageChangeButton
              direction="next"
              description={nextItem.description}
              title={nextItem.name}
              to={`/components/${nextItem.name}`}
            />
          )}
        </Box>
      </PageSection>
    </Page>
  );
};
