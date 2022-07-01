$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function() {
        if (this.checked) {
            checkbox.each(function() {
                this.checked = true;
            });
        } else {
            checkbox.each(function() {
                this.checked = false;
            });
        }
    });
    checkbox.click(function() {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });
});


const addItem = document.getElementById('#addPropertyModal');
const addPropertyInput = document.getElementsByName('options[]');
let addProperty = [];


function addProperty(e) {
    if (e !== '') {
        const property = {
            id: Date().now,
            name: e,
            completed: false
        };
        property.push(room);
        addToLocalStorage(room)
        propertyInput.value = '';
    }
}