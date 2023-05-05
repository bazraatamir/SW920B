import Layout from "../component/layout/layout";
import ProductCard from "../component/ProductCard";
import Category from "../component/category";

function Home() {
    return ( 
        <Layout>
            <Category/>
            <div className=" container mt-10 flex gap-10 flex-wrap justify-center">
               <ProductCard/>
            </div>
        </Layout>
        

     );
}

export default Home;