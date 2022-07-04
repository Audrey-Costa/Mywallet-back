import db from "../db/db.js";
import userSchema from "../schemas/userSchema.js";

export async function getUser(req, res) {
  const user = res.locals.user
  delete user.password;

  res.send(user);
}

export async function updateUser(req, res) {
    const newUser = req.body;
    const {user} = res.locals
  
    const validation = userSchema.validate(newUser);
    if (validation.error) {
      return res.sendStatus(422);
    }
  
    await db.collection('users').updateOne({
      _id: user.userId
    }, {
      $set: newUser
    });
  
    res.sendStatus(200);
  }

  export async function deleteUser(req, res) {
    const {user} = res.locals

    await db.collection('users').deleteOne({ _id: user.userId });
  
    res.sendStatus(200);
  }