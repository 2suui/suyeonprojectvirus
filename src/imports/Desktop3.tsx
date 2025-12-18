import { useNavigate } from 'react-router-dom';
import imgRectangle28 from "../assets/aids.jpg";
import imgRectangle29 from "../assets/covid.jpg";
import imgRectangle27 from "../assets/b0d7bda05f576af2a0d7eede179934bcb0646f72.png";
import imgRectangle26 from "../assets/0a5599c5d46ae18792bbdfa5d24875305a7e3f31.png";
import Footer from "../app/components/Footer";

export default function Desktop() {
  const navigate = useNavigate();

  const handleBackToTypes = () => {
    navigate('/');
    // Wait for navigation to complete, then scroll to types section
    setTimeout(() => {
      const typesSection = document.getElementById('types-of-epidemics');
      if (typesSection) {
        typesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleBackToHome = () => {
    navigate('/');
    // Wait for navigation to complete, then scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="tw-3674edd26c">
      {/* Header Navigation */}
      <header className="tw-dcf23501c2">
        <div className="tw-b54cada9a8">
          {/* Back Button */}
          <button
            onClick={handleBackToTypes}
            className="tw-58ab6b9945"
          >
            <svg className="tw-b034b4d37e" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="tw-c7679208fe">Types of Epidemics</span>
          </button>

          {/* Navigation Links */}
          <nav className="tw-d92b3274b6">
            <button
              onClick={() => scrollToSection('black-death')}
              className="tw-ec43a2fcfe"
            >
              The Black Death
            </button>
            <button
              onClick={() => scrollToSection('spanish-flu')}
              className="tw-ec43a2fcfe"
            >
              The 1918 influenza pandemic
            </button>
            <button
              onClick={() => scrollToSection('aids')}
              className="tw-ec43a2fcfe"
            >
              AIDS
            </button>
            <button
              onClick={() => scrollToSection('covid-19')}
              className="tw-ec43a2fcfe"
            >
              COVID-19
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="tw-62f626a1ba">
        {/* Black Death Section */}
        <section id="black-death" className="tw-92019049cb">
          <div className="tw-de042df702">
            <div className="tw-1ce5eded13">
              <h2 className="tw-f7fb7a6660">
                흑사병
              </h2>
              <p className="tw-c2e25e3815">
                The Black Death
              </p>
            </div>

            <div className="tw-2cad2f1564">
              <img
                src={imgRectangle26}
                alt="흑사병"
                className="tw-d31ca36e0c"
              />
            </div>

            <div className="tw-91ab5d9418">
              <p>
                흑사병(Black Death)은 Yersinia pestis 세균에 의해 발생하는 급성 전염병으로, 14세기 유럽 전역에서 대유행하면서 인류 역사상 가장 치명적인 팬데믹 중 하나로 기록된다. 이 병은 쥐에 기생하던 벼룩이 사람에게 세균을 옮기는 방식으로 전파되었으며, 전쟁과 무역, 인구 이동, 밀집된 도시 환경 등이 확산을 크게 가속시켰다. 주요 증상으로는 고열, 극심한 통증, 림프샘이 부어오르는 부보(bubo) 등이 나타난다.
              </p>
              <p>
                흑사병은 1347년 콘스탄티노플과 시칠리아에서 시작해 이탈리아, 프랑스, 영국, 북유럽으로 빠르게 퍼졌으며, 1351년까지 약 4간 지속되었다. 이 기간 동안 유럽 인구의 30~50%가 사망한 것으로 추정되며, 일부 지역에서는 절반 이상이 사라지기도 했다.
              </p>
            </div>

            <div className="tw-9c12bdce66">
              <p>
                The Black Death was a highly infectious disease caused by Yersinia pestis and spread across Europe in the 14th century, mainly through fleas carried by rats. Starting around 1347, it moved rapidly through major regions of Europe and caused high fever, intense pain, and swollen lymph nodes. Between 1347 and 1351, the plague killed an estimated 30–50% of Europe's population, creating widespread fear and long-lasting social and economic disruption.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="tw-dccb0e7e9a">
          <div className="tw-d296a6d918" />
        </div>

        {/* Spanish Flu Section */}
        <section id="spanish-flu" className="tw-92019049cb">
          <div className="tw-de042df702">
            <div className="tw-1ce5eded13">
              <h2 className="tw-f7fb7a6660">
                스페인독감
              </h2>
              <p className="tw-c2e25e3815">
                The 1918 influenza pandemic
              </p>
            </div>

            <div className="tw-2cad2f1564">
              <img
                src={imgRectangle27}
                alt="스페인독감"
                className="tw-d31ca36e0c"
              />
            </div>

            <div className="tw-91ab5d9418">
              <p>
                스페인독감(Spanish Flu)은 H1N1 인플루엔자 A 바이러스에 의해 발생한 급성 호흡기 감염병으로, 1918~1920년 전 세계를 휩쓴 팬데믹이다. 기침과 재채기에서 발생하는 비말을 통해 사람 간에 쉽게 전파되었으며, 제1차 세계대전으로 인한 대규모 병력 이동, 기차·선박을 통한 빠른 국제 이동, 군대와 도시의 밀집된 생활환경 등이 확산을 크게 가속시켰다. 주요 증상은 고열, 기침, 극심한 피로 등이며, 폐렴으로 급격히 악화되어 사망에 이르는 사례가 많았다.
              </p>
              <p>
                스페인독감은 북미와 유럽을 시작점으로 아시아, 아프리카, 오세아니아까지 전 지구적으로 퍼졌고, 2년 동안 약 5천만 명 이상이 사망한 것으로 추정된다. 일부 연구에서는 사망자가 1억 명에 달했을 가능성도 제기된다. 이는 당시 세계 인구의 약 2~3%에 해당하는 규모로, 전쟁보다 높은 치명률을 보이며 인류 사회에 깊은 충격을 남겼다.
              </p>
            </div>

            <div className="tw-9c12bdce66">
              <p>
                The Spanish Flu was an acute respiratory disease caused by the H1N1 influenza A virus and became a global pandemic from 1918 to 1920. It spread rapidly through respiratory droplets, and factors such as World War I troop movements, international travel, and crowded urban and military environments greatly accelerated its transmission. Symptoms included high fever, coughing, severe fatigue, and often pneumonia leading to sudden death. Beginning in North America and Europe, the disease expanded to Asia, Africa, and Oceania, ultimately affecting the entire world. An estimated 50 million people died during the outbreak, with some studies suggesting up to 100 million deathsabout 2–3% of the global population—making the pandemic one of the deadliest in history.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="tw-dccb0e7e9a">
          <div className="tw-d296a6d918" />
        </div>

        {/* AIDS Section */}
        <section id="aids" className="tw-92019049cb">
          <div className="tw-de042df702">
            <div className="tw-1ce5eded13">
              <h2 className="tw-f7fb7a6660">
                에이즈
              </h2>
              <p className="tw-c2e25e3815">
                AIDS: Acquired Immune Deficiency Syndrome
              </p>
            </div>

            <div className="tw-2cad2f1564">
              <img
                src={imgRectangle28}
                alt="에이즈"
                className="tw-d31ca36e0c"
              />
            </div>

            <div className="tw-91ab5d9418">
              <p>
                에이즈(AIDS)는 인간 면역결핍 바이러스(HIV)에 감염되면서 면역체계가 서서히 파괴되는 질병으로, 체내 방어 기능이 크게 약화되어 다양한 감염과 합병증에 취약해진다. 초기에는 'GRID(Gay-Related Immune Deficiency)'로 불렸으나, 감염 사례가 성적 지향과 무관하게 나타나면서 AIDS라는 공식 명칭이 사용되었다. HIV는 주로 성접촉, 오염된 혈액, 출산 수유 과정에서 전염되며, CD4+ T세포를 공격하여 발열, 근육통, 체중 감소, 폐렴 등의 증상을 유발한다. AIDS는 1981년 미국에서 처음 공식 보고된 이후 현재까지 전 세계적으로 유행하고 있으며, 급성 폭발적 확산보다는 장기간에 걸쳐 면역 결핍 합병증으로 사망자가 발생하는 특징을 지닌다. 2017년 기준 약 94만 명이 AIDS 관련 질환으로 사망한 것으로 보고되며, 면역력 저하로 인한 폐렴 등 기회감염이 주요 사망 원인이 되고 있다.
              </p>
            </div>

            <div className="tw-9c12bdce66">
              <p>
                AIDS is caused by infection with the human immunodeficiency virus (HIV), which progressively damages the immune system and increases vulnerability to infections. Initially called "GRID," it was later renamed AIDS as cases were identified across diverse populations. HIV is transmitted through sexual contact, contaminated blood, and from mother to child, and it weakens the body by attacking CD4+ T cells. First reported in the United States in 1981, AIDS has since become a global health issue. Rather than spreading explosively, it progresses slowly over time, with many deaths resulting from immune-related complications. In 2017, an estimated 940,000 people died from AIDS-related illnesses worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="tw-dccb0e7e9a">
          <div className="tw-d296a6d918" />
        </div>

        {/* COVID-19 Section */}
        <section id="covid-19" className="tw-a13fa17417">
          <div className="tw-de042df702">
            <div className="tw-1ce5eded13">
              <h2 className="tw-f7fb7a6660">
                코로나
              </h2>
              <p className="tw-c2e25e3815">
                COVID-19: Coronavirus Disease 2019
              </p>
            </div>

            <div className="tw-2cad2f1564">
              <img
                src={imgRectangle29}
                alt="코로나19"
                className="tw-d31ca36e0c"
              />
            </div>

            <div className="tw-91ab5d9418">
              <p>
                코로나19(COVID-19)는 SARS-CoV-2 바이러스에 의해 발생하는 급성 호흡기 감염병으로, 2019년 12월 중국 우한에서 처음 보고된 뒤 전 세계로 빠르게 확산되며 현대 사회에서 가장 큰 규모의 팬데믹 중 하나로 기록되었다. 이 질병은 감염자의 비말과 공기 중 에어로졸을 통해 쉽게 전파되며, 오염된 물건을 통한 간접 감염도 발생한다. 높은 국제 이동량, 대도시의 인구 밀집, 무증상 감염자의 존재 등이 확산을 크게 가속시켰다. 주요 증상으로는 발열, 기침, 후각·미각 상실, 피로, 폐렴 등 다양한 호흡기 증상이 나타난다.
              </p>
              <p>
                코로나19는 우한을 기점으로 아아, 유럽, 북미 등으로 급속히 퍼졌고, 이후 모든 대륙에서 동시적으로 발생하며 전 지구적 팬데믹으로 확대되었다. 현재까지 전 세계적으로 7억 명 이상이 감염되고, WHO 기준 700만 명 이상이 사망한 것으로 보고되며, 일부 비공식 추정치는 1천만 명을 넘는 것으로 알려져 있다.
              </p>
            </div>

            <div className="tw-9c12bdce66">
              <p>
                COVID-19 is an acute respiratory disease caused by the SARS-CoV-2 virus. First identified in Wuhan, China, in December 2019, it spread rapidly worldwide through respiratory droplets, airborne aerosols, and contact with contaminated surfaces. International travel, dense urban populations, and asymptomatic transmission greatly accelerated its spread. Symptoms commonly include fever, cough, loss of smell or taste, fatigue, and pneumonia.
              </p>
              <p>
                From its origin in Wuhan, the virus quickly moved through Asia, Europe, and North America before reaching all continents. More than 700 million cases have been reported globally, with over 7 million deaths according to WHO, though some estimates suggest the toll may exceed 10 million.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
