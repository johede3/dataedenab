import SectionTitle from "./SectionTitle";

interface Props {
  id: string;
  title: string;
  description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  title,
  description,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <section id={id} className="py-10 lg:pt-20" title={title}>
      <div className="mx-auto mt-10 max-w-4xl text-center md:mt-0">
        <SectionTitle>{title}</SectionTitle>
        <p className="mt-3 text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {children}
    </section>
  );
};

export default Section;
