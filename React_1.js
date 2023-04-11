import React, {Component} from 'react';

class Appclass extends Component {
    //생성자 props 와 state를 사용하고 싶으면 반드시 생성자를 써라. 
    //props - 부모 component로부터 자식 component에 값을 보내는 수단이다. 리액트는 단방향 소통방식이다.
    //      - 자식 component로부터 부모 component로 값을 보낼 수단은 없다.
    //      - 단방향 컴포너느.
    constructor(props)
    {
        super(props);   //최상위 부모클래스 호출 : 이 코드는 반드시 생성자의 맨 위에 있어야함. 
                                //이는 자바랑 동일하다.
        this.state = {name:"hong", age:23, phone:"010-1234-5678"};
        //state 객체는 모든 컴포넌트가 가지고 있다. 이 객체에 json형태로 state를 지정할 수도 있다. 
        // 개별 변수는 태그에서 사용 못한다.
    }
    render(){
        const nameOpted = this.state.name; //객체 json을 끄집어서 이렇게 가져올 수도 있으나...
        // 위처럼 하면 모든 변수들을 다 이렇게 붙여야하기 때문에 그게 귀찮아서 알아서 JSON 형태는 해체될 수 있도록 할 수 있다. 
        const {name, age, phone} = this.state; // this.state에는 위 9라인에서 json객체로 저장해두었으나..

        return (
            <div>
                {/* <h3>Name : {this.state.name}</h3> //이런식으로 할 수도 있지만... */}
                {/* // 위에서 해체작업을 해버렸다면 이렇게 할 수도 있다.  */}
                <h3>Name : {name} </h3>
                <h3>Age : {age}</h3>
                <h3>Phone : {phone}</h3>
            </div>
        );
    }
}

export default Appclass;
