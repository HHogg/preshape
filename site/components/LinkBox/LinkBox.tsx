import * as React from 'react' ;
import { Base, Link, LinkProps, Text } from 'preshape';

export default (props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { margin, theme, ...rest } = props;

  return (
    <Base borderSize="x2" margin={ margin }>
      <Text textColor="text-shade-1" theme={ theme }>
        <Link { ...rest }
            align="middle"
            backgroundColor="background-shade-1"
            display="block" />
      </Text>
    </Base>
  );
};
