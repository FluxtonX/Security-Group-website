import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const SectionHeader = ({
  title = "Location",
  imageSrc,
  imageAlt = "Section Image",
  bgColor = "bg-primary-700",
}) => {
  return (
    <section className="w-full">
      {/* Top section */}
      <div className="flex flex-col md:flex-row w-full min-h-[300px]">
        
        {/* Left Side - Text */}
        <motion.div
          className={`flex items-center  justify-center w-full md:w-1/2 p-8 ${bgColor}`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-white text-3xl font-bold"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {title}
          </h1>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="w-full md:w-1/2 h-[300px] md:h-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            data-aos="fade-left"
            data-aos-delay="300"
          />
        </motion.div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 p-4 text-sm flex gap-2">
        <span className="text-gray-500">Home</span>
        <span>•</span>
        <span className="text-primary-700">{title}</span>
      </div>
    </section>
  );
};

export default SectionHeader;