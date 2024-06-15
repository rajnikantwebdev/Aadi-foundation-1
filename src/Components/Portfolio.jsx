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
import image from "../images/projects.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A functional backend using express.js.",
    description:
      "Created a fully functional and working backend using express.js. It consumes MongoDb for database, includes various functionalities.",
    url: "https://github.com/rajnikantwebdev/rajni-backend",
  },
  {
    title: "Advanced Todo Application.",
    description:
      "This todo app, allows user to add sub todo of a todo. You can add priority to a particular task. Using localhost for storing task",
    url: "https://github.com/rajnikantwebdev/advanced-todos",
  },
  {
    title: "Authentication panel",
    description:
      "A simple authentication panel using Supabase, user are allowed to sign up using email and password, they can update the metadata later.",
    url: "https://github.com/rajnikantwebdev/supa-base-vite",
  },
  {
    title: "Devlib - Library for developers",
    description:
      "A tool where a new developers can find various resources in form of videos and articles. It allows a authenticated user to upload content.",
    url: "https://github.com/Aman-web-dev/Devlib",
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
