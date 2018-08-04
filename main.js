'use strict';
var ul = document.querySelector(".list");

for (var i = 0; i < 100; i++) {
    var div = document.createElement("div");
    var newItem = document.createElement("p");
    var newContent = document.createTextNode("He aprendido bien cómo funcionan los bucles");

    div.append(newItem);
    newItem.appendChild(newContent);

}

