import { Box, ModalManager, ThemeProvider } from 'preshape';
import { type PropsWithChildren } from 'react';
import Message from './Message';
import './App.css';

const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <ModalManager>
        <Box flex="vertical" grow>
          <Message />

          {children}
        </Box>
      </ModalManager>
    </ThemeProvider>
  );
};

export default AppShell;
