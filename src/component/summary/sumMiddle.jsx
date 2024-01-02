import styled from "styled-components";
import imagei1 from "../../assets/i1.jpg"
import imagei2 from "../../assets/i2.jpg";
import imagei3 from "../../assets/i3.jpg";
import imagei4 from "../../assets/i4.jpg";
import imagei5 from "../../assets/i5.jpg";

function AboutUserMiddle() {
  return (
    <AboutContainerMiddle>
      <Imagecontainer>
        <img src={imagei1} className="mainimage" />
        <ImageAbsoluteRight>
          <img src={imagei2} />
        </ImageAbsoluteRight>
        <ImageAbsoluteLeft>
          <img src={imagei3} />
        </ImageAbsoluteLeft>
        <ImageAbsoluteBottomMid>
          <img src={imagei4} />
        </ImageAbsoluteBottomMid>
        <ImageAbsoluteBottomRight>
          <img src={imagei5} />
        </ImageAbsoluteBottomRight>
      </Imagecontainer>
    </AboutContainerMiddle>
  );
}

export default AboutUserMiddle;

const AboutContainerMiddle = styled.div`
  display: column;
  flex: 2;
  padding: 10px 2rem;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  margin-left: 2rem;
`;

const Imagecontainer = styled.div`
  display: flex;
  align-items: center;
  height: 600px;
  width: 90%;
  justify-content: center;
  border-radius: 40%;
  border: 0.01rem solid grey;
  position: relative;

  & .mainimage {
    height: 90%;
    width: 90%;
    border-radius: 40%;
    object-fit: cover; /* Preserve aspect ratio and cover the container */
  }
`;

const ImageAbsoluteRight = styled.div`
  position: absolute;
  top: 0px;
  right: -30px;

  & img {
    width: 100px;
    heigt: 100px;
    border-radius: 20px;
  }
`;

const ImageAbsoluteLeft = styled.div`
  position: absolute;
  top: 10px;
  left: 0px;

  & img {
    width: 100px;
    heigt: 100px;
    border-radius: 20px;
  }
`;

const ImageAbsoluteBottomMid = styled.div`
  position: absolute;
  bottom: -70px;
  left: 0;
  & img {
    width: 100px;
    heigt: 150px;
    border-radius: 20px;
    object-fit: cover; /* Preserve aspect ratio and cover the container */
  }
`;

const ImageAbsoluteBottomRight = styled.div`
  position: absolute;
  bottom: -70px;
  right: 0;
  & img {
    width: 100px;
    heigt: 150px;
    border-radius: 20px;
    object-fit: cover; /* Preserve aspect ratio and cover the container */
  }
`;