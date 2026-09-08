import Navbar from "@/components/layout/Navbar";
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Team() {
  return (
    <div className="min-h-dvh bg-neutral-900 font-inter selection:bg-neutral-800 selection:text-blue-700">
      <Navbar />
      <Main />
    </div>
  );
}

const peoples = [
  {
    img: "https://se-radio.net/wp-content/uploads/2023/08/CaseyMuratori_1024x1024-526x526.jpg",
    name: "Casey Muratori",
    label: "Head | Event Management",
  },
  {
    img: "https://se-radio.net/wp-content/uploads/2023/08/CaseyMuratori_1024x1024-526x526.jpg",
    name: "Casey Muratori",
    label: "Head | Event Management",
  },
  {
    img: "https://se-radio.net/wp-content/uploads/2023/08/CaseyMuratori_1024x1024-526x526.jpg",
    name: "Casey Muratori",
    label: "Head | Event Management",
  },
  {
    img: "https://se-radio.net/wp-content/uploads/2023/08/CaseyMuratori_1024x1024-526x526.jpg",
    name: "Casey Muratori",
    label: "Head | Event Management",
  },
  {
    img: "https://se-radio.net/wp-content/uploads/2023/08/CaseyMuratori_1024x1024-526x526.jpg",
    name: "Casey Muratori",
    label: "Head | Event Management",
  },
];

export function Main() {
  return (
    <div className="px-2">
      <h1 className="tracking-tight px-4 text-neutral-200 text-shadow-xs my-4  text-3xl font-medium">
        Meet our team
      </h1>
      <p className="px-4 text-neutral-400 text-base text-pretty w-3/4 mb-8">
        We’re more than just a team — we’re a group of passionate individuals
        united by shared values, mutual respect, and a genuine love for what we
        do. Each of us brings unique skills, experiences, and perspectives that
        come together to create something greater than the sum of its parts.
      </p>
      <div className="grid grid-cols-5 *:text-white *:mx-2">
{peoples.map((person, i) => {
  return (
    <div
      key={i}
      className="border border-neutral-700/80 bg-zinc-900/90 rounded-xl"
    >
      <img
        src={person.img}
        alt={person.name}
        className="aspect-square p-2 object-cover"
      />

      <div className="p-2">
        <h1 className="text-xl tracking-tight font-medium">
          {person.name}
        </h1>

        <p className="text-neutral-500 text-sm">
          {person.label}
        </p>

        <ul className="flex gap-2 text-xl mt-4 mb-1 text-neutral-300">
          <li>
            <FaLinkedin />
          </li>

          <li>
            <FaTwitter />
          </li>

          <li>
            <FaEnvelope />
          </li>
        </ul>
      </div>
    </div>
  );
})}
      </div>
    </div>
  );
}
