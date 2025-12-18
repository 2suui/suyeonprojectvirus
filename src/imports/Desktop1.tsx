import svgPaths from "./svg-eroo1d1klq";
import type { CSSProperties, PropsWithChildren } from "react";
import clsx from "clsx";
import imgRectangle21 from "../assets/0a5599c5d46ae18792bbdfa5d24875305a7e3f31.png";
import imgRectangle22 from "../assets/b0d7bda05f576af2a0d7eede179934bcb0646f72.png";
import imgRectangle23 from "../assets/8c48311ff52f378e8b0548d6d0a7347d16cf1f15.png";
import imgRectangle24 from "../assets/69f799abba2c6b735490446ac43b83c01173356f.png";
import imgRectangle20 from "../assets/190e2bd83b1a3a666bc45ed9f3040ac9f45eda72.png";
import imgRectangle51 from "../assets/2b9510a024491bc4c9f760599ec0c23c1b4b6686.png";
import img1 from "../assets/0688b05b7ecf9a335fba1cad1ea548bfa037ccbc.png";

function Wrapper1({ children }: PropsWithChildren<{}>) {
  return (
    <div className="tw-5e6947f8ba">
      <div className="tw-82f824c756">{children}</div>
      <div aria-hidden="true" className="tw-9fc262e338" />
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("tw-9f093409dc", additionalClassNames)}>
      <div className="tw-9ce28d9ecf">
        <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 623 129">
          {children}
        </svg>
      </div>
    </div>
  );
}
type Group56TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Group56Text({ text, additionalClassNames = "" }: Group56TextProps) {
  return (
    <button className={clsx("tw-ba729efff5", additionalClassNames)}>
      <p className="tw-c41c087fdf">{text}</p>
    </button>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, text3, text4, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("tw-d8a42294f1", additionalClassNames)}>
      <p className="tw-5a4fd449fe">{text}</p>
      <p className="tw-5a4fd449fe">{text1}</p>
      <p>
        {text2}
        <br aria-hidden="true" />
        {text3}
        <br aria-hidden="true" />
        {text4}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <p className="tw-5a4fd449fe">
      {text}
      <br aria-hidden="true" />
      {` Communicable diseases are transmitted through specific vectors—such as mosquitoes, contaminated needles, or sexual contact—so blocking these vectors is essential for prevention.`}
    </p>
  );
}

function Group13() {
  return (
    <div className="tw-3222feb099">
      <p className="tw-5201440bd1">What is an Epidemic?</p>
      <div className="tw-3b692b60db">
        <p className="tw-5a4fd449fe">
          전염병은 병원체가 사람과 사람 사이에서 직접 또는 간접적인 접촉을 통해 빠르게 퍼지는 질병을 말합니다. 감염병과 유사해 보이지만, 두 개념에는 분명한 차이가 있습니다.
          <br aria-hidden="true" />
          감염병은 세균, 바이러스, 기생충 등이 특정 매개체(예: 모기, 오염된 주사 바늘, 성행위 등)를 통해 전파됩니다. 따라서 매개체를 차단하는 것이 감염병 예방의 핵심입니다.
        </p>
        <p className="tw-5a4fd449fe">반면 전염병은 별도의 매개체 없이 일상적인 생활 활동만으로도 감염될 수 있는 질병입니다. 오염된 물건을 만지거나 병원체가 포함된 공기를 흡입하거나 오염된 물을 마시는 등 자연스러운 행동 속에서 전파됩니다.</p>
        <p>전염병은 개인의 건강 문제를 넘어 사회 전체의 생존과 구조를 흔들 수 있는 큰 위협입니다. 때로는 인간의 생활 방식뿐만 아니라 역사와 세계의 흐름까지 바꾸는 힘을 지니고 있습니다.</p>
      </div>
      <div className="tw-51ccf1ca7c">
        <Text text="An infectious disease spreads quickly through direct or indirect contact between people. Although it may seem similar to a communicable disease, the two differ." />
        <p className="tw-5a4fd449fe">Infectious diseases, however, spread without a separate vector and can be transmitted through everyday activities, such as touching contaminated objects, inhaling pathogen-containing air, or drinking polluted water.</p>
        <p>These diseases can threaten not only individual health but also the stability and structure of entire societies, sometimes even reshaping human lifestyles, history, and the course of the world.</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="tw-c5587f4c8a">
      <p className="tw-81090ca314">What is PATH?</p>
      <p className="tw-7082a569e0">
        <span className="tw-bf5b7eb538">PATH: The Pandemic Archive Timeline Hub</span>
        <span className="tw-cff55289f8">
          <br aria-hidden="true" />
          전염병과 팬데믹이 인류 역사에 어떤 변화를 남겼는지 탐구하는 디지털 타임라인 플랫폼입니다.
          <br aria-hidden="true" />
          {` ‘길( Path )’이라는 이름처럼, 인류가 지나온 전염병의 흐름을 따라가며 주요 사건, 확산 과정, 사회적 영향을 직관적으로 이해할 수 있도록 구성되어 있습니다. 스크롤을 내리며 시대별 데이터를 확인하고, 각 팬데믹이 남긴 흔적과 변화를 한눈에 살펴보세요.`}
        </span>
      </p>
      <div className="tw-44cd667936">
        <p className="tw-5a4fd449fe">
          PATH is a digital platform that explores how epidemics and pandemics have shaped human history.
          <br aria-hidden="true" />
          {` Here, users can trace major outbreaks through a chronological timeline and gain a clear understanding of how each disease spread and influenced the society of its time.`}
        </p>
        <p>
          Reflecting the meaning of “path,” the platform guides users along the historical trajectory of pandemics through a clear and intuitive timeline.
          <br aria-hidden="true" />
          {` As they scroll, users can navigate key moments and easily access data on mortality, transmission patterns, and the broader impact of each outbreak.`}
        </p>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="tw-110862dc86">
      <div className="tw-5837d18d9f" />
      <Group14 />
    </div>
  );
}

