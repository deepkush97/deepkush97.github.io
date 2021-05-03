import { useState } from "react";
import { Button } from "react-bootstrap";
import { PageLayout } from "../components/PageLayout";
import { EducationModalBody } from "../components/EducationModalBody";
import { ExperienceModalBody } from "../components/ExperienceModalBody";
import { SkillsModalBody } from "../components/SkillsModalBody";
import { ModalWrapper } from "../components/ModalWrapper";

export const ResumePage = () => {
  const [skillsModalOpen, setSkillsModalOpen] = useState(false);
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);
  const [educationModalOpen, setEducationModalOpen] = useState(false);

  return (
    <PageLayout title="Resume">
      <div className="d-flex flex-column px-3">
        <Button
          className=" btn-outline-link mb-2 p-4"
          onClick={() => setSkillsModalOpen(true)}
        >
          <>
            <div className="display-4"> Skills </div>
            <i className="fas fa-shapes fa-3x"></i>
          </>
        </Button>
        <ModalWrapper
          show={skillsModalOpen}
          onHide={() => setSkillsModalOpen(false)}
          modalId="skills-modal"
          title="Skills"
        >
          <SkillsModalBody />
        </ModalWrapper>
        <Button
          className=" btn-outline-link mb-2 p-4"
          onClick={() => setExperienceModalOpen(true)}
        >
          <>
            <div className="display-4"> Experience </div>
            <i className="fas fa-user-graduate fa-3x"></i>
          </>
        </Button>
        <ModalWrapper
          show={experienceModalOpen}
          onHide={() => setExperienceModalOpen(false)}
          modalId="experience-modal"
          title="Experience"
        >
          <ExperienceModalBody />
        </ModalWrapper>
        <Button
          className=" btn-outline-link p-4"
          onClick={() => setEducationModalOpen(true)}
        >
          <>
            <div className="display-4"> Education </div>
            <i className="fas fa-graduation-cap fa-3x"></i>
          </>
        </Button>
        <ModalWrapper
          show={educationModalOpen}
          onHide={() => setEducationModalOpen(false)}
          modalId="educational-modal"
          title="Education"
        >
          <EducationModalBody />
        </ModalWrapper>
      </div>
    </PageLayout>
  );
};
