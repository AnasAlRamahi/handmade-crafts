
var userName = prompt("what's your name?");
document.write('<h5 style="font-family: Verdana;color:white;"><bold>'+ "Welcome "+ userName + " to the website" +'</bold>   </h5>');

console.log(userName);  

var product = prompt("What handmade craft are you looking for?","lamp, vase, cup");
if(product == "lamp"){
    document.write('<img src="https://www.craftmaestros.com/pub/media/webp_image/catalog/product/cache/b7ebb019fed2aabc6eec2e1fa24728e0/d/s/dsc02597.webp">');
}else if(product == "vase"){
    document.write('<img src="https://www.craftmaestros.com/pub/media/webp_image/catalog/product/cache/b7ebb019fed2aabc6eec2e1fa24728e0/i/m/img_0712.webp">');
}else if(product == "cup"){
    document.write('<img src="https://www.craftmaestros.com/pub/media/webp_image/wysiwyg/3.webp">');
}else
    document.write('<img src="https://www.picklee.com/wp-content/uploads/2018/04/beautiful-homemade-craft-ideas.jpeg">')
{
};

var headerColor = confirm("Would you like to change the background color? /nPress OK if you accept");
var body = document.getElementById("demo");   // Get the element with id="demo"
if (headerColor == true){
    body.style.backgroundColor = "rgb(238, 59, 95)";    
}





























