function Group26() {
  return (
    <div className="tw-da1942ac7b">
      <div className="tw-246f137b11" />
    </div>
  );
}

function Group29() {
  return (
    <div className="tw-992041b336">
      <div className="tw-30198f2466" />
    </div>
  );
}

function Component() {
  return <div className="tw-363e25a6ba" data-name="전염병" />;
}

function Group4() {
  return (
    <div className="tw-346e1d8e14">
      <p className="tw-df69e4b653">흑사병</p>
      <p className="tw-e7590738bc">The Black Death</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="tw-7fc9bb2776">
      <div className="tw-5e6947f8ba">
        <div className="tw-82f824c756">
          <img alt="" className="tw-fbaab73cd7" src={imgRectangle21} />
        </div>
        <div aria-hidden="true" className="tw-e43075f68e" />
      </div>
      <div className="tw-b2f2e0aef0" />
      <Group4 />
    </div>
  );
}

function Component1() {
  return (
    <div className="tw-5f1720cd1d" data-name="흑사병1">
      <Group5 />
    </div>
  );
}

function Component5() {
  return (
    <div className="tw-eb5d11f593" data-name="Component 1">
      <Component1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="tw-b41beda01d">
      <p className="tw-c851848c92">스페인 독감</p>
      <p className="tw-7ac63fd5a3">The 1918 influenza pandemic</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="tw-7fc9bb2776">
      <Wrapper1>
        <img alt="" className="tw-b43dc7f217" src={imgRectangle22} />
      </Wrapper1>
      <div className="tw-64559ea363" />
      <Group6 />
    </div>
  );
}

function Component6() {
  return (
    <div className="tw-5f1720cd1d" data-name="흑사병1">
      <Group7 />
    </div>
  );
}

function Component2() {
  return (
    <div className="tw-a988d97f7b" data-name="Component 2">
      <Component6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="tw-346e1d8e14">
      <p className="tw-4e6463d302">에이즈</p>
      <p className="tw-2f4c1d8c11">{`AIDS `}</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="tw-7fc9bb2776">
      <Wrapper1>
        <img alt="" className="tw-244a44f3f9" src={imgRectangle23} />
      </Wrapper1>
      <div className="tw-64559ea363" />
      <Group8 />
    </div>
  );
}

function Component7() {
  return (
    <div className="tw-5f1720cd1d" data-name="흑사병1">
      <Group9 />
    </div>
  );
}

function Component3() {
  return (
    <div className="tw-d3c2ee5db8" data-name="Component 3">
      <Component7 />
    </div>
  );
}

function Group10() {
  return (
    <div className="tw-346e1d8e14">
      <p className="tw-4e6463d302">코로나</p>
      <p className="tw-2f4c1d8c11">{`COVID-19 `}</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="tw-7fc9bb2776">
      <Wrapper1>
        <img alt="" className="tw-641820eaa5" src={imgRectangle24} />
      </Wrapper1>
      <div className="tw-64559ea363" />
      <Group10 />
    </div>
  );
}

