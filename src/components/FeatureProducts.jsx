import FetchFeatureProductList from "./FetchFeatureProductList";
import Heading from "./Heading/Heading";


const FeatureProducts = () => {
    return (
        <div className="max-w-6xl mx-auto px-3 md:px-0">
            <Heading text={"Feature Products"}></Heading>
            <FetchFeatureProductList></FetchFeatureProductList>
        </div>
    );
};

export default FeatureProducts;