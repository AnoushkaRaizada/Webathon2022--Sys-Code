function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("auditorium/1.jpg")) {
        Image_Id.src = "auditorium/2.jpg";
        document.querySelector(".images").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image2").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }
    
    else if (Image_Id.src.match("auditorium/2.jpg")) {
        Image_Id.src = "auditorium/audi.png";
        document.querySelector("#image2").style = "display: none; animation: fadeOut 2s forwards;"
        document.querySelector("#image3").style = "display: block; animation: fadeIn 2s forwards; margin-left: 12%;"
    }

}

