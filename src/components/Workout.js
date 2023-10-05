// https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/checkbox
export default function Workout({ $target }){
    const $form = document.createElement("form")
    $target.appendChild($form)
    
    $form.innerHTML = `
                <ul>
                    <li><input type="checkbox" id="benchpress" name="benchpress"/>
                    <label for="scales">상체</label>
                    </li>
                    <li><input type="checkbox" id="pullup" name="pullup"/>
                    <label for="scales">하체</label>
                    </li>
                </ul>
                <button id="workstart" type="submit">시작하기</button>
    `
    $form.addEventListener("submit", e => {
        e.preventDefault();
        const text = e.target.value;
        console.log(text);


    })
            

}