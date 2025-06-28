

import FetchCategoryName from "./FetchCategoryName";
import Heading from "./Heading/Heading";


const Categories = () => {
   
    
    return (
        <div className="max-w-6xl mx-auto px-3 lg:px-0">
            <Heading text={"Categories"}></Heading>
            <FetchCategoryName></FetchCategoryName>
        </div>
    );
};

export default Categories;