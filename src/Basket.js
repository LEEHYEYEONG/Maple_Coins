import styled from "styled-components";
import BasketItem from "./BasketItem";

const Box6 = styled.div`
  display: float;
`;

const Box7 = styled.div`
  background-color: white;
  width: 1200px;
  height: 300px;
  margin-top: 20px;
  margin-left: 25px;
  margin-bottom: 30px;
  border-radius: 7px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Box8 = styled.div`
  background-color: white;
  width: 500px;
  height: 300px;
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
  border-radius: 7px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  span {
    font-size: 25px;
  }

`;
const Title1 = styled.div`
  span {
    display: block;
    margin-top: 30px;
    margin-left: 30px;
    font-size: 30px;
  }
`;

function Basket() {
  return(
    <div>
      <Title1><span>장바구니🛒</span></Title1>
      <Box6>
        <Box7>
          
        </Box7>
        <Box8>
          <span>코디 주요일정</span>
        </Box8>
      </Box6>      
    </div>
  )
}

export default Basket;