# raw-body-parser
A lightweight middleware to retrieve raw body (only) from Node js Request as a Buffer. This API is intended to be used without body-parser, json, and urlencoded.

## Installation

On your project folder:

    $ npm install raw-body-parser

## Usage

In <code>server.js</code>:

	var rawBodyParser = require('raw-body-parser');

	app.use(rawBodyParser());

In <code>route.js</code>:

	var rawBody = req.rawBody.toString('utf8');

## License

[MIT](LICENSE)