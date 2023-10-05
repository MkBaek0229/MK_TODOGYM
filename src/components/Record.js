export default function Record({$target}){
    const $record = document.createElement("h1")
    $record.textContent = "운동기록";
    $target.appendChild($record);
    
}