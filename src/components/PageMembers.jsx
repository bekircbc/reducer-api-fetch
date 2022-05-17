import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageMembers = () => {
  const { members } = useContext(AppContext);

  return (
    <>
      <h2>Members</h2>
      <p>The following people are our members:</p>
      <ul>
        {members.map((member, index) => {
          return (
            <li key={index}>
              {member.firstName} {member.lastName}
            </li>
          );
        })}
      </ul>
    </>
  );
};
