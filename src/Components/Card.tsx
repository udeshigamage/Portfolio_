import { cn } from "../lib/Util";

const cardData = [
  {
    id: 1,
    title: "Lumos Decorations",
    description:
      "This card is for some special elements, like displaying background gifs on hover only.",
    imgSrc:
      "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    gifSrc:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
  {
    id: 2,
    title: "Rividvo",
    description:
      "Enhance your UI with smooth transitions and animated effects.",
    imgSrc:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    gifSrc: "https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif",
  },
  {
    id: 3,
    title: "Resto",
    description: "Make your website more engaging with animated UI components.",
    imgSrc:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    gifSrc: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  },
];

export function CardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-8">
      {cardData.map((card) => (
        <div key={card.id} className="max-w-xs w-full">
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
            <div className="relative z-50 text-gray-50 p-4">
              <h1 className="font-bold text-xl md:text-3xl">{card.title}</h1>
              <div className="flex flex-row position:relative gap-2">
                <p>{card.description}</p>
                {/* <p>{card.description}</p>
                <p>{card.description}</p>
                <p>{card.description}</p> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
