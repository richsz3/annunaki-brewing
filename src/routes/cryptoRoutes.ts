import express from 'express';
import { CircuitBreaker } from '../lib/circuitBreakerLib';
import cryptoPriceLib from '../lib/cryptoPriceLib';
import logger from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /crypto/:
 *   get:
 *     tags:
 *     - Crypto
 *     summary: Gets a list of crypto prices
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/crypto', (_, res) => {
  logger.debug('Crypto API was executed');

  // file deepcode ignore MissingArgument: <please specify a reason of ignoring this>
  const circuitBreaker = new CircuitBreaker('http://localhost:8080');

  setInterval(() => {
    circuitBreaker.exec().then(console.log).catch(console.error);
  }, 1000);

  const list = cryptoPriceLib();
  logger.info(list);

  res.send(list);
});

export default router;