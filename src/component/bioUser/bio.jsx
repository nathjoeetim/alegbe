import styled from "styled-components";

function UserBio() {
  return (
    <UserBioStyled>
      <h5>Biography</h5>
      <div>
        Work for money and design for love! <br /> I&apos;m Blessing Alegbe, a
        UI/UX designer based in Nigeria, Lagos
      </div>
    </UserBioStyled>
  );
}

export default UserBio

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
 text-transform: uppercase;}

& div{
  line-height: 2rem;
  font-size: 20;
}
`