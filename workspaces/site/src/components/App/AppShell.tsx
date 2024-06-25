import { Box, ModalManager, ThemeProvider } from 'preshape';
import 'preshape/dist/style.css';
import { type PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Message from './Message';

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
