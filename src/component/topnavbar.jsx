import styled from 'styled-components';
import { FaTwitter, FaFacebook, FaFigma } from 'react-icons/fa';
import image1 from '../assets/i2.jpg'; // Import your image

function TopNavigationBar() {
   return (
      <NavigationBar>
         {/* <UserMenu>
            <span>Works</span>
            <span>Contact</span>
         </UserMenu> */}
         <ImageContainer>
            {/* Use the imported image here */}
            <img src={image1} alt="User" />
         </ImageContainer>
         <SocialMediaSection>
            <FaTwitter size={20} className='icons' color="#1DA1F2"  />
            <FaFacebook size={20} className='icons' color="#1877f2" />
            {/* <FaGithub size={20} className='icons' color="#4078c0" /> */}
            <FaFigma size={20} className='icons' color="#0ACF83" />
         </SocialMediaSection>
      </NavigationBar>
   );
}

export default TopNavigationBar;

const NavigationBar = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: .5rem 0.5rem;
   box-sizing: border-box;
`;

// const UserMenu = styled.div`
//    display: flex;
//    flex-direction: row;
//    align-items: center;
//    gap: .7rem;

//    & span {
//       color: #161515;
//       font-size: 18px;
//       font-weight: 500;
//       cursor: pointer;
//       &:hover {
//          color: grey;
//       }
//    }
// `;

const ImageContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 50px;
   width: 50px;
   border-radius: 50%;
   overflow: hidden; /* Ensure the image stays within the container */

   & img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Preserve aspect ratio and cover the container */
   }
`;

const SocialMediaSection = styled.div`
display:flex;
flex-direction:row;
gap:.5rem;

& .icons {

   &:hover {
   cursor:pointer;
      color:grey;
   }
}
`