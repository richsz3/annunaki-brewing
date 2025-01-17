import express from 'express';
import jwtMiddleware from '../authentication/jwt/jwtMiddlewareLib';
import categoryData from '../data/samples/categoryData';
import fermentableData from '../data/samples/fermentableData';
import hopData from '../data/samples/hopData';
import recipeData from '../data/samples/recipeData';
import styleData from '../data/samples/styleData';
import yeastData from '../data/samples/yeastData';
import log from '../lib/loggerLib';
import brewingService from '../services/brewingService';

const router = express.Router();
router.use('/v1/api/categories', jwtMiddleware);
router.use('/v1/api/categories/:name', jwtMiddleware);
router.use('/v1/api/fermentables', jwtMiddleware);
router.use('/v1/api/fermentables/:name', jwtMiddleware);
router.use('/v1/api/hops', jwtMiddleware);
router.use('/v1/api/hops/:name', jwtMiddleware);
router.use('/v1/api/recipes', jwtMiddleware);
router.use('/v1/api/recipes/:name', jwtMiddleware);
router.use('/v1/api/styles', jwtMiddleware);
router.use('/v1/api/styles/:name', jwtMiddleware);
router.use('/v1/api/yeasts', jwtMiddleware);
router.use('/v1/api/yeasts/:name', jwtMiddleware);

/**
 * @openapi
 * /v1/api/categories/:
 *   get:
 *     tags:
 *     - Brewing
 *     summary: Get a list of all the beer categories
 *     security:
 *     - bearerAuth: []
 *     description: It will show all beer categories added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/categories', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(categoryData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/categories/{name}:
 *  get:
 *     tags:
 *     - Brewing
 *     summary: Get a single beer category by name
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the beer category
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: 'string'
 *       404:
 *         description: Not found
 */
router.get('/v1/api/categories/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = categoryData.filter((x) => x.name == req.params.name);
  res.json(result);
});

/**
 * @openapi
 * /v1/api/fermentables/:
 *   get:
 *     tags:
 *     - Brewing
 *     summary: Get a list of all the fermentables
 *     security:
 *     - bearerAuth: []
 *     description: It will show all fermentables added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/fermentables', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(fermentableData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/fermentables/{name}:
 *  get:
 *     tags:
 *     - Brewing
 *     summary: Get a single fermentable by name
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the fermentable
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: 'string'
 *       404:
 *         description: Not found
 */
router.get('/v1/api/fermentables/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = fermentableData.filter((x) => x.name == req.params.name);
  res.json(result);
});

/**
 * @openapi
 * /v1/api/hops/:
 *   get:
 *     tags:
 *     - Brewing
 *     summary: Get a list of all the hops
 *     security:
 *     - bearerAuth: []
 *     description: It will show all hops added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/hops', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  //const maxResult: number = Number(process.env.MAX_RESULT);
  //res.json(hopData.slice(0, maxResult));

  const allHops = brewingService();

  res.json(allHops);
});

/**
 * @openapi
 * /v1/api/hops/{name}:
 *  get:
 *     tags:
 *     - Brewing
 *     summary: Get a single hop by name
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the hop
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: 'string'
 *       404:
 *         description: Not found
 */
router.get('/v1/api/hops/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = hopData.filter((x) => x.name == req.params.name);
  res.json(result);
});

/**
 * @openapi
 * /v1/api/recipes/:
 *   get:
 *     tags:
 *     - Brewing
 *     summary: Get a list of all the recipes
 *     security:
 *     - bearerAuth: []
 *     description: It will show all recipes added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/recipes', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(recipeData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/recipes/{name}:
 *  get:
 *     tags:
 *     - Brewing
 *     summary: Get a single recipe by name
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the recipe
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: 'string'
 *       404:
 *         description: Not found
 */
router.get('/v1/api/recipes/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = recipeData.filter((x) => x.name == req.params.name);
  res.json(result);
});

/**
 * @openapi
 * /v1/api/styles/:
 *   get:
 *     tags:
 *     - Brewing
 *     summary: Get a list of all the beer styles
 *     security:
 *     - bearerAuth: []
 *     description: It will show all beer styles added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/styles', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(styleData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/styles/{name}:
 *  get:
 *     tags:
 *     - Brewing
 *     summary: Get a single beer style by name
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the beer style
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: 'string'
 *       404:
 *         description: Not found
 */
router.get('/v1/api/styles/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = styleData.filter((x: any) => x.name == req.params.name);
  res.json(result);
});

/**
 * @openapi
 * /v1/api/yeasts/:
 *   get:
 *     tags:
 *     - Brewing
 *     summary: Get a list of all the yeasts
 *     security:
 *     - bearerAuth: []
 *     description: It will show all yeasts added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/yeasts', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(yeastData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/yeasts/{name}:
 *  get:
 *     tags:
 *     - Brewing
 *     summary: Get a single yeast by name
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the yeast
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: 'string'
 *       404:
 *         description: Not found
 */
router.get('/v1/api/yeasts/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = yeastData.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
