import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Appear,
  Box,
  Icons,
  Modal,
  ModalManager,
  ThemeProvider,
  useMatchMedia,
} from 'preshape';
import { Menu } from './components/Menu/Menu';
import { ComponentPage } from './pages/Component';
import { ComponentsPage } from './pages/Components';
import { IconsPage } from './pages/Icons';
import { ColorsPage } from './pages/Colors';
import { SizingsPage } from './pages/Sizings';
import { ThemesPage } from './pages/Themes';
import 'preshape/dist/style.css';

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const match = useMatchMedia(['800px']);
  const isDesktop = match('800px');

  useEffect(() => {
    setMenuVisible(false);
  }, [isDesktop]);

  return (
    <ThemeProvider>
      <ModalManager>
        <Box flex="vertical" grow>
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
              <Icons.Menu size="2rem" />
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
                <Route element={<Navigate to="/colors" />} path="/" />
                <Route element={<ColorsPage />} path="/colors" />
                <Route element={<ThemesPage />} path="/themes" />
                <Route element={<SizingsPage />} path="/sizings" />
                <Route element={<IconsPage />} path="/icons" />
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
