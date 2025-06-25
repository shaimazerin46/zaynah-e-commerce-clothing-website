import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qkg2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const collectionName={
    SLIDERS: 'sliders',
}
export default function dbConnect (collectionName){
    const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
return client.db(process.env.DB_NAME).collection(collectionName)
}
