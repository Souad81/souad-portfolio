import { useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState("en");

  const [menuOpen, setMenuOpen] = useState(false);

  const translations = {
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",

      hello: "Hello, I'm",
      title: "Frontend & .NET Developer",
      description:
        "I build clean, modern and user-friendly web applications using frontend technologies and .NET.",
      viewWork: "View My Work",
      downloadCV: "Download CV",

      aboutLabel: "ABOUT ME",
      aboutTitle:
        "Building modern digital experiences with a focus on simplicity and usability.",
      aboutText1:
        "I am a Frontend and .NET Developer with a background in web development. I enjoy creating clean, responsive and user-friendly applications using modern technologies.",
      aboutText2:
        "I have experience working with frontend development, APIs, databases and .NET, and I enjoy turning ideas into functional digital solutions.",

      skillsLabel: "SKILLS",
      skillsTitle: "Technologies I work with",

      projectsLabel: "PROJECTS",
      projectsTitle: "Selected projects",

      project1Title: "Digital Visits for Older Adults",
      project1Description:
        "An application developed during my internship at Solvedit AB, designed to support older adults with digital visits, calendar events, medication information, health features and reminders.",
      project1Contribution:
        "I worked mainly on the frontend using React Native and JavaScript and collaborated with the backend built with C# and ASP.NET Core. We used GitHub for version control and worked according to Agile methods, including daily stand-ups, team discussions, code reviews and continuous feedback.",

      project2Title: "Gym Booking Application",
      project2Description:
        "A group project developed at EC Utbildning. We built a web application for a gym where users can create an account, log in, browse workout options and book training classes.",
      project2Contribution:
        "I worked mainly on the frontend using React and TypeScript and collaborated with backend services written in C#. We used GitHub for version control and worked according to Agile methods, including daily stand-ups, team discussions, code reviews and continuous feedback.",
    },

    sv: {
      home: "Hem",
      about: "Om mig",
      skills: "Kompetenser",
      projects: "Projekt",
      experience: "Erfarenhet",
      contact: "Kontakt",

      hello: "Hej, jag heter",
      title: "Frontend- och .NET-utvecklare",
      description:
        "Jag bygger rena, moderna och användarvänliga webbapplikationer med frontend-tekniker och .NET.",
      viewWork: "Se mina projekt",
      downloadCV: "Ladda ner CV",

      aboutLabel: "OM MIG",
      aboutTitle:
        "Jag bygger moderna digitala lösningar med fokus på enkelhet och användarvänlighet.",
      aboutText1:
        "Jag är frontend- och .NET-utvecklare med bakgrund inom webbutveckling. Jag tycker om att skapa rena, responsiva och användarvänliga applikationer med moderna tekniker.",
      aboutText2:
        "Jag har erfarenhet av frontendutveckling, API:er, databaser och .NET och tycker om att omvandla idéer till fungerande digitala lösningar.",

      skillsLabel: "KOMPETENSER",
      skillsTitle: "Tekniker jag arbetar med",

      projectsLabel: "PROJEKT",
      projectsTitle: "Utvalda projekt",

      project1Title: "Digitala besök för äldre",
      project1Description:
        "En applikation som utvecklades under min praktik hos Solvedit AB, med syftet att stödja äldre genom digitala besök, kalenderhändelser, läkemedelsinformation, hälsofunktioner och påminnelser.",
      project1Contribution:
        "Jag arbetade främst med frontend i React Native och JavaScript och samarbetade med backend som byggdes i C# och ASP.NET Core. Vi använde GitHub för versionshantering och arbetade agilt med dagliga stand-ups, teamdiskussioner, code reviews och kontinuerlig feedback.",

      project2Title: "Gymbokningsapplikation",
      project2Description:
        "Ett grupprojekt som utvecklades på EC Utbildning. Vi byggde en webbapplikation för ett gym där användare kan skapa konto, logga in, se träningsalternativ och boka träningspass.",
      project2Contribution:
        "Jag arbetade främst med frontend i React och TypeScript och samarbetade med backendtjänster skrivna i C#. Vi använde GitHub och arbetade agilt med dagliga stand-ups, teamdiskussioner, code reviews och kontinuerlig feedback.",
    },
  };

  const t = translations[language];

  return (
    <div className="app">
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => setActiveSection("home")}
        >
          SA.
        </div>
        <button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Open menu"