function Component8() {
  return (
    <div className="tw-5f1720cd1d" data-name="흑사병1">
      <Group11 />
    </div>
  );
}

function Component4() {
  return (
    <div className="tw-09b04add15" data-name="Component 4">
      <Component8 />
    </div>
  );
}

function Group12() {
  return (
    <div className="tw-74baa8c53e">
      <Component5 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Group15() {
  return (
    <div className="tw-73e7a0aee7">
      <Component />
      <Group12 />
    </div>
  );
}

function Group30() {
  return (
    <div className="tw-992041b336">
      <Group29 />
      <Group15 />
    </div>
  );
}

function Component9() {
  return (
    <div className="tw-669aeb0181" data-name="화살표">
      <div className="tw-3e48cbc826">
        <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 165 3163" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="íì´í">
            <g filter="url(#filter0_d_1_247)" id="Union">
              <path d={svgPaths.p2048cb71} shapeRendering="crispEdges" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3163" id="filter0_d_1_247" width="165" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="10" result="effect1_dropShadow_1_247" />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.964706 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_247" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_247" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="tw-d66734be6d">
      <div className="tw-9ce28d9ecf">
        <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 627 129">
          <g id="Group 44">
            <g id="Group 10">
              <circle cx="20" cy="109" fill="var(--fill-0, white)" id="Ellipse 3" r="20" />
              <g filter="url(#filter0_d_1_241)" id="Ellipse 4">
                <circle cx="20" cy="109" fill="var(--fill-0, #072F41)" r="11" />
              </g>
            </g>
            <path d="M40 101L156.422 1H626" id="Vector 6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38" id="filter0_d_1_241" width="38" x="1" y="90">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="effect1_dropShadow_1_241" />
              <feOffset />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.964706 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_241" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_241" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="tw-600fde44ea">
      <div className="tw-9db5a4ec00">
        <div className="tw-e4b3fbccc7">
          <Group16 />
        </div>
      </div>
      <Helper text="14세기 유럽 인구의 약 3분의 1을 사망하게 한, 인류 역사상 가장 치명적인 팬데믹" text1="&nbsp;" text2="병 종류: 세균 감염병(Yersinia pestis)" text3="감염 경로: 쥐에 기생한 벼룩을 통해 전파되며, 도시 밀집·무역·전쟁으로 급속 확산" text4="영향: 1347년부터 유럽 전역으로 퍼지며 극심한 사망률을 기록했고, ‘신의 분노’라 불릴 만큼 큰 공포를 남김" additionalClassNames="left-[142px] top-[4207px] w-[440px]" />
      <p className="tw-8f706122c6">흑사병 (페스트, 1347~1351)</p>
    </div>
  );
}

function Group17() {
  return (
    <Wrapper additionalClassNames="relative">
      <g id="Group 46">
        <g id="Group 10">
          <circle cx="20" cy="109" fill="var(--fill-0, white)" id="Ellipse 3" r="20" />
          <g filter="url(#filter0_d_1_253)" id="Ellipse 4">
            <circle cx="20" cy="109" fill="var(--fill-0, #072F41)" r="11" />
          </g>
        </g>
        <path d="M36 101L152.422 1H622" id="Vector 6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38" id="filter0_d_1_253" width="38" x="1" y="90">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="effect1_dropShadow_1_253" />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.964706 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_253" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_253" mode="normal" result="shape" />
        </filter>
      </defs>
    </Wrapper>
  );
}

function Group19() {
  return (
    <div className="tw-a53d7d0e3e">
      <div className="tw-47fc95ce3f">
        <div className="tw-e4b3fbccc7">
          <Group17 />
        </div>
      </div>
      <Helper text="HIV 감염으로 면역체계가 파괴되는 만성 감염병으로, 현재까지 전 세계적 사망자가 매우 많은 현대 대표 팬데믹" text1="&nbsp;" text2="병 종류: HIV 바이러스 감염으로 인해 면역 기능이 저하되는 후천성면역결핍증" text3="감염 경로: 성적 접촉, 혈액, 출산·수유를 통한 전파" text4="영향: 2017년 기준 연간 약 94만 명 이상이 AIDS 관련 질병으로 사망하며, 여전히 진행 중인 글로벌 감염병" additionalClassNames="left-[147px] top-[5545px] w-[454px]" />
      <p className="tw-de57c80cfb">에이즈 (AIDS, 1981~ )</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="tw-a53d7d0e3e">
      <Group19 />
    </div>
  );
}

function Group18() {
  return (
    <Wrapper additionalClassNames="absolute left-[699px] top-[6229px]">
      <g id="Group 47">
        <g id="Group 10">
          <circle cx="20" cy="109" fill="var(--fill-0, white)" id="Ellipse 3" r="20" />
          <g filter="url(#filter0_d_1_270)" id="Ellipse 4">
            <circle cx="20" cy="109" fill="var(--fill-0, #072F41)" r="11" />
          </g>
        </g>
        <path d="M36 101L152.422 1H622" id="Vector 6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38" id="filter0_d_1_270" width="38" x="1" y="90">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="effect1_dropShadow_1_270" />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.964706 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_270" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_270" mode="normal" result="shape" />
        </filter>
      </defs>
    </Wrapper>
  );
}

function Group27() {
  return (
    <div className="tw-db1196c214">
      <Group18 />
      <Helper text="2019년 우한에서 시작해 전 세계로 동시 확산된 현대 최대 규모의 호흡기 팬데믹" text1="&nbsp;" text2="병 종류: SARS-CoV-2 바이러스에 의해 발생하는 급성 호흡기 감염병" text3="감염 경로: 호흡기 비말·에어로졸·오염 표면 접촉을 통한 전파" text4="영향: 전 세계 7억 명 이상 감염, 700만 명 이상 사망(WHO 기준)하며 모든 대륙으로 확산된 대규모 전염병" additionalClassNames="left-[860px] top-[6244px] w-[427px]" />
      <p className="tw-91f6c6e4b3">코로나19(COVID-19, 2019~ )</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="tw-db1196c214">
      <Group27 />
    </div>
  );
}

function Group32() {
  return (
    <div className="tw-ba325aee9d">
      <Component9 />
      <Group20 />
      <Group22 />
      <Group23 />
    </div>
  );
}

function Group() {
  return (
    <div className="tw-eae18afc32" data-name="Group">
      <div className="tw-f3b3f91ca9">
        <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 152 152">
          <g id="Group">
            <path d={svgPaths.p18e66000} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1bf4e180} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="tw-81d8ec02d6" data-name="Group">
      <Group />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="tw-81d8ec02d6" data-name="Mask group">
      <Group1 />
      <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 180 180">
        <path d="M0 0H179.883V179.883H0V0Z" fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="tw-f90afc205c">
      <div className="tw-8d80df2a25">
        <div className="tw-f18327d394">
          <img alt="" className="tw-6485828b41" src={imgRectangle20} />
        </div>
      </div>
      <div className="tw-ef06839928" />
      <div className="tw-3b981ac108" data-name="icon-park-solid:play">
        <MaskGroup />
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="tw-d3425e219f">
      <p className="tw-1dfcb6abfc">Epidemic History Timeline</p>
      <Group32 />
      <Group31 />
    </div>
  );
}

function Group34() {
  return (
    <div className="tw-d3425e219f">
      <Group33 />
    </div>
  );
}

function Group36() {
  return (
    <div className="tw-d3425e219f">
      <Group34 />
    </div>
  );
}

function Group28() {
  return (
    <div className="tw-b798c28926">
      <div className="tw-9ce28d9ecf">
        <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 612 129">
          <g id="Group 51">
            <g id="Group 10">
              <circle cx="19.8224" cy="109.177" fill="var(--fill-0, white)" id="Ellipse 3" r="19.8224" />
              <g filter="url(#filter0_d_1_233)" id="Ellipse 4">
                <circle cx="19.8224" cy="109.177" fill="var(--fill-0, #072F41)" r="10.9023" />
              </g>
            </g>
            <path d="M35.3633 101L149.726 1H611" id="Vector 6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.8046" id="filter0_d_1_233" width="37.8046" x="0.920064" y="90.2751">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="effect1_dropShadow_1_233" />
              <feOffset />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.964706 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_233" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_233" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="tw-1accbf0ede">
      <Group28 />
      <Helper text="전 세계적으로 약 5천만 명 이상의 사망자를 낳은 20세기 최악의 인플루엔자 팬데믹" text1="&nbsp;" text2="병 종류: H1N1 인플루엔자 A 바이러스가 일으키는 급성 호흡기 감염병" text3="감염 경로: 호흡기 비말로 전파되며, 1차 세계대전 병력 이동과 기차·선박을 통한 수송망으로 급속 확산" text4="영향: 북미·유럽에서 시작해 전 대륙으로 퍼지며 전 세계 인구의 약 2~3%가 사망할 정도로 높은 치명률을 남김" additionalClassNames="left-[858.15px] top-[4672px] w-[451.865px]" />
      <p className="tw-8855e5e424">스페인독감 (1918~1920)</p>
    </div>
  );
}

function Group40() {
  return (
    <div className="tw-1accbf0ede">
      <Group21 />
    </div>
  );
}

function Group42() {
  return (
    <div className="tw-1accbf0ede">
      <Group40 />
    </div>
  );
}

function Group37() {
  return (
    <div className="tw-d3425e219f">
      <Group36 />
      <Group42 />
    </div>
  );
}

function Group35() {
  return (
    <div className="tw-d3425e219f">
      <Group37 />
    </div>
  );
}

function Group38() {
  return (
    <div className="tw-dd73f37ca1">
      <p className="tw-84213e1286">© 2025 PATH – Pandemic History Timeline Archive</p>
      <p className="tw-a85a820929">{`Design & Development by Suyeon Lee`}</p>
      <p className="tw-6f0f5bea1c">This project is created for educational and research purposes.</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="tw-46c7becd7c">
      <Group38 />
    </div>
  );
}

function Group41() {
  return (
    <div className="tw-f8347b8a96">
      <p className="tw-405b570607">Sources</p>
      <div className="tw-0ade1615ed">
        <p className="tw-14f5f5fca3">
          전염병은 병원체가 사람과 사람 사이에서 직접 또는 간접적인 접촉을 통해 빠르게 퍼지는 질병을 말합니다. 감염병과 유사해 보이지만, 두 개념에는 분명한 차이가 있습니다.
          <br aria-hidden="true" />
          감염병은 세균, 바이러스, 기생충 등이 특정 매개체(예: 모기, 오염된 주사 바늘, 성행위 등)를 통해 전파됩니다. 따라서 매개체를 차단하는 것이 감염병 예방의 핵심입니다.
        </p>
        <p className="tw-14f5f5fca3">반면 전염병은 별도의 매개체 없이 일상적인 생활 활동만으로도 감염될 수 있는 질병입니다. 오염된 물건을 만지거나 병원체가 포함된 공기를 흡입하거나 오염된 물을 마시는 등 자연스러운 행동 속에서 전파됩니다.</p>
        <p className="tw-14f5f5fca3">
          전염병은 개인의 건강 문제를 넘어 사회 전체의 생존과 구조를 흔들 수 있는 큰 위협입니다. 때로는 인간의 생활 방식뿐만 아니라 역사와 세계의 흐름까지 바꾸는 힘을 지니고 있습니다.<span className="tw-a813fe56e3">전염병으로 인한 사회적 변화로서</span>
        </p>
        <p className="tw-14f5f5fca3">박연경(2021). 「전염병으로 인한 사회적 변화로서 제한적 일상 표현 연구: COVID-19 팬데믹을 소재로 한 연구작을 중심으로」, 부산대학교 대학원 미술학과 석사학위논문.</p>
        <p className="tw-14f5f5fca3">&nbsp;</p>
        <p className="tw-6467d29dc8">
          <span>{`World Health Organization (WHO), `}</span>
          <a className="tw-9fcae50efa" href="https://www.who.int">
            <span className="tw-ddb82a492b">
              https://www.who.int
            </span>
          </a>
        </p>
      </div>
      <div className="tw-70eea87b38" />
    </div>
  );
}

function Group2() {
  return (
    <div className="tw-945ac1d626">
      <div className="tw-a7c60877d0">
        <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 421 272">
          <g id="Group 7">
            <g filter="url(#filter0_d_1_261)" id="Union">
              <path d={svgPaths.pfaad300} fill="var(--fill-0, #33DBE7)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="271.265" id="filter0_d_1_261" width="420.399" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="10" result="effect1_dropShadow_1_261" />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.964706 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_261" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_261" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="tw-ff773047bb">
      <div className="tw-9e43c97a88" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as CSSProperties}>
        <div className="tw-977e82dfb3">
          <div className="tw-226771dc7a" />
        </div>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="tw-b2155b80c5">
      <Group3 />
      <div className="tw-5b6e98de0e">
        <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 130">
          <path d="M0 0H1440V129.9H0V0Z" fill="var(--fill-0, black)" id="Rectangle 40" />
        </svg>
      </div>
      <button className="tw-ec9052d7d8" data-name="P.A.T.H.">
        <div className="tw-49aaae7ec1" role="button" tabIndex={0}>
          <p className="tw-67cdcccffc">PATH</p>
        </div>
      </button>
      <button className="tw-bc6de6442d" data-name="What is PATH?">
        <p className="tw-e4d62da7c9">What is PATH?</p>
      </button>
      <Group56Text text="What is an Epidemic?" additionalClassNames="left-[751px] w-[155px]" />
      <Group56Text text="Types of Epidemics" additionalClassNames="left-[923px] w-[142px]" />
      <button className="tw-78bd075b14" data-name="Epidemic History Timeline">
        <p className="tw-3c670a274c">Epidemic History Timeline</p>
      </button>
      <div className="tw-a7377339db" data-name="Sources / Data Reference">
        <button className="tw-2c517c4498">
          <p className="tw-67cdcccffc">Sources</p>
        </button>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="tw-ab02fff86d" data-name="Desktop - 1">
      <Group24 />
      <Group13 />
      <Group25 />
      <Group26 />
      <p className="tw-1f132f8c7a">What is an Epidemic?</p>
      <div className="tw-ee8b2d3125">
        <p className="tw-5a4fd449fe">
          전염병은 병원체가 사람과 사람 사이에서 직접 또는 간접적인 접촉을 통해 빠르게 퍼지는 질병을 말합니다. 감염병과 유사해 보이지만, 두 개념에는 분명한 차이가 있습니다.
          <br aria-hidden="true" />
          감염병은 세균, 바이러스, 기생충 등이 특정 매개체(예: 모기, 오염된 주사 바늘, 성행위 등)를 통해 전파됩니다. 따라서 매개체를 차단하는 것이 감염병 예방의 핵심입니다.
        </p>
        <p className="tw-5a4fd449fe">반면 전염병은 별도의 매개체 없이 일상적인 생활 활동만으로도 감염될 수 있는 질병입니다. 오염된 물건을 만지거나 병원체가 포함된 공기를 흡입하거나 오염된 물을 마시는 등 자연스러운 행동 속에서 전파됩니다.</p>
        <p>전염병은 개인의 건강 문제를 넘어 사회 전체의 생존과 구조를 흔들 수 있는 큰 위협입니다. 때로는 인간의 생활 방식뿐만 아니라 역사와 세계의 흐름까지 바꾸는 힘을 지니고 있습니다.</p>
      </div>
      <div className="tw-ef8760665a">
        <Text text="An infectious disease spreads quickly through direct or indirect contact between people. Although it may seem similar to a communicable disease, the two differ." />
        <p className="tw-5a4fd449fe">Infectious diseases, however, spread without a separate vector and can be transmitted through everyday activities, such as touching contaminated objects, inhaling pathogen-containing air, or drinking polluted water.</p>
        <p>These diseases can threaten not only individual health but also the stability and structure of entire societies, sometimes even reshaping human lifestyles, history, and the course of the world.</p>
      </div>
      <Group30 />
      <div className="tw-7ce0195ce7" data-name="Types of Epidemics">
        <p className="tw-937c0b9675">Types of Epidemics</p>
      </div>
      <div className="tw-6b110128bb">
        <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 4826">
          <path d="M0 0H1440V4826H0V0Z" fill="var(--fill-0, #030115)" id="Rectangle 44" />
        </svg>
      </div>
      <div className="tw-1c1ecbf40b">
        <div className="tw-9f917252d1">
          <svg className="tw-640247457a" fill="none" preserveAspectRatio="none" viewBox="0 0 2221 4404">
            <g filter="url(#filter0_f_1_251)" id="Ellipse 7">
              <path d={svgPaths.p2913bc00} fill="var(--fill-0, #115A5E)" fillOpacity="0.25" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4403.78" id="filter0_f_1_251" width="2220.25" x="-1.09053e-06" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_251" stdDeviation="50" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group35 />
      <div className="tw-2d484c69dc" />
      <div className="tw-401b465bfd" />
      <div className="tw-0ea45b9a50">
        <img alt="" className="tw-33e1d6c81b" src={imgRectangle51} />
      </div>
      <div className="tw-4038c768a3" />
      <Group39 />
      <Group41 />
      <div className="tw-f8f697d455" data-name="유럽지도 1">
        <img alt="" className="tw-33e1d6c81b" src={img1} />
      </div>
      <Group2 />
    </div>
  );
}
