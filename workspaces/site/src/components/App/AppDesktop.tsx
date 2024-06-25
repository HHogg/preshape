import { Appear, Box } from 'preshape';
import { Menu } from '../Menu/Menu';
import AppShell from './AppShell';
import Router from './Router';

const AppDesktop = () => {
  return (
    <AppShell>
      <Box flex="horizontal" grow>
        <Appear
          animation="FadeSlideRight"
          backgroundColor="background-shade-2"
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
    </AppShell>
  );
};

export default AppDesktop;
