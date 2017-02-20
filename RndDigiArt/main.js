var dimX, dimY = 0
var checkedCells = {}
var classes = ["red", "green"]

function makeart() {
    $('#artTable').empty()
    dimX = $('#dimX').val()
    dimY = $('#dimY').val()
    var rowId = ""
    for (var i = 0; i < dimY; i++) {
        rowId = "r" + i
        $('#artTable').append("<tr id='" + rowId + "'></tr>")
        for (var j = 0; j < dimX; j++) {
            var index = Math.round(Math.random())
            $('#' + rowId).append("<td class='" + classes[index] + "'></td>")
        }
    }
}