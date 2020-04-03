<p align="center">
  <img src="./site/assets/preshape.svg" alt="Preshape" />
</p>

<h1 align="center">
  Preshape
</h1>

<h3 align="center">
  A minimal design system and library of React components.<br/>
  <a>https://preshape.hogg.io</a>
</h3>

<hr />

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

### Technology

- [Typescript](https://www.typescriptlang.org/)
- [Parcel](https://parceljs.org/) (bundler and dev servers)
- [React](https://reactjs.org/)
- [PostCSS](https://postcss.org/) (with postcss-preset-env for a little power)
- [Firebase](https://firebase.google.com/) (hosting)

### Setup

##### Prerequisites

• [Node](https://nodejs.org/en/) - Either use [nvm use](https://github.com/nvm-sh/nvm) or checkout the tested version inside the [.nvmrc](./nmvrc) file.

##### Setup

Clone the repository

```
git clone git@github.com:HHogg/circles.git
```

Install the dependencies with your favourite package manager

```
yarn install
```

##### Running

Spin up the Parcel development server

```
yarn start
```

##### Building the static site

Build the static files using Parcel

```
yarn build:site
```

##### Building the library

Build the static files using Parcel

```
yarn build:lib
```

### Contribution

Preshape uses a strict commit message structure that follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) spec. This is used to automate publishing the package to NPM and generating the changelog with [Semantic Release](https://github.com/semantic-release/semantic-release).






