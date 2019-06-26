function start() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var image = new Image();
    image.onload = function () {
        context.drawImage(image, 0, 0);
        var imageData = context.getImageData(0, 0, image.width, image.height);
        var width = 4 * imageData.width;
        var height = 100;
        for (var i = 0; i < width * height; i += 4) {
            imageData.data[i + 0] = 0;
            imageData.data[i + 1] = 255;
            imageData.data[i + 2] = 255;
            imageData.data[i + 3] = imageData.data[i + 3];
        }
        context.putImageData(imageData, 0, 0);
    }
    image.src = "../../images/Image.png";
}