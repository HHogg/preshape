import { MenuIcon } from 'lucide-react';
import {
  Appear,
  Box,
  Button,
  Modal,
  ModalManager,
  Text,
  ThemeProvider,
  useLocalStorage,
  useMatchMedia,
} from 'preshape';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { ColorsPage } from './pages/Colors';
import { ComponentPage } from './pages/Component';
import { ComponentsPage } from './pages/Components';
import { SizingsPage } from './pages/Sizings';
import { ThemesPage } from './pages/Themes';
import 'preshape/dist/style.css';

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dontUseMessageVisible, setDontUseMessageVisible] = useLocalStorage(
    'preshape.dontUseMessage',
    true
  );

  const match = useMatchMedia(['800px']);
  const isDesktop = match('800px');

  useEffect(() => {
    setMenuVisible(false);
  }, [isDesktop]);

  return (
    <ThemeProvider>
      <ModalManager>
        <Box flex="vertical" grow>
          {dontUseMessageVisible && (
            <Box
              fixed="bottom-right"
              padding="x6"
              maxWidth="400px"
              zIndex={100}
            >
              <Appear
                animation="Pop"
                backgroundColor="text-shade-1"
                borderRadius="x3"
                elevate="x1"
                delay={1000}
                padding="x6"
                textColor="background-shade-1"
              >
                <Text margin="x6">
                  Welcome! Take a look around. However, you probably{' '}
                  <Text tag="strong" strong>
                    shouldn't use this in your project
                  </Text>
                  . It's a component library for my own projects, so{' '}
                  <Text tag="strong" strong>
                    there's no guarantee of stability or support
                  </Text>
                  .
                </Text>

                <Button
                  color="accent"
                  onClick={() => setDontUseMessageVisible(false)}
                  variant="primary"
                  width="100%"
                >
                  Ok
                </Button>
              </Appear>
            </Box>
          )}

          {!isDesktop && (
            <Box
              alignChildren="middle"
              backgroundColor="black"
              flex="horizontal"
              onClick={() => setMenuVisible(true)}
              padding="x4"
              style={{ position: 'sticky', top: 0 }}
              zIndex={10}
              textColor="light-shade-1"
            >
              <MenuIcon size="2rem" />
            </Box>
          )}

          <Modal borderRadius="x0" fullscreen visible={menuVisible} zIndex={11}>
            <Menu onSelect={() => setMenuVisible(false)} />
          </Modal>

          <Box flex="horizontal" grow>
            {isDesktop && (
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
            )}

            <Box
              basis="0"
              backgroundColor="background-shade-2"
              grow
              minWidth={0}
            >
              <Routes>
                <Route element={<Navigate to="/components" />} path="/" />
                <Route element={<ColorsPage />} path="/colors" />
                <Route element={<ThemesPage />} path="/themes" />
                <Route element={<SizingsPage />} path="/sizings" />
                <Route element={<ComponentsPage />} path="/components" />
                <Route element={<ComponentPage />} path="/components/:id" />
              </Routes>
            </Box>
          </Box>
        </Box>
      </ModalManager>
    </ThemeProvider>
  );
};

export default App;
