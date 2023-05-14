import { Text, TextProps } from 'preshape';

interface Props extends TextProps {
  children: string;
}

const PageSubtitle = (props: Props) => {
  return <Text {...props} id={props.children} margin="x4" size="x7" strong />;
};

export default PageSubtitle;
