/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Employee management
 */

/**
 * @swagger
 * /employees:
 *   post:
 *     tags: [Employees]
 *     summary: Add a new employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - position
 *               - salary
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *               salary:
 *                 type: number
 *     responses:
 *       201:
 *         description: Employee added successfully
 */

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     tags: [Employees]
 *     summary: Delete an employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 */

/**
 * @swagger
 * /employees/name/{name}:
 *   get:
 *     tags: [Employees]
 *     summary: Get employee by name
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Employee details
 */

/**
 * @swagger
 * /employees/highest-salary:
 *   get:
 *     tags: [Employees]
 *     summary: Get the employee with the highest salary
 *     responses:
 *       200:
 *         description: Employee details
 */
