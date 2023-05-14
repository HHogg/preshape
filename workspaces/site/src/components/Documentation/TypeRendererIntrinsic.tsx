import { JSONOutput } from 'typedoc';
import TypeLabel from './TypeLabel';
import { Props as TypeTooltipIntrinsicProps } from './TypeTooltipIntrinsic';
import TypeTooltipIntrinsicNumber from './TypeTooltipIntrinsicNumber';
import TypeTooltipIntrinsicString from './TypeTooltipIntrinsicString';
import TypeRendererUnion from './TypeRendererUnion';
import { TypeRendererProps } from './TypeRenderer';

const TypeTooltipIntrinsicMap: {
  [key: string]: (props: TypeTooltipIntrinsicProps) => JSX.Element | null;
} = {
  number: TypeTooltipIntrinsicNumber,
  string: TypeTooltipIntrinsicString,
};

interface Props extends TypeRendererProps {
  reflection: JSONOutput.DeclarationReflection;
  type: JSONOutput.IntrinsicType;
}

const TypeRendererIntrinsic = (props: Props) => {
  const { reflection, onStateChange, state, type } = props;
  const isBoolean = type.name === 'boolean';
  const isBooleanValue = type.name === 'true' || type.name === 'false';
  const TypeTooltipIntrinsic = TypeTooltipIntrinsicMap[type.name];

  if (isBoolean) {
    return (
      <TypeRendererUnion
        onStateChange={onStateChange}
        reflection={reflection}
        state={state}
        type={{
          type: 'union',
          types: [
            { type: 'intrinsic', name: 'false' },
            { type: 'intrinsic', name: 'true' },
          ],
        }}
      />
    );
  }

  if (isBooleanValue) {
    const value = JSON.parse(type.name);

    return (
      <TypeLabel
        active={state === value}
        clickable
        onClick={() => onStateChange(value)}
      >
        {type.name}
      </TypeLabel>
    );
  }

  if (TypeTooltipIntrinsic) {
    return (
      <TypeTooltipIntrinsic onStateChange={onStateChange} state={state}>
        <TypeLabel
          active={
            state === undefined
              ? false
              : (type.name === 'string' && typeof state === 'string') ||
                (type.name === 'number' && typeof state === 'number') ||
                false
          }
          clickable
          hasInfo
        >
          {type.name}
        </TypeLabel>
      </TypeTooltipIntrinsic>
    );
  }

  return <TypeLabel>{type.name}</TypeLabel>;
};

export default TypeRendererIntrinsic;
