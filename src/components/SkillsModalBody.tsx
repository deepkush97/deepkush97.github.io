import { Accordion, Card } from "react-bootstrap";
import { LanguageShowcase } from "./LanguageShowcase";
import { SoftSkill } from "./SoftSkill";
import { TechnicalSkill } from "./TechnicalSkill";

const skills = [
  {
    key: "technical",
    title: "Technical",
    body: TechnicalSkill(),
  },
  {
    key: "languages",
    title: "Languages",
    body: LanguageShowcase(),
  },
  {
    key: "soft",
    title: "Soft Skills",
    body: SoftSkill(),
  },
];

export const SkillsModalBody = () => {
  return (
    <Accordion>
      {skills.map(({ body, key, title }) => (
        <Card key={key}>
          <Accordion.Toggle as={Card.Header} eventKey={key}>
            <span className="display-6">{title}</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={key}>
            <Card.Body>{body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};
