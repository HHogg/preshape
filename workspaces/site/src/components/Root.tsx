import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocalStorage, useTheme, TypeTheme } from 'preshape';
import Landing from './Landing/Landing';

export const widthContainer = '1152px';
export const widthLarge = '1024px';
export const widthMedium = '900px';
export const widthSmall = '480px';

export const RootContext = React.createContext<{
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
      <RootContext.Provider value={{ onChangeTheme, theme }}>
        <Routes>
          <Route element={<Landing />} path="/*" />
        </Routes>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
