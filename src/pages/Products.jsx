import { Link } from "react-router-dom";
import productData from "../data/ProductData";

const Products = () => {
  return (
    <div className="text-center py-20 mt-40">
      <h1 className="text-4xl font-red-hat font-bold">Our Products</h1>
      <p className="mt-4 font-red-hat text-xl">Explore our range of products.</p>

       {/* Download Brochure Button */}
       <div className="my-4">
        <a 
          href="/assets/brochure.pdf" 
          download 
          className="inline-flex font-red-hat items-center px-4 py-2 bg-customRed
           text-white font-bold rounded hover:bg-customBlue"
        >
          Download Brochure
        </a>
      </div>

      {/* Product List Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 -mb-32">
            {productData.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.imageSrc}
                  />
                </Link>
                <div className="mt-4">
                  <h2 className="text-customRed font-red-hat text-lg font-extrabold 
                  tracking-widest title-font mb-1">
                    {product.title}
                  </h2>
                  <h4 className="text-gray-900 title-font font-red-hat
                   text-sm font-semibold">
                    {product.description}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
