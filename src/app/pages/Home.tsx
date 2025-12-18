import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import TypesSection from "../components/TypesSection";
import TimelineSection from "../components/TimelineSection";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";
import svgPaths from "../../imports/svg-eroo1d1klq";

export default function Home() {
  return (
    <div className="tw-3674edd26c">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Divider with glow effect */}
      <div className="tw-489521bcc2">
        <div className="tw-d296a6d918" />
      </div>
      
      {/* What is PATH Section */}
      <ContentSection 
        id="what-is-path" 
        title="What is PATH?"
        subtitle="PATH: The Pandemic Archive Timeline Hub"
      >
        <p>
          전염병과 팬데믹이 인류 역사에 어떤 변화를 남겼는지 탐구하는 디지털 타임라인 플랫폼입니다.
          '길(Path)'이라는 이름처럼, 인류가 지나온 전염병의 흐름을 따라가며 주요 사건, 확산 과정, 사회적 영향을 직관적으로 이해할 수 있도록 구성되어 있습니다. 
          스크롤을 내리며 시대별 데이터를 확인하고, 각 팬데믹이 남긴 흔적과 변화를 한눈에 살펴보세요.
        </p>
        <div lang="en" className="tw-65cf08baac">
          <p>
            PATH is a digital platform that explores how epidemics and pandemics have shaped human history. Here, users can trace major outbreaks through a chronological timeline and gain a clear understanding of how each disease spread and influenced the society of its time. Reflecting the meaning of "path," the platform guides users along the historical trajectory of pandemics through a clear and intuitive timeline. As they scroll, users can navigate key moments and easily access data on mortality, transmission patterns, and the broader impact of each outbreak.
          </p>
        </div>
      </ContentSection>
      
      {/* What is an Epidemic Section */}
      <ContentSection 
        id="what-is-epidemic" 
        title="What is an Epidemic?"
        className="tw-14fc4e1d98"
      >
        <p>
          전염병은 병원체가 사람과 사람 사이에서 직접 또는 간접적인 접촉을 통해 빠르게 퍼지는 질병을 말합니다. 감염병과 유사해 보이지만, 두 개념에는 분명한 차이가 있습니다.
          감염병은 세균, 바이러스, 기생충 등이 특정 매개체(예: 모기, 오염된 주사 바늘, 성행위 등)를 통해 전파됩니다. 따라서 매개체를 차단하는 것이 감염병 예방의 핵심입니다.
        </p>
        <p>
          반면 전염병은 별도의 매개체 없이 일상적인 생활 활동만으로도 감염될 수 있는 질병입니다. 오염된 물건을 만지거나 병원체가 포함된 공기를 흡입하거나 오염된 물을 마시는 등 자연스러운 행동 속에서 전파됩니다. 전염병은 개인의 건강 문제를 넘어 사회 전체의 생존과 구조를 흔들 수 있는 큰 위협입니다. 때로는 인간의 생활 방식뿐만 아니라 역사와 세계의 흐름까지 바꾸는 힘을 지니고 있습니다.
        </p>
        <div lang="en" className="tw-65cf08baac">
          <p>
            An infectious disease spreads quickly through direct or indirect contact between people. Although it may seem similar to a communicable disease, the two differ. Communicable diseases are transmitted through specific vectors—such as mosquitoes, contaminated needles, or sexual contact—so blocking these vectors is essential for prevention. Infectious diseases, however, spread without a separate vector and can be transmitted through everyday activities, such as touching contaminated objects, inhaling pathogen-containing air, or drinking polluted water. These diseases can threaten not only individual health but also the stability and structure of entire societies, sometimes even reshaping human lifestyles, history, and the course of the world.
          </p>
        </div>
      </ContentSection>
      
      {/* Types of Epidemics Section */}
      <TypesSection />
      
      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Sources Section */}
      <ContentSection 
        id="sources" 
        title="Sources"
        className="tw-994396eb1d"
      >
        <p>
          박연경(2021). 「전염병으로 인한 사회적 변화로서 제한적 일상 표현 연구: COVID-19 팬데믹을 소재로 한 연구작을 중심으로」. 부산대학교 대학원 미술학과 석사학위논문.
        </p>
        <p>
          정시구(2021). 「중세 유럽의 흑사병 방역행정에서의 코로나19 대응 고찰」. 『한국행정사학지』, 제51호, 79–107.
        </p>
        <p className="tw-31f2553311">
          안미현(2021). 「전염병 연대기: 런던에서 우한까지」. 『괴테연구』, 제34집, 111–134.
        </p>
        <p lang="en" className="tw-sources-en">
          World Health Organization. (n.d.). WHO official website.{" "}
          <a 
            href="https://www.who.int" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tw-dd7b767820"
          >
            https://www.who.int
          </a>
        </p>
      </ContentSection>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
