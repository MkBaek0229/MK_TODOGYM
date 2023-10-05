export default function Record({$target , initData}){
    const $record = document.createElement("div")
    
    $target.appendChild($record);
    
    this.state = initData;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        $record.innerHTML = `
        <ul>
            ${this.state.map(todo => `<li>${todo}</li>`).join("")}
        </ul>
        <button id = "clearwork">완료</button>
        `
    }
    this.render();
}