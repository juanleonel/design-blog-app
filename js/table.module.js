const TABLE = (() => {
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');
  
  const createTable = function() {
    const tbl = document.createElement('table');
    const tblBody = document.createElement('tbody');

    return tbl;
  }

  const appendHead = function(...head) {
    const row = document.createElement('tr');
    for (const object of head) {
      const head = document.createElement('th');
      const cellText = document.createTextNode(`${object}`);
      head.appendChild(cellText);
      row.appendChild(head);
    }
    tblBody.appendChild(row);
  }

  const appendRow = function(data) {
    const row = document.createElement('tr');
    for (const key in data) {
      const cell = document.createElement('td');
      // cell.setAttribute(`data-${_data}`, _data);
      const cellText = document.createTextNode(`${data[key]}`);
      cell.appendChild(cellText);

      const button = document.createElement('button');
      cell.appendChild(button);
      row.dataset[key] = data[key];
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  const build = function() {
    tbl.appendChild(tblBody);
  }

  const print = function() {
    console.log(tbl);
  }

  const mainProperties = function(properties) {
    for (let key in properties) {
      tbl.setAttribute(key, properties[key]);
    }
  }

  const getTable = function() {
    return tbl;
  }

  const clean = function() {
    tbl = null;
    tblBody = null;
  }

  const remove = function() {

  }

  return {
    appendHead,
    appendRow,
    build,
    print,
    getTable,
    mainProperties,
    clean
  }
})();
