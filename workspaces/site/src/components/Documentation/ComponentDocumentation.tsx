import { Fragment } from 'react';
import { Box, Link, Text } from 'preshape';
import { JSONOutput } from 'typedoc';
import { getComment, getExtends, getSource } from './documentation';
import { ApiStateController } from './Types';
import GithubLink from '../GithubLink/GithubLink';
import KindRenderer from './KindRenderer';

export interface APIItemProps extends ApiStateController {
  reflection: JSONOutput.DeclarationReflection;
}

const ComponentDocumentation = (props: APIItemProps) => {
  const { reflection } = props;
  const desc = getComment(reflection);
  const source = getSource(reflection);
  const extendss = getExtends(reflection);

  return (
    <Box margin="x16">
      <Box alignChildrenVertical="start" flex="horizontal" gap="x4" margin="x4">
        <Box basis="0" grow>
          <Text id={reflection.name} size="x6" strong>
            {reflection.name}
          </Text>

          {desc && <Text margin="x2">{desc}</Text>}

          {!!extendss.length && (
            <Text margin="x2">
              <Text strong tag="span">
                Extends
              </Text>

              {extendss.map(({ link, name }) => (
                <Fragment key={name}>
                  {' / '}
                  <Link to={link} isTextLink>
                    {name}
                  </Link>
                </Fragment>
              ))}
            </Text>
          )}
        </Box>

        {source && (
          <Box>
            <GithubLink href={source} target={reflection.name} />
          </Box>
        )}
      </Box>

      <KindRenderer {...props} />
    </Box>
  );
};

export default ComponentDocumentation;
