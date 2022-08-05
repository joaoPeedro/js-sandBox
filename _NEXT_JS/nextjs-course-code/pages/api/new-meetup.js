// /api/new-meetup
//functions that contain's server side code

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, adress, description } = data;

    //connect to DB
    const client = await MongoClient.connect(
      "mongodb+srv://euAdmin:a7pYzuIa4YoMO3zV@cluster0.tfplb.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    //create de collection if it doesn't exist
    const meetupCollection = db.collection("meetups");
    // insert the data in the collection
    const result = await meetupCollection.insertOne(JSON.parse(data));

    console.log(result);

    // ended the connection
    client.close();

    // send the response
    res.status(201).json({
      messege: "meetup inserted",
    });
  }
};

export default handler;
