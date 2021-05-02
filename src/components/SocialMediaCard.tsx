import { FC } from "react";
import { Col } from "react-bootstrap";

interface SocialMediaCardProps {
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
      <div className="card ">
        <div className="card-body text-center">
          <h4 className="card-title">
            <i className={`${iconClass} fa-3x`}></i>
          </h4>
          <p className="card-text">{description}</p>
          <a href={url} className="card-link">
            {linkText}
          </a>
        </div>
      </div>
    </Col>
  );
};
