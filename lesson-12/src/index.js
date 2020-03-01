import Table from "./Table";

window.addEventListener("load", function () {

    const usersContainer = document.querySelector("#users");
    const example = document.querySelector("#example");
    const example2 = document.querySelector("#example-div");

    const users = new Table({
        tableClass: "table table-bordered table-hover"
    });

    users.addHeadingsRow("Имя", "Возраст", "Email")
        .addRow("Иван", 39, "ivan@yandex.ru")
        .addRow("Светлана", 19, "svetko@mail.ru")
        .addRow("Наталья", 23, "nataly@gmail.com");

    users.addHeadingsRow("Имя", "Возраст", "Email");
    users.addRow("Иван", 39, "ivan@yandex.ru");
    users.addRow("Светлана", 19, "svetko@mail.ru");
    users.addRow("Наталья", 23, "nataly@gmail.com");

    usersContainer.innerHTML = users.generate();

    // ----------------------------------------------------------------------------

    const table2 = new Table();
    table2.addHeadingsRow("Простая", "Таблица");
    table2.addRow("Какой-то текст", 234234234);
    table2.addRow("Еще что-нибудь", 898989);
    table2.addRow("И напоследок", 346587);
    example.innerHTML = table2.generate();
    table2.addRow("И напоследок", 346587);

    console.log(table2.filter("8").generate());

    // ----------------------------------------------------------------------------

    const table3 = new Table({
        openTableTag: '<div class="card card-default"><div class="card-body">',
        closeTableTag: '</div></div>',
        openRowTag: '<div class="d-flex">',
        closeRowTag: '</div>',
        openCellTag: '<div class="cell">',
        closeCellTag: '</div>',
        openHeadingTag: '<div class="cell cell--heading">',
        closeHeadingTag: '</div>'
    });

    table3.addHeadingsRow("Тестируем", "Таблицу", "Из блоков", "div");
    table3.addRow("vnvbnvbn", 456456, "fghfghfgh", 1234);
    table3.addRow("bvnvbnvbn", 2222, "ghjjje34", 66643);
    table3.addRow("dasdasda  sdfsdf", 5555, "ghghfgh", 7743);
    example2.innerHTML = table3.generate();

});
