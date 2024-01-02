import styled from "styled-components";
import UserBio from "../bioUser/bio";

function AboutUserLeft() {
  return (
    <AboutContainerLeft>
      <UserBio />
      <UserBioStyled>
        <h5>Contact</h5>
        <div>
          <div>
            Address : Ikeja, Lagos State <br />
          </div>{" "}
          <div>
            Phone : 08136457789 <br />
          </div>{" "}
          <div>E-mail : nonyeb2000@gmail.com</div>
        </div>
      </UserBioStyled>
      <UserBioStyled>
        <h5>Skills</h5>
        <div>
          <div>Drawing</div>
          <div>Figma</div>
          <div>Adobe XD</div>
          <div>HTML</div>
          <div>Gives strong critique and feedback</div>
          <div>Team player</div>
        </div>
      </UserBioStyled>
    </AboutContainerLeft>
  );
}

export default AboutUserLeft;

const AboutContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px 0.5rem;
  align-items: center; /* Center horizontally */
  justify-content: center;
  gap:1.5rem; /* Center vertically */

  & div {
    /* Additional styling for the text if needed */
    margin-bottom: 10px; /* Adjust as needed */
    font-size: 18px; /* Example font size */
  }
`;

const UserBioStyled = styled.div`
   display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
gap: .1rem;
text-align: center;

& h5 {
  font-size: 10;
 font-weight: 200;
 color: grey;
 text-transform: uppercase;

}
`