console.log('Hello JS');

$(document).ready(onReady);

function onReady() {
    console.log('Hello JQ');
    $('#add-btn').on('click', addToList);
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
                <li>${item.task}: <button>Complete?</button></li>
                `);
            } else {
                $('#list-container').append(`
                <li>${item.task}: ${item.complete}</li>
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