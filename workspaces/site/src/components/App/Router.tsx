import { Box } from 'preshape';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ColorsPage } from '../../pages/Colors';
import { ComponentPage } from '../../pages/Component';
import { ComponentsPage } from '../../pages/Components';
import { SizingsPage } from '../../pages/Sizings';
import { ThemesPage } from '../../pages/Themes';

const Router = () => {
  return (
    <Box basis="0" grow minWidth={0}>
      <Routes>
        <Route element={<Navigate to="/components" />} path="/" />
        <Route element={<ColorsPage />} path="/colors" />
        <Route element={<ThemesPage />} path="/themes" />
        <Route element={<SizingsPage />} path="/sizings" />
        <Route element={<ComponentsPage />} path="/components" />
        <Route element={<ComponentPage />} path="/components/:id" />
      </Routes>
    </Box>
  );
};

export default Router;
