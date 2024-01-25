import { BASE_URL } from "@/app/constants";
import { getCurrentAge } from "@/app/utils/getAge";

const About = async () => {
  const response = await fetch(`${BASE_URL}/about`);
  const about = await response.json();

  return (
    <section id='about' className='section bg-dark-1'>
      <div className='container'>
        <header className='header-wrapper'>
          <h2 className='section-background-header'>ABOUT ME</h2>
          <h3 className='section-header'>Who am I?
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
              <li className='info-field'><span>Age: </span>{getCurrentAge()}</li>
              <li className='info-field'><span>From: </span>{about.data.fromValue}</li>
            </ul>
            <a href="files/tsvetan_eftenov_resume.pdf" className='btn btn-primary' rel="noreferrer" target="_blank">Download CV</a>
          </section>
        </article>
      </div>
    </section>
  )
}

export default About
