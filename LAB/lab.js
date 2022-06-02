
function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("lab/1.jpg")) {
        Image_Id.src = "lab/2.jpg";
        document.querySelector(".images").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image2").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    // else {
    //     Image_Id.src = "lab/1.jpg";
    // }
    else if (Image_Id.src.match("lab/2.jpg")) {
        Image_Id.src = "lab/3.jpg"; 
        document.querySelector("#image2").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image3").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
        
    }
    else if (Image_Id.src.match("lab/3.jpg")) {
        Image_Id.src = "lab/4.jpg";
        document.querySelector("#image3").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image4").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("lab/4.jpg")) {
        Image_Id.src = "lab/5.jpg";
        document.querySelector("#image4").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image5").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("lab/5.jpg")) {
        Image_Id.src = "lab/6.jpg";
        document.querySelector("#image5").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image6").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("lab/6.jpg")) {
        Image_Id.src = "lab/7.jpg";
        document.querySelector("#image6").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image7").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("lab/7.jpg")) {
        Image_Id.src = "lab/8.jpg";
        document.querySelector("#image7").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image8").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("lab/8.jpg")) {
        Image_Id.src = "lab/9.jpg";
        document.querySelector("#image8").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image9").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
}     

// $(document).ready(function() {
//     $("#cf_onclick").click(function() {
//     $("#cf2 lab/2.jpg").toggleClass("transparent");
//   });
//   });
