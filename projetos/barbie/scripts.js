
let imagemAtual = 1;
const imagemFinal = 80;

window.onload = function(){
    for( ;imagemAtual < 5 ; imagemAtual++)
        proxImagem(imagemAtual)
}
window.onscroll = function(){
    let altura = document.body.scrollHeight;
    let scrollPoint = window.scrolly + window.innerHeight;
    if (scrollPoint >= altura){
        proxImagem( imagemAtual++ % max );
    }
}

function proxImagem( img ){
fetch(`img/${img}.jpg`)
    .then(resp => resp.blob())
    .then(blob => {
        const imageObjectURL = URL.createObjectURL(blob);
        console.log(imageObjectURL);
        const proxImgTag = document.createElement("img");
        proxImgTag.src = imageObjectURL;
        document.getElementById("placeholder").appendChild(proxImgTag);
    })
    setInterval(function(){
        proxImagem( imagemAtual++ % max);
    },2000);
    
}



