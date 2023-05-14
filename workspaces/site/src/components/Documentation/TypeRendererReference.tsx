import { PropsWithChildren } from 'react';
import { JSONOutput } from 'typedoc';
import { getById, isDeclarationReflection } from './documentation';
import TypeLabel from './TypeLabel';
import TypeRenderer, { TypeRendererProps } from './TypeRenderer';

interface Props extends TypeRendererProps {
  type: JSONOutput.ReferenceType;
}

const TypeRendererReference = (props: PropsWithChildren<Props>) => {
  const { type } = props;
  const { target } = type;
  const isExternalReference = type.package !== 'preshape';

  if (typeof target !== 'number' || isExternalReference) {
    return (
      <TypeLabel>
        {type.package}.{type.name}
      </TypeLabel>
    );
  }

  const api = getById(target);

  if (api && isDeclarationReflection(api)) {
    return <TypeRenderer {...props} reflection={api} type={api.type} />;
  }

  console.log(`TypeRendererReference: unhandled API: ${type.name}`);

  return <TypeLabel>{type.name}</TypeLabel>;
};

export default TypeRendererReference;
