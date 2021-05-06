import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { ModalWrapperProps } from "../components/ModalWrapper";
import { PageLayoutProps } from "../components/PageLayout";

const PageLayout = dynamic<PageLayoutProps>(
  import("../components/PageLayout").then((component) => component.PageLayout)
);

const EducationModalBody = dynamic<{}>(
  import("../components/EducationModalBody").then(
    (component) => component.EducationModalBody
  )
);

const SkillsModalBody = dynamic<{}>(
  import("../components/SkillsModalBody").then(
    (component) => component.SkillsModalBody
  )
);

const ExperienceModalBody = dynamic<{}>(
  import("../components/ExperienceModalBody").then(
    (component) => component.ExperienceModalBody
  )
);

const ModalWrapper = dynamic<ModalWrapperProps>(
  import("../components/ModalWrapper").then(
    (component) => component.ModalWrapper
  )
);

type ModalType = "Education" | "Experience" | "Skills" | "";
const Resume = () => {
  const [modalOpen, setModalOpen] = useState<ModalType>("");
  return (
    <PageLayout title="Resume">
      <div className="d-flex flex-column px-3">
        <Button
          variant="outline-secondary"
          className=" btn-outline-link mb-2 p-4"
          onClick={() => setModalOpen("Skills")}
        >
          <>
            <div className="display-4"> Skills </div>
            <i className="fas fa-shapes fa-3x"></i>
          </>
        </Button>

        <Button
          variant="outline-secondary"
          className=" btn-outline-link mb-2 p-4"
          onClick={() => setModalOpen("Experience")}
        >
          <>
            <div className="display-4"> Experience </div>
            <i className="fas fa-user-graduate fa-3x"></i>
          </>
        </Button>

        <Button
          variant="outline-secondary"
          className="p-4"
          onClick={() => setModalOpen("Education")}
        >
          <>
            <div className="display-4"> Education </div>
            <i className="fas fa-graduation-cap fa-3x"></i>
          </>
        </Button>
        <ModalWrapper
          show={modalOpen ? true : false}
          onHide={() => setModalOpen("")}
          modalId="skill-modal"
          title={modalOpen}
        >
          {modalOpen === "Skills" ? (
            <SkillsModalBody />
          ) : modalOpen === "Experience" ? (
            <ExperienceModalBody />
          ) : modalOpen === "Education" ? (
            <EducationModalBody />
          ) : null}
        </ModalWrapper>
      </div>
    </PageLayout>
  );
};
export default Resume;
