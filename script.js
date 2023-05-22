
const addLine = () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const table = document.getElementById("data-table");

    const row = table.insertRow();
    row.setAttribute("id", "row-" + table.rows.length);

    const cell1 = row.insertCell();
    const input1 = document.createElement("input");
    input1.value = name;
    input1.setAttribute("id", "name-" + (table.rows.length));
    cell1.appendChild(input1);

    const cell2 = row.insertCell();
    const input2 = document.createElement("input");
    input2.setAttribute("id", "surname-" + (table.rows.length));
    input2.value = surname;
    cell2.appendChild(input2);

    const cell3 = row.insertCell();
    const input3 = document.createElement("input");
    input3.setAttribute("id", "email-" + (table.rows.length));
    input3.value = email;
    cell3.appendChild(input3);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    const cell4 = row.insertCell();
    cell4.classList.add("button-cell");
    cell4.appendChild(deleteButton);
    deleteButton.setAttribute("id", "delete-cell-" + table.rows.length);

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
}

const queryEmail = () => {
    const searchEmail = document.getElementById("searchEmail").value;
    const table = document.getElementById("data-table");
    const numRows = table.rows.length;
    for (let i = 0; i < numRows; i++) {
        const emailCellId = "email-" + i;
        const emailCell = table.querySelector("#" + emailCellId);
        if (emailCell.value === searchEmail) {
            console.log("Email trovata nella riga " + (i + 1));
            return;
        }
    }
    console.log("Email non trovata nella tabella.");
}
document.getElementById("searchButton").addEventListener("click",queryEmail);


const deleteRow = (buttonId) => {
    var rowId = buttonId.split("-")[2];
    var table = document.getElementById("data-table");
    var row = document.getElementById("row-" + rowId);
    if (row) {
        table.deleteRow(row.rowIndex);
    }
}
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


document.getElementById("submit").addEventListener("click", ()=>{
    var email = document.getElementById("email").value;
    var surname = document.getElementById("surname").value.trim();
    var name = document.getElementById("name").value.trim();
    if(name.length === 0){
        document.getElementById("error-name").innerHTML = "Inserisci un Nome.";
    }
    if(surname.length === 0){
        document.getElementById("error-surname").innerHTML = "Inserisci un Cognome.";
    }
    if(validateEmail(email)){
        addLine();
    } else {
        document.getElementById("error-email").innerHTML = "Inserisci un indirizzo email valido.";
    }
});


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        deleteRow(event.target.id);
    }
});




