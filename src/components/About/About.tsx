import Link from "next/link"

const About: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-lg text-gray-600">
        <strong>Dataeden</strong> drivs av <strong>Johannes Edenholm</strong>, en erfaren webbutvecklare med en passion
        för att hjälpa småföretag synas online. Vi skapar moderna, skräddarsydda hemsidor och digitala lösningar som är
        snabba, användarvänliga och anpassade efter dina behov.
        <br />
        <br />
        Vi tror på att kombinationen av <strong>snygg design och intuitiv UX</strong> är nyckeln till att engagera
        besökare och stärka varumärken online. Med ett öga för detaljer och en förståelse för hur människor interagerar
        med digitala gränssnitt, skapar vi lösningar som är både visuellt tilltalande och enkla att använda.
        <br />
        <br />
        Oavsett om du behöver en helt ny hemsida, en uppdatering av din nuvarande eller en specialbyggd webbapp, så
        hjälper vi dig – från idé till färdig lösning.
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/kontakt"
          className="rounded-full bg-purple-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-all hover:bg-purple-700"
        >
          Kontakta oss
        </Link>
      </div>
    </div>
  )
}

export default About
