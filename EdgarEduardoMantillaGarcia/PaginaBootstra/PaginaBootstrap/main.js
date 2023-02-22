var contador=0;
var btnShop = document.getElementById('btnShop');
var btnShopMenos = document.getElementById('btnShopMenos');
btnShop.onclick = function () {
    contador++;
    document.getElementById("cantidad").innerHTML =contador;
}

btnShopMenos.onclick = function () {
    if(contador !=0){
        contador--;
        document.getElementById("cantidad").innerHTML =contador;
    }
}


var btnImg1 = document.getElementById('img1');
var btnImg2 = document.getElementById('img2');
var btnImg3 = document.getElementById('img3');
var btnImg4 = document.getElementById('img4');
btnImg1.onclick = function(){
    var ImageShop = document.getElementById("imgShop");
    ImageShop.src = "/img/img2.jpeg";
}
btnImg2.onclick = function(){
    var ImageShop = document.getElementById("imgShop");
    ImageShop.src = "/img/img3.jpeg";
}
btnImg3.onclick = function(){
    var ImageShop = document.getElementById("imgShop");
    ImageShop.src = "/img/img4.jpeg";
}
btnImg4.onclick = function(){
    var ImageShop = document.getElementById("imgShop");
    ImageShop.src = "/img/modelo.jpg";
}

