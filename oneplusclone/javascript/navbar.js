document.querySelector(".item11").addEventListener("mouseenter",f1);
function f1(){
    console.log("hello");
    document.querySelector(".phone").style.cssText=`visibility: visible;`
}
document.querySelector(".bar1").addEventListener("mouseover",f14);
function f14(){
    console.log("hello3");
    document.querySelector(".phone").style.cssText=`visibility: hidden;`
}
document.querySelector(".navbar1").addEventListener("mouseleave",f2);
function f2(){
    console.log("hello2");
    document.querySelector(".phone").style.cssText=`visibility: hidden;`
}



// document.querySelector(".phone").addEventListener("mouseenter",f2);
// function f2(){
//     console.log("hello1");
//     document.querySelector(".phone").style.cssText=`visibility: visible;`
// }


document.querySelector(".item2").addEventListener("mouseenter",f3);
function f3(){
    console.log("hello");
    document.querySelector(".phone1").style.cssText=`visibility: visible;`
}
document.querySelector(".navbar1").addEventListener("mouseleave",f4);
function f4(){
    console.log("hello2");
    document.querySelector(".phone1").style.cssText=`visibility: hidden;`
}
document.querySelector(".bar1").addEventListener("mouseover",f15);
function f15(){
    console.log("hello3");
    document.querySelector(".phone1").style.cssText=`visibility: hidden;`
}

document.querySelector(".item3").addEventListener("mouseenter",f5);
function f5(){
    console.log("hello");
    document.querySelector(".phone2").style.cssText=`visibility: visible;`
}
document.querySelector(".navbar1").addEventListener("mouseleave",f6);
function f6(){
    console.log("hello2");
    document.querySelector(".phone2").style.cssText=`visibility: hidden;`
}
document.querySelector(".bar1").addEventListener("mouseover",f16);
function f16(){
    console.log("hello3");
    document.querySelector(".phone2").style.cssText=`visibility: hidden;`
}

document.querySelector(".item4").addEventListener("mouseenter",f7);
function f7(){
    console.log("hello");
    document.querySelector(".phone3").style.cssText=`visibility: visible;`
}
document.querySelector(".navbar1").addEventListener("mouseleave",f8);
function f8(){
    console.log("hello2");
    document.querySelector(".phone3").style.cssText=`visibility: hidden;`
}
document.querySelector(".bar1").addEventListener("mouseover",f17);
function f17(){
    console.log("hello3");
    document.querySelector(".phone3").style.cssText=`visibility: hidden;`
}
document.querySelector(".item5").addEventListener("mouseenter",f9);
function f9(){
    console.log("hello");
    document.querySelector(".phone4").style.cssText=`visibility: visible;`
}
document.querySelector(".navbar1").addEventListener("mouseleave",f10);
function f10(){
    console.log("hello2");
    document.querySelector(".phone4").style.cssText=`visibility: hidden;`
}
document.querySelector(".bar1").addEventListener("mouseover",f18);
function f18(){
    console.log("hello3");
    document.querySelector(".phone4").style.cssText=`visibility: hidden;`
}
document.querySelector(".item6").addEventListener("mouseenter",f11);
function f11(){
    console.log("hello");
    document.querySelector(".phone5").style.cssText=`visibility: visible;`
}
document.querySelector(".navbar1").addEventListener("mouseleave",f12);
function f12(){
    console.log("hello2");
    document.querySelector(".phone5").style.cssText=`visibility: hidden;`
}
document.querySelector(".bar1").addEventListener("mouseover",f19);
function f19(){
    console.log("hello3");
    document.querySelector(".phone5").style.cssText=`visibility: hidden;`
}
window.onscroll = function(e) {
    let a = this.oldScroll > this.scrollY;
    console.log(a);
    if(!a)
    {
        // document.querySelector(".navbar1").style.visibility="hidden";
        setTimeout(function(){

            document.querySelector(".navbar1").style.display="none";
        },200);
        
    }
    if(a)
    {
        // document.querySelector(".navbar1").style.visibility="visible";
        document.querySelector(".navbar1").style.display="block";
    }
    this.oldScroll = this.scrollY;
  }
 document.querySelector(".icn1").addEventListener("click",show)
 function show(){
    let t= document.querySelector(".srch").style.cssText=`visibility: visible;`;
 }
 document.querySelector(".navbar1").addEventListener("mouseleave",show1);
function show1(){
    console.log("hello2");
    document.querySelector(".srch").style.cssText=`visibility: hidden;`
}
document.querySelector(".bar1").addEventListener("mouseover",show2);
function show2(){
    console.log("hello3");
    document.querySelector(".srch").style.cssText=`visibility: hidden;`
}
 const body = document.querySelector("body");
 function signshow()
 {
   let z = document.querySelector(".form");
   z.style.display="block";
   if(z.style.display==="block")
   {
       console.log("enter");
       // body.style.overflow="hidden";
    //    body.style.cssText=`pointer-events:none;overflow:hidden;`
       body.style.cssText=`pointer-events:none;`
       z.classList.add("container");
       
       
   }
 }
 function bar()
{
   let frm= document.querySelector(".form");
   frm.style.display="none";
    if(frm)
{
    console.log("out");
    // body.style.overflow="auto";
    // body.style.cssText=`pointer-events:auto;overflow:auto;`
    body.style.cssText=`pointer-events:auto;`
}
    
}

document.querySelector("#country").addEventListener("change",function (){
    j = 1;
   f1(this);
});
var j =1;
var arr=["x"];
function f1(e)
{
value = e.value;
id=e.id;
if(value)
{
   // console.log(value);
   for(i=0;i<j;i++)
   {
       var sa = document.querySelector(`#${value}`).style.display ="block";
   }
   arr.push(value);
   console.log(arr);
   j++;
}
let r =arr.shift();
console.log(arr , r); 
document.querySelector(`#${r}`).style.display="none";

}

document.querySelector(".icn2").addEventListener("click",cart);
function cart(){
    alert("Your cart is empty!!");
}