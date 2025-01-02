let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let copyDiv = document.querySelector(".copycode")
let rgb1="#c13d74";
let rgb2 = "#8576c5"

const hexValues = ()=>{
    let hexCode = "0123456789abcdef";
    let result = "#";
    for(let i = 0; i<6; i++){
        result += hexCode[Math.floor(Math.random()*16)];
        
    };
    console.log(result);
    return result
    
}

const handleButton1 = ()=>{
    rgb1 = hexValues();
    document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1}, ${rgb2} )`;
    copyDiv.innerText = `background: linear-gradient(to right, ${rgb1},${rgb2} )`
    btn1.innerText=`${rgb1}`;
}

const handleButton2 = ()=>{
    rgb2 = hexValues();
    document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerText =`background: linear-gradient(to right, ${rgb1} ${rgb2} )`;
    btn2.innerText=`${rgb2}`;
}

copyDiv.addEventListener('click',()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
    alert('Text Copied');
})


btn1.addEventListener('click', ()=>{
    handleButton1();
    btn1.style.backgroundColor=`${rgb1}`;
});
btn2.addEventListener('click', ()=>{
    handleButton2();
    btn2.style.backgroundColor=`${rgb2}`;
});
