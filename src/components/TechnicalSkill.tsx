import { Card } from "react-bootstrap";

const technicalSkills = [
  {
    key: "backend",
    title: "Back-End Development",
    text: "NodeJS, ASP.NET Core, WebAPI, Laravel",
  },
  {
    key: "frontend",
    title: "Front-End Development",
    text: "React, Javascript, JQuery, HTML, CSS",
  },
  {
    key: "software",
    title: "Software Development",
    text: "WinForms, WPF, Core Libraries",
  },
  {
    key: "database",
    title: "Database",
    text: "MySQL, SQL Server (MSSQL), PostreSQL, MongoDB",
  },
];

export const TechnicalSkill = () => {
  return (
    <div className="technical-skills-wrapper">
      {technicalSkills.map(({ key, title, text }) => (
        <Card key={key} className="technical-skill-item p-3">
          <Card.Title>{title}</Card.Title>
          <div>
            <ul>
              {text.split(", ").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
};
