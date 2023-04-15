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
    }).then(function (response) {
        console.log(response);
    })
}