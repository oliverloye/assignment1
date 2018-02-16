var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);

function bothGenders() {
    var allGenders = boys.concat(girls);
    all = allGenders;
}



//Show all the boys & girls - Function has array and id as parameter
function showNames(array, id) {
    var list = array.map(function (name) {
        return "<li>" + name + "</li>";
    });
    document.getElementById(id).innerHTML = list.join("");
}

//Show all names in the all block
function showAllNames() {
    var allList = all.map(function (names) {
        return "<li>" + names + "</li>";
    });
    document.getElementById("allList").innerHTML = allList.join("");
}

//Add a boy to the array
function addBoy() {
    var newName = document.getElementById("newboy").value;
    if (isEmpty("newboy")) {
        boys.push(newName);
        showNames(boys, "boysList");
        bothGenders();
        showAllNames();
        clearMyField("newboy");
    }
}

//Add a girl to the array
function addGirl() {
    var newName = document.getElementById("newgirl").value;
    if (isEmpty("newgirl")) {
        girls.push(newName);
        showNames(girls, "girlsList");
        bothGenders();
        showAllNames();
        clearMyField("newgirl");
    }
}

//Cleans the text field after button click
function clearMyField(id) {
    document.getElementById(id).value = "";
}

//Checking input box for null/empty
function isEmpty(id) {
    if (document.getElementById(id).value === "") {
        alert("Please enter a name!");
        return false;
    }
    return true;
}

//Removes a boy or a girl from the array
//function removeBoy(id) {
//    if (document.getElementById(id) === "first") {
//        boys.shift();
//    } else if (document.getElementById(id) === "last") {
//        boys.pop();
//    }
//}

function removePerson(gender) {
    if (gender === "removeboy" && document.getElementById("first").checked) {
        boys.shift();
        showNames(boys, "boysList");
        bothGenders();
        showAllNames();
    }
    if (gender === "removeboy" && document.getElementById("last").checked) {
        boys.pop();
        showNames(boys, "boysList");
        bothGenders();
        showAllNames();
    }
    if (gender === "removegirl" && document.getElementById("first").checked) {
        girls.shift();
        showNames(girls, "girlsList");
        bothGenders();
        showAllNames();
    }
    if (gender === "removegirl" && document.getElementById("last").checked) {
        girls.pop();
        showNames(girls, "girlsList");
        bothGenders();
        showAllNames();
    }
    if ((!document.getElementById("first").checked) && (!document.getElementById("last").checked)) {
        alert("Please select order of removal.");
    }
}

//Sorts the array
function sortNames() {
              
     all.sort();
    //document.getElementById("all").innerHTML = all;
    bothGenders();
}
//Reverse the array
function reverseNames(){
   all.reverse();
    //document.getElementById("all").innerHTML = all;
    bothGenders();
    
}


showNames(boys, "boysList");
showNames(girls, "girlsList");
showAllNames();
//Show all the girls

