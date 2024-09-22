import { Box, BoxProps } from 'preshape';
import { JSONOutput } from 'typedoc';
import { CatalogueApi } from '../../docs';
import ComponentDocumentation from './ComponentDocumentation';
import { ApiStatesController } from './Types';
import { getByModuleAndName } from './documentation';

interface Props extends ApiStatesController, BoxProps {
  apis: CatalogueApi[];
}

const ModuleDocumentation = ({
  apis,
  onStateChange,
  state,
  ...props
}: Props) => {
  const validApis = apis.map(
    (api) =>
      [api, getByModuleAndName(api.name)] as [
        CatalogueApi,
        JSONOutput.DeclarationReflection,
      ]
  );

  return (
    <Box {...props}>
      {validApis.map(([{ name, rename }, exprt]) => (
        <ComponentDocumentation
          key={name}
          onStateChange={(change) =>
            onStateChange({ ...state, [rename || name]: change })
          }
          state={state && state[rename || name]}
          reflection={{
            ...exprt,
            name: rename || name,
          }}
        />
      ))}
    </Box>
  );
};

export default ModuleDocumentation;
