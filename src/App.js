import Shop from "./Shop";
import Basket from "./Basket";
import styled from "styled-components";

const Box1 = styled.div`
  background-color: white;
  text-align: center;
  position: relative;
`;

const Box2 = styled.div`
  background-color: white;
  span {
    font-size: 20px;
  }
`;

function App() {
 
  return (
    <div>
      <Box1>
        <Box2>
          <span>메이플 다용🍁</span>
        </Box2>
      </Box1>
      <Shop />
      <Basket />
    </div>
    
  );
}

export default App;
