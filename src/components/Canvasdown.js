import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function Canvasdown() {
  const [showCanvasDropdown1, setShowCanvasDropdown1] = useState(false);
  const handleCanvasDropdown1 = () => {
    setShowCanvasDropdown1(!showCanvasDropdown1);
  };
  const [showCanvasDropdown2, setShowCanvasDropdown2] = useState(false);
  const handleCanvasDropdown2 = () => {
    setShowCanvasDropdown2(!showCanvasDropdown2);
  };
  return (
    <ul className="list-unstyled">
      <li onClick={handleCanvasDropdown1}>
        <a href="#" className="w-100 d-block px-3 py-2">
          <h1>
            DISCOVER <AddIcon className="ms-auto" />
          </h1>
        </a>
      </li>
      {showCanvasDropdown1 && (
        <>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              <h1> ABOUT US</h1>
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Vision & Philosophy
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Executive Director's Message
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Director General's Message
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Governing Body Mandatory Disclosure
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Mandatory Disclosure
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="w-100 d-block px-3 py-2">
              <h1> STUDENTS CLUB</h1>
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Communication Club
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Computer Applications Club
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Cultural Club
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Sports Club
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Entrepreneurship Club Environment Club
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Environment Club
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="w-100 d-block px-3 py-2">
              <h1> DOCUMENTS</h1>
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              IQAC
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              SSR CYCLE
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              DVV CLARIFICATION
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="w-100 d-block px-3 py-2">
              <h1> CAMPUS LIFE</h1>
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Wifi Campus
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Hostel
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Library
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Events
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="w-100 d-block px-3 py-2">
              <h1> OTHER LINKS</h1>
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Conferences
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Journals Blog
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Fee Payment
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Notices
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              Placement
            </a>
          </li>
        </>
      )}
      <li onClick={handleCanvasDropdown2}>
        <a href="#" className="w-100 d-block px-3 py-2">
          <h1>
            STUDY <AddIcon className="ms-auto" />
          </h1>
        </a>
      </li>
      {showCanvasDropdown2 && (
        <>
          <li className="mb-3">
            <a href="#" className="w-100 d-block px-3 py-2">
              <h1> CAMPUS</h1>
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              UG Campus
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              PG Campus
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              LAW Campus
            </a>
          </li>

          <li className="mb-3">
            <a href="#" className="w-100 d-block px-3 py-2">
              <h1> UG PROGRAMS</h1>
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              BBA
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              BCA
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              B.COM
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              B.ED
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="w-100 d-block px-3 py-2">
              <h1> PG PROGRAMS</h1>
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              MBA
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              MCA
            </a>
          </li>

          <li className="mb-3">
            <a href="#" className="w-100 d-block px-3 py-2">
              <h1> LAW PROGRAMS</h1>
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              B.A. LLB
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              LLB
            </a>
          </li>
          <li>
            <a href="#" className="w-100 d-block px-3 py-2">
              B.COM LLB
            </a>
          </li>
        </>
      )}
    </ul>
  );
}
