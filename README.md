# email-syntax-validator
A simple and fast NPM module to validate an e-mail address.

<p flex="row">
<img src="https://img.shields.io/badge/node-v10.15.3-green?style=flat-square" />
<img src="https://img.shields.io/badge/npm-v6.4.1-blue?style=flat-square" />
<img src="https://img.shields.io/badge/repo%20size-173.1%20kB-blue?style=flat-square" />
</p>

## Installation
Install via NPM:

```bash
npm install email-syntax-validator

```

Install via YARN:

```bash
yarn add email-syntax-validator

```


## Usage
 JavaScript

```javascript

var validator = require("email-syntax-validator");

validator.validate("test@email.com"); // true

```

 TypeScript

```typescript

import * as EmailValidator from 'email-syntax-validator';

EmailValidator.validate("test@email.com"); // true


```

## Contributing

1. Fork this repository;
2. Create your feature branch: `git checkout -b new-feature`;
3. Commit your changes: `git commit -m 'feat: add some feature'`;
4. Push to the branch: `git push origin new-feature`.

**After your pull request is merged**, you can safely delete your branch.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/vilmacio22/npm-email-syntax-validator/blob/master/LICENSE) file for details.

---

:heavy_check_mark: Made by [vilmacio22](https://github.com/vilmacio22)
