import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageMembers = () => {
  const { members } = useContext(AppContext);
  console.log(members);
  return (
    <>
      <h2>Members</h2>
      <p>The following people are our members:</p>
      <div className="employees">
        {members.map((member, index) => {
          return (
            <div className="employee" key={index}>
              <div className="imgEmployee">
                <img
                  src={`../../public/images/employee_${member.employeeID}.jpg`}
                  alt={member.lastName}
                />
              </div>
              <div className="nameTitleNotes">
                <div className="nametitle">
                  <div className="name">
                    {member.firstName} {member.lastName}
                  </div>
                  <div className="title">- ({member.title})</div>
                </div>
                <div className="notes">{member.notes}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
