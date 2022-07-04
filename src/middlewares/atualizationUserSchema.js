import atualizationUserSchema from "../schemas/atualizationUserSchema.js";

export default function atualizationUserSchemaValidationMiddleware(req, res, next) {
  const validation = userSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}