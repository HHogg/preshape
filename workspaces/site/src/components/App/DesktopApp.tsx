import { Appear, Box, ModalManager, ThemeProvider } from 'preshape';
import 'preshape/dist/style.css';
import { Menu } from '../Menu/Menu';
import Message from './Message';
import Router from './Router';

const DesktopApp = () => {
  return (
    <ThemeProvider>
      <ModalManager>
        <Box flex="vertical" grow>
          <Message />

          <Box flex="horizontal" grow>
            <Appear
              animation="FadeSlideRight"
              backgroundColor="background-shade-1"
              maxWidth="300px"
              borderColor="background-shade-3"
              borderSize="x2"
              borderRight
              maxHeight="100vh"
              overflow="auto"
              style={{ position: 'sticky', top: '0' }}
            >
              <Menu />
            </Appear>

            <Router />
          </Box>
        </Box>
      </ModalManager>
    </ThemeProvider>
  );
};

export default DesktopApp;
