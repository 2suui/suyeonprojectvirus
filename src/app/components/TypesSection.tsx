import imgBlackDeath from "../../assets/흑사병.png";
import imgSpanishFlu from "../../assets/스페인독감.png";
import imgAids from "../../assets/에이즈.jpg";
import imgCovid from "../../assets/코로나.jpg";
import EpidemicCard from "./EpidemicCard";

export default function TypesSection() {
  const epidemics = [
    {
      id: "black-death",
      image: imgBlackDeath,
      koreanName: "흑사병",
      englishName: "The Black Death"
    },
    {
      id: "spanish-flu",
      image: imgSpanishFlu,
      koreanName: "스페인 독감",
      englishName: "The 1918 influenza pandemic"
    },
    {
      id: "aids",
      image: imgAids,
      koreanName: "에이즈",
      englishName: "AIDS"
    },
    {
      id: "covid-19",
      image: imgCovid,
      koreanName: "코로나",
      englishName: "COVID-19"
    }
  ];

  return (
    <section id="types-of-epidemics" className="tw-2193906fff">
      <div className="tw-0f49af0934">
        <div className="tw-de042df702">
          <h2 className="tw-97c12d293b">
            Types of Epidemics
          </h2>

          <div className="tw-a610bfefe2">
            {epidemics.map((epidemic, index) => (
              <EpidemicCard
                key={index}
                id={epidemic.id}
                image={epidemic.image}
                koreanName={epidemic.koreanName}
                englishName={epidemic.englishName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
