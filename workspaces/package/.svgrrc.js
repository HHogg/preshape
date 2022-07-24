const path = require('path');

module.exports = {
  dimensions: false,
  expandProps: false,
  prettier: false,
  typescript: true,
  template: ({ template }, _, { componentName, props, jsx }) => {
    const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });
    return typeScriptTpl.ast`/** AUTO GENERATED **/
import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

const Icon: RefForwardingComponent<SVGSVGElement, Attributes<Omit<SVGSVGElement, 'display'>, BoxProps & { size?: string | number }>> = (props, ref) => {
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

export type Props = BoxProps & {
  size?: string;
};

      ${exports}
    `
  },
};
