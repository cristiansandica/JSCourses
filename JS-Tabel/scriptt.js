window.onload = createRow();

function createRow() {
    var newTrElement = document.createElement("tr");
    newTrElement.classList.add('secondRow');
    var table = document.querySelector("table tbody");
    table.appendChild(newTrElement);
}

function chooseTD(clickedElement) {  //clickedElement = event.target elementul
    var tdElements = document.querySelectorAll("td");
    //  var table = document.querySelector("table");

    // if(clickedElement === table){
    //     return;
    if (clickedElement.tagName === 'TD') {

        if (clickedElement.style.backgroundColor === "blue") {
            changeTdPosition(clickedElement);

        } else {
            for (var i = 0; i < tdElements.length; i++) {
                tdElements[i].style.backgroundColor = "red";
            }
            clickedElement.style.backgroundColor = "blue";
        }
    }
}
function changeTdPosition(currentTD) {
    // logica de stergere respectiv adaugare td
    var tableTrs = document.querySelectorAll("table tbody tr");
    if (currentTD.parentNode.classList[0] === 'firstRow') {
        tableTrs[1].appendChild(currentTD);
    } else {
        tableTrs[0].appendChild(currentTD);
    }
    changeRow(tableTrs);
}

function buttonFunctionTd1(rowId) {
    var tableTrs = document.querySelectorAll("table tbody tr");
    if (tableTrs[rowId].children.length < 7)
        tableTrs[rowId].insertCell();
}

///////


