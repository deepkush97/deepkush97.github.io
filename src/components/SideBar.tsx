import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Link from "next/link";
export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sticky-top">
        <div className="sidebar-container">
          <div className="sidebar-content">
            <Link href="mailto:kushwaha97deepanshu@gmail.com">
              <a target="_blank" rel="noreferrer" className="logo-link">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip id="mail-tooltip">Mail</Tooltip>}
                >
                  <i className="far fa-envelope fa-2x"></i>
                </OverlayTrigger>
              </a>
            </Link>
            <Link href="https://github.com/deepkush97">
              <a target="_blank" rel="noreferrer" className="logo-link">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip id="github-tooltip">Github</Tooltip>}
                >
                  <i className="fab fa-github fa-2x"></i>
                </OverlayTrigger>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/leftisfame/">
              <a target="_blank" rel="noreferrer" className="logo-link">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip id="linkedin-tooltip">LinkedIn</Tooltip>}
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </OverlayTrigger>
              </a>
            </Link>
            <Link href="https://www.instagram.com/leftisfame">
              <a target="_blank" rel="noreferrer" className="logo-link">
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip id="instagram-tooltip">Instagram</Tooltip>}
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </OverlayTrigger>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
