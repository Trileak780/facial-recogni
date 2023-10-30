//Code for the results
//<h3>The model thinks this is a <span id="result"></span></h3><h3>It is <span id="accurate"></span>% accurate</h3>
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById('camera');
Webcam.attach('#camera');

function snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById('result').innerHTML = "<img id='snappedshot' src='"+data_uri+"/>";
    });
}