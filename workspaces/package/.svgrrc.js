const path = require('path');

module.exports = {
  dimensions: false,
  expandProps: false,
  prettier: false,
  typescript: true,
  template: ({ template }, _, { componentName, props, jsx }) => {
    const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
    return typeScriptTpl.ast`/** AUTO GENERATED **/
import React, { forwardRef } from 'react';
import Box from '../Box/Box';
import { Props as IconProps } from './index';

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = (props, ref) => {
  const { size = '1rem', ...rest } = props;

  return (
    <Box { ...rest }
        className="Icon"
        height={ size }
        ref={ ref }
        tag="svg"
        viewBox="0 0 24 24"
        width={ size }>
      {${jsx}}
    </Box>
  );
};

export default forwardRef(Icon);
`;
  },
  index: true,
  indexTemplate: (filePaths) => {
    const names = filePaths.map((filePath) =>
      path.basename(filePath, path.extname(filePath))
    );

    const exports = names
      .map((name) => `export { default as ${name} } from './${name}';`)
      .join('\n');

    return `
import { BoxProps } from '../Box/Box';

export interface Props extends Omit<BoxProps, 'height' | 'size' | 'width'> {
  size?: BoxProps['width'];
};

${exports}
    `;
  },
};
