import dbConnect, { collectionName } from "@/lib/dbConnect";

export async function GET(req){
    console.log("Path url",req.url)
    const url = new URL(req.url);
    console.log('URL OBJECT', url)
   const rawCategory = url.searchParams.get("category");

  // If category is null, undefined, or 'null' string, treat as no filter
  const category = rawCategory && rawCategory !== "null" ? rawCategory : null;

  console.log("CATEGORY", category)

  const db = dbConnect(collectionName.PRODUCTS);

  const filter = category ? { category } : {};
  const products = await db.find(filter).toArray();

  return Response.json(products);
}