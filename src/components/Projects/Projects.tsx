import Image from "next/image"
import Link from "next/link"
import { projects } from "../../app/data/projects"
import Marquee from "../marquee"
import { cn } from "../UI/utils/cn"

const ProjectCard = ({
  name,
  description,
  url,
  img,
}: {
  name: string
  description: string
  url: string
  img: string
}) => {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div
        className={cn(
          "relative w-70 cursor-pointer overflow-hidden rounded-xl border p-4 transition hover:shadow-lg",
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-col items-center">
          <Image
            src={img}
            alt={name}
            width={120}
            height={120}
            className="h-[120px] w-[120px] rounded-md object-cover"
          />

          <h3 className="mt-4 text-lg font-semibold">{name}</h3>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  )
}

const Projects = () => {
  return (
    <div className="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden py-12">
      <Marquee pauseOnHover className="mt-8 [--duration:20s]" repeat={10}>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Marquee>
    </div>
  )
}

export { Projects }
