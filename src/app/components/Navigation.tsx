export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 110;
      const viewportHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      
      // For Types of Epidemics, center the content
      if (id === 'types-of-epidemics') {
        const elementHeight = element.offsetHeight;
        const scrollTo = elementTop - (viewportHeight - elementHeight) / 2;
        window.scrollTo({
          top: Math.max(0, scrollTo),
          behavior: 'smooth'
        });
      } else {
        const scrollTo = elementTop - headerHeight - 20;
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="tw-f9048ae77b">
      <div className="tw-b54cada9a8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="tw-ed97cf9ddb"
        >
          PATH
        </button>
        
        <div className="tw-07926c4667">
          <button 
            onClick={() => scrollToSection('what-is-path')}
            className="tw-ec43a2fcfe"
          >
            What is PATH?
          </button>
          <button 
            onClick={() => scrollToSection('what-is-epidemic')}
            className="tw-ec43a2fcfe"
          >
            What is an Epidemic?
          </button>
          <button 
            onClick={() => scrollToSection('types-of-epidemics')}
            className="tw-ec43a2fcfe"
          >
            Types of Epidemics
          </button>
          <button 
            onClick={() => scrollToSection('timeline')}
            className="tw-ec43a2fcfe"
          >
            Epidemic History Timeline
          </button>
          <button 
            onClick={() => scrollToSection('sources')}
            className="tw-ec43a2fcfe"
          >
            Sources
          </button>
        </div>
      </div>
    </nav>
  );
}