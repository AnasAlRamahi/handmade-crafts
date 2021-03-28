


var userName = prompt("what's your name?");
document.write('<h5 style="font-family: Verdana;color:white;"><bold>'+ "Welcome "+ userName + " to the website" +'</bold>   </h5>');

console.log(userName);  

var product = prompt("What handmade craft are you looking for?","lamp, vase, cup");
var productCount = prompt("How many copies of the product you want to request?");
var productImage = "";
for (var i = 0; i < productCount; i++){
    if (product == "lamp"){
        document.write('<h3>' + 'Copy #' + (i+1) + '</h3>');
        productImage = '<img src="https://www.craftmaestros.com/pub/media/webp_image/catalog/product/cache/b7ebb019fed2aabc6eec2e1fa24728e0/d/s/dsc02597.webp">';
        document.write(productImage);
}else if(product == "vase"){
        document.write('<h3>' + 'Copy #' + (i+1) + '</h3>');
        productImage = '<img src="https://www.craftmaestros.com/pub/media/webp_image/catalog/product/cache/b7ebb019fed2aabc6eec2e1fa24728e0/i/m/img_0712.webp">';
        document.write(productImage);
}else if(product == "cup"){
        document.write('<h3>' + 'Copy #' + (i+1) + '</h3>');
        productImage = '<img src=""https://www.craftmaestros.com/pub/media/webp_image/wysiwyg/3.webp">';
        document.write(productImage);
}else{
    productImage = "";
}
};



var headerColor = confirm("Would you like to change the background color? /nPress OK if you accept");
var body = document.getElementById("demo");   // Get the element with id="demo"
if (headerColor == true){
    body.style.backgroundColor = "rgb(238, 59, 95)";    
}


var userPassword = 'secret';
var passInput = prompt("Enter your password :");
while (passInput != userPassword){
    passInput = prompt("The password you entered was not correct, Try to enter it once more...")
}



























































