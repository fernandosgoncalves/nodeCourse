import { Router } from "express";

import { CreateUserController } from "./controlers/user/CreateUserController";
import { AuthUserController } from "./controlers/user/AuthUserController";
import { DetailUserController } from "./controlers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controlers/category/CreateCategoryController";

const router = Router();

//-- ROTAS USER --//
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//-- ROTAS CATEGORY --//
router.post('/category', isAuthenticated, new CreateCategoryController().handle )

export { router };