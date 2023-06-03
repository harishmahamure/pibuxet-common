# @pibuxet-common

Custom Errors and common middlewares for the node backend.

## Installation

You can use either npm or yarn to install the package.

### npm

```bash
npm install @pibuxet-common
```

### yarn

```bash
yarn add @pibuxet-common
```

## Usage

The @pibuxet-common package provides custom error handling capabilities through a set of predefined error classes. These custom errors are designed to enhance error handling and provide meaningful information to developers and users.

### Middlewares

The @pibuxet-common package offers a set of commonly used middleware functions that can be integrated into your Node.js applications. These middleware functions aim to streamline and enhance various aspects of your application's functionality, including authentication, request validation, and error handling

### Error Handling

The @pibuxet-common package provides a set of custom error classes that can be used to handle errors in your Node.js applications. These custom errors are designed to enhance error handling and provide meaningful information to developers and users.

```typescript
const express = require("express");
const app = express();
const {
  errorHandler,
  DatabaseConnectionError,
  NotFoundError,
  BadRequestError,
} = require("@pibuxet-common");

app.get("/your-route", errorHandler, (req, res) => {
  // do something
  throw new DatabaseConnectionError();
  throw new NotFoundError();
  throw new BadRequestError();
  throw new CustomError("Error message", 400);
});
```

Keywords:

1. Node.js middleware
2. Authentication mechanism
3. Error handling strategy
4. Secure routes
5. Route protection
6. Authentication mechanism
7. Request validation rules
8. Data validation middleware

## License

[MIT](https://choosealicense.com/licenses/mit/)
