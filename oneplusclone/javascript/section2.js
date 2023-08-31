window.addEventListener("scroll",pwr);
function pwr()
{
    console.log("hello");
    y=window.pageYOffset;
    if(y>50)
    {
        let c = document.querySelector(".section2");
        c.classList.add("section22");
    }
}