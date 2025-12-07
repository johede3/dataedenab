import Image from "next/image";

interface Props {
  name: string;
  description: string;
  img: string;
  url: string;
}

const ProjectCard = ({ name, description, img, url }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
      <figure className="bg-background group relative h-64 w-64 cursor-pointer overflow-hidden rounded-xl border p-4">
        <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-transparent from-40% to-black" />
        <Image
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          alt={name}
          src={img}
          width={256}
          height={256}
          loading="lazy"
        />
        <figcaption className="absolute bottom-4 left-4 z-20">
          <h1 className="text-lg font-bold text-white">{name}</h1>
          <p className="text-sm text-gray-300">{description}</p>
        </figcaption>
      </figure>
    </a>
  );
};

export default ProjectCard;
