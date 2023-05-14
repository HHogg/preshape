import { Button, ButtonProps, Icons, Tooltip } from 'preshape';

const GithubLink = (props: ButtonProps) => {
  return (
    <Tooltip content="Link to code up on Github">
      <Button
        {...props}
        borderRadius="full"
        paddingHorizontal="x2"
        paddingVertical="x2"
        size="x3"
        tag="a"
        variant="tertiary"
      >
        <Icons.Github size="1.25rem" />
      </Button>
    </Tooltip>
  );
};

export default GithubLink;
