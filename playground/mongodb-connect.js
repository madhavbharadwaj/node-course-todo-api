const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err)
    {
       return console.log('Unable to connect to MongoDB Server');
    }
    console.log('connected to mongodb');
    const db = client.db('TodoApp')
    /*db.collection('Todos').insertOne({
        text: 'Something to do',
        completed:false
    },(err,result) => {
        if(err)
        {
            return console.log('Unable to insert',err);

        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });*/
    db.collection('Users').insertOne({
        Name: 'Madhav',
        Age:21,
        Location:"Bangalore"
    },(err,result) => {
        if(err)
        {
            return console.log('Unable to insert',err);

        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();
}) ;
