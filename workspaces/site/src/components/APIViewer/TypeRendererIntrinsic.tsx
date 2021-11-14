import * as React from 'react';
import TypeLabel from './TypeLabel';
import { Props as TypeTooltipIntrinsicProps } from './TypeTooltipIntrinsic';
import TypeTooltipIntrinsicNumber from './TypeTooltipIntrinsicNumber';
import TypeTooltipIntrinsicString from './TypeTooltipIntrinsicString';
import TypeRendererUnion from './TypeRendererUnion';
import { Renderer } from './Types';
import { JSONOutput } from 'typedoc';

const TypeTooltipIntrinsicMap: {
  [key: string]: React.FC<TypeTooltipIntrinsicProps>;
} = {
  number: TypeTooltipIntrinsicNumber,
  string: TypeTooltipIntrinsicString,
};

interface Props extends Renderer, JSONOutput.IntrinsicType {}

const TypeRendererIntrinsic = (props: Props) => {
  const { context, name, onStateChange, state } = props;
  const isBoolean = name === 'boolean';
  const isBooleanValue = name === 'true' || name === 'false';
  const TypeTooltipIntrinsic = TypeTooltipIntrinsicMap[name];

  if (isBoolean) {
    return (
      <TypeRendererUnion
        context={context}
        onStateChange={onStateChange}
        state={state}
        type="union"
        types={[
          { type: 'intrinsic', name: 'false' },
          { type: 'intrinsic', name: 'true' },
        ]}
      />
    );
  }

  if (isBooleanValue) {
    const value = JSON.parse(name);

    return (
      <TypeLabel
        active={state === value}
        clickable
        onClick={() => onStateChange(value)}
      >
        {name}
      </TypeLabel>
    );
  }

  if (TypeTooltipIntrinsic) {
    return (
      <TypeTooltipIntrinsic
        context={context}
        onStateChange={onStateChange}
        state={state}
      >
        {(props) => (
          <TypeLabel
            {...props}
            active={
              state === undefined
                ? false
                : (name === 'string' && typeof state === 'string') ||
                  (name === 'number' && typeof state === 'number') ||
                  false
            }
            clickable
            hasInfo
          >
            {name}
          </TypeLabel>
        )}
      </TypeTooltipIntrinsic>
    );
  }

  return <TypeLabel>{name}</TypeLabel>;
};

export default TypeRendererIntrinsic;
