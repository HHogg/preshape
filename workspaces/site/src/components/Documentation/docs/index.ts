import { APIRecord } from '../../APIViewer/Types';

export interface CatalogueItem<S extends {} = {}> {
  name: string;
  description?: string;
  pictogram?: string;
  type: 'component' | 'hook';
  showcase?: {
    Component: React.ElementType<S>;
    state?: S;
  };
  apis?: APIRecord[];
}

const docs: { [key: string]: CatalogueItem } = {
  Alert: require('./Alert').default,
  Appear: require('./Appear').default,
  Box: require('./Box').default,
  Blockquote: require('./BlockQuote').default,
  BulletPoints: require('./BulletPoints').default,
  Button: require('./Button').default,
  Checkbox: require('./CheckBox').default,
  Code: require('./Code').default,
  Editor: require('./Editor').default,
  Grid: require('./Grid').default,
  Input: require('./Input').default,
  Label: require('./Label').default,
  Link: require('./Link').default,
  List: require('./List').default,
  Modal: require('./Modal').default,
  Placement: require('./Placement').default,
  Options: require('./Options').default,
  RadioButton: require('./RadioButton').default,
  Range: require('./Range').default,
  Tabs: require('./Tabs').default,
  Table: require('./Table').default,
  Text: require('./Text').default,
  Textarea: require('./TextArea').default,
};

export default docs;
