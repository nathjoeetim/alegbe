import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

function AboutUserRight() {
  return (
    <AboutContainerRight>
      <UserBioStyled>
        <h5>Years of experience</h5>
        <h1>1</h1>
      </UserBioStyled>
      <UserBioStyled>
        <h5>Satisfied client</h5>
        <h1>100%</h1>
      </UserBioStyled>
      <UserBioStyled>
        <h5>Project done</h5>
        <h1>20</h1>
      </UserBioStyled>
      <UserBioStyled>
        <h5>Linkin profile</h5>

        <a href="https://www.linkedin.com/in/blessing-alegbe-6725a219a?trk=contact-info  ">
          <FaLinkedin color="#1DA1F2" />
        </a>
      </UserBioStyled>
      <UserBioStyled>
        <a href="https://docs.google.com/document/d/16VhQsGLwF3QlmIZSUq63QTkHDi8e0Obw7w27v9LElZc/edit ">
          Click to view Resume
        </a>
      </UserBioStyled>
    </AboutContainerRight>
  );
}

export default AboutUserRight

const AboutContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  padding: 10px 0.5rem;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  /* Additional styling for the text if needed */
  margin-bottom: 10px; /* Adjust as needed */
`;

  
const UserBioStyled = styled.div`
display:flex;
flex-direction: column;
align-items: center; /* Center horizontally */
  justify-content: end;
gap: .1rem;
text-align: left;

& h5 {
font-size: 9;
font-weight: 200;
color: grey;
text-transform: uppercase;

}

& h1 {
  padding:0;
  margin:0;
  font-size:40px;
  font-weight: 500;

}
`