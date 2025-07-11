import { Check } from "lucide-react";
import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
        {/* content */}
        <div>
          <h1 className="uppercase text-white mb-6 font-bold">
            Flexible and Affordable Pricing
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Pricing Plans
          </h1>
          <p className="text-white font-medium text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut,
            voluptas corrupti asperiores, sit commodi neque similique
            consectetur aliquam obcaecati voluptatibus repudiandae fuga
            distinctio perferendis numquam, incidunt porro beatae molestias.
          </p>
          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-3">
              <Check className="text-green-500 w-6 h-6" />
              <p className="text-lg text-white font-semibold text-opacity-60">
                High Quality Services.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-green-500 w-6 h-6" />
              <p className="text-lg text-white font-semibold text-opacity-60">
                24/7 Customer Support.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-green-500 w-6 h-6" />
              <p className="text-lg text-white font-semibold text-opacity-60">
                Affordable Prices.
              </p>
            </div>
          </div>
        </div>
        {/* price card content */}
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div data-aos='fade-right' data-aos-anchor-placement="top-center">
            <PriceCard price="4" user="1" type="Silver Pack" />
          </div>
          <div data-aos='fade-right' data-aos-anchor-placement="top-center" data-aos-delay="100">
            <PriceCard price="8" user="3" type="Golden Pack" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
