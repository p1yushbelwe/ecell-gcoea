import { FaTeamspeak } from "react-icons/fa";

const people = [
  {
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    name: "John Doe",
    description: "Founded Gold",
  },
  {
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    name: "Jane Doe",
    description: "Star",
  },
  {
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    name: "Alex Smith",
    description: "Developer",
  },
  {
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    name: "Sarah Wilson",
    description: "Founder Zerodha",
  },
  {
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    name: "Sarah Wilson",
    description: "Founder Zerodha",
  },
];

export default function Team() {
  return (
    <div className="bg-neutral-950/98 font-inter min-h-dvh">
      <div className="flex flex-col items-center">
        <h1 className="text-neutral-100 tracking-tight text-center text-3xl">
          Meet our team
        </h1>
        <p className="text-center w-full px-4 sm:w-2/5 text-neutral-400 mt-4">
          We’re more than just a team — we’re a group of passionate individuals
          united by shared values, mutual respect, and a genuine love for what
          we do. Each of us brings unique skills, experiences, and perspectives
          that come together to create something greater than the sum of its
          parts.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-4 sm:px-8 py-8">
          {" "}
          {people.map((person, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl border shadow-2xs aspect-4/5"
            >
              <img
                className="h-full w-full object-cover"
                src={person.image}
                alt={person.name}
              />

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-4 pt-12 text-neutral-200">
                <h2 className="text-lg font-semibold">{person.name}</h2>
                <p className="text-sm text-neutral-200">{person.description}</p>
              </div>
            </div>
          ))}{" "}
        </div>
        <div className="flex justify-center items-center">
          <button className="mb-8 text-center bg-blue-700 text-neutral-50 shadow-xs rounded-lg text-base sm:text-sm font-normal px-4 py-1 tracking-tight active:scale-98 hover:bg-blue-700/90 transition duration-150 cursor-pointer">
            <p>View Team</p>
          </button>
        </div>
      </div>
    </div>
  );
}
