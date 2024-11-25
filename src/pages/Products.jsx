import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import productData from "../data/ProductData";

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="relative text-center py-20 mt-40">
      {/* Blurred Responsive Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed filter blur-sm sm:bg-bottom md:bg-center lg:bg-top"
        style={{
          backgroundImage: "url('/assets/bg0.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>

      <h1 className="text-4xl font-red-hat font-bold text-customRed">Our Products</h1>
      <p className="mt-4 font-red-hat font-bold text-xl text-customBlue">
        Explore our range of products.
      </p>

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
            {productData.map((product, index) => (
              <div
                key={product.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
                data-aos="fade-up" // Animation type
                data-aos-delay={index * 100} // Delay increases for each product
              >
                <div className="relative transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg bg-white rounded-lg overflow-hidden">
                  <Link className="block relative h-48">
                    <img
                      alt={product.title}
                      className="object-cover object-center w-full h-full block"
                      src={product.imageSrc}
                    />
                  </Link>
                  <div className="p-4">
                    <h2 className="text-customRed font-red-hat text-lg font-extrabold 
                    tracking-widest title-font mb-1">
                      {product.title}
                    </h2>
                    <h4 className="text-customBlue title-font font-red-hat
                    text-sm font-bold mb-2">
                      {product.category}
                    </h4>
                    <p className="text-gray-900 title-font font-red-hat text-sm">
                      {product.description}
                    </p>
                  </div>
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
