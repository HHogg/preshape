import { Box, ModalManager, ThemeProvider } from 'preshape';
import { type PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Message from './Message';
import './App.css';

const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ModalManager>
          <Box flex="vertical" grow>
            <Message />

            {children}
          </Box>
        </ModalManager>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default AppShell;
