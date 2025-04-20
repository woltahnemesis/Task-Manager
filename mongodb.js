// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     console.log('Connected correctly!')
// })

async function connectToMongoDB() {
    try {
        const client = await MongoClient.connect(connectionURL)
        console.log('Connected correctly')

        const db = client.db(databaseName)

        // Do something with 'db' here...
        
        // await db.collection('users').deleteMany({
        //     age: 27
        // })
        // .then(result => console.log(result))
        // .catch(tasksError => console.error(tasksError))

        await db.collection('tasks').deleteOne({ description: "Clean the house"})
        .then(result => console.log(result))
        .catch(tasksError => console.error(tasksError))

        // Close the connection when done
        await client.close()
    } catch (error) {
        console.log('Unable to connect to database!', error)
    }
}

connectToMongoDB()