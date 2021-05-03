import { ListGroup, ListGroupItem } from "react-bootstrap";

const languages = [
  {
    key: "node",
    title: "NodeJS/Typescript",
    experienceLevel: "Proficient",
    width: "80",
    levelNumber: 4,
  },
  {
    key: "c-sharp",
    title: "C#",
    experienceLevel: "Proficient",
    width: "80",
    levelNumber: 4,
  },
  {
    key: "html-css",
    title: "HTML/CSS",
    experienceLevel: "Proficient",
    width: "80",
    levelNumber: 4,
  },
  {
    key: "python",
    title: "Python",
    experienceLevel: "Limited",
    width: "60",
    levelNumber: 3,
  },
  {
    key: "java",
    title: "Java",
    experienceLevel: "Limited",
    width: "60",
    levelNumber: 3,
  },
  {
    key: "c-cpp",
    title: "C/C++",
    experienceLevel: "Limited",
    width: "60",
    levelNumber: 3,
  },
];

export const LanguageShowcase = () => {
  return (
    <ListGroup>
      {languages.map(({ title, key, experienceLevel, width, levelNumber }) => (
        <ListGroupItem
          key={key}
          className="d-flex justify-content-between align-items-center my-1"
        >
          <span className="w-50">
            <span className="display-8">{title} </span> | {experienceLevel}
          </span>
          <div className="progress flex-grow-1">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${width}%` }}
              aria-valuenow={levelNumber}
              aria-valuemin={0}
              aria-valuemax={5}
            ></div>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
