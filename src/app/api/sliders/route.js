import dbConnect, { collectionName } from "@/lib/dbConnect";

export async function GET(){
    const result = await dbConnect(collectionName.SLIDERS).find({}).toArray();
    return Response.json(result)
}