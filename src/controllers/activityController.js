import db from "../db/db.js";
import { ObjectId } from "mongodb"

export async function getActivities(req, res){
    try {
        const activities = await db.collection('activities').find().toArray();
        res.send(activities);
      } catch (error) {
        console.error(error);
        res.sendStatus(500);
      }
}

export async function getActivity(req, res){
    const id =  req.params.id
    try {
        const activity = await db.collection('activities').findOne({_id: id});
        if(!activity){
            return res.sendStatus(404)
        }
        
        res.send(activity);
      } catch (error) {
        console.error(error);
        res.sendStatus(500);
      }
}

export async function putActivity(req, res) {
    const id = req.params.id
    try {
        let product = await db.collection('activities').findOne({ _id: id })
        if (!product) {
          return res.sendStatus(404);
        }
    
        await db.collection('activities').updateOne({ _id: product._id }, { $set: req.body });
    
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function deleteActivity(req, res) {
    const id = req.params.id;

    try {
        await db.collection('activities').deleteOne({ _id: id })

        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function postActivity(req, res) {
    const activity = req.body;
    const type = req.query.type
    try {
        if(type === "entry"){
            await db.collection('activities').insertOne({value: activity.value, description: activity.description})
            res.sendStatus(201);
        }else if(type === "withdraw"){
            await db.collection('activities').insertOne({value: -activity.value, description: activity.description})
            res.sendStatus(201);
        }else{
            return res.sendStatus(404)
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }


}