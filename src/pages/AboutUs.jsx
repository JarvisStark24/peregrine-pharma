const AboutUs = () => {
  return (
    <div className="text-black py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center">
        <img 
          src="/assets/about.png" 
          alt="Pharmaceutical products"
          className="w-full md:w-1/2 lg:w-2/5 object-cover object-center mb-6 md:mb-0" 
        />
        <div className="md:w-1/2 lg:w-3/5 lg:mt-6 md:mt-14 md:pl-10 ml-6 mr-6">
          <h1 className="text-5xl font-bold mt-6 mb-6 font-red-hat">About Us</h1>
          <p className="mt-4 text-sm mb-4">
            Peregrine Falcon Pharmaceuticals Private Limited is an active pharmaceuticals marketing company established on August 18, 2020. 
            With our head office registered at BI6, 1st Floor, FL-1B, 12 MC Garden Road, Camellia Metro Garden, Kolkata, West Bengal, India, we are dedicated to enhancing the health and well-being of our community through high-quality pharmaceutical products.
          </p>
          <p className="mt-4 text-sm mb-4">
            Since our inception, we have been committed to prioritizing innovation, safety, and excellence in every product we deliver. 
            Our team of professionals works tirelessly to ensure that we meet the highest standards and positively contribute to the healthcare landscape.
          </p>
          <p className="mt-4 text-sm mb-4">
            As of now, our company has 3 directors linked to its operations, guiding us toward achieving our mission and vision.
            We strive to be a leader in the pharmaceutical marketing industry, building trust and delivering value to our clients and partners.
          </p>
          <p className="text-lg italic font-red-hat font-semibold">Your health is our priority!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
