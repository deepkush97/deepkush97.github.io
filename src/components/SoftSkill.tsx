import { Alert } from "react-bootstrap";
const softSkills = [
  { key: "team-player", text: "Team Player" },
  { key: "logical-analytical", text: "Logical and Analytical Skills" },
  { key: "presentation", text: "Presentation Skills" },
  { key: "observation", text: "Observation Skills" },
  { key: "go-getter-smart", text: "Go-Getter and Smart worker" },
  { key: "creativity", text: "Creative Mindset" },
  { key: "optimistic-motivated", text: "Optimistic and Motivated" },
  { key: "flexible-efficient", text: "Flexible and Efficient" },
  { key: "helpful", text: "Helpful to others" },
  { key: "understanding", text: "Understanding and Caring" },
];

export const SoftSkill = () => {
  return (
    <div className="soft-skills-wrapper">
      {softSkills.map(({ key, text }) => (
        <Alert
          className="soft-skill-item"
          dismissible={false}
          key={key}
          variant="secondary"
        >
          <span className="display-8">{text}</span>
        </Alert>
      ))}
    </div>
  );
};
