import * as React from 'react';
import {
  Flex,
  Input,
  Placement,
  PlacementContext,
} from 'preshape';

interface Props {
  children: (props: { ref: React.Ref<any> }) => React.ReactNode;
  value?: number;
  onChange: (value: number) => void;
}

export default (props: Props) => {
  const { children, value, onChange} = props;
  const [visible, setVisible] = React.useState(false);

  return null;

  // return (
  //   <PlacementManager>
  //     <PlacementReference>
  //       { children }
  //     </PlacementReference>

  //     <Placement placement="top">

  //     </Placement>
  //   </PlacementManager>
  // );
};
