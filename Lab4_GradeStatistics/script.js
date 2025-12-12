let count = 0;

document.getElementById("submitBtn").addEventListener("click", play);

function play() {
    let math = Number(document.getElementById("Math").value);
    let eng = Number(document.getElementById("English").value);

    if (document.getElementById("Math").value === "" ||
        document.getElementById("English").value === "") return;

    count++;

    let avg = ((math + eng) / 2).toFixed(2);

    let tbody = document.getElementById("tableBody");
    let row = document.createElement("tr");

    row.innerHTML =
        "<td>" + count + "</td>" +
        "<td>" + math + "</td>" +
        "<td>" + eng + "</td>" +
        "<td>" + avg + "</td>";

    tbody.appendChild(row);

    updateColumnAverages();
}

function updateColumnAverages() {
    let tbody = document.getElementById("tableBody");
    let rows = tbody.getElementsByTagName("tr");

    let mathSum = 0;
    let engSum = 0;
    let avgSum = 0;

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        mathSum += Number(cells[1].innerText);
        engSum += Number(cells[2].innerText);
        avgSum += Number(cells[3].innerText);
    }

    let total = rows.length;

    document.getElementById("avgMath").innerText = (mathSum / total).toFixed(2);
    document.getElementById("avgEng").innerText = (engSum / total).toFixed(2);
    document.getElementById("avgAll").innerText = (avgSum / total).toFixed(2);
}
