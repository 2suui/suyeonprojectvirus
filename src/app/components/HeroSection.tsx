import { ChevronDown } from "lucide-react";
import Dither from "./Dither";

export default function HeroSection() {
  const scrollDown = () => {
    const section = document.getElementById('what-is-path');
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollTo = sectionTop - (viewportHeight - sectionHeight) / 2;

      window.scrollTo({
        top: Math.max(0, scrollTo),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="tw-ef0659fe0a">
      {/* Background Dither */}
      <div className="tw-5f81ac85e2">
        <Dither
          waveColor={[0.6, 0.45, 0.48]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="tw-61a552a9d5" />

      {/* Content */}
      <div className="tw-c7bf264643">
        <h1 className="tw-0c6629fe22">
          PATH
        </h1>
        <p className="tw-355bb76ab0">
          The Pandemic Archive Timeline Hub
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollDown}
        className="tw-d0fb19d650"
        aria-label="Scroll down"
      >
        <ChevronDown size={48} />
      </button>
    </section>
  );
}
