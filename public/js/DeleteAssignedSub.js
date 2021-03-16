
function DeleteAssignedSub(assignId) {
    $.ajax({
        url: '/Admin/assignedSubjects/' + assignId + '/delete_json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ assignId}),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res);
            $("#"+assignId).remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}