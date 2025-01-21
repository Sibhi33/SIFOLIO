import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="w-full mt-16 mb-4 text-justify mx-auto px-4 lg:px-12"
    >
      <div>
        <div className="flex items-center">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="text-[#e6f1ff] text-3xl whitespace-nowrap">
            Professional Profile
          </code>
          <div className="flex-grow border-b border-b-[#e6f1ff] border-opacity-25 ml-4"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        {/* Education Section */}
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">
              Bachelor of Engineering, Computer Science and Engineering
            </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Sri Krishna College of Technology
            </code>
            <br />
            <code className="text-xs text-brown_vs">October 2022 - Present</code>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-row mt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Experience</code>
          </div>
          <div className="w-3/4">
            {/* JavaScript Developer */}
            <div className="mb-8">
              <code className="text-blue_vs">
                JavaScript Developer, Intern
              </code>
              <br />
              <code className="italic text-sm text-lightblue_vs">
                Sparkout Tech Ltd., Coimbatore
              </code>
              <br />
              <code className="text-xs text-brown_vs">June 2024 - July 2024</code>
            </div>
            {/* Product Management Fellowship */}
            <div>
              <code className="text-blue_vs">Product Management Fellowship</code>
              <br />
              <code className="italic text-sm text-lightblue_vs">
                Foruppo, Remote
              </code>
              <br />
              <code className="text-xs text-brown_vs">November 2023 - June 2024</code>
            </div>
          </div>
        </div>

        {/* Technical Expertise Section */}
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Technical Expertise</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Full-stack Development: HTML, React, Angular
              <br />• Backend Engineering: SpringBoot, RESTful API Development
              <br />• Database Management: MySQL, MongoDB
              <br />• Data Visualization: Tableau, Power BI
              <br />• Mobile Development: Flutter
              <br />• AI-Powered Project Management: JIRA, AI Tools
              <br />• Technical Process Automation
              <br />• Software Development Life Cycle (SDLC) Documentation
            </code>
          </div>
        </div>

        {/* Resume Download Button */}
        <div className="flex justify-center items-center mt-10">
          <button className="border border-lightblue_vs text-lightblue_vs p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
            <a
              href="https://drive.google.com/file/d/1Rbd67CIyR9xPM09W2vecICmbglfvoZ6F/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Download Comprehensive Resume</code>
            </a>
          </button>
        </div>

        {/* Professional Certifications Section */}
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Professional Certifications</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Professional Software Engineering Master Certification -
              Goldman Sachs
              <br />• Foundations of Project Management - Google
              <br />• Professional Quality Assurance Engineering Certification
              <br />• Technical Consulting Certification - SAP
              <br />• Agile Methodology Certification - Cognizant
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
