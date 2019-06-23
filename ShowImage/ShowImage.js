function start() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var image = new Image();
    image.onload = function() {
        context.drawImage(image,0,0);
    }
    image.src = 'Image.png';
}