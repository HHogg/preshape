import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocalStorage, useTheme, ModalManager, TypeTheme } from 'preshape';
import Landing from './Landing/Landing';

export const widthContainer = '1152px';
export const widthLarge = '1024px';
export const widthMedium = '900px';
export const widthSmall = '480px';

export const RootContext = createContext<{
  onChangeTheme: (theme: TypeTheme) => void;
  theme: TypeTheme;
}>({
  onChangeTheme: () => {},
  theme: 'day',
});

const Root = () => {
  const [theme, onChangeTheme] = useLocalStorage<TypeTheme>(
    'com.hogg.theme',
    'day'
  );

  useTheme(theme);

  return (
    <BrowserRouter>
      <ModalManager>
        <RootContext.Provider value={{ onChangeTheme, theme }}>
          <Routes>
            <Route element={<Landing />} path="/*" />
          </Routes>
        </RootContext.Provider>
      </ModalManager>
    </BrowserRouter>
  );
};

export default Root;
