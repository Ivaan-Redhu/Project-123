function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    }
    function modelLoaded() {
        console.log('PoseNet Is Intianalized!');
    }
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0 ].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
        }
    }

    function draw() {
        background('#6C91C2')

        textSize(difference);
        fill('#FFE787');
        text('Ivaan', 50, 400);
    }