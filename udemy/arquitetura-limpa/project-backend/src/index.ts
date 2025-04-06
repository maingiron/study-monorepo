import dotenv from 'dotenv';
import express from 'express';
import RepositoryMemoryAdapter from './external/db/repository-memory.adapter';
import BcrypyPasswordAdapter from './external/auth/bcrypy-password.adapter';
import RegisterUserService from './core/users/services/register-user.service';
import RegisterUserController from './external/api/RegisterUserController';
import LoginUserService from './core/users/services/login-user.service';
import LoginUserController from './external/api/LoginUserController';
import GetProductByIdController from './external/api/GetProductByIdController';
import GetProductByIdService from './core/products/services/GetProductById';
import UserMiddleware from './external/api/UserMiddleware';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`🔥 Server is running on port ${port}`);
});

// routes no auth
const repositoryUser = new RepositoryMemoryAdapter();
const provedorCripto = new BcrypyPasswordAdapter();

const registrarUser = new RegisterUserService(repositoryUser, provedorCripto);
new RegisterUserController(app, registrarUser);

const loginUser = new LoginUserService(repositoryUser, provedorCripto);
new LoginUserController(app, loginUser);

// routes auth
const getProductById = new GetProductByIdService();
const middleware = UserMiddleware(repositoryUser);
new GetProductByIdController(app, getProductById, middleware);
