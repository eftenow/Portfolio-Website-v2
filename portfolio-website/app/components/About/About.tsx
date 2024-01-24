import getJsonFile from "@/app/utils/jsonFileReader"

const About = async () => {
  const [titles, buttons, about] = await Promise.all([
    getJsonFile('titles'),
    getJsonFile('buttons'),
    getJsonFile('about')
  ]);
  
  const birthDate = parseDate(about.data.ageValue);
  const currentAge = calculateAge(birthDate);

  function parseDate(dateStr: string): Date {
    const parts = dateStr.split('.');
    return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
  }

  function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <section id='about' className='section bg-dark-1'>
      <div className='container'>
        <header className='header-wrapper'>
          <h2 className='section-background-header'>{titles.about.title}</h2>
          <h3 className='section-header'>{titles.about.subtitle}
            <span className='heading-separator'></span>
          </h3>
        </header>
        <article className='row about-me-content'>
          <article className='about-me-text primary-column'>
            <h2>I am <span className='text-primary '>Tsvetan Eftenov,</span> a Web Developer</h2>
            <p>{about.paragraph1}</p>
            <p>{about.paragraph2}</p>
          </article>

          <section className='about-me-info column'>
            <ul className='info-fields'>
              <li className='info-field'><span>Name: </span>{about.data.nameValue}</li>
              <li className='info-field'><span>Email: </span><span className='text-primary'>{about.data.emailValue}</span></li>
              <li className='info-field'><span>Age: </span>{currentAge}</li>
              <li className='info-field'><span>From: </span>{about.data.fromValue}</li>
            </ul>
            <a href={buttons.cv} className='btn btn-primary' rel="noreferrer" target="_blank">{buttons.download}</a>
          </section>
        </article>
      </div>
    </section>
  )
}

export default About
