var audioGreen = new Audio("sounds/green.mp3");
var audioRed = new Audio("sounds/red.mp3");
var audioYellow = new Audio("sounds/yellow.mp3");
var audioBlue = new Audio("sounds/blue.mp3");

var storage = [];
var x = 1;


$(document).keypress(function (event) {
    console.log("Starting...");
    console.log(event.key)
    if (event.key === "a" || event.key === "A") {
        $("h1").text("Level " + x);
        randomNumber();
        button();
    }
    else if (event.key === "1") {
        audio(1);
        playing(1);
    }
    else if (event.key === "2") {
        audio(2);
        playing(2);
    }
    else if (event.key === "3"){
        audio(3);
        playing(3);
    }
    else if (event.key === "4"){
        audio(4);
        playing(4);
    }
    else {
        window.location.reload();
    }
});

function randomNumber() {

    var timeRandomNumber = 505 - (storage.length * 5);

    console.log("Start level " + x);
    var rand = Math.floor(Math.random() * 4 + 1);

    setTimeout(function () {
        audio(rand);
    }, timeRandomNumber);
    game(rand);
}

function audio(rand) {
    switch (rand) {
        case 1:
            $("#green").append(audioGreen.play());

            $("#green").addClass("pressed");
            setTimeout(function () {
                $("#green").removeClass("pressed");
            }, 150);

            break;
        case 2:
            $("#red").append(audioRed.play());

            $("#red").addClass("pressed");
            setTimeout(function () {
                $("#red").removeClass("pressed");
            }, 150);

            break;
        case 3:
            $("#yellow").append(audioYellow.play());

            $("#yellow").addClass("pressed");
            setTimeout(function () {
                $("#yellow").removeClass("pressed");
            }, 150);

            break;
        case 4:
            $("#blue").append(audioBlue.play());

            $("#blue").addClass("pressed");
            setTimeout(function () {
                $("#blue").removeClass("pressed");
            }, 150);

            break;
        default:
            console.log("Errorr!!" + rand);
            break;
    }
}

function button() {

    $("div.btn").click(function (e) {

        console.log(e);

        if (this.id === "green") {
            // console.error("Button 1");
            audio(1);
            playing(1);
        }
        else if (this.id === "red") {
            // console.error("Button 2");
            audio(2);
            playing(2);
        }
        else if (this.id === "yellow") {
            // console.error("Button 3");
            audio(3);
            playing(3);
        }
        else if (this.id === "blue") {
            // console.error("Button 4");
            audio(4);
            playing(4);
        }
        else {
            console.log(this.id);
        }
    })


}

function game(arr) {
    storage.push(arr);
    console.log("Hasil storage random : " + storage);
}

var p = 0;
ujian = true;

function playing(button) {

    // console.log("================================");

    // console.error("P = " + p);
    // console.log("Storage[p] : " + storage[p] + " Button : " + button);
    if (storage[p] === button) {
        p++;
        buatRandom();
    }
    else {
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 1000);

        // while (storage.length > 0) {
        //     storage.pop();
        // }
        // storage = [];
        // console.log(storage);

        // p = 0;
        // x = 1;

        // console.warn("Game Over, Press Any Key to Restart");
    }
}

function buatRandom() {
    if (p === storage.length) {

        ujian = true;
        x++;
        $("h1").text("Level " + x);

        randomNumber(x);
        p = 0;
        // console.warn("Ketika p dan storage length SAMA ");
    }
    else {
        // console.error("Ketika p dan storage length tidak sama");
        // ujian = true;
    }
}

// 127.0.0.1:5500

