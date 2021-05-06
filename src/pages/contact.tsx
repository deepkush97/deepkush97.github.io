import dynamic from "next/dynamic";
import React from "react";
import { Row } from "react-bootstrap";
import { PageLayoutProps } from "../components/PageLayout";
import { SocialMediaCardProps } from "../components/SocialMediaCard";

const PageLayout = dynamic<PageLayoutProps>(
  import("../components/PageLayout").then((component) => component.PageLayout)
);
const SocialMediaCard = dynamic<SocialMediaCardProps>(
  import("../components/SocialMediaCard").then(
    (component) => component.SocialMediaCard
  )
);
const Contact = () => {
  return (
    <>
      <PageLayout title="Get in touch">
        <Row className="align-items-stretch">
          <SocialMediaCard
            description="To have a formal conversation or to share something with me."
            url="mailto:kushwaha97deepanshu@gmail.com"
            iconClass="far fa-envelope"
            linkText="Mail me!"
          />
          <SocialMediaCard
            description="To see my projects, my repository and my personal work."
            url="https://github.com/deepkush97"
            iconClass="fab fa-github"
            linkText="Visit me!"
          />
          <SocialMediaCard
            description="To connect to me professionally and build network."
            url="https://www.linkedin.com/in/leftisfame/"
            iconClass="fab fa-linkedin"
            linkText="Connect with me!"
          />
          <SocialMediaCard
            description="To get to know me personally. I am another person in real."
            url="https://www.instagram.com/leftisfame"
            iconClass="fab fa-instagram"
            linkText="Follow me!"
          />
        </Row>
      </PageLayout>
    </>
  );
};
export default Contact;
