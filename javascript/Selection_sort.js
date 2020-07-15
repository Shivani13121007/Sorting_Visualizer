

function Selection_sort() {
    count = 0;

    if (s == "0") {
        for (i = 0; i < limit - 1; i++) {
            var loc = i;
            div_update(divs[i], heights[i], "red");

            for (j = i + 1; j < limit; j++) {
                // div_update(divs[j], heights[j], "orange");
                if (heights[loc] > heights[j]) {
                    loc = j;
                    div_update(divs[i], heights[i], "red");
                    div_update(divs[loc], heights[loc], "red");
                }
                // else
                // div_update(divs[j], heights[j], "blue");


            }
            if (loc != i) {
                div_update(divs[i], heights[i], "red");
                div_update(divs[loc], heights[loc], "red");

                var temp = heights[i];
                heights[i] = heights[loc];
                heights[loc] = temp;

                div_update(divs[i], heights[i], "red");
                div_update(divs[loc], heights[loc], "red");

                div_update(divs[loc], heights[loc], "blue");
            }
            div_update(divs[i], heights[i], "green");
        }
        div_update(divs[i], heights[i], "green");
    }

    else {

        for (i = 0; i < b - 1; i++) {
            var loc = i;
            div_update(user_div[i], heightss[i], "red");

            for (j = i + 1; j < b; j++) {
                // div_update(divs[j], heights[j], "orange");
                if (heightss[loc] > heightss[j]) {
                    loc = j;
                    div_update(user_div[i], heightss[i], "red");
                    div_update(user_div[loc], heightss[loc], "red");
                }
                // else
                // div_update(divs[j], heights[j], "blue");


            }
            if (loc != i) {
                div_update(user_div[i], heightss[i], "red");
                div_update(user_div[loc], heightss[loc], "red");

                var temp = heightss[i];
                heightss[i] = heightss[loc];
                heightss[loc] = temp;

                div_update(user_div[i], heightss[i], "red");
                div_update(user_div[loc], heightss[loc], "red");

                div_update(user_div[loc], heightss[loc], "blue");
            }
            div_update(user_div[i], heightss[i], "green");
        }
        div_update(user_div[i], heightss[i], "green");
    }
}