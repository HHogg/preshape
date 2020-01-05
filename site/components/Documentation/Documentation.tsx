import * as React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Appear, Flex, Icon, Link, Text } from 'preshape';
import { widthMedium } from '../Root';
import docs from './docs';

const APIViewer = React.lazy(() => import('../APIViewer/APIViewer'));

export default () => {
  const history = useHistory();
  const match = useRouteMatch<{ id: string }>();
  const { params } = match;
  const id = params.id.toLowerCase();
  const item = docs[id];
  const [state, setState] = React.useState(item && item.showcase ? (item.showcase.state || {}) : {});

  if (!item) {
    history.replace('/');
    return null;
  }

  return (
    <Appear
        animation="Fade"
        backgroundColor="background-shade-1"
        direction="vertical"
        fixed="fullscreen"
        padding="x12"
        scrollable
        time="fast"
        zIndex={ 1 }>
      <Flex direction="vertical" grow maxWidth={ widthMedium }>
        <Flex direction="horizontal" gap="x3" margin="x6">
          <Flex grow>
            <Text size="x4" strong titlecase>{ item && item.name }</Text>
          </Flex>

          <Flex>
            <Link to="/">
              <Icon name="Cross" size="2rem" />
            </Link>
          </Flex>
        </Flex>

        { item.showcase && (
          <Flex margin="x6">
            <Flex
                backgroundColor="background-shade-2"
                container
                padding="x6">
              <item.showcase.Component { ...state } />
            </Flex>

            <Text
                align="middle"
                backgroundColor="background-shade-3"
                paddingHorizontal="x6"
                paddingVertical="x2"
                size="x1"
                strong>
              Use the props table below to control this example above.
            </Text>
          </Flex>
        ) }

        { item.apis && (
          <React.Suspense fallback={ (
            <Flex alignChildren="middle" direction="vertical" grow>
              <Icon margin="x2" name="Progress" size="2rem" spin="slow" />
              <Text strong>Grabbing the documentation</Text>
              <Text strong>sit tight.</Text>
            </Flex>
          ) }>
            <APIViewer
                apis={ item.apis }
                onStateChange={ setState }
                state={ state } />
          </React.Suspense>
        ) }
      </Flex>
    </Appear>
  );
};
