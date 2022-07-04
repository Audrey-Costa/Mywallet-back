import activitySchema from "../schemas/activitySchema.js";

export default function activitySchemaValidationMiddleware(req, res, next) {
  const validation = activitySchema.validate(req.body, {abortEarly: false});
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}