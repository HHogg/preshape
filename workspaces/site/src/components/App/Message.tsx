import { Appear, Box, Button, Text, useLocalStorage } from 'preshape';

const Message = () => {
  const [dontUseMessageVisible, setDontUseMessageVisible] = useLocalStorage(
    'preshape.dontUseMessage',
    true
  );

  return dontUseMessageVisible ? (
    <Box fixed="bottom-right" padding="x6" maxWidth="400px" zIndex={100}>
      <Appear
        animation="Pop"
        backgroundColor="text-shade-1"
        borderRadius="x3"
        elevate="x1"
        delay={1000}
        padding="x6"
        textColor="background-shade-1"
      >
        <Text margin="x6">
          Welcome! Take a look around. However, you probably{' '}
          <Text textColor="background-shade-1" strong>
            shouldn't use this in your project
          </Text>
          . It's a component library for my own projects, so{' '}
          <Text textColor="background-shade-1" strong>
            there's no guarantee of stability or support
          </Text>
          .
        </Text>

        <Button
          color="accent"
          onClick={() => setDontUseMessageVisible(false)}
          variant="primary"
          width="100%"
        >
          Ok
        </Button>
      </Appear>
    </Box>
  ) : null;
};

export default Message;
