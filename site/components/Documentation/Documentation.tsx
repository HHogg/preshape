import * as React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Flex, Modal, ModalBody, ModalHeader, Text } from 'preshape';
import { widthMedium } from '../Root';
import docs from './docs';

const APIViewer = React.lazy(() => import('../APIViewer/APIViewer'));

const getDocItem = (id: string) => {
  for (const i in docs) {
    if (i.toLocaleLowerCase() === id.toLocaleLowerCase()) {
      return docs[i];
    }
  }

  return null;
};

export default () => {
  const history = useHistory();
  const match = useRouteMatch<{ id: string }>();
  const { params } = match;
  const id = params.id.toLowerCase();
  const item = getDocItem(id);
  const [state, setState] = React.useState(item && item.showcase ? (item.showcase.state || {}) : {});

  if (!item) {
    history.replace('/');
    return null;
  }

  return (
    <Modal
        fullscreen
        gap="x10"
        onClose={ () => history.push('/') }
        paddingHorizontal="x6"
        paddingVertical="x10"
        visible>
      <ModalHeader
          closeIconSize="2rem"
          maxWidth={ widthMedium }>
        <Text margin="x1" size="x4" strong>{ item && item.name }</Text>
        <Text margin="x1" size="x2">{ item && item.description }</Text>
      </ModalHeader>

      <ModalBody
          maxWidth={ widthMedium }>
        { item.showcase && (
          <Flex margin="x6">
            <item.showcase.Component { ...state } />
          </Flex>
        ) }

        { item.apis && (
          <React.Suspense fallback={ (
            <Flex alignChildren="middle" direction="vertical" grow>
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
      </ModalBody>
    </Modal>
  );
};
