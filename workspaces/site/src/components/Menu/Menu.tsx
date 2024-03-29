import {
  Box,
  BoxProps,
  Image,
  Link,
  Text,
  ThemeSwitcher,
  useThemeContext,
} from 'preshape';
import { catalogueListing } from '../../docs';
import { Logo } from '../Logo/PreshapeIcon';
import { MenuItem } from './MenuItem';

type MenuProps = BoxProps & {
  onSelect?: () => void;
};

export const Menu = ({ onSelect, ...props }: MenuProps) => {
  const { colors } = useThemeContext();

  return (
    <Box {...props}>
      <Box alignChildren="middle" flex="vertical" gap="x4" padding="x8">
        <Logo height="4rem" width="4rem" />

        <Box textColor="text-shade-1">
          <Text align="middle" margin="x2" size="x6" weight="x5">
            Preshape
          </Text>

          <Text align="middle" size="x3">
            A design system and library of composable React component, hooks,
            and utilities for my personal projects .
          </Text>
        </Box>

        <Link display="block" href="https://www.npmjs.com/package/preshape">
          <Image
            alt="npm version"
            async
            height="18"
            src={`https://img.shields.io/npm/v/preshape?color=${encodeURIComponent(
              colors.colorAccentShade4
            )}&label=NPM`}
          />
        </Link>
      </Box>

      <Box
        alignChildren="middle"
        borderColor="background-shade-2"
        borderTop
        borderBottom
        flex="horizontal"
        paddingVertical="x4"
      >
        <ThemeSwitcher />
      </Box>

      <Box paddingHorizontal="x8" paddingVertical="x8">
        <MenuItem onClick={onSelect} to="/colors">
          Colors
        </MenuItem>
        <MenuItem onClick={onSelect} to="/themes">
          Themes
        </MenuItem>
        <MenuItem onClick={onSelect} to="/sizings">
          Sizings
        </MenuItem>
        <MenuItem onClick={onSelect} to="/components">
          Components
        </MenuItem>
        {catalogueListing.map(({ name }) => (
          <MenuItem
            key={name}
            onClick={onSelect}
            nested
            to={`/components/${name}`}
          >
            {name}
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};
