import dbConnect, { collectionName } from "@/lib/dbConnect";

export async function GET(){
    const result = await dbConnect(collectionName.FEATURE).find().toArray();
    return Response.json(result)
}