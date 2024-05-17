import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Abel a <span>Website Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Abel. I am very passionate and dedicated to
                    my work. With 3 years experience as website developer, I
                    have acquired the skills and knowledge necessary to make
                    your project a success. I enjoy every step of the design
                    process, from discussion and collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>https://www.jankoabu.com/</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>jankoabel2022@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Computer Science</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+421 949 767 931</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City :{" "}
                        <span>Staré Grunty 51, Bratislava. Slovakia</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>.NET</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Angular</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Node js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2020 I started to learn Programming. I have
                            learn Html, Css, Sass, JavaScript, Bootstrap. Now I
                            am a Professional Web Designer..
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor Degree in Computer Science
                          </h4>
                          <p className="timeline-text">
                            As a student in the Computer Science program at the
                            Slovak Technical University, I am actively acquiring
                            software engineering principles through rigorous
                            coursework and practical projects.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 04/2023 – Present
                          </h6>
                          <h4 className="timeline-title">
                          Mid-Level MERN Stack Developer
                          </h4>
                          <p className="timeline-text">
                            At Upwork, I have been involved in the development
                            and maintenance of MERN stack web applications,
                            ensuring functionality and scalability.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 05/2023 to 04/2024
                          </h6>
                          <h4 className="timeline-title">
                            Mid-Level .NET core and Umbraco Developer.
                          </h4>
                          <p className="timeline-text">
                            At Seerlinq, I specialized in website and
                            application development using .NET Core and Umbraco
                            technologies.With .NET Core, I focused on backend
                            development, harnessing its powerful features to
                            build robust project foundations.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 12/2022 – 04/2023
                          </h6>
                          <h4 className="timeline-title">
                            Junior MERN Stack Developer
                          </h4>
                          <p className="timeline-text">
                             I Contributed to MERN Stack projects at Tria Print
                            Trading LLC, actively participating in the
                            development, debugging, and testing of software
                            applications. Collaborated closely with senior
                            developers to write code, troubleshoot issues, and
                            assist in project documentation.Gained valuable
                            experience and enhanced proficiency in MERN Stack
                            technologies while demonstrating adaptability and
                            teamwork in a professional setting.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
