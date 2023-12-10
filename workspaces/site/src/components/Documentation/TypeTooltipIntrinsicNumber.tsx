import TypeTooltipIntrinsic, {
  Props as TypeTooltipIntrinsicProps,
} from './TypeTooltipIntrinsic';
import { ApiStateValue } from './Types';

type Props = TypeTooltipIntrinsicProps;

const TypeTooltipNumber = (props: Props) => {
  const { onStateChange, ...rest } = props;

  const handleOnChange = (value?: ApiStateValue) => {
    if (value === '' || value === undefined || value === null) {
      onStateChange(undefined);
    } else if (Number.isFinite(parseInt(value.toString()))) {
      onStateChange(parseInt(value.toString()));
    }
  };

  return (
    <TypeTooltipIntrinsic
      {...rest}
      onStateChange={handleOnChange}
      placeholder="Enter number"
    />
  );
};

export default TypeTooltipNumber;
