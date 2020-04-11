import * as React from 'react' ;
import {
  Button,
  Buttons,
  Modal,
  ModalProps,
  ModalBody,
  ModalBodyProps,
  ModalHeader,
  ModalHeaderProps,
  Text,
  Tooltip,
} from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Modal: ModalProps;
  ModalBody: ModalBodyProps;
  ModalHeader: ModalHeaderProps;
}> = {
  name: 'Modal',
  description: 'A multi purpose Modal component that can be used to overly any content over the main UI.',
  pictogram: require('../../../assets/pictogram-modal.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => {
      const [isAutoOpen, setIsAutoOpen] = React.useState(false);
      const [isMaxWidthOpen, setIsMaxWidthOpen] = React.useState(false);

      return (
        <Showcase disableCode>
          <Text margin="x8">
            <Text margin="x2" strong>Auto Sized</Text>
            <Text margin="x2">
              Auto sized modals will infer their dimensions
              from the content. This is useful for dialogs which will be known
              to have a small amount of content. However, they still benefit
              from the responsive behaviour when the viewport is smaller than
              the dialog.
            </Text>

            <Button
                active={ isAutoOpen }
                fill
                margin="x4"
                onClick={ () => setIsAutoOpen(true) }>
              Open Auto Modal
            </Button>

            <Modal { ...props.Modal }
                gap="x6"
                margin="x10"
                maxWidth={ undefined }
                onClose={ () => setIsAutoOpen(false) }
                padding="x6"
                visible={ isAutoOpen }>
              <ModalHeader>
                <Text strong>Warning!</Text>
              </ModalHeader>
              <ModalBody>
                <Text margin="x3">Are you sure you want to do that?</Text>
                <Buttons margin="x3">
                  <Button onClick={ () => setIsAutoOpen(false) }>Ok, maybe not!</Button>
                  <Button color="negative" fill onClick={ () => setIsAutoOpen(false) }>YUP!</Button>
                </Buttons>
              </ModalBody>
            </Modal>
          </Text>

          <Text margin="x8">
            <Text margin="x2" strong>Maximum Width</Text>
            <Text margin="x2">
              Maximum width modals (with the maxWidth prop set) allows for a
              use case where the content is unknown or is likely to cause a
              very wide dialog. When the viewport width is below the maximum
              width provided, it will activate the responsive view and become a
              full screen modal.
            </Text>

            <Button
                active={ isMaxWidthOpen }
                fill
                margin="x4"
                onClick={ () => setIsMaxWidthOpen(true) }>
              Open Max Width Modal
            </Button>

            <Modal maxWidth="24rem"
                { ...props.Modal }
                gap="x3"
                margin="x10"
                onClose={ () => setIsMaxWidthOpen(false) }
                padding="x6"
                visible={ isMaxWidthOpen }>
              <ModalHeader>
                <Text strong>The spectacle before us was indeed sublime.</Text>
              </ModalHeader>

              <ModalBody>
                <Text margin="x3">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased
                  to twinkle.
                </Text>
                <Buttons margin="x3">
                  <Button
                      color="positive"
                      fill
                      onClick={ () => setIsMaxWidthOpen(false) }>
                    Sure
                  </Button>
                </Buttons>
              </ModalBody>
            </Modal>
          </Text>

          <Text margin="x8">
            <Text margin="x2" strong>Fullscreen</Text>
            <Text margin="x2">
              The full screen modal set the modal to be edge to edge both horizontaly
              and vertically. It's useful for when presenting a more complex part of
              the user interfance that is likely to have a lot of content. For example
              a content library or a gallery.
            </Text>

            <Tooltip
                content="You're already inside a fullscreen modal 😉"
                maxWidth="14rem"
                trigger="click"
                zIndex={ 3 }>
              { (props) => (
                <Button { ...props } fill margin="x4">
                  Open Full Screen Modal
                </Button>
              ) }
            </Tooltip>

          </Text>
        </Showcase>
      );
    },
    state: {
      Modal: {
        visible: false,
      },
      ModalBody: {},
      ModalHeader: {},
    },
  },
  apis: [{
    module: '"Modal/Modal"',
    name: 'ModalProps',
    rename: 'Modal',
  }, {
    module: '"Modal/ModalBody"',
    name: 'ModalBodyProps',
    rename: 'ModalBody',
  }, {
    module: '"Modal/ModalHeader"',
    name: 'ModalHeaderProps',
    rename: 'ModalHeader',
  }],
};

export default Item;
