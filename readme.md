# Async-Express-Error-Handler

A collection of error-handling middlewares for use with Express.

## Installation

You can install this package using npm:

```bash
npm install async-express-error-handler
```

## Usage

This package provides the following error-handling middlewares:

errorMiddleware: A middleware that handles all errors and sends a JSON response with an error message and stack trace.
asyncError: A middleware that catches asynchronous errors and passes them to the error middleware.
ErrorHandler: An error class that can be used to create custom error objects.
Here's an example of how to use the errorMiddleware and asyncError middlewares:

```js
const express = require("express");
const {
  errorMiddleware,
  asyncError,
  ErrorHandler,
} = require("async-express-error-handler");

const app = express();

app.get(
  "/",
  asyncError(async (req, res, next) => {
    next(new ErrorHandler("Something went wrong", 500));
  })
);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

In this example, we use the asyncError middleware to catch any asynchronous errors that occur in our route handler, and then pass them to the errorMiddleware middleware, which sends a JSON response with an error message and stack trace.

You can also create custom error objects using the ErrorHandler class:

```js
const { ErrorHandler } = require('async-express-error-handler');
const User =require('../models/User');

app.get('/users/:id', (req, res, next) => {
  const user =await User.FindById(req.params.id);

  if (!user) {
  return next(new ErrorHandler('User not found', 404));
  }

  res.json(user);
});
```

In this example, we use the ErrorHandler class to create a custom error object with a 404 status code and a message indicating that the user was not found.

## Contributing

If you find a bug or have a feature request, please create an issue on the GitHub repository. Contributions are welcome!

Please make sure to update tests as appropriate.
