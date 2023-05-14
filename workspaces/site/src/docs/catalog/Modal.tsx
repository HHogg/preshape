import { useState } from 'react';
import {
  Button,
  Buttons,
  Modal,
  ModalProps,
  ModalBody,
  ModalBodyProps,
  ModalFooter,
  ModalHeader,
  ModalHeaderProps,
  ModalTitle,
  ModalTitleProps,
  Text,
} from 'preshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramModal';

const Item: CatalogueItem<{
  Modal: ModalProps;
  ModalBody: ModalBodyProps;
  ModalHeader: ModalHeaderProps;
  ModalTitle: ModalTitleProps;
}> = {
  name: 'Modal',
  description:
    'A multi purpose Modal component that can be used to overly any content over the main UI.',
  Pictogram,
  apis: [
    {
      module: '"Modal/Modal"',
      name: 'ModalProps',
      rename: 'Modal',
    },
    {
      module: '"Modal/ModalHeader"',
      name: 'ModalHeaderProps',
      rename: 'ModalHeader',
    },
    {
      module: '"Modal/ModalTitle"',
      name: 'ModalTitleProps',
      rename: 'ModalTitle',
    },
    {
      module: '"Modal/ModalBody"',
      name: 'ModalBodyProps',
      rename: 'ModalBody',
    },
    {
      module: '"Modal/ModalFooter"',
      name: 'ModalFooterProps',
      rename: 'ModalFooter',
    },
    {
      module: '"Modal/ModalFooterInsert"',
      name: 'ModalFooterInsertProps',
      rename: 'ModalFooterInsert',
    },
    {
      module: '"Modal/ModalPadding"',
      name: 'ModalPaddingProps',
      rename: 'ModalPadding',
    },
    {
      module: '"Modal/ModalPaddingOffset"',
      name: 'ModalPaddingOffsetProps',
      rename: 'ModalPaddingOffset',
    },
  ],
  showcase: {
    state: {
      Modal: {
        visible: false,
      },
      ModalBody: {},
      ModalHeader: {},
      ModalTitle: {},
    },
    Component: (props) => {
      const [isMaxWidthOpen, setIsMaxWidthOpen] = useState(false);

      return (
        <Text>
          <Text margin="x8">
            <Button
              active={isMaxWidthOpen}
              margin="x4"
              onClick={() => setIsMaxWidthOpen(true)}
              variant="primary"
            >
              Open Modal
            </Button>

            <Modal
              maxWidth="24rem"
              {...props.Modal}
              gap="x3"
              margin="x10"
              onClose={() => setIsMaxWidthOpen(false)}
              padding="x6"
              visible={isMaxWidthOpen}
            >
              <ModalHeader>
                <ModalTitle>
                  The spectacle before us was indeed sublime.
                </ModalTitle>
              </ModalHeader>

              <ModalBody>
                <Text margin="x3">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </Text>
              </ModalBody>

              <ModalFooter>
                <Buttons alignChildrenHorizontal="end" margin="x3">
                  <Button
                    color="positive"
                    onClick={() => setIsMaxWidthOpen(false)}
                    variant="primary"
                  >
                    Sure
                  </Button>
                </Buttons>
              </ModalFooter>
            </Modal>
          </Text>
        </Text>
      );
    },
    code: `
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalManager,
} from 'preshape';

// The ModalManager is used to manage the stacking of modals
// so that only one is visible at a time.
<ModalManager>
  <App />
</ModalManager>

<Modal
  maxWidth="24rem"
  onClose={handleCLose}
  padding="x6"
  visible={someCondition}
>
  <ModalHeader>
    <ModalTitle>
      ...
    </ModalTitle>
  </ModalHeader>

  <ModalBody>
    ...
  </ModalBody>

  <ModalFooter>
    ...
  </ModalFooter>
</Modal>

  `,
  },
};

export default Item;
