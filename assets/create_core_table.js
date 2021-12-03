let myTable = document.querySelector('#table');
let headers = ['Name', 'Age', 'Share Price', 'Shares', 'Value', 'Gain/Loss', 'Percent', 'Target', 'Annual Dividend'];
console.log(core.keys(1))

let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

core.forEach(emp => {
    let row = document.createElement('tr');
    Object.values(emp).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })
    table.appendChild(row);
});
myTable.appendChild(table);
;
