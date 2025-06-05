/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageGeneration = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/image-generator", {
        input: prompt,
        options: {
          number_of_images: 1,
          guidance_scale: 5,
        },
      });

      console.log("Generated image:", response.data);

      // Extract the image URL from the response
      const imageUrl = response.data.output[0].tmp_url;

      // Set the image URL
      setImage(imageUrl);
      toast.success("Image generated successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = () => {
    if (image) {
      const link = document.createElement("a");
      link.href = image;
      link.download = "generated-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1
          data-aos="fade-up"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent"
        >
          Create Beautiful Images With <br /> Artificial Intelligence
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-3 text-sm md:text-base font-semibold text-center text-gray-300"
        >
          Get started with our AI-powered image generator tool.
        </p>
        {/* Prompt input box */}
        <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between">
          <input
            type="text"
            placeholder="Generate Your Dream Image"
            className="w-full h-full rounded-lg block flex-1 placeholder:text-xs sm:placeholder:text-base outline-none text-black placeholder:text-gray-400"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button onClick={handleImageGeneration} variant="default" size="lg">
            Generate
          </Button>
        </div>
        {/* Tags */}
        <div className="flex items-center mt-6 space-x-4 flex-wrap space-y-3">
          <p>Popular Tag:</p>
          <Button variant="secondary">Creative</Button>
          <Button variant="secondary">Hyperreality</Button>
          <Button variant="secondary">Steampunk</Button>
          <Button variant="secondary">Animation</Button>
          <Button variant="secondary">Business</Button>
        </div>
        {/* Show loading and image */}
        {loading && (
  <div className="mt-4">
    <Loader className="animate-spin mt-6" />
  </div>
)}
{image && (
  <div className="mt-8 flex flex-col items-center">
    <img
      src={image}
      alt="AI generated"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg"
      loading="lazy"
    />
    <Button
      onClick={handleDownloadImage}
      className="mt-4 mb-4 bg-orange-500 hover:bg-orange-600"
    >
      Download
    </Button>
  </div>
)}

      </div>
    </div>
  );
};

export default Hero;
