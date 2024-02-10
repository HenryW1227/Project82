canvas = document.getElementById("canvas1")
ctx = canvas.getContext("2d")
var mouseEvent = ""
var lpx = 0
var lpy = 0

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    colour = document.getElementById("c1").value;
    width = document.getElementById("w1").value;
    radius = document.getElementById("r1").value;
    mouseEvent = "mousedown"
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup"
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    cpx = e.clientX-canvas.offsetLeft;
    cpy = e.clientY-canvas.offsetTop;
    if(mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(cpx,cpy,radius,0,360)
        ctx.stroke();
    }
    lpx = cpx;
    lpy = cpy;
}
function clear() 
{
    const context = canvas1.getContext('2d');
    context.clearRect(0, 0, canvas1.width, canvas1.height);
}