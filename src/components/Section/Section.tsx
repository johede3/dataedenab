import SectionTitle from "./SectionTitle"

interface Props {
  id: string
  title: string
  description: string
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  title,
  description,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <section id={id} className="py-10 lg:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle>{title}</SectionTitle>
        <p className="mt-3 text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {children}
    </section>
  )
}

export default Section
