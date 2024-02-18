const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fetch = require('node-fetch');

const app = express();

const swaggerUrl = 'http://localhost:5168/swagger/v1/swagger.json';

app.get('/api-docs', async (req, res) => {
  try {
    const response = await fetch(swaggerUrl);
    const swaggerDocument = await response.json();

    swaggerUi.setup(swaggerDocument)(req, res);
  } catch (error) {
    res.status(500).send('Não foi possível obter a documentação da API');
  }
});

app.use('/api-docs', swaggerUi.serve);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});