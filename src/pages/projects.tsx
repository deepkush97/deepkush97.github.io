import React from "react";
import { PageLayout } from "../components/PageLayout";
import { ProjectCard } from "../components/ProjectCard";

const Projects = () => {
  return (
    <PageLayout title="Projects">
      <div className="d-flex flex-wrap align-items-stretch  ">
        <ProjectCard
          description="A npm runner which creates application boilerplate with typescript in a better project structure which includes swagger-ui documentation and some security aspects."
          title="create-better-express-api"
          techStack="JS"
          url="https://github.com/deepkush97/create-better-express-api"
        />
        <ProjectCard
          description=" A job portal project in which user can apply for the listed jobs and recruiter can create jobs and view the applied candidates list for the job."
          title="job-portal-js"
          techStack="JS-Express-MySQL-Sequelize-ReactJS-ContextAPI-Bootstrap-ReactRouter"
          url="https://github.com/deepkush97/job-portal-js"
        />
        <ProjectCard
          description="A reddit clone using a server at backend with node, express, typeorm and postgres. The client is made with React with tailwind and SWR."
          title="read-it-ts"
          techStack="TS-Node-TypeORM-PostgreSQL-React-Tailwind-SWR"
          url="https://github.com/deepkush97/read-it-ts"
        />
        <ProjectCard
          description="A e-commerce application built with Express, MongoDB, React, React-Router, Redux, Redux-Thunk, Bootstrap."
          title="pro-shop-js"
          techStack="JS-Express-ReactJS-Redux-MongoDB-Bootstrap"
          url="https://github.com/deepkush97/pro-shop-js"
        />
        <div className="alert w-100 m-3 mr-sm-5 mr-0 alert-primary text-center h4 ">
          Please get into my{" "}
          <a href="https://github.com/deepkush97" className="alert-link ">
            Github
          </a>{" "}
          for more repositories.
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
