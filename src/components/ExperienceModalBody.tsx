import { Card, Accordion } from "react-bootstrap";

const experienceArray = [
  {
    companyName: "AtliQ Technologies",
    location: "Vadodara, Gujarat",
    designation: "Software Engineer",
    timePeriod: "Nov' 2020 - Present",
    mentionablePoints: [
      "Building software and application according to the needs of the client.",
      "Worked mainly on NodeJS, React and Laravel.",
    ],
  },
  {
    companyName: "Matrix Comsec Private Limited",
    location: "Vadodara, Gujarat",
    designation: "Engineer (Software Department)",
    timePeriod: "Aug' 2020 - Oct' 2020",
    mentionablePoints: [
      "Worked as a Software Engineer to build a robust web solution to deliver live stream as well as playback of IPCameras and different product devices of the company.",
      "Worked with NodeJS as Backend and React as Frontend technologies.",
      "Successfully analyzed the problem, developed and provided a feasible solution single handed.",
    ],
  },
  {
    companyName: "SSM Infotech Private Limited",
    location: "Surat, Gujarat",
    designation: "Software Engineer",
    timePeriod: "Jun' 2019 - Aug' 2020",
    mentionablePoints: [
      "Worked passionately in learning, developing and maintaining different products and solutions of the company.",
      "Worked in .NET Framework, .NETCore, JQuery and Javascript.",
      "Acquired and learnt .NET, C# in the work experience itself.",
      "Managed the team and product with Manager and converted the requirements of the product into highly dynamic and extensible software.",
    ],
  },
];

export const ExperienceModalBody = () => {
  return (
    <Accordion defaultActiveKey="0">
      {experienceArray.map(
        (
          { companyName, location, designation, timePeriod, mentionablePoints },
          index
        ) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
              <div className="d-flex align-items-center justify-content-between ">
                <div className="d-flex flex-column">
                  <div>
                    <span className="display-6">{companyName}</span> |{" "}
                    <span className="display-8">{designation}</span>
                  </div>
                  <p className="m-0">{location}</p>
                </div>
                <span>{timePeriod}</span>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${index}`}>
              <Card.Body>
                <ul>
                  {mentionablePoints.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )
      )}
    </Accordion>
  );
};
