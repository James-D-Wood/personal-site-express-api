import { Collection, MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";

// TODO: read about and configure options
// TODO: read about and implement authentication
const mongoClient = new MongoClient(uri);

let database: any = null;
export let journalEntryCollection: Collection | null = null; // TODO: gotta be better

async function connect() {
    try {
        await mongoClient.connect();
        await mongoClient.db("admin").command({ping: 1});
        console.log("Connected to MongoDB");
    } finally {
        // TODO: research proper start up and tear down
        console.log("connect() is closing");
    }
}

connect()
    .then(() => {
        database = mongoClient.db('test');
        journalEntryCollection = database.collection('journalEntries');
    })
    .catch((reason) => {
        console.error("Unable to connect to MongoDB");
        console.error(reason);
    });

export default mongoClient;