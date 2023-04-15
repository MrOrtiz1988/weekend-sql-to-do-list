
$(document).ready(onReady);

function onReady() {
    $('#add-btn').on('click', addToList);
    $('#list-container').on('click', '#update-btn', updateToComplete);
    $('#list-container').on('click', '#delete-btn', deleteTask);
    renderList();
}

function renderList() {
    $.ajax({
        method: 'GET',
        url: '/todo'
    }).then(function (todoList) {
        $('#list-container').empty();
        for (let item of todoList) {
            if (item.complete === 'Not Complete') {
                $('#list-container').append(`
                <li data-id="${item.id}">
                ${item.task}: 
                <button id="update-btn">Complete?</button>
                <button id="delete-btn">Remove</button>
                </li>
                `);
            } else {
                $('#list-container').append(`
                <li data-id="${item.id}">
                ${item.task}: ${item.complete}
                <button id="delete-btn">Remove</button>
                </li>
                `);
            }

        }
    }).catch(function (error) {
        alert('something broke in renderList');
    })
}

function addToList(event) {
    event.preventDefault();

    let newTask = {
        task: $('#task-in').val(),
        complete: 'Not Complete'
    }

    $('#task-in').val('');

    $.ajax({
        method: 'POST',
        url: '/todo',
        data: newTask
    }).then(function (response) {
        renderList();
    }).catch(function (error) {
        alert('something broke in addToList');
    })
}

function updateToComplete() {
    let idToUpdate = $(this).parent().data('id');

    $.ajax({
        method: 'PUT',
        url: `/todo/${idToUpdate}`,
        data: {
            complete: 'Complete'
        }
    }).then(function (response) {
        renderList();
    }).catch(function (error) {
        console.log('updateToComplete fail:', error);
    })
}

function deleteTask() {
    let idToDelete = $(this).parent().data('id');

    $.ajax({
        method: 'DELETE',
        url: `/todo/${idToDelete}`
    }).then(function (response) {
        renderList();
    }).catch(function (error) {
        alert('something broke in deleteTask');
    })
}