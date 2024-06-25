import { MenuIcon } from 'lucide-react';
import { Box, Modal } from 'preshape';
import { useState } from 'react';
import { Menu } from '../Menu/Menu';
import AppShell from './AppShell';
import Router from './Router';

const AppMobile = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <AppShell>
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

      <Modal borderRadius="x0" fullscreen visible={menuVisible} zIndex={11}>
        <Menu onSelect={() => setMenuVisible(false)} />
      </Modal>

      <Router />
    </AppShell>
  );
};

export default AppMobile;
