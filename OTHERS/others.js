function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("others/2.jpg")) {
        Image_Id.src = "others/3.jpg";
        document.querySelector(".images").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image2").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    
    else if (Image_Id.src.match("others/3.jpg")) {
        Image_Id.src = "others/4.jpg";
        document.querySelector("#image2").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image3").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("others/4.jpg")) {
        Image_Id.src = "others/5.jpg";
        document.querySelector("#image3").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image4").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("others/5.jpg")) {
        Image_Id.src = "others/6.jpg";
        document.querySelector("#image4").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image5").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("others/6.jpg")) {
        Image_Id.src = "others/7.jpg";
        document.querySelector("#image5").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image6").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("others/7.jpg")) {
        Image_Id.src = "others/8.jpg";
        document.querySelector("#image6").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image7").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("others/8.jpg")) {
        Image_Id.src = "others/9.jpg";
        document.querySelector("#image7").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image8").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("others/9.jpg")) {
        Image_Id.src = "others/1.jpg";
        document.querySelector("#image8").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image9").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
   
}     
