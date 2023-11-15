/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Learning For A Sustainable Future by University Of Edinburgh🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://www.linkedin.com/posts/burhanuddin-khatri-aa44a8247_completion-certificate-for-learning-for-a-activity-7129196482041135104-LNfn?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Coders Cup",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://www.linkedin.com/posts/burhanuddin-khatri-aa44a8247_coders-cup-certificate-activity-7130211886444257280-XuxR?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "My Github Repos",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/BurhanCantCode?tab=repositories",
  },
  {
    title: "Git and GitHub",
    description:
      "In person review of the seminar held at FAST NUCES.",
    url: "https://www.linkedin.com/posts/burhanuddin-khatri-aa44a8247_excited-to-announce-that-i-have-successfully-activity-7126147647756775424-499v?utm_source=share&utm_medium=member_desktop",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;