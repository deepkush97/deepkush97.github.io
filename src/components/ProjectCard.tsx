import { FC } from "react";
import { Card } from "react-bootstrap";

interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  techStack: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  title,
  url,
  techStack,
}) => {
  return (
    <Card className="m-3 project-card">
      <Card.Header>
        <Card.Link href={url} target="_blank" rel="noreferrer">
          <Card.Title className="text-center m-0">{title}</Card.Title>
        </Card.Link>
      </Card.Header>
      <Card.Body className="text-center">
        <Card.Text className="display-8 text-weight-bolder ">
          {description}
        </Card.Text>

        <Card.Text className="mx-5 tech-stack">
          <span className="stack-text">{techStack}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
