const s=document.querySelectorAll("#sec1 span");
const text1=document.querySelector("#text1");
const text2=document.querySelector("#text2");
const text=document.querySelectorAll(".text");
const tip_amt=document.querySelector("#tip_amt");
const tot_amt=document.querySelector("#tot_amt");

console.log("hello");
window.addEventListener("DOMContentLoaded",function(){
    s.forEach(sp=>{
        sp.style.display="none";
    })
})
var a=0;
text.forEach(t=>{
    t.addEventListener('input',function(){
        
        if(t.value===""){
        t.style.borderWidth="2px";
        t.style.borderColor="black";
        t.parentElement.firstElementChild.style.display="none";
        }
        if(t.value==="0"){
            t.style.borderColor="red";
            t.style.borderWidth="2px";
            t.parentElement.firstElementChild.style.display="block";
        }
        if(t.value>0){
            t.style.borderColor="green";
            t.style.borderWidth="2px";
            t.parentElement.firstElementChild.style.display="none"; 
            
        } 
        if(text2.value!="" && text1.value!="" && a!=0 ){
            amtCalc();
        }
        if(text1.value=="" || text2.value==""){
            let c=0;
            tip_amt.innerText=c.toFixed(2);
            tot_amt.innerText=c.toFixed(2);
        }  
    })
})

function amtCalc(){
    tip_a=(a/100*text1.value)/text2.value;
    total=(Number(text1.value)+tip_a*5)/Number(text2.value);
    tip_amt.innerText=tip_a.toFixed(2);
    tot_amt.innerText=total.toFixed(2);
}

//Tip percentage
const btns=document.querySelectorAll(".tip-btn");
const t_ip=document.querySelector(".tip-ip");
btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        btn_colors();
        t_ip.style.backgroundColor="hsl(185, 41%, 84%)";
        btn.style.backgroundColor="hsl(172, 67%, 45%)";
        a=btn.value;
        t_ip.value="";
        if(a!=0 && text2.value!=0)
            amtCalc();
    });
})

function btn_colors(){
    btns.forEach(bt=>{
            bt.style.backgroundColor="rgb(5, 49, 49)";
        })
}

t_ip.addEventListener("click",function(){
    btn_colors();
    t_ip.style.backgroundColor="hsl(172, 67%, 45%)"
})
t_ip.addEventListener('input',function(){
    if(t_ip.value!=""){
        a=t_ip.value;
        if(a!=0 && text2.value!=0)
            amtCalc();
    }
    else{
        a=0;
        tip_amt.innerText=a.toFixed(2);
        tot_amt.innerText=a.toFixed(2);
    }
});

//Reset button
const r=document.querySelector("#reset");
r.addEventListener("click",function(){
    text1.value="";
    text2.value="";
    btn_colors();
    a=0;
    tip_amt.innerText=a.toFixed(2);
    tot_amt.innerText=a.toFixed(2);
    text.forEach(t=>{
        t.style.borderColor="transparent";
    })
})