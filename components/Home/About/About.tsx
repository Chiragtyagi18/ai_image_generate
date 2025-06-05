import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="pt-16 pb-16 flex justify-center">
      <div className="w-[80%] grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
        {/* Image Section */}
        <div data-aos='zoom-in' data-aos-anchor-placement="top-center" className="order-2 xl:order-1">
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/about.jpg"
              alt="About"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
        {/* Text Section (Optional) */}
        <div className="order-1 xl:order-2">
            <h1 className='text-gray-300 mb-4 font-semibold text-lg capitalize'>
                What we do
            </h1>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-white mb-4'>
                Create your own AI Business
            </h1>
            <p className='text-gray-200 mb-8 text-base' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorum nostrum assumenda sapiente est quos? Blanditiis temporibus quia inventore. Reprehenderit autem fuga doloremque sit accusamus id minus suscipit molestiae exercitationem?
            </p>
            <Button className="bg-rose-500 w-36 h-12 text-base capitalize" size="lg">
                About us
            </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
