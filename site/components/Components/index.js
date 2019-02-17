import Alert from './Alert';
import Appear from './Appear';
import Application from './Application';
import Base from './Base';
import BlockQuote from './BlockQuote';
import Bounds from './Bounds';
import BulletPoints from './BulletPoints';
import Button from './Button';
import CheckBox from './CheckBox';
import CodeBlock from './CodeBlock';
import Flex from './Flex';
import Grid from './Grid';
import Icon from './Icon';
import Input from './Input';
import Label from './Label';
import Link from './Link';
import List from './List';
import Menu from './Menu';
import RadioButton from './RadioButton';
import Responsive from './Responsive';
import SwitchTransition from './SwitchTransition';
import Tab from './Tab';
import Table from './Table';
import Text from './Text';
import TextArea from './TextArea';
import Toolbar from './Toolbar';

export default [{
  Component: Alert,
  name: 'Alert',
  to: '/components/alert',
  description: 'Useful for bringing attention to a message.',
}, {
  Component: Appear,
  name: 'Appear',
  to: '/components/appear',
  description: 'Adds some subtle animations to the entrance and exit of sections of the UI.',
}, {
  Component: Application,
  name: 'Application',
  to: '/components/application',
  description: 'High level application components for common layouts and functionality.',
}, {
  Component: Base,
  name: 'Base',
  to: '/components/base',
  description: 'The core component that is the end of the chain for all other components. It provides general utility behaviour and styling.',
}, {
  Component: BlockQuote,
  name: 'BlockQuote',
  to: '/components/block-quote',
  description: 'A visually indented way of representing quoted text.',
}, {
  Component: Bounds,
  name: 'Bounds',
  to: '/components/bounds',
  description: 'A behaviour component that uses the Resize Observer API to observe width and height of an element.',
}, {
  Component: BulletPoints,
  name: 'BulletPoints',
  to: '/components/bullet-points',
  description: 'A vertical list component for listing your todos.'
}, {
  Component: Button,
  name: 'Button',
  to: '/components/button',
  description: 'A standard clickable button to trigger some sort of action.',
}, {
  Component: CheckBox,
  name: 'CheckBox',
  to: '/components/check-box',
  description: 'Standard input for selecting multiple choices.',
}, {
  Component: CodeBlock,
  name: 'CodeBlock',
  to: '/components/code-block',
  description: 'A syntax highlighting code block component, which uses [PrismJS](http://prismjs.com/) under the hood.',
}, {
  Component: Flex,
  name: 'Flex',
  to: '/components/flex',
  description: 'Simple, all purpose flexing component to achieve common UI layouts and placements.',
}, {
  Component: Grid,
  name: 'Grid',
  to: '/components/grid',
  description: 'A use case driven grid system (using display: grid;) for auto flowing, flexible and fixed column layouts.',
}, {
  Component: Icon,
  name: 'Icon',
  to: '/components/icon',
  description: 'Unambiguous icons to give more visual meaning to text. Icons are selected from the [Feather Icon](https://feathericons.com/) set.',
}, {
  Component: Input,
  name: 'Input',
  to: '/components/input',
  description: 'Standard single line text input for collection user feedback data.',
}, {
  Component: Label,
  name: 'Label',
  to: '/components/label',
  description: 'Keyword highlighting component, useful for giving specific data emphasis.',
}, {
  Component: Link,
  name: 'Link',
  to: '/components/link',
  description: 'Clearly styled links to indicate an interaction. React Router compatible when provided with a "to" destination.',
}, {
  Component: List,
  name: 'List',
  to: '/components/list',
  description: 'Inline listing component, useful for separating out UI actions and a short list of options.',
}, {
  Component: Menu,
  name: 'Menu',
  to: '/components/menu',
  description: 'Top level navigational component. React Router compatible, when provided with a "to" destination it will also be used to apply the active state when that path is active.',
}, {
  Component: RadioButton,
  name: 'RadioButton',
  to: '/components/radio-button',
  description: 'Standard input for selecting a single choice.',
}, {
  Component: Responsive,
  name: 'Responsive',
  to: '/components/responsive',
  description: 'A behavioural component that provides a way to dynamically render components and set props depending on the viewport size.',
}, {
  Component: SwitchTransition,
  name: 'SwitchTransition',
  to: '/components/switch-transition',
  description: 'A React Router Switch component that subtley transitions route changes.',
}, {
  Component: Tab,
  name: 'Tab',
  to: '/components/tab',
  description: 'Tab organisational components, useful for laying out related by nonconcurrent parts of the UI.',
}, {
  Component: Table,
  name: 'Table',
  to: '/components/table',
  description: 'Standard table layout components. Useful for presenting, comparing and sorting raw tabular data',
}, {
  Component: Text,
  name: 'Text',
  to: '/components/text',
  description: 'The core component for styling text. Instead of specifying various elements, a suitable and semantic element will be determined from the props.',
}, {
  Component: TextArea,
  name: 'TextArea',
  to: '/components/text-area',
  description: 'Standard multiple line text area input for collection user feedback data.',
}, {
  Component: Toolbar,
  name: 'Toolbar',
  to: '/components/toolbar',
  description: 'A contextual multi-purpose toolbar. Useful for editors that require inline actions.',
}];
