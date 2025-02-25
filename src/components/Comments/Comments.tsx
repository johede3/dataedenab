import Image from "next/image"
import { cn } from "../UI/utils/cn"

// const firstRow = testimonials.slice(0, testimonials.length / 2)
// const secondRow = testimonials.slice(testimonials.length / 2)

const ReviewCard = ({
  avatar,
  name,
  role,
  message,
}: {
  avatar: string
  name: string
  role: string
  message: string
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt={name} src={avatar} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">"{message}"</blockquote>
    </figure>
  )
}

const Comments = () => {
  return (
    <div className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-4 sm:py-20 md:py-20 xl:py-20">
      {/* <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((testimonial, index) => (
          <ReviewCard key={index} {...testimonial} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((testimonial, index) => (
          <ReviewCard key={index} {...testimonial} />
        ))}
      </Marquee> */}
      <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
    </div>
  )
}

export { Comments }
