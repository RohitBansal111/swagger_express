


/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Task
 *         title:
 *           type: string
 *           description: The Task title
 *         author:
 *           type: string
 *           description: The Task author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
  * @swagger
  * tags:
  *   name: Task
  *   description: The Task managing API
  */


/**
 * @swagger
 * /task:
 *   get:
 *     summary: Returns the list of all the Task
 *     tags: [Task]
 *     responses:
 *       200:
 *         description: The list of the Task
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Get the Task by id
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Task id
 *     responses:
 *       200:
 *         description: The Task description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The Task was not found
 */



/**
 * @swagger
 * /task:
 *   post:
 *     summary: Create a new Task
 *     tags: [Task]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The Task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * /task/{id}:
 *  put:
 *    summary: Update the Task by the id
 *    tags: [Task]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Task id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The Task was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      404:
 *        description: The Task was not found
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Remove the Task by id
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Task id
 * 
 *     responses:
 *       200:
 *         description: The Task was deleted
 *       404:
 *         description: The Task was not found
 */
