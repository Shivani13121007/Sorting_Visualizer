

inp_speed.addEventListener("input", arr_speed);
speed = 1000;

function arr_speed() {
        var speed_value = inp_speed.value;
        switch (parseInt(speed_value)) {
                case 1: speed = 1;
                        break;
                case 2: speed = 10;
                        break;
                case 3: speed = 100;
                        break;
                case 4: speed = 1000;
                        break;
                case 5: speed = 10000;
                        break;
        }
        if (s == "0") {
                delay = 10000 / Math.floor((limit / 10) * speed);
        }
        else {
                delay = 10000 / Math.floor((b / 10) * speed);
        }
}

if (s == "0") {
        var delay = 10000 / Math.floor((limit / 10) * speed);
}
else {
        var delay = 10000 / Math.floor((b / 10) * speed);
}
// var delay = 10000/Math.floor((limit/10)*speed);
let count = 0;

function div_update(cont, lambai, color) {
        setTimeout(function () {
                if (s == "0") {
                        cont.style = "height:" + lambai + "%; width:" + (100 / limit) + "%; margin: 0% 0.1%; background:" + color + ";";
                }
                else {
                        cont.style = "height:" + lambai + "%; width:" + (100 / b) + "%; margin: 0% 0.1%; background:" + color + ";";
                }
        }, count += delay);

}






// 23,45,67,4,36,67,87,23,56,98,67,12,32,45,6
// 10,9,8,7,6,5,4,3,2,1,0