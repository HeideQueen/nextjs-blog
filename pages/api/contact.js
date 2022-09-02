import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    let client;

    const connectionString = `'mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.r7fbk8y.mongodb.net/?retryWrites=true&w=majority'`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Could not connect to DB' });
      return;
    }

    const db = client.db(process.env.mongodb_database);

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      console.log(error);
      client.close();
      res.status(500).json({ message: 'Could not connect to DB' });
      return;
    }

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });

    client.close();
  }
}

export default handler;
