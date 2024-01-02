import styled from 'styled-components';
import TopNavigationBar from './component/topnavbar';
import AboutUserLeft from './component/summary/sumleft';
import AboutUserMiddle from './component/summary/sumMiddle';
import AboutUserRight from './component/summary/sumRight';
import './App.css'

function App() {

  return (
    <div>
      <TopNavigationBar />
      <UserIntroText>
        <h1>
          Blessing Alegbe <br />UI/UX Interaction Designer <br /> Based In Nigeria, Lagos
        </h1>
      </UserIntroText>
      <SmallScreenImage className='fade-in'>
        <AboutUserMiddle />
      </SmallScreenImage>
      <AboutUserSummary>

        <AboutUserLeft />
        <UserImageMidContainer className='fade-in'>
        <AboutUserMiddle />
        </UserImageMidContainer>
        <AboutUserRight />
      </AboutUserSummary>

      {/* the bottom  */}
    </div>
  );
}

export default App;

const UserIntroText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 30px;
    font-weight: 300;
    text-align: center;
    line-height: 2.5rem;
  }
`;

const AboutUserSummary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  margin-top: 29px;
  margin-bottom: 29px;
  border-bottom: 0.03rem solid grey;
`;

const SmallScreenImage = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
width:100%;

  @media only screen and (max-width: 778px) {
    display: flex;
    flex-direction: column;
    align-items:center;
    width:100%;
    margin:.3rem auto;

  }
`;

const UserImageMidContainer = styled.div`
display:flex;

 @media only screen and (max-width: 810px) {
   
   display: none;
   flex: 0;

}
`