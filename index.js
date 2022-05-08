const express=require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app=express()


const port=5000;

const uri = "mongodb+srv://purna:2470purna@cluster0.z2een.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
app.get('/',(req,res)=>{
    res.send("Hello, Welcome! to my server");
})

async function run() {
    try {
      await client.connect();
     
      app.post('/allproducts',async (req,res)=>{
          console.log(req.body);
           const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.send("success")
      })

      app.get('/allproducst', async (req,res)=>{
        const cursor = movies.find({});
        const result=await cursor.toArray()
        res.send(result)
      })

      app.get('/product/:id', async(req,res)=>{
        const cursor = movies.find({});
        const result=await cursor.toArray()
        res.send(result)

      })

      app.put('/products/:id',async (req,res)=>{
        const user = req.body;
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user };
            const result = await usersCollcetion.updateOne(filter, updateDoc, options);
            // console.log(result)
            res.json(result)
      })
        //post newitem
        app.post('/newitem', async(req,res)=>{
          console.log(req.body);
          const database = client.db("fruit-inventory");
   const newitem = database.collection("newitem");
   
   const result = await haiku.insertOne(req.body);
   console.log(`A document was inserted with the _id: ${result.insertedId}`);
           res.send("success")
        })
        //delete item
      app.delete('/item/:id', async(req,res)=>{
        const result = await movies.deleteOne({});
      })
      
    } finally {
      
    }
  }
  run().catch(console.dir);



app.listen(port,()=>{
    console.log("server starts");
})
