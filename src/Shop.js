import styled from "styled-components";
import { Switch,Route} from "react-router";
import { Link } from "react-router-dom";
import Item from "./Item";

const Tabs = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0px;
  gap: 10px;
`;

const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  padding: 7px 0px;
  border-radius: 10px;
  background-color: white;
  color: #333;
  a {
    display: block;
    text-decoration: none;
  }
`;

const Box3 = styled.div`
  display: float;
`;


const Box4 = styled.div`
  background-color: white;
  width: 1200px;
  height: 500px;
  margin-top: 20px;
  margin-left: 25px;
  border-radius: 7px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

`;

const Box5 = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
  margin-top: 320px;
  margin-left: 25px;
  text-align: center;
  border-radius: 7px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Title1 = styled.div`
  span {
    display: block;
    margin-top: 30px;
    margin-left: 30px;
    font-size: 30px;
  }
`;

const Title2 = styled.span`
  font-size: 50px;
`;

function Shop() {
  return(
    <div>
      <Title1><span>코인샵🪙 - 치장탭</span></Title1>
      <Box3>
        <Box4>
          <Tabs>
            <Tab>
              <Link to={`/item1`}>item1</Link>
            </Tab>
            <Tab>
              <Link to={`/item2`}>item2</Link>
            </Tab>
            <Tab>
              <Link to={`/item3`}>item3</Link>
            </Tab>
            <Tab>
              <Link to={`/item4`}>item4</Link>
            </Tab>
          </Tabs>
          <Switch>
            <Route path={`/item1`}>
              <Item />
            </Route>
            <Route path={`/item2`}>
              <Title2>아이템2</Title2>
            </Route>
            <Route path={`/item3`}>
              <Title2>아이템3</Title2>
            </Route>
            <Route path={`/item4`}>
              <Title2>아이템4</Title2>
            </Route>
          </Switch>
        </Box4>
        <Box5>
          <span>오늘의 추천템</span>
        </Box5>
      </Box3>    
    </div>
  )
}

export default Shop;