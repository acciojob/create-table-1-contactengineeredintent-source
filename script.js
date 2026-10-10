let body = document.getElementById("tableBody");
function insert_Row() {
  let row = document.createElement("tr");
  let col1 = document.createElement("td");
  col1.textContent = "New Cell1";
  let col2 = document.createElement("td");
  col2.textContent = "New Cell2"
  row.appendChild(col1);
  row.appendChild(col2);
  body.prepend(row);
}
