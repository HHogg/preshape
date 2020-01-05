import * as React from 'react';
import TypeLabel from './TypeLabel';
import TypeTooltipIntrinsicNumber from './TypeTooltipIntrinsicNumber';
import TypeTooltipIntrinsicString from './TypeTooltipIntrinsicString';
import TypeRendererUnion from './TypeRendererUnion';

const TypeTooltipIntrinsicMap: { [key: string]: React.Type<any>} = {
  number: TypeTooltipIntrinsicNumber,
  string: TypeTooltipIntrinsicString,
};

export default (props) => {
  const { name, onStateChange, state } = props;
  const isBoolean = name === 'boolean';
  const isBooleanValue = name === 'true' || name === 'false';
  const TypeTooltipIntrinsic = TypeTooltipIntrinsicMap[name];

  if (isBoolean) {
    return (
      <TypeRendererUnion
          onStateChange={ onStateChange }
          state={ state }
          type="union"
          types={ [
            { type: 'intrinsic', name: 'false' },
            { type: 'intrinsic', name: 'true' },
          ] } />
    );
  }

  if (isBooleanValue) {
    const value = JSON.parse(name);

    return (
      <TypeLabel
          backgroundColor={ state === value ? 'accent-shade-2' : undefined }
          clickable
          onClick={ () => onStateChange(value) }>
        { name }
      </TypeLabel>
    );
  }

  if (TypeTooltipIntrinsic) {
    return (
      <TypeTooltipIntrinsic
          onChange={ onStateChange }
          value={ state }>
        { (props) => (
          <TypeLabel { ...props }
              backgroundColor={ state === undefined ? undefined : (
                (name === 'string' && typeof state === 'string' && 'accent-shade-2') ||
                (name === 'number' && typeof state === 'number' && 'accent-shade-2') ||
                undefined
              ) }
              clickable
              hasInfo>
            { name }
          </TypeLabel>
        ) }
      </TypeTooltipIntrinsic>
    );
  }

  return (
    <TypeLabel>
      { name }
    </TypeLabel>
  );
};
