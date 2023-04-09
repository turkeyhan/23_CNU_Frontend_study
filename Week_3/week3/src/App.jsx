import logo from './logo.svg';
//import './App.css';
import "./cnu.css";
//JSX Element
/*const h1 = <h1>123123</h1>;
console.log(h1);*/

/*
function FormSubmitButton() {
  return (
    <div>
			<label>
				<input type="checkbox" />
				<span>매달 요금이 자동 결제되는 것에 동의합니다.</span>
			</label>
			<button>결제하기</button>
		</div>
  );
}*/


function MyButton({disabled}){
  return (
    <button className="my-button">
      {disabled? "비활성화된 버튼" : "활성화된 버튼"}
    </button>
  );
}

/*
function FormSubmitButton({productName}) {
  const getUnitFrom = (productName) => {
    switch (productName){
      case "피자":
        return "판이";
      case "치킨":
        return "마리가";
      default:
        new Error("판매하지 않는 상품입니다");
    }
  };

  const unit = getUnitFrom(productName);

	return (
		<div>
			<label>
				<input type="checkbox" />
				<span>매월 1일에 {productName} 1 {unit}이 자동 결제되는 것에 동의합니다.</span>
			</label>
			<button>결제하기</button>
		</div>
	);
}*/

function App(){
  return (
  <div>
       <MyButton disabled={true}>123123</MyButton>
  </div>
  );
}


export default App;
