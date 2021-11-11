const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

///database connection
const uri = `mongodb+srv://${process.env.BIKE_USER}:${process.env.Bike_PASS}@cluster0.zbwte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function run() {
  try {
    await client.connect();

    const database = client.db("superBiker");

    const bikesCollection = database.collection("bikes");
    const ordersCollection = database.collection("orders");

    ///add bike
    app.post("/bikes", async (req, res) => {
      const newBike = req.body;

      const result = await bikesCollection.insertOne(newBike);
      res.json(result);
    });

    ///load all bikes
    app.get("/bikes", async (req, res) => {
      const bikes = await bikesCollection.find({}).toArray();
      res.send(bikes);
    });

    ///load single bikes
    app.get("/singleBike/:id", async (req, res) => {
      const id = req.params.id;
      const bike = await bikesCollection.findOne({ _id: ObjectId(id) });
      res.send(bike);
    });

    ///add order
    app.post("/orders", async (req, res) => {
      const newOrder = req.body;

      const result = await ordersCollection.insertOne(newOrder);
      console.log(result);
      res.json(result);
    });
  } finally {
    //   await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server Connected");
});

app.listen(port, () => {
  console.log(`port connected`, port);
});
