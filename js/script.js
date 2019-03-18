var nameInput = document.querySelector('#nameInput');
var dayInput = document.querySelector('#dayInput');
var monthInput = document.querySelector('#monthInput');
var yearInput = document.querySelector('#yearInput');

var i;
var month;

var listPrint = document.querySelector('.list');
var list = [];

function printList(){
    var new_li = document.createElement('li');
    var new_li_name = document.createElement('span');
    var new_li_date = document.createElement('small');

    for (i = 0; i < list.length; i++){
        new_li_name.innerHTML = list[i].name.toUpperCase();
        new_li_date.innerHTML = list[i].date;
        listPrint.appendChild(new_li);
        new_li.setAttribute("class", "person" + (i+1));
        new_li.appendChild(new_li_name);
        new_li.appendChild(new_li_date);
        if(list[i].gender == "Male") {
            new_li.setAttribute("class", "male");
        } else if (list[i].gender == "Female") {
            new_li.setAttribute("class", "female");
        } else {
            new_li.setAttribute("class", "other");
        }
        console.log(new_li.getAttribute('class'));
    }
    console.log(list);
};

var submitButton = document.querySelector('#submitButton');
submitButton.addEventListener("click", addItem);

var index = 0;
function addItem() {
    month = monthRewrite();
    var gender = document.querySelector('input[name="gender"]:checked').value;
    list.push({name: nameInput.value, date: dayInput.value + "/" + month + "/" + yearInput.value, gender});
    printList();
};

function monthRewrite() {
    month = monthInput.value;
    switch (month) {
        case "January": return "01";
        case "February": return "02";
        case "March": return "03";
        case "April": return "04";
        case "May": return "05";
        case "June": return "06";
        case "July": return "07";
        case "August": return "08";
        case "September": return "09";
        case "October": return "10";
        case "November": return "11";
        default: return "12";
    };
}