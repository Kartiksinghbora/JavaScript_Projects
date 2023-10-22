function change()
{
    let x=document.getElementById("num").value;
    if(x == "red")
    {
        document.getElementById("bd").setAttribute("style","background-color:red");
        document.getElementById("one").setAttribute("style","color:black");
        document.getElementById("two").setAttribute("style","color:black");
    }
    else if(x == "green")
    {
        document.getElementById("bd").setAttribute("style","background-color:green");
        document.getElementById("one").setAttribute("style","color:black");
        document.getElementById("two").setAttribute("style","color:black");
    }
    else if(x == "blue")
    {
        document.getElementById("bd").setAttribute("style","background-color:blue");
        document.getElementById("one").setAttribute("style","color:black");
        document.getElementById("two").setAttribute("style","color:black");
    }
    else if(x == "black")
    {
        document.getElementById("bd").setAttribute("style","background-color:black");
        document.getElementById("one").setAttribute("style","color:white");
        document.getElementById("two").setAttribute("style","color:white");
    }
    else if(x == "auto")
    {
        document.getElementById("bd").setAttribute("style","background-color:white");
        document.getElementById("one").setAttribute("style","color:black");
        document.getElementById("two").setAttribute("style","color:black");
    }
}

function conv()
{
    let a=parseInt(document.getElementById("cel").value);
    let b=document.getElementById("box1").value;
    let x=document.getElementById("fah").value;
    let y=document.getElementById("box2").value;
    if(b=="c" && y=="f")
    {
    let x = a * (9/5) + 32;
    document.getElementById("fah").value=x;
    }
    else if(b=="c" && y=="k")
    {
        let x=  a + 273.15;
        document.getElementById("fah").value=x;
    }
    else if(b=="c" && y=="c")
    {
        let x=  a;
        document.getElementById("fah").value=x;
    }
    else if(b=="f" && y=="c")
    {
        let x= (5/9)*(a-32);
        document.getElementById("fah").value=x;
    }
    else if(b=="f" && y=="k")
    {
        let x= (5/9)*(a+459.67);
        document.getElementById("fah").value=x;
    }
    else if(b=="f" && y=="f")
    {
        let x= a;
        document.getElementById("fah").value=x;
    }
    else if(b=="k" && y=="c")
    {
        let x=  a - 273.15;
        document.getElementById("fah").value=x;
    }
    else if(b=="k" && y=="f")
    {
        let x=  9/5*(a - 273) + 32;
        document.getElementById("fah").value=x;
    }
    else if(b=="k" && y=="k")
    {
        let x=  a;
        document.getElementById("fah").value=x;
    }
    
}