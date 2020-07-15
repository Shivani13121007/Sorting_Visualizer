let range = document.getElementById("range_input");
var limit = range.value;
let inp_speed = document.getElementById("speed");
let user_generate = document.getElementById("user_generate");

let random_arr_button = document.getElementById("random_arr_button");
let arr_container = document.getElementById("arr_container");
let user_arr = document.getElementById("user_arr");
var divs = [];
let heights = [];
let s;


random_arr_button.addEventListener("click", create_arr);
range.addEventListener("input", range_array);
user_generate.addEventListener("click", show_input_box);


function create_arr() {
    s = "0";
    arr_container.innerHTML = "";

    for (let i = 0; i < limit; i++) {
        heights[i] = Math.floor(Math.random() * 0.5 * (range.max - range.min)) + 10;
        divs[i] = document.createElement("div");
        arr_container.appendChild(divs[i]);
        divs[i].style = "height:" + heights[i] + "%; width:" + (100 / limit) + "%; margin: 0% 0.1%; background:blue;";
    }
};

function range_array() {
    limit = range.value;
    create_arr();
}

window.onload = range_array();


let cond = false;
let length_user_array = 0;
var input_array = [];
// let given_arr = document.getElementById("given_arr");
let x = 0;
let a;
let b;
let user_div = [];
let heightss = [];

function show_input_box() {

    if (!cond) {
        cond = true
        user_arr.classList.toggle("hidden");
        // given_arr.innerHTML = "";
        user_generate.innerHTML = "Enter"
    }
    else {
        s = "1";

        user_arr.classList.toggle("hidden");
        user_generate.innerHTML = "Want to enter your own array?";

        input_array.push(user_arr.value.split(","));
        a = input_array[x];
        // console.log(a);

        b = input_array[x].length;
        // console.log(100/b)
        // console.log(b)
        user_arr.value = "";

        cond = false;
        user_container()
        function user_container() {
            arr_container.innerHTML = "";
            for (let i = 0; i < b; i++) {
                user_div[i] = document.createElement("div");
                arr_container.appendChild(user_div[i]);
                heightss[i] = input_array[x][i] * 0.5;
                user_div[i].style = "height:" + heightss[i] + "%; width:" + (100 / b) + "%; margin: 0% 0.1%; background: blue;";
            }
        }
        x++;
    }


}



function sort(id) {
    switch (id) {
        case "bubble": Bubble_sort();
            break;
        case "selection": Selection_sort();
            break;
        case "insertion": Insertion_sort();
            break;
        // case "quick": Quick_sort();
        //     break;
        // case "merge": Merge_sort();
        //     break;
        // case "heap": Heap_sort();
        //     break;

    }
}



