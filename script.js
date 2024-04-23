
function submitForm() {
    var form = document.getElementById("form");
    var formData = new FormData(form);

    // Get the selected food items
    var foodItems = [];
    var checkboxes = document.getElementsByName("food");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            foodItems.push(checkbox.value);
        }
    });

    // Append the selected food items to the form data
    formData.append("food", foodItems.join(", "));

    // Extract form data
    var firstName = formData.get("firstName");
    var lastName = formData.get("lastName");
    var address = formData.get("address");
    var pinCode = formData.get("pinCode");
    var gender = formData.get("gender");
    var state = formData.get("state");
    var country = formData.get("country");
    var food = formData.get("food");

    // Add a new row to the table
    var table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var cells = [
        firstName,
        lastName,
        address,
        pinCode,
        gender,
        food,
        state,
        country
    ];
    cells.forEach(function(cellData) {
        var cell = newRow.insertCell();
        var text = document.createTextNode(cellData);
        cell.appendChild(text);
    });

    // Clear form fields
    form.reset();
}
