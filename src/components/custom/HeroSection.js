import Link from "next/link";

/**
 * @typedef {Object} Imageprops
 * @property {number} id
 * @property {string} url
 * @property {string} alternativeText
 */

/**
 * @typedef {Object} Linkprops
 * @property {number} id
 * @property {string} url
 * @property {string} label
 */

/**
 * @typedef {Object} HeroSectionProps
 * @property {Object} data
 * @property {number} data.id
 * @property {string} data.__component
 * @property {string} data.Heading
 * @property {string} data.Heading2
 * @property {string} data.paragraph
 * @property {Imageprops} data.Image
 * @property {string} data.forms
 */


export function HeroSection({ data }) {
  console.dir(data, { depth: null });
  const { Heading, Heading2, paragraph, Image, link, forms} = data;
  return (
    <header className="relative h-[600px] overflow-hidden">
      <img
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
        height={1080}
        src={`http://localhost:1337${Image.url}`}
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
        width={1920}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          {Heading}
        </h1>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          {Heading2}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          {paragraph}
        </p>
        <Link
          className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100"
          href={link.url}
        >
          {link.text}
        </Link>
      </div>
    </header>
  );
}