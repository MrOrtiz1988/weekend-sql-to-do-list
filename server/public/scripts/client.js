console.log('Hello JS');

$(document).ready(onReady);

function onReady() {
    console.log('Hello JQ');
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
    })
}