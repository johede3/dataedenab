import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-lg text-gray-600 dark:text-gray-300">
        <strong>Dataeden</strong> är en webbyrå som brinner för att hjälpa småföretag synas online. Vi skapar moderna,
        skräddarsydda hemsidor och digitala lösningar som är snabba, användarvänliga och anpassade efter dina behov.
        <br /> <br /> Vi tror att kombinationen av <strong>snygg design och intuitiv UX</strong> är nyckeln till att
        engagera besökare och stärka varumärken online. Genom att fokusera på detaljer och användarupplevelse skapar vi
        lösningar som är både visuellt tilltalande och enkla att använda.
        <br /> <br /> Oavsett om du behöver en helt ny hemsida, en uppdatering av din nuvarande eller en specialbyggd
        webbapp, hjälper vi dig – från idé till färdig lösning.
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/kontakt"
          className="rounded-full bg-primary px-6 py-3 text-lg font-medium text-background shadow-md transition-all hover:bg-primary-hover"
        >
          Kontakta oss
        </Link>
      </div>
    </div>
  );
};

export default About;
