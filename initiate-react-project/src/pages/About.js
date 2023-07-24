import "../styles/About.css"

function About() {
  const company_description = "Escape is not just another social networking service (SNS) app. We're an innovative platform that makes your daily schedules an opportunity to meet like-minded invidiuals, network effortlessly, and build enduring relationships. Say goodbye to formal and time-consuming networking and say hello to organic and enjoyable interactions."

  return (
    <div>
      <div id="about">
        <div id='about-container'>
            <div id='about-text'>
                <h1 className="primary-heading">
                    What is ESCape?
                </h1>
                <p1 className="primary-text">
                  {company_description}
                </p1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
