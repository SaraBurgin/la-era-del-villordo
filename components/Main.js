import styled from 'styled-components'

const MainContainer = styled.div`
  display: grid;
  padding: 10px;
  width: 100vw;
  height: 400px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5px;
  background-color: #e1d9c7;
  color: #ffffff;
  align-items: center; 
  justify-items: center;

  img {
    grid-column: 0 / 1;
    grid-row: 1 / 2;
  }
  .break-one{
    grid-column: 1 / 4;
    grid-row: 1 / 1;
    border: 5px solid #ffffff;
  }
  h1 {
    grid-column: 2 / 4;
    grid-row: 1 / 1;
  }
  
  p {
    grid-column: 2 / 4;
  }
  .break-two{
    border: 5px solid #ffffff;
  }
  `


const Main = () => (
    <>
    <MainContainer className="main-container">
          <img width="300px" src="/images/full_logo.png" alt="la era logo" class/>
          <br className="break-one"/>
            <h1>YOUR HOME AWAY FROM HOME</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          <br className="break-two"/>
    </MainContainer>
    </>
  );

export default Main;