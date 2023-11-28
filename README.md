# RuntimeConfig

This is a simple library to load configuration from a file at runtime in your javascript or typescript app.

## Purpose

The use case for this library is to allow you to define config files in different environments that you do not have to load into environment variables or environment files.  This may be the case because your environment variables are sensitive and/or can only be stored on a specific domain or server.  Or you may want the flexibility to change the details of the configuration after compile time.

## Installation

```bash
npm install --save @brice0302/runtimeconfig
```

## Usage

To use this you should format your config file as a JSON file, but give it a '.txt' file extension.

Typescript:

```typescript
import { runtimeConfig } from 'runtimeconfig';
import myConfigPath from 'path/to/my/file.txt';

type MyConfig = {
  myString: string;
  myNumber: number;
  myBoolean: boolean;
  myObject: {
    myNestedString: string;
  };
};

const config = runtimeConfig<MyConfig>(myConfigPath);

console.log(config.myString);
```

Javascript:

```javascript
const runtimeConfig = require('runtimeconfig').runtimeConfig;
const myConfigPath = require('path/to/my/file.txt');

const config = runtimeConfig(myConfigPath);

console.log(config.myString);
```
