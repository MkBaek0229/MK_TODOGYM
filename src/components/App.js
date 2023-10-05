// 실제 내용들이 담길 공간(?)

import Record from "./Record.js";
import Title from "./Title.js";
import Workout from "./Workout.js";


export default function App({ $target }){
    new Title({$target})
    new Workout({$target})
    new Record({$target})

}