import { Router } from "express";
import { getActivities, getActivity, putActivity, deleteActivity, postActivity } from "../controllers/activityController.js";
import tokenValidation from "../middlewares/tokenValidationMiddleware.js";
import activitySchemaValidationMiddleware from "../middlewares/activitySchemaValidationMiddleware.js"

const activityRouter = Router();

activityRouter.get("/home", tokenValidation, getActivities)
activityRouter.get("/home/:id", tokenValidation, getActivity)
activityRouter.put("/home/:id", tokenValidation, activitySchemaValidationMiddleware, putActivity)
activityRouter.delete("/home/:id", tokenValidation, deleteActivity)
activityRouter.post("/home", tokenValidation, activitySchemaValidationMiddleware, postActivity)

export default activityRouter;