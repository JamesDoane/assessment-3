
document.getElementById("random").addEventListener('click',()=>{
    let a = Math.floor(Math.random(1)*4)
    if(a===0){
        window.location="https://www.orederjoespizzapasta.com/";
    }
    else if(a===1){
        window.location="http://thepourshack.com/"
    }
    else if(a===2){
        window.location="http://www.thelocalwateringhole.com/home.html"
    }
    else{
        window.location ="https://www.chansmongoliangrill.com/"
    }
})