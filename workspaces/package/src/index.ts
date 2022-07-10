import 'normalize.css/normalize.css';
import 'open-color/open-color.css';
import './variables.css';
import './root.css';

import * as Icons from './Icon';

export * from './hooks';
export * from './variables';

// To allow custom variables in the React.CSSProperty
// types.
declare module 'react' {
  export interface CSSProperties {
      [key: `--${string}`]: string | number
  }
}

export { Attributes, TypeColor, TypeSize, TypeTheme } from './Box/Box';

export { default as Alert, AlertProps } from './Alert/Alert';
export { default as Appear, AppearProps, TypeAnimation } from './Appear/Appear';
export { default as Box, BoxProps } from './Box/Box';
export {
  default as BlockQuote,
  BlockQuoteProps,
} from './BlockQuote/BlockQuote';
export {
  default as BulletPoint,
  BulletPointProps,
} from './BulletPoints/BulletPoint';
export {
  default as BulletPoints,
  BulletPointsProps,
} from './BulletPoints/BulletPoints';
export {
  default as Button,
  ButtonProps,
  TypeButtonSize,
} from './Button/Button';
export { default as Buttons, ButtonsProps } from './Button/Buttons';
export { default as CheckBox, CheckBoxProps } from './CheckBox/CheckBox';
export { default as CheckboxIndicator } from './CheckBox/CheckBoxIndicator';
export { default as Code, CodeProps } from './Code/Code';
export { default as CodeBlock, CodeBlockProps } from './Code/CodeBlock';
export {
  default as Editor,
  EditorProps,
  TypeEditorLanguage,
} from './Editor/Editor';
export { default as Form, FormProps } from './Form/Form';
export { default as FormError, FormErrorProps } from './Form/FormError';
export { default as FormProvider, FormProviderProps, FormState, useFormContext  } from './Form/FormContext';
export { default as useForm } from './Form/useForm';
export { default as Grid, GridProps } from './Grid/Grid';
export { default as GridItem, GridItemProps } from './Grid/GridItem';
export { Icons };
export { default as Image, ImageProps } from './Image/Image';
export { default as Input, InputProps } from './Input/Input';
export { default as InputLabel, InputLabelProps } from './Input/InputLabel';
export { default as Label, LabelProps } from './Label/Label';
export { default as Labels, LabelsProps } from './Label/Labels';
export { default as Link, LinkProps } from './Link/Link';
export { default as List, ListProps } from './List/List';
export { default as ListItem, ListItemProps } from './List/ListItem';
export { default as Modal, ModalProps } from './Modal/Modal';
export { default as ModalBody, ModalBodyProps } from './Modal/ModalBody';
export { default as ModalFooter, ModalFooterProps } from './Modal/ModalFooter';
export { default as ModalHeader, ModalHeaderProps } from './Modal/ModalHeader';
export { default as ModalManager } from './Modal/ModalManager';
export { default as ModalPaddingOffset, ModalPaddingOffsetProps } from './Modal/ModalPaddingOffset';
export { default as ModalTitle, ModalTitleProps } from './Modal/ModalTitle';
export { default as Motion } from './Motion/Motion';
export { default as Option, OptionProps } from './Options/Option';
export { default as Options, OptionsProps } from './Options/Options';
export { default as Placement, PlacementProps } from './Placement/Placement';
export {
  default as PlacementArrow,
  PlacementArrowProps,
} from './Placement/PlacementArrow';
export {
  default as PlacementContent,
  PlacementContentProps,
} from './Placement/PlacementContent';
export {
  default as PlacementManager,
  PlacementManagerProps,
  TypePlacementTrigger,
} from './Placement/PlacementManager';
export {
  default as PlacementReference,
  PlacementReferenceProps,
  PlacementReferenceChildren,
} from './Placement/PlacementReference';
export { default as PlacementReferenceElement } from './Placement/PlacementReferenceElement';
export {
  default as RadioButton,
  RadioButtonProps,
} from './RadioButton/RadioButton';
export { default as RadioButtonIndicator } from './RadioButton/RadioButtonIndicator';
export { default as Range, RangeProps } from './Range/Range';
export { default as Separator, SeparatorProps } from './Separator/Separator';
export { default as Tab, TabProps } from './Tab/Tab';
export { default as TabContent, TabContentProps } from './Tab/TabContent';
export { default as Tabs, TabsProps } from './Tab/Tabs';
export { default as Table, TableProps } from './Table/Table';
export { default as TableBody, TableBodyProps } from './Table/TableBody';
export { default as TableCell, TableCellProps } from './Table/TableCell';
export { default as TableHeader, TableHeaderProps } from './Table/TableHeader';
export {
  default as TableHeaderCell,
  TableHeaderCellProps,
} from './Table/TableHeaderCell';
export { default as TableRow, TableRowProps } from './Table/TableRow';
export { default as Text, TextProps, TypeTextSize } from './Text/Text';
export { default as TextArea, TextAreaProps } from './TextArea/TextArea';
export {
  default as TextAreaLabel,
  TextAreaLabelProps,
} from './TextArea/TextAreaLabel';
export {
  default as ThemeSwitcher,
  ThemeSwitcherProps,
} from './ThemeSwitcher/ThemeSwitcher';
export { default as Toggle, ToggleProps } from './Toggle/Toggle';
export { default as Tooltip, TooltipProps } from './Tooltip/Tooltip';
