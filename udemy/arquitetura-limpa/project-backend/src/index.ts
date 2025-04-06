import dotenv from 'dotenv';
import express from 'express';
import UserRepositoryMemoryAdapter from './external/db/UserRepositoryMemoryAdapter';
import BcryptPasswordAdapter from './external/auth/BcryptPasswordAdapter';
import RegisterUserController from './external/api/RegisterUserController';
import LoginUserController from './external/api/LoginUserController';
import RegisterUserUseCase from './core/users/usecases/RegisterUserUseCase';
import LoginUserUseCase from './core/users/usecases/LoginUserUseCase';
import GetProductUseCase from './core/products/usecases/GetProductUseCase';
import GetProductController from './external/api/GetProductController';
import UserMiddleware from './external/api/middlewares/UserMiddleware';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`🔥 Server is running on port ${port}`);
});

// routes no auth
const repositoryUser = new UserRepositoryMemoryAdapter();
const provedorCripto = new BcryptPasswordAdapter();

const registerUserUseCase = new RegisterUserUseCase(
  repositoryUser,
  provedorCripto,
);
new RegisterUserController(app, registerUserUseCase);

const loginUserUseCase = new LoginUserUseCase(repositoryUser, provedorCripto);
new LoginUserController(app, loginUserUseCase);

// routes auth
const getProductUseCase = new GetProductUseCase();
const middleware = UserMiddleware(repositoryUser);
new GetProductController(app, getProductUseCase, middleware);
