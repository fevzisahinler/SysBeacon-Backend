const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: Register a new user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *                default: "user1"
 *              password:
 *                type: string
 *                default: "password"
 *    responses:
 *      200:
 *        description: User registered successfully
 *      400:
 *        description: Bad request
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Authenticate a user and return a token
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *                default: "user1"
 *              password:
 *                type: string
 *                default: "password"
 *    responses:
 *      200:
 *        description: Authenticated successfully, token returned
 *      401:
 *        description: Authentication failed
 */
router.post('/login', loginUser);


module.exports = router;
