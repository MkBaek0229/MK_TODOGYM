// 실제 내용들이 담길 공간(?)

import Record from "./Record.js";
import Title from "./Title.js";
import Workout from "./Workout.js";


export default function App({ $target }){
    const initData = ["벤치프레스", "스쿼트", "데드리프트"]

    const onSubmit = (text) => {
        const nextState = [...Recordtodo.state, text]
        
        Recordtodo.setState(nextState);
        console.log(Recordtodo.state)
    }



    new Title({$target});
    new Workout({$target , onSubmit});
    const Recordtodo = new Record({$target, initData});

}