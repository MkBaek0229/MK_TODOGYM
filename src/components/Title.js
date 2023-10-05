// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B0%9D%EC%B2%B4-%EC%82%AC%EC%9A%A9%EB%B2%95
export default function Title({ $target }){
    const $title = document.createElement("div")
    $title.className = "Title"
    
    const IMG = new Image();
    IMG.src = "image/Title.jpg"
    
    IMG.addEventListener('load', function() {
        console.log('높이 : ', this.naturalHeight , '너비 : ', this.naturalWidth, "이미지 : ", this.src);	
    });

    $title.appendChild(IMG);
    
    $target.appendChild($title);
}