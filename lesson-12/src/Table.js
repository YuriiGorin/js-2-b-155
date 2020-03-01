export default class Table {
    constructor(options = {}) {
        this._data = [];
        this._tableClass = options.tableClass || "";
        this._openTableTag = options.openTableTag || `<table class="${this._tableClass}">`;
        this._closeTableTag = options.closeTableTag || "</table>";
        this._openRowTag = options.openRowTag || "<tr>";
        this._closeRowTag = options.closeRowTag || "</tr>";
        this._openCellTag = options.openCellTag || "<td>";
        this._closeCellTag = options.closeCellTag || "</td>";
        this._openHeadingTag = options.openHeadingTag || "<th>";
        this._closeHeadingTag = options.closeHeadingTag || "</th>";
    }

    addHeadingsRow(...args) {
        this._data.push({
            type: "headings",
            values: args
        });
        return this;
    }

    addRow(...args) {
        this._data.push({
            type: "data",
            values: args
        });
        return this;
    }

    generate() {
        let html = this._openTableTag;
        this._data.forEach(row => {
           html += this._openRowTag;
           row.values.forEach(cell => {
              if (row.type === "data") {
                  html += this._openCellTag + cell + this._closeCellTag;
              } else {
                  html += this._openHeadingTag + cell + this._closeHeadingTag;
              }

           });
           html += this._closeRowTag;
        });
        html += this._closeTableTag;
        return html;
    }

    filter(search = "") {
        const str = search.toLowerCase();
        const data = this._data.filter(row => row.values.some(cell => String(cell).toLowerCase().includes(str)));
        const table = new Table({
            tableClass: this._tableClass,
            openTableTag: this._openTableTag,
            closeTableTag: this._closeTableTag,
            openRowTag: this._openRowTag,
            closeRowTag: this._closeRowTag,
            openCellTag: this._openCellTag,
            closeCellTag: this._closeCellTag,
            openHeadingTag: this._openHeadingTag,
            closeHeadingTag: this._closeHeadingTag,
        });

        table._data = data;
        return table;
    }
}
