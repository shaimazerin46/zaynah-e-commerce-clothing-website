import dbConnect, { collectionName } from "@/lib/dbConnect";

export async function GET(req){
   
  const url = new URL(req.url); // req.url take the requested url like http://localhost:3000/api/products?category=Accessories&sort=lowToHigh
  // new URL() parse the requested url in different necessary part like URL {
 // href: 'http://localhost:3000/api/products?category=Women&sort=lowToHigh',
  //hostname: 'localhost',
  //port: '3000',
  //pathname: '/api/products',
  //search: '?category=Women&sort=lowToHigh',
  //searchParams: URLSearchParams { 'category' => 'Women', 'sort' => 'lowToHigh' },
//}

// searchParams A property of the URL object that provides read-only access to query parameters.
  const rawCategory = url.searchParams.get("category");
  const sort = url.searchParams.get('sort');
  const minPrice = url.searchParams.get("min");
  const maxPrice = url.searchParams.get('max');
  const name = url.searchParams.get('searchQuery')

  // If category is null, undefined, or 'null' string, treat as no filter
  const category = rawCategory && rawCategory !== "null" ? rawCategory : null;
  const min = minPrice && minPrice !== "null" ? minPrice : null;
  const max = maxPrice && maxPrice !== "null" ? maxPrice : null;
  const searchQuery  = name && name !== "null" ? name : null;
  
  let filter = {};
  let sortOption = {};

 if(category){
  filter.category = category
 }
 if(min || max){
  filter.price= {};
  if(min){
    filter.price.$gte = Number(min)
  }
  if(max){
    filter.price.$lte = Number(max)
  }

 }
 if(searchQuery){
   filter.title = { 
                $regex: searchQuery,
                $options: 'i'
            };
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