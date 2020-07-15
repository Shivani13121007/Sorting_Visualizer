function Insertion_sort() {
    count = 0;

    if (s == "0") {
        for (var j = 0; j < limit; j++) {
            div_update(divs[j], heights[j], "yellow");

            var key = heights[j];
            var i = j - 1;
            while (i >= 0 && heights[i] > key) {
                div_update(divs[i], heights[i], "red");
                div_update(divs[i + 1], heights[i + 1], "red");

                heights[i + 1] = heights[i];

                div_update(divs[i], heights[i], "red");
                div_update(divs[i + 1], heights[i + 1], "red");

                div_update(divs[i], heights[i], "blue");
                if (i == (j - 1)) {
                    div_update(divs[i + 1], heights[i + 1], "yellow");
                }
                else {
                    div_update(divs[i + 1], heights[i + 1], "blue");
                }
                i -= 1;
            }
            heights[i + 1] = key;

            for (var t = 0; t < j; t++) {
                div_update(divs[t], heights[t], "green");
            }
        }
        div_update(divs[j - 1], heights[j - 1], "green");
    }


    else {
        for (var j = 0; j < b; j++) {
            div_update(user_div[j], heightss[j], "yellow");

            var key = heightss[j];
            var i = j - 1;
            while (i >= 0 && heightss[i] > key) {
                div_update(user_div[i], heightss[i], "red");
                div_update(user_div[i + 1], heightss[i + 1], "red");

                heightss[i + 1] = heightss[i];

                div_update(user_div[i], heightss[i], "red");
                div_update(user_div[i + 1], heightss[i + 1], "red");

                div_update(user_div[i], heightss[i], "blue");
                if (i == (j - 1)) {
                    div_update(user_div[i + 1], heightss[i + 1], "yellow");
                }
                else {
                    div_update(user_div[i + 1], heightss[i + 1], "blue");
                }
                i -= 1;
            }
            heightss[i + 1] = key;

            for (var t = 0; t < j; t++) {
                div_update(user_div[t], heightss[t], "green");
            }
        }
        div_update(user_div[j - 1], heightss[j - 1], "green");
    }
}