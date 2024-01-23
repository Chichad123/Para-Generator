// const words=document.querySelector("#nav-words>input");
// const gen=document.querySelector("#nav-gen>button");
// gen.onclick=func;
// const avan=document.querySelector("body>div");
// const textarea=document.getElementById("#randomtext");
// textarea.innerText="";
// function func(){
//     let val=Number(words.value);
//     console.log(typeof val);
//     if(val)
//     textarea.innerText=`${val}`;
    
// }
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    const words = document.querySelector("#nav-words>input");
    const gen = document.querySelector("#nav-gen>button");
    gen.onclick = Generate;
    
    const nav=document.querySelector('body>div');
    function get_word(n){
        let alpha="abcdefghijklmnopqrstuvwxyz";
        let word="";
        for(let i=0;i<n;i++)
        {
            word+=alpha[(Math.random()*25).toFixed(0)];
        }
        return word;
    }
    
    function Generate() {
        let val = Number(words.value);
        
        let text="";
        
        for(let i=0;i<val;i++)
        {
            text+=get_word((Math.random()*15).toFixed(0));
            text+=" ";
        }
        const randomtext=document.createElement('div');
        randomtext.setAttribute('id','randomtext');
        randomtext.innerText=`${text}`;
        nav.append(randomtext);
        
    }
});
