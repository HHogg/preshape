<p align="center">
  <img src="./site/assets/logo-with-text.svg" width="231" height="170" alt="Preshape" />
</p>

<h3 align="center">
  A minimal design system and library of React components.
</h3>

_This exists primarially for my own personal projects, hence the lack of supporting documentation, although a basic styleguide and component API docs exist to validate the design system._

### Getting Started

##### Install with your favourite package manager

```
yarn add preshape
```

##### Import and start using

```tsx
import React from 'react';
import { render } from 'react-dom';
import { Flex, Text } from 'preshape';

const rootElement = document.getElementById('Root');

if (rootElement) {
  render((
    <Flex alignChildren="middle" direction="vertical" grow>
      <Flex>
        <Icon name="Preshape" margin="x2" size="24px" />
        <Text margin="x2" strong>Ready!</Text>
      </Flex>
    </Flex>
  ), rootElement);
}
```

### Documentation

Description of the design system and component documentation can be found on the [Preshape site](https://preshape.hogg.io).

### Contribution

Preshape uses a strict commit message structure that follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) spec. This is used to automate publishing the package to NPM and generating the changelog with [Semantic Release](https://github.com/semantic-release/semantic-release).






