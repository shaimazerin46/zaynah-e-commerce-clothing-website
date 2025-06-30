import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req,{params}){
    try {
        const {id} = await params;
        const item = await dbConnect(collectionName.PRODUCTS).findOne({_id: new ObjectId(id)});
        return Response.json(item)
    } catch (error) {
        return Response.json({
            message: error.message,
            status: 500
        })
    }
}