>
  ☰
</button>
       <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => setActiveSection("home")}>
            {t.home}
          </button>

          <button onClick={() => setActiveSection("about")}>
            {t.about}
          </button>

          <button onClick={() => setActiveSection("skills")}>
            {t.skills}
          </button>

          <button onClick={() => setActiveSection("projects")}>
            {t.projects}
          </button>

          <button onClick={() => setActiveSection("experience")}>
            {t.experience}
          </button>

          <button onClick={() => setActiveSection("contact")}>
            {t.contact}
          </button>

          <select
            className="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="sv">SV</option>
          </select>
        </div>
      </nav>

 {activeSection === "home" && (
  <section className="hero">
    <div className="hero-text">
      <p className="hello">{t.hello}</p>

      <h1>Souad Al-Rawi</h1>

      <h2>{t.title}</h2>

      <p className="availability">{t.availability}</p>

      <p className="hero-description">{t.description}</p>

      <div className="hero-buttons">
        <button
          className="btn primary-btn"
          onClick={() => setActiveSection("projects")}
        >
          {t.viewWork}
        </button>

        <a
  href="/Souad_Al-Rawi_CV.pdf"
  download="Souad_Al-Rawi_CV.pdf"
  className="btn secondary-btn"
>
  {t.downloadCV}
</a>
      </div>

 <div className="social-links">
  <a href="https://www.linkedin.com/in/souad-al-rawi-410a53336" target="_blank" rel="noreferrer">
    <FaLinkedin />
    <span>LinkedIn</span>
  </a>

  <a href="https://github.com/Souad81" target="_blank" rel="noreferrer">
    <FaGithub />
    <span>GitHub</span>
  </a>
</div>
    </div>

    <div className="hero-image">
  <div className="profile-image-wrapper">
    <img
      src={profileImage}
      alt="Souad Al-Rawi"
      className="profile-image"
    />
  </div>
</div>
  </section>
)}

      {activeSection === "about" && (
        <section className="about single-section">
          <div className="about-container">
            <p className="section-label">{t.aboutLabel}</p>

            <h2 className="section-title">
              {t.aboutTitle}
            </h2>

            <p className="about-text">{t.aboutText1}</p>

            <p className="about-text">{t.aboutText2}</p>
          </div>
        </section>
      )}

      {activeSection === "skills" && (
        <section className="skills single-section">
          <div className="skills-container">
            <p className="section-label">{t.skillsLabel}</p>

            <h2 className="section-title">
              {t.skillsTitle}
            </h2>

            <div className="skills-grid">
              <div className="skill-card">React</div>
              <div className="skill-card">JavaScript</div>
              <div className="skill-card">React Native</div>
              <div className="skill-card">TypeScript</div>
              <div className="skill-card">C#</div>
              <div className="skill-card">.NET</div>
              <div className="skill-card">ASP.NET Core</div>
              <div className="skill-card">SQL</div>
              <div className="skill-card">REST APIs</div>
              <div className="skill-card">Git & GitHub</div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "projects" && (
        <section className="projects single-section">
          <div className="projects-container">
            <p className="section-label">{t.projectsLabel}</p>

            <h2 className="section-title">
              {t.projectsTitle}
            </h2>

            <div className="projects-grid">
              <article className="project-card">
                <div className="project-number">01</div>

                <h3>{t.project1Title}</h3>

                <p className="project-description">
                  {t.project1Description}
                </p>

                <p className="project-contribution">
                  {t.project1Contribution}
                </p>

                <div className="project-tech">
                  <span>React Native</span>
                  <span>JavaScript</span>
                  <span>C#</span>
                  <span>ASP.NET Core</span>
                  <span>SQL Server</span>
                  <span>REST API</span>
                  <span>GitHub</span>
                  <span>Agile</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-number">02</div>

                <h3>{t.project2Title}</h3>

                <p className="project-description">
                  {t.project2Description}
                </p>

                <p className="project-contribution">
                  {t.project2Contribution}
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Vite</span>
                  <span>CSS</span>
                  <span>C#</span>
                  <span>REST API</span>
                  <span>GitHub</span>
                  <span>Agile</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

   {activeSection === "experience" && (
  <section className="experience single-section">
    <div className="experience-container">

      <p className="section-label">
        {language === "en" ? "EXPERIENCE" : "ERFARENHET"}
      </p>

      <h2 className="section-title">
        {language === "en"
          ? "My professional experience"
          : "Min yrkeserfarenhet"}
      </h2>

      <div className="experience-card">

        <div className="experience-header">
          <div>
            <h3>
              {language === "en"
                ? "Web Developer Intern"
                : "Praktikant inom webbutveckling"}
            </h3>

            <p className="experience-company">Solvedit AB</p>
          </div>

          <span className="experience-date">2026</span>
        </div>

        <p className="experience-description">
          {language === "en"
            ? "During my internship at Solvedit AB, I worked as part of a development team on a digital solution designed for older adults. I mainly worked with frontend development using React Native and JavaScript and collaborated with the backend built with C# and ASP.NET Core."
            : "Under min LIA på Solvedit AB arbetade jag som en del av ett utvecklingsteam med en digital lösning för äldre. Jag arbetade främst med frontendutveckling i React Native och JavaScript och samarbetade med backend som utvecklades i C# och ASP.NET Core."}
        </p>

        <p className="experience-description">
          {language === "en"
            ? "We worked according to Agile methods with daily morning stand-ups, team discussions, code reviews and continuous feedback. GitHub was used for version control and collaboration."
            : "Vi arbetade enligt agila metoder med dagliga stand-up-möten på morgonen, teamdiskussioner, kodgranskning och kontinuerlig feedback. GitHub användes för versionshantering och samarbete."}
        </p>

        <div className="experience-tech">
          <span>React Native</span>
          <span>JavaScript</span>
          <span>C#</span>
          <span>ASP.NET Core</span>
          <span>SQL Server</span>
          <span>REST API</span>
          <span>GitHub</span>
          <span>Agile</span>
        </div>

      </div>
    </div>
  </section>
)}

   {activeSection === "contact" && (
  <section className="contact single-section">
    <div className="contact-container">

      <p className="section-label">
        {language === "en" ? "CONTACT" : "KONTAKT"}
      </p>

      <h2 className="section-title">
        {language === "en"
          ? "Let's work together"
          : "Låt oss arbeta tillsammans"}
      </h2>

      <p className="contact-intro">
        {language === "en"
          ? "I'm open to new opportunities in web and software development. Feel free to contact me if you'd like to discuss a role, project or collaboration."
          : "Jag är öppen för nya möjligheter inom webb- och mjukvaruutveckling. Kontakta mig gärna om du vill diskutera en tjänst, ett projekt eller ett samarbete."}
      </p>

      <div className="contact-grid">

        <a
          href="mailto:suaadalrawi@yahoo.com"
          className="contact-card"
        >
          <span className="contact-label">Email</span>
          <strong>suaadalrawi@yahoo.com</strong>
          <span className="contact-arrow">→</span>
        </a>

        <a
          href="https://www.linkedin.com/in/souad-al-rawi-410a53336/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-label">LinkedIn</span>
          <strong>Souad Al-Rawi</strong>
          <span className="contact-arrow">→</span>
        </a>

        <a
          href="https://github.com/Souad81"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-label">GitHub</span>
          <strong>Souad81</strong>
          <span className="contact-arrow">→</span>
        </a>

      </div>

    </div>
  </section>
)}
    </div>
  );
}

export default App;