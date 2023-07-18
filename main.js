function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 500);

    poseNet = ml5.poseNet(video, modelLoaded);

    function modelLoaded() {
        console.log('PoseNet Is Intianalized');
    }
}