import { Router } from 'express';
import { getUser, updateUser, deleteUser } from '../controllers/userController.js';
import tokenValidation from '../middlewares/tokenValidationMiddleware.js';
import atualizationUserSchemaValidationMiddleware from '../middlewares/userSchemaValidationMiddleware.js';

const userRouter = Router();
userRouter.get("/user", tokenValidation, getUser);
userRouter.put("/user", atualizationUserSchemaValidationMiddleware, tokenValidation, updateUser);
userRouter.delete("/user",tokenValidation, deleteUser);
export default userRouter;