import { FC } from "react";
import { Card, Col } from "react-bootstrap";
export interface SocialMediaCardProps {
  url: string;
  iconClass: string;
  description: string;
  linkText: string;
}

export const SocialMediaCard: FC<SocialMediaCardProps> = ({
  description,
  iconClass,
  url,
  linkText,
}) => {
  return (
    <Col md={3} className="px-2 mb-3">
      <Card>
        <Card.Body className="text-center">
          <h4 className="card-title">
            <i className={`${iconClass} fa-3x`}></i>
          </h4>
          <Card.Text>{description}</Card.Text>
          <Card.Link href={url} target="_blank" rel="noreferrer">
            {linkText}
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
