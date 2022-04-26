const express = require('express');
const app = express();

const cors = require('cors');
const { param } = require('express/lib/request');


const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const URL = "mongodb://localhost:27017/"

app.use(
    cors({
      origin: 'http://localhost:3002',
    })
  );
  app.use(express.json());

  app.get("/product", async (req,res) => {
    //  res.json(students)
          try {
            //open the connection
            let connection = await mongoClient.connect(URL)
         //select db 
            let db = connection.db("myFirstDatabase")
         //select collection
         //do operation (CRUD)
            let product = await db.collection("users").find().toArray()
         //close the connection
           await connection.close()
           res.json(product)
            
          } catch (error) {
              console.log(error)
            res.status(500).json({message : "something went wrong"})
             
          }

        })

        // customer support
       

  app.listen(3001, () => {
    console.log('Web server Started');
  });  


  