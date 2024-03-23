const { MongoClient } = require("mongodb");

async function shoes() {
    const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";
    try {
        const client = await MongoClient.connect(uri);
        const database = client.db('Ecommerce');
        const collection = database.collection("shoes");
        const dataset = await collection.find().toArray();
        console.log("Server is ok from database");
        client.close(); // Close the client connection
        // Convert dataset to a JSON object
        const jsonObject = JSON.parse(JSON.stringify(dataset));
        return jsonObject;
    } catch (err) {
        console.log("Error:", err.message);
        throw err; // Re-throw the error to be caught by the caller
    }
}

shoes().then(jsonObject => {
    console.log("JSON Object:", jsonObject);
}).catch(console.error);

module.exports = { shoes };