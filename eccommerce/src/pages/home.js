import Layout from "../component/layout/layout";
import ProductCard from "../component/ProductCard";
import Category from "../component/category";

function Home() {
    return ( 
        <Layout>
            <Category/>
            <div className=" container mt-0.5">
               <ProductCard/>
            </div>
        </Layout>
        

     );
}

export default Home;