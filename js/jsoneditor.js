/*const apiHexSchool = axios.create({
    baseURL: `https://todayIwant.com/api/${uuid}`,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
    }
})

const getTags_backend = () => apiHexSchool.get('/admin/tags');

    getTags_backend()
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error));
    */

var json = [
    {
    "id": "256",
    "type": "消夜"
    }
]

function printJSON() {
    $('#json').val(JSON.stringify(json));

}

function updateJSON(data) {
    json = data;
    printJSON();
}

function showPath(path) {
    $('#path').text(path);
}

$(document).ready(function () {


    $('#json').change(function () {
        var val = $('#json').val();

        if (val) {
            try { json = JSON.parse(val); }
            catch (e) { alert('Error in parsing json. ' + e); }
        } else {
            json = {};
        }

        $('#editor').jsonEditor(json, { change: updateJSON, propertyclick: showPath });
    });

    $('#expander').click(function () {
        var editor = $('#editor');
        editor.toggleClass('expanded');
        $(this).text(editor.hasClass('expanded') ? 'Collapse' : 'Expand all');
    });

    printJSON();
    $('#editor').jsonEditor(json, { change: updateJSON, propertyclick: showPath });
});

//new transfer
function transfer() {
    const tags_backend = json => apiHexSchool.post('/admin/tags', json);

    tags_backend(data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
}