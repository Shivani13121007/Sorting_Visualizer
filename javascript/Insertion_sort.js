function Insertion_sort() {
    count = 0;

    if (s == "0") {
        for (var j = 0; j < limit; j++) {
            div_update(divs[j], heights[j], "yellow");//Color update

            var key = heights[j];
            var i = j - 1;
            while (i >= 0 && heights[i] > key) {
                div_update(divs[i], heights[i], "red");//Color update
                div_update(divs[i + 1], heights[i + 1], "red");//Color update

                heights[i + 1] = heights[i];

                div_update(divs[i], heights[i], "red");//Height update
                div_update(divs[i + 1], heights[i + 1], "red");//Height update

                div_update(divs[i], heights[i], "blue");//Color update
                if (i == (j - 1)) {
                    div_update(divs[i + 1], heights[i + 1], "yellow");//Color update
                }
                else {
                    div_update(divs[i + 1], heights[i + 1], "blue");//Color update
                }
                i -= 1;
            }
            heights[i + 1] = key;

            for (var t = 0; t < j; t++) {
                div_update(divs[t], heights[t], "green");//Color update
            }
        }
        div_update(divs[j - 1], heights[j - 1], "green");//Color update
    }


    else {
        for (var j = 0; j < b; j++) {
            div_update(user_div[j], heightss[j], "yellow");//Color update

            var key = heightss[j];
            var i = j - 1;
            while (i >= 0 && heightss[i] > key) {
                div_update(user_div[i], heightss[i], "red");//Color update
                div_update(user_div[i + 1], heightss[i + 1], "red");//Color update

                heightss[i + 1] = heightss[i];

                div_update(user_div[i], heightss[i], "red");//Height update
                div_update(user_div[i + 1], heightss[i + 1], "red");//Height update

                div_update(user_div[i], heightss[i], "blue");//Color update
                if (i == (j - 1)) {
                    div_update(user_div[i + 1], heightss[i + 1], "yellow");//Color update
                }
                else {
                    div_update(user_div[i + 1], heightss[i + 1], "blue");//Color update
                }
                i -= 1;
            }
            heightss[i + 1] = key;

            for (var t = 0; t < j; t++) {
                div_update(user_div[t], heightss[t], "green");//Color update
            }
        }
        div_update(user_div[j - 1], heightss[j - 1], "green");//Color update
    }
}