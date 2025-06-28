import dbConnect, { collectionName } from "@/lib/dbConnect";

export async function GET(req){

  // req.url take the requested url like http://localhost:3000/api/products?category=Accessories&sort=lowToHigh
  
  // new URL() parse the requested url in different necessary part like URL {
 // href: 'http://localhost:3000/api/products?category=Women&sort=lowToHigh',
  //origin: 'http://localhost:3000',
  //protocol: 'http:',
  //username: '',
  //password: '',
 // host: 'localhost:3000',
  //hostname: 'localhost',
  //port: '3000',
  //pathname: '/api/products',
  //search: '?category=Women&sort=lowToHigh',
  //searchParams: URLSearchParams { 'category' => 'Women', 'sort' => 'lowToHigh' },
  //hash: ''
//}
   
  const url = new URL(req.url);
  console.log("REQ URL",url)
  const rawCategory = url.searchParams.get("category");
  const sort = url.searchParams.get('sort');

  // If category is null, undefined, or 'null' string, treat as no filter
  const category = rawCategory && rawCategory !== "null" ? rawCategory : null;
  
  let filter = {};
  let sortOption = {};

 if(category){
  filter.category = category
 }
 if(sort==='lowToHigh'){
    sortOption.price = 1;
 }else if(sort==='highToLow'){
   sortOption.price = -1;
 }

 try {
  const products = await dbConnect(collectionName.PRODUCTS).find(filter).sort(sortOption).toArray();
  return Response.json(products);
  
 } catch (error) {
  console.log(error.message)
  return Response.json({
    error: "Failed to fetch products",
    status: 500
  })
 }
 
}