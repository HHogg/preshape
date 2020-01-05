import * as React from 'react';
import { getByModuleAndName } from './documentation';
import APIViewerItem from './APIViewerItem';

export interface APIViewerItem {
  module: string;
  name: string;
  rename?: string;
}

interface Props {
  apis: APIViewerItem[];
  onStateChange: (state: {}) => void;
  state?: { [key: string]: any };
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
