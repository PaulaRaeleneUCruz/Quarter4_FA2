function multTable() {
    var main = parseInt(document.getElementById("startNum").value);
    var last = parseInt(document.getElementById("endNum").value);

    if (isNaN(main) || isNaN(last) || main < 2 || main > 10 || last < 2 || last > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    var output = document.getElementById("output");
    output.innerHTML = "";

    var table = "<table style='border-collapse: collapse;'>";

    for (var row = 1; row <= main; row++) {
        table += "<tr>";
        for (var col = 1; col <= last; col++) {
            table += "<td style='border: 1px solid black; padding: 5px; text-align: center;'>" + (row * col) + "</td>";
        }
        table += "</tr>";
    }

    table += "</table>";
    output.innerHTML = table;
}

var generateTable = multTable;