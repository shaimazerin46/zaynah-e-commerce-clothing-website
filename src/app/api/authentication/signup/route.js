import dbConnect, { collectionName } from "@/lib/dbConnect";

export async function POST(req){
    try {
        const {name, email, password, role} = await req.json();

        // check for existing user
        const existingUser = await dbConnect(collectionName.USERS).findOne({email});
        if(existingUser){
            return Response.json({
                success: false,
                message: 'User already exists',
                status: 400
            })
        }
        const result = await dbConnect(collectionName.USERS).insertOne({name, email, password, role});
        return Response.json({success: true,result})
    } catch (error) {
        console.log(error.message)
        return Response.json({
            success: false,
            message: error.message
        })
    }
}