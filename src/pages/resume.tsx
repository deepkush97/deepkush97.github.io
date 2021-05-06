import { useState } from "react";
import { Button } from "react-bootstrap";
import { PageLayout } from "../components/PageLayout";
import { EducationModalBody } from "../components/EducationModalBody";
import { ExperienceModalBody } from "../components/ExperienceModalBody";
import { SkillsModalBody } from "../components/SkillsModalBody";
import { ModalWrapper } from "../components/ModalWrapper";

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
