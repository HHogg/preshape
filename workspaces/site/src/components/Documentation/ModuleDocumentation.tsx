import { Box, BoxProps } from 'preshape';
import { getByModuleAndName } from './documentation';
import { JSONOutput } from 'typedoc';
import { ApiStatesController } from './Types';
import ComponentDocumentation from './ComponentDocumentation';
import { CatalogueApi } from '../../docs';

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
        JSONOutput.DeclarationReflection
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
