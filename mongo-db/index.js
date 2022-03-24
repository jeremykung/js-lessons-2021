const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:root@cluster0.bb9pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  // perform actions on the collection object
  
  const pipeline = [
    {
      '$match': {
        'beds': {
          '$gt': 5
        }, 
        'price': {
          '$lt': 10000
        }
      }
    }, {
      '$sort': {
        'price': -1
      }
    }, {
      '$project': {
        'name': 1, 
        'price': 1
      }
    }
  ]

  const agg = await collection.aggregate(pipeline).toArray()

  console.log(agg)

  client.close();
});
 