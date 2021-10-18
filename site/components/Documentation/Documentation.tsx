import * as React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Box, Modal, ModalBody, ModalHeader, Text } from 'preshape';
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
        margin="x10"
        onClose={ () => history.push('/') }
        overlayBackgroundColor="dark-shade-1"
        size="x3"
        visible>
      <ModalHeader
          closeIconSize="2rem"
          maxWidth={ widthMedium }>
        <Text margin="x1" size="x5" strong>{ item && item.name }</Text>
        <Text margin="x1" size="x3">{ item && item.description }</Text>
      </ModalHeader>

      <ModalBody
          maxWidth={ widthMedium }>
        { item.showcase && (
          <Box margin="x6">
            <item.showcase.Component { ...state } />
          </Box>
        ) }

        { item.apis && (
          <React.Suspense fallback={ (
            <Box alignChildren="middle" flex="vertical" grow>
              <Text strong>Grabbing the documentation</Text>
              <Text strong>sit tight.</Text>
            </Box>
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
