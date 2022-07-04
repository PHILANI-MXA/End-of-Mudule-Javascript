const propertyForm = document.querySelector('.property-form');

const propertyInput = document.querySelector('.property-input');

const propertyItemsList = document.querySelector('.property-items');

let properties = [];

propertyForm.addEventListener('submit', function(event) {

    event.preventDefault();
    addProperty(propertyInput.value);
});

function addProperty(item) {

    if (item !== '') {

        const property = {
            id: Date.now(),
            name: item,
            completed: false
        };

        properties.push(property);
        addToLocalStorage(properties);

        propertyInput.value = '';
    }
}

function renderProperties(properties) {

    propertyItemsList.innerHTML = '';

    properties.forEach(function(item) {
        const checked = item.completed ? 'checked' : null;
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        if (item.completed === true) {
            li.classList.add('checked');
        }
        li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
        propertyItemsList.append(li);
    });
}



function addToLocalStorage(properties) {
    localStorage.setItem('properties', JSON.stringify(properties));
    renderProperties(properties);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('properties');
    if (reference) {
        properties = JSON.parse(reference);
        renderProperties(properties);
    }
}

function toggle(id) {
    properties.forEach(function(item) {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(properties);
}

function deleteProperty(id) {
    properties = properties.filter(function(item) {
        return item.id != id;
    });
    addToLocalStorage(properties);
}
getFromLocalStorage();
propertyItemsList.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }
    if (event.target.classList.contains('delete-button')) {
        deleteProperty(event.target.parentElement.getAttribute('data-key'));
    }
});