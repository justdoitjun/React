import logo from './logo.svg';
import './App.css';
import Appclass from './component/Appclass'; // Appclass폴더 안에 있는 걸로 Appclass import시키고.
import Appclass2forTestYoucanassignvariancelikethis from './component/Appclass2'; //재미로 변수를 길게 설정해봄
//이렇게 한 이유가 뭐냐면, import 뒤에 나온 변수는 주소변수 즉 주소copy본이라는 걸 한번 인식해볼려고 이렇게 써봄. 

function App() {
  return (
    <div className="App">
      <Appclass address="Seoul" title="WhoAmI-Parent Node는 App.js에 있습니다."/> <br/>
      {/* 상위 부모 노드(App.js)에서 자식 노드(Appclass.js)로 prop해서 쓸 수 있음.  */} 
      <Appclass2forTestYoucanassignvariancelikethis address="NewYork"  title="State of mind - NEW YORK!!!"/>
    </div>
  );
}

export default App;
