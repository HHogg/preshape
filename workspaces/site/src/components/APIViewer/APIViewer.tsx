import * as React from 'react';
import { getByModuleAndName } from './documentation';
import { APIRecord, RendererContainer } from './Types';
import APIViewerItem from './APIViewerItem';

interface Props extends RendererContainer {
  apis: APIRecord[];
}

export default (props: Props) => {
  const { apis, onStateChange, state } = props;

  return (
    <React.Fragment>
      { apis
          .map((api) => [api, getByModuleAndName(api.module, api.name)])
          .filter(([, _]) => _)
          .map(([{ name, rename }, exprt]) => (
            <APIViewerItem { ...exprt }
                key={ name }
                name={ rename || name }
                onStateChange={ (change) => onStateChange({ ...state, [rename || name]: change }) }
                state={ state && state[rename || name] } />
          ))
      }
    </React.Fragment>
  );
};
