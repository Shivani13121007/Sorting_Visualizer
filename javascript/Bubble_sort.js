
function Bubble_sort() {
    count = 0;
    // var temp;
    if (s == "0") {

        for (var i = 0; i < limit - 1; i++) {

            for (var j = 0; j < (limit - 1 - i); j++) {
                div_update(divs[j], heights[j], "orange");
                if (heights[j] > heights[j + 1]) {

                    div_update(divs[j], heights[j], "red");
                    div_update(divs[j + 1], heights[j + 1], "red");

                    var temp = heights[j];
                    heights[j] = heights[j + 1];
                    heights[j + 1] = temp;

                    div_update(divs[j], heights[j], "red");
                    div_update(divs[j + 1], heights[j + 1], "red");
                }
                div_update(divs[j], heights[j], "blue");
            }
            div_update(divs[j], heights[j], "green");
        }
        div_update(divs[0], heights[0], "green");
    }

    else {

        for (var i = 0; i < b - 1; i++) {
            for (var j = 0; j < (b - 1 - i); j++) {
                div_update(user_div[j], heightss[j], "orange");
                if (heightss[j] > heightss[j + 1]) {

                    div_update(user_div[j], heightss[j], "red");
                    div_update(user_div[j + 1], heightss[j + 1], "red");

                    var temp = heightss[j];
                    heightss[j] = heightss[j + 1];
                    heightss[j + 1] = temp;

                    div_update(user_div[j], heightss[j], "red");
                    div_update(user_div[j + 1], heightss[j + 1], "red");
                }
                div_update(user_div[j], heightss[j], "blue");
            }
            div_update(user_div[j], heightss[j], "green");
        }
        div_update(user_div[0], heightss[0], "green");
    }

}

