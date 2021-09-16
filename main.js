var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    var color = " ";
    var width = " ";

    var width=screen.width;
    nwidth = screen.width - 90;
    nheight = screen.height - 300;

    if(width < 992){
        document.getElementById("paint").width= nwidth;
        document.getElementById("paint").height= nheight;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        color = document.getElementById("color");
        width = document.getElementById("width");
        console.log("my_touchstart");
        last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y= e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    
    function my_touchmove(e)
    {
        console.log("my_touchstart");
        current_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_y= e.touches[0].clientY - canvas.offsetTop;

       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = width;
       ctx.moveTo(last_position_of_x, last_position_of_y);
       ctx.lineTo(current_position_of_x, current_position_of_y);
       ctx.stroke();
       

       console.log("Last position of x and y coordinates = ");
       console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
       

       console.log("Current position of x and y coordinates = ");
       console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
       
       

       last_position_of_x = current_position_of_x; 
       last_position_of_y = current_position_of_y;
    }
      
