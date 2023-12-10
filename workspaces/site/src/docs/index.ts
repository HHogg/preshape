import Alert from './catalog/Alert';
import Appear from './catalog/Appear';
import Blockquote from './catalog/BlockQuote';
import Box from './catalog/Box';
import BulletPoints from './catalog/BulletPoints';
import Button from './catalog/Button';
import ButtonAsync from './catalog/ButtonAsync';
import Checkbox from './catalog/CheckBox';
import Code from './catalog/Code';
import ConfigMenu from './catalog/ConfigMenu';
import DatePicker from './catalog/DatePicker';
import Form from './catalog/Form';
import Grid from './catalog/Grid';
import Input from './catalog/Input';
import Label from './catalog/Label';
import Link from './catalog/Link';
import List from './catalog/List';
import Modal from './catalog/Modal';
import Options from './catalog/Options';
import RadioButton from './catalog/RadioButton';
import Range from './catalog/Range';
import Spinner from './catalog/Spinner';
import Table from './catalog/Table';
import Tabs from './catalog/Tabs';
import Text from './catalog/Text';
import Textarea from './catalog/TextArea';
import Toggle from './catalog/Toggle';
import Tooltip from './catalog/Tooltip';

export type CatalogueApi = {
  module: string;
  name: string;
  rename?: string;
};

export type CatalogueItem<TState> = {
  name: string;
  description: string;
  apis: CatalogueApi[];
  Pictogram: React.ComponentType<any>;
  showcase: {
    state: TState;
    Component: React.ComponentType<TState>;
    code: string;
  };
};

export const catalogue: Record<string, CatalogueItem<any>> = {
  Alert,
  Appear,
  Blockquote,
  Box,
  BulletPoints,
  Button,
  ButtonAsync,
  Checkbox,
  Code,
  ConfigMenu,
  DatePicker,
  Form,
  Grid,
  Input,
  Label,
  Link,
  List,
  Modal,
  Options,
  RadioButton,
  Range,
  Spinner,
  Table,
  Tabs,
  Text,
  Textarea,
  Toggle,
  Tooltip,
};

export const catalogueListing = Object.entries(catalogue)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, value]) => value);

export const getCatalogItem = (id?: string, indexShift = 0) => {
  if (id) {
    for (let i = 0; i < catalogueListing.length; i++) {
      if (catalogueListing[i].name.toLocaleLowerCase() === id) {
        return catalogueListing[i + indexShift] ?? null;
      }
    }
  }

  return null;
};

export const getModuleAndApiOfCatalogItemApi = (
  apiName: string
): [string, CatalogueApi] | null => {
  for (const item of Object.values(catalogue)) {
    for (const api of item.apis) {
      if (api.name === apiName) {
        return [item.name, api];
      }
    }
  }

  return null;
};
