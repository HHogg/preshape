import { Button, Buttons, Text } from 'preshape';
import { catalogueListing } from '../../docs';

const DocumentationMenu = () => {
  return (
    <Buttons flex="vertical" gap="x0">
      {catalogueListing.map(({ name }) => (
        <Button
          alignChildren="start"
          key={name}
          active={false}
          paddingVertical="x2"
          tag="a"
          to={`/docs/${name}`}
          variant="tertiary"
          weak
          width="100%"
          uppercase={false}
        >
          <Text size="x4">{name}</Text>
        </Button>
      ))}
    </Buttons>
  );
};

export default DocumentationMenu;
