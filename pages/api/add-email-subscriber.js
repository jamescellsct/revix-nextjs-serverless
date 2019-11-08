// Import Dependencies
const MongoClient = require('mongodb').MongoClient

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single paramater of the connection string
async function connectToDatabase(uri) {
    // If the database connection is cached,
    // use it instead of creating a new connection
    if (cachedDb) {
        return cachedDb
    }

    // If no connection is cached, create a new one
    const client = await MongoClient.connect(uri, { useNewUrlParser: true })

    // Select the database
    const db = await client.db(" -template")

    // Cache the database connection and return the connection
    cachedDb = db
    return db
}

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            break;

        case "POST":
            const db = await connectToDatabase(process.env.MONGODB_URI)
            const collection = await db.collection('users')
            collection.insert(req.body, function (err, doc) {
                if (err) {
                    console.error(err);
                    res.status(500).end();
                }
                res.status(200).end();

            });
            break;

        default:
            // https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
            res.status(400).end();
            break;
    }
}
