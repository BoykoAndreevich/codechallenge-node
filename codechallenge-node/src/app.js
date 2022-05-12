const express = require('express');
const helmet = require('helmet');
const router = require('./router');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(helmet());

const OpenApiValidator = require('express-openapi-validator');

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use(
    OpenApiValidator.middleware({
      apiSpec: 'codechallenge-node/src/swagger-users-v1.yaml',
      validateRequests: true, // (default)
      validateResponses: true, // false by default
    })
  );

app.use((err, req, res, next) => {
    // format error
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  });

app.use('/', router);


if (process.env.NODE_ENV !== 'test') {
  app.listen(9000, function(){
      console.log('Server on port 9000');
  });
}
module.exports = app;