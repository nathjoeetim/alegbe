import styled from "styled-components";
import imagei1 from "../../assets/i1.jpg"
function AboutUserMiddle() {
  return <AboutContainerMiddle>
    <Imagecontainer>
      <img src={ imagei1} />
  </Imagecontainer>
  </AboutContainerMiddle>
}

export default AboutUserMiddle

const AboutContainerMiddle = styled.div`
  display: column;
  flex: 2;

  padding: 10px 2rem;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  `

const Imagecontainer = styled.div`
  display:flex;
  align-items:center;
  height:600px;
  width:90%;
  justify-content:center;
  border-radius: 40%;
  border:.01rem solid grey;

  & img {
    height:90%;
    width:90%;
    border-radius: 40%;
    object-fit: cover; /* Preserve aspect ratio and cover the container */
  }

  `