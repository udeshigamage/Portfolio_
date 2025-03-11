import { cn } from "../lib/Util";
import pico32 from "../assets/ceramic.jpg";
import pico22 from "../assets/pic22.jpg";
import pico21 from "../assets/solar.jpg";

const cardData = [
  {
    id: 1,
    title: "Lumos Decorations",
    description:
      "Web platform for ordering flower arrangements and decorations. Customers can browse products and place orders, while employees manage assignments and track earnings. Admins oversee all operations.",
    techstack:
      "React, Tailwind CSS, ASP.NET Core, SQL, MVC Design Pattern, LINQ, Entity Framework Core",
    githubLink: "https://github.com/udeshigamage",
    gifSrc: pico22,
    imgSrc:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW0xZjRkb3k1ZWE4bTZocjR1ZnRiMHlxcTNyaXA1YXRpbzlkNW01NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oNrQcZl2WDjnRhlAGx/giphy.gif",
  },
  {
    id: 2,
    title: "Rividvo Solar System",
    description:
      "An intranet system for a solar system installation company. It manages vendors, vendor items, projects, project items, customers, and employees efficiently.",
    techstack:
      "React, Tailwind CSS, ASP.NET Core, SQL, MVC Design Pattern, LINQ, Entity Framework Core",
    githubLink: "https://github.com/udeshigamage",
    imgSrc:
      "https://media.giphy.com/media/dOrKc4pASvkZfdu5uz/giphy.gif?cid=790b7611o1n9hokdcbltd9wm5hdxo37d2zlzwov6mniknb7t&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    gifSrc: pico21,
  },
  {
    id: 3,
    title: "Ceramic productions",
    description:
      "An inventory and order management system for Badulla Ceramic Creations. It handles stock, products, categories, materials, and customer orders, while also managing the production process.",
    techstack: "React, Tailwind CSS, Node.js, Express, SQL",
    githubLink: "https://github.com/udeshigamage",
    gifSrc: pico32,
    imgSrc:
      "https://media.giphy.com/media/1VeLZc9tPnsXDLB8JZ/giphy.gif?cid=ecf05e47ztskehukrt1an2unwvp6bgx41ueicnedc9t8fb6r&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  },
];

export function CardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
      {cardData.map((card) => (
        <div key={card.id} className="max-w-xs w-full">
          {/* Card Image and Hover Effect */}
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-cover",
              "transition-all duration-500"
            )}
            style={{ backgroundImage: `url(${card.imgSrc})` }}
          >
            {/* Hover GIF Effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage: `url(${card.gifSrc})`,
                backgroundSize: "cover",
              }}
            ></div>

            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Card Content */}
            <div className="relative z-50 text-black p-4">
              <h1 className="font-bold text-xl md:text-3xl">{card.title}</h1>
            </div>
          </div>

          {/* Tech Stack and GitHub Link Below the Card */}
          <div className="p-4 bg-white dark:bg-neutral-900 rounded-md shadow-md mt-2 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {card.description}
            </p>
            <p className="text-sm text-black rounded-lg font-bold bg-white">
              <span className="font-semibold ">Tech Stack:</span>{" "}
              {card.techstack}
            </p>
            <a
              href={card.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm mt-2 inline-block hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
