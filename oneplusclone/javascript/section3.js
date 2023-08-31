window.addEventListener("scroll",pwr1);
function pwr1()
{
    console.log("hello");
    y=window.pageYOffset;
    if(y>200)
    {
        let d = document.querySelector(".section3");
        d.classList.add("section33");
    }
}