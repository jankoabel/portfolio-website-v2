import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
          
            {/* Frontend Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-desktop" /></div>
                <h4>Frontend Development</h4>
                <p>As a frontend developer, I specialize in crafting stunning and interactive user interfaces using the latest technologies such as HTML, CSS, and JavaScript frameworks like React, Vue.js, or Angular. My focus is on creating visually appealing, responsive, and user-friendly websites.</p>
              </div>
            </div>
            {/* Frontend Development End */}
            
            {/* Backend Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-cogs" /></div>
                <h4>Backend Development</h4>
                <p>With expertise in backend development, I build powerful and scalable server-side applications to handle complex business logic and data processing. Proficient in languages and frameworks like Node.js, Django, or ASP.NET Core, I ensure efficient and secure backend systems.</p>
              </div>
            </div>
            {/* Backend Development End */}
           
            {/* Full-stack Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-cubes" /></div>
                <h4>Full-stack Development</h4>
                <p>As a full-stack developer, I provide comprehensive web development solutions by leveraging both frontend and backend expertise. From designing intuitive user interfaces to building robust server-side logic, I ensure a seamless end-to-end development process for your projects.</p>
              </div>
            </div>
            {/* Full-stack Development End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
