function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("ground/1.jpg")) {
        Image_Id.src = "ground/2.jpg";
        document.querySelector(".images").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image2").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    
    else if (Image_Id.src.match("ground/2.jpg")) {
        Image_Id.src = "ground/3.jpg";
        document.querySelector("#image2").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image3").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/3.jpg")) {
        Image_Id.src = "ground/4.jpg";
        document.querySelector("#image3").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image4").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/4.jpg")) {
        Image_Id.src = "ground/5.jpg";
        document.querySelector("#image4").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image5").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/5.jpg")) {
        Image_Id.src = "ground/6.jpg";
        document.querySelector("#image5").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image6").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/6.jpg")) {
        Image_Id.src = "ground/7.jpg";
        document.querySelector("#image6").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image7").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/7.jpg")) {
        Image_Id.src = "ground/8.jpg";
        document.querySelector("#image7").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image8").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/8.jpg")) {
        Image_Id.src = "ground/9.jpg";
        document.querySelector("#image8").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image9").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/9.jpg")) {
        Image_Id.src = "ground/10.jpg";
        document.querySelector("#image9").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image10").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/10.jpg")) {
        Image_Id.src = "ground/11.jpg";
        document.querySelector("#image10").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image11").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/11.jpg")) {
        Image_Id.src = "ground/12.jpg";
        document.querySelector("#image11").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image12").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/12.jpg")) {
        Image_Id.src = "ground/13.jpg";
        document.querySelector("#image12").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image13").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    else if (Image_Id.src.match("ground/13.jpg")) {
        Image_Id.src = "ground/14.jpg";
        document.querySelector("#image13").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image14").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    
}     