const app = require('./app');
const log = require('./utils/log');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  log.info('Server is running on port:', port);
});
