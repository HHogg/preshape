import { GithubIcon } from 'lucide-react';
import { Button, ButtonProps, Tooltip } from 'preshape';

const GithubLink = (props: ButtonProps) => {
  return (
    <Tooltip content="View code on Github">
      <Button
        {...props}
        borderRadius="full"
        paddingHorizontal="x2"
        paddingVertical="x2"
        size="x3"
        tag="a"
        variant="tertiary"
      >
        <GithubIcon size="1.25rem" />
      </Button>
    </Tooltip>
  );
};

export default GithubLink;
