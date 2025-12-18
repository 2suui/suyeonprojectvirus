import svgPaths from "../../imports/svg-eroo1d1klq";
import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";

interface TimelineItem {
  title: string;
  period: string;
  description: ReactNode;
  type: ReactNode;
  transmission: ReactNode;
  impact: ReactNode;
  position: 'left' | 'right';
}

export default function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData: TimelineItem[] = [
    {
      title: "흑사병 (페스트, 1347~1351)",
      period: "1347-1351",
      description: (
        <>
          14세기 유럽 인구의 약 3분의 1을 사망하게 한, 인류 역사상
          <br />
          가장 치명적인 팬데믹
        </>
      ),
      type: "세균 감염병(Yersinia pestis)",
      transmission: (
        <>
          쥐에 기생한 벼룩을 통해 전파되며, 도시 밀집·무역·
          <span className="tw-keep-together">전쟁으로 급속도로 확산</span>
        </>
      ),
      impact: "1347년부터 유럽 전역으로 퍼지며 극심한 사망률을 기록했고, '신의 분노'라 불릴 만큼 큰 공포를 남김",
      position: 'left'
    },
    {
      title: "스페인독감 (1918~1920)",
      period: "1918-1920",
      description: (
        <>
          전 세계적으로 약 5천만 명 이상의 사망자를 낳은 20세기 최악의
          <br />
          인플루엔자 팬데믹
        </>
      ),
      type: (
        <>
          H1N1 인플루엔자 A 바이러스가 일으키는 <span className="tw-keep-together">급성 호흡기 감염병</span>
        </>
      ),
      transmission: "호흡기 비말로 전파되며, 1차 세계대전 병력 이동과 기차·선박을 통한 수송망으로 급속 확산",
      impact: "북미·유럽에서 시작해 전 대륙으로 퍼지며 전 세계 인구의 약 2~3%가 사망할 정도로 높은 치명률을 남김",
      position: 'right'
    },
    {
      title: "에이즈 (AIDS, 1981~ )",
      period: "1981-현재",
      description: (
        <>
          HIV 감염으로 면역체계가 파괴되는 만성 감염병으로, 현재까지 전 세계적
          <br />
          사망자가 매우 많은 현대 대표 팬데믹
        </>
      ),
      type: (
        <>
          HIV 바이러스 감염으로 인해 면역 기능이{" "}
          <span className="tw-keep-together">저하되는 후천성면역결핍증</span>
        </>
      ),
      transmission: "성적 접촉, 혈액, 출산·수유를 통한 전파",
      impact: (
        <>
          2017년 기준 연간 약 94만 명 이상이 AIDS 관련 질병으로{" "}
          <span className="tw-keep-together">사망하며, 여전히 진행 중인 글로벌 감염병</span>
        </>
      ),
      position: 'left'
    },
    {
      title: "코로나19(COVID-19, 2019~ )",
      period: "2019-현재",
      description: (
        <>
          2019년 우한에서 시작해 전 세계로 동시 확산된 현대 최대 규모의
          <br />
          호흡기 팬데믹
        </>
      ),
      type: "SARS-CoV-2 바이러스에 의해 발생하는 급성 호흡기 감염병",
      transmission: "호흡기 비말·에어로졸·오염 표면 접촉을 통한 전파",
      impact: "전 세계 7억 명 이상 감염, 700만 명 이상 사망(WHO 기준)하며 모든 대륙으로 확산된 대규모 전염병",
      position: 'right'
    }
  ];

  useEffect(() => {
    const currentRefs = itemRefs.current;
    const currentVisibleItems = visibleItems;

    const handleScroll = () => {
      currentRefs.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible && !currentVisibleItems[index]) {
            currentVisibleItems[index] = true;
            setVisibleItems([...currentVisibleItems]);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="timeline" className="tw-8599e103a2">
      <div className="tw-0f49af0934">
        <div className="tw-de042df702">
          <h2 className="tw-c081b7bba6">
            Epidemic History Timeline
          </h2>
          
          {/* Timeline Line */}
          <div className="tw-d89972fe17">
            {/* Vertical Line with Glow */}
            <div className="tw-08fdf0f907" />
            
            {/* Timeline Items */}
	            <div className="tw-b0d6ea7f2a">
	              {timelineData.map((item, index) => (
	                <div 
	                  key={index} 
	                  className={clsx("tw-dd24643d61", item.position === "right" && "tw-abdde17331")}
	                  ref={(el) => {
	                    itemRefs.current[index] = el;
	                  }}
	                >
                  {/* Center Circle Marker with Glow */}
                  <div
                    className={clsx(
                      "tw-8e4e8e5a5d",
                      visibleItems[index] ? "tw-7bdbc87a4c" : "tw-832d556490"
                    )}
                  >
                    {/* Outer glow ring */}
                    <div className="tw-8161fc868e" />
                    {/* Middle glow */}
                    <div className="tw-5c2e488671" />
                    {/* Inner circle */}
                    <div className="tw-82b4314754" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={clsx(
                      "tw-36e579c0b4",
                      item.position === "left" ? "tw-4efb87bf75" : "tw-500f68e0fa"
                    )}
                  >
                    <div className="tw-38f3a9e165">
                      <h3 className="tw-b728dfceb5">
                        {item.title}
                      </h3>
                      <p className="tw-0cc4bc91cb">
                        {item.description}
                      </p>
                      <div className="tw-0bb0587a5e">
                        <p><strong className="tw-6e2e7675df">병 종류:</strong> {item.type}</p>
                        <p><strong className="tw-6e2e7675df">감염 경로:</strong> {item.transmission}</p>
                        <p><strong className="tw-6e2e7675df">영향:</strong> {item.impact}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="tw-fac2857f3b" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
