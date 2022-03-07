/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/


let list = [
    "Avatar",
    "Transformers",
    "Tag",
    "Dog",
    "Grown ups"
];


for (x of list) {
    document.getElementById("list").innerText += `${x}\n`;
}


/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/


let songs = new Set(["I'm the one", "I'm Gonna Be", "Big Lie", "Big Blue", "Cloudy Skies"]);


for (x of songs) {
    document.getElementById("set1").innerText += `${x}\n`;
}


// add two more songs to the set then display in the set2 paragraph


songs.add("Favorite Song");
songs.add("Feeling You");


for (x of songs) {
    document.getElementById("set2").innerText += `${x}\n`;
}


/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/


let users = new Map([
    ["Vinnie", "test123@gmail.com"],
    ["George", "george@gmail.com"],
    ["Isabel", "izzy@yahoo.com"],
    ["Becca", "becca@gmail.com"],
    ["Roger", "roger123@gmail.com"]
]);


users.forEach(function(x, y) {
    document.getElementById("map1").innerText += `${y}'s email is ${x}\n`;
})


// add two new names and emails and display in map2 use the forEach() method


users.set("Angus", "angus1@gmail.com");
users.set("Aaron", "a@gmail.com");


users.forEach(function(x, y) {
    document.getElementById("map2").innerText += `${y}'s email is ${x}\n`;
})


// get and display the email of one person, display in map3


document.getElementById("map3").innerText = `${users.get("Isabel")}`;

