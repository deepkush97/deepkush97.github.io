import { Card } from "react-bootstrap";

export const EducationModalBody = () => {
  const educationArray = [
    {
      id: "college",
      title: "Bachelor of Engineering, Computer Engineering",
      subtitle: "Government Engineering College, Dahod (2015 - 2019)",
      text: "CGPA: 7.15",
    },
    {
      id: "senior-secondary",
      title: "Senior Secondary (CBSE Board)",
      subtitle: "Kendriya Vidyalaya O.N.G.C., Ankleshwar",
      text: "Percentage: 76.6%",
    },
    {
      id: "higher-secondary",
      title: "Higher Secondary (CBSE Board)",
      subtitle: "Kendriya Vidyalaya O.N.G.C., Ankleshwar",
      text: "CGPA: 9.2",
    },
  ];
  return (
    <div className="d-flex flex-column">
      {educationArray.map(({ title, subtitle, text, id }) => (
        <Card key={id} className="mb-2">
          <Card.Body>
            <Card.Title className="font-weight-bolder">{title}</Card.Title>
            <Card.Subtitle className="font-weight-bolder">
              {subtitle}
            </Card.Subtitle>
            <Card.Text className="display-8">{text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
