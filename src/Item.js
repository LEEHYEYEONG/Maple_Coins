import styled from "styled-components";
import { useState } from "react";
import Basket from "./Basket";
import BasketItem from "./BasketItem";

const Box1 = styled.div`
  display: float;
	float: left;
	justify-content: space-between;
	align-items: center;
	
`;

const Box2 = styled.div`
  background-color: #FFDBDB;
	width: 200px;
	height: 150px;
	margin-left: 32.5px;
  	margin-top: 50px;
	text-align: center;
	border-radius: 5px;
	span{
		line-height: 50px;
	}
	.title {
		font-size: 15px;
	}
	.coins {
		font-size: 13px;
	}
	.img {
		border-radius: 50px;
		box-shadow: 0 13px 27px -5px rgba(50, 50, 95, 0.25),
    	0 8px 16px -8px rgba(0, 0, 0, 0.5), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
		height:60px;
	}
	
`;

const Box3 = styled(Box2)`
  
`;

function Item() {
    const items1 =
      [
        {"id":1, "title":"메이플 모멘트리 의자", "coins":2000, "image":"img/item_1.png", "choice":false},
        {"id":2, "title":"엘리로이드 교환권", "coins":1500, "image":"img/item_23.png", "choice":false},
        {"id":3, "title":"리스로이드 교환권", "coins":1500, "image":"img/item_23.png", "choice":false},
        {"id":4, "title":"모멘트리 데미지 스킨(유닛)", "coins":1000, "image":"img/item_4.png", "choice":false}, ,
        {"id":5, "title":"메이플 모멘트리 의상 세트 상자", "coins":1200, "image":"img/item_5.png","choice":false },
  ];
	const items2 =
      [
        {"id":6, "title":"풍선 강아지 라이딩(영구) 교환권", "coins":700, "image":"img/item_6.png", "choice":false},
        {"id":7, "title":"봄가득 라이딩(영구) 교환권", "coins":700, "image":"img/item_7.png", "choice":false},
        {"id":8, "title":"선택형 데미지 스킨 상자", "coins":700, "image":"img/item_8.png", "choice":false},
        {"id":9, "title":"데미지 스킨 추출권", "coins":1500, "image":"img/item_9.png", "choice":false},
        {"id":10, "title":"의자 40칸 가방", "coins":500, "image":"img/item_10.png", "choice":false}
  ];
	//const [choice, setChoice] = useState(false);
	
	const addItem = props => e => {
		if(e.target.value === false)
		{
			//console.log("false");
			e.target.value = true;
		}
		else {
			//console.log("true");
			<BasketItem 
			choice = {e.target.value}
			title={props}
			/>
			e.target.value = false;	
		}
	}

    return(
      <div>
				<Box1>
					{items1.map((item) => (
						<Box2 value = {item.choice} onClick={e => addItem(item.title)(e)}>
							<span className="title">{item.title}</span>
							<br />
							<img className="img" src={item.image} alt={item.title} />
							<br />
							<span className="coins" > {item.coins}코인</span>
						</Box2>	
					))}
				</Box1>
				<Box1>
					{items2.map((item) => (
						<Box2 onClick={addItem}>
							<span className="title">{item.title}</span>
							<br />
							<img className="img" src={item.image} alt={item.title} />
							<br />
							<span className="coins">{item.coins}코인</span>
						</Box2>	
					))}
				</Box1>
      </div>
    )
  }
  
  export default Item;