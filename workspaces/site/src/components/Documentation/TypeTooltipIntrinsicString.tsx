import TypeTooltipIntrinsic, {
  Props as TypeTooltipIntrinsicProps,
} from './TypeTooltipIntrinsic';
import { ApiStateValue } from './Types';

type Props = TypeTooltipIntrinsicProps

const TypeTooltipIntrinsicString = (props: Props) => {
  const { onStateChange, ...rest } = props;

  const handleOnChange = (value?: ApiStateValue) => {
    if (value === '' || value === undefined) {
      onStateChange(undefined);
    } else {
      onStateChange(value);
    }
  };

  return (
    <TypeTooltipIntrinsic
      {...rest}
      onStateChange={handleOnChange}
      placeholder="Enter string"
    />
  );
};

export default TypeTooltipIntrinsicString;
