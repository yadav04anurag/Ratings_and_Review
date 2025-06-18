import React from "react";
import "./AboutScreen.css";
import umesh from "../assets/images/umesh.jpg";
import prudhvi from "../assets/images/prudhvi.jpg";
import mukesh from "../assets/images/mukesh.jpg";
import pavan from "../assets/images/pavan.jpg";
import vamsi from "../assets/images/vamsi.png";

function Members() {
  const teamMembers = [
    {
      name: "Chillara Pavana Vamsi",
      role: "Frontend and Backend",
      portfolio: "https://pavana-vamsi.vercel.app/",
      image: vamsi
    },
    {
      name: "Umesh Chandra S",
      role: "Frontend and Backend",
      portfolio: "#",
      image: umesh
    },
    {
      name: "Pruthivi Raj Vulapalli",
      role: "Frontend and Backend",
      portfolio: "#",
      image: prudhvi
    },
    {
      name: "Madepalli Mukesh Sai",
      role: "Frontend and Backend",
      portfolio: "#",
      image: mukesh
    },
    {
      name: "Pavan Sai Kishor B",
      role: "Frontend and Backend",
      portfolio: "#",
      image: pavan
    }
  ];

  return (
    <div className="main">
      <div className="title">
        <h2>Team Members</h2>
      </div>
      
      <div className="container">
        {teamMembers.map((member, index) => (
          <div className="col" key={index}>
            <div className="card1">
              <div className="image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="content">
                <div className="details">
                  <h3>
                    {member.name} <br />
                    <span>{member.role}</span>
                    <br />
                    <a href={member.portfolio} className="btn">
                      Portfolio
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
