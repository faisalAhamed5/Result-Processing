
function ResultDelete(ResultID) {
    $.ajax({
        url: '/Teacher/reviewResult30/' + ResultID + '/delete_json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ ResultID }),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res);
            $("#"+ResultID).remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}