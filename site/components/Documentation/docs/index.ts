import { APIViewerItem } from '../../APIViewer/APIViewer';

export interface CatalogueItem<S extends {} = {}> {
  name: string;
  description?: string;
  pictogram?: string;
  type: 'component' | 'utility' | 'type';
  showcase?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: React.ReactType<S>;
    state?: S;
  };
  apis?: APIViewerItem[];
}

export default {
  alert: require('./Alert').default,
  appear: require('./Appear').default,
  base: require('./Base').default,
  blockquote: require('./BlockQuote').default,
  bulletpoints: require('./BulletPoints').default,
  button: require('./Button').default,
  checkbox: require('./CheckBox').default,
  code: require('./Code').default,
  flex: require('./Flex').default,
  grid: require('./Grid').default,
  icon: require('./Icon').default,
  input: require('./Input').default,
  label: require('./Label').default,
  link: require('./Link').default,
  list: require('./List').default,
  placement: require('./Placement').default,
  radiobutton: require('./RadioButton').default,
  tabs: require('./Tabs').default,
  table: require('./Table').default,
  text: require('./Text').default,
  textarea: require('./TextArea').default,
};
