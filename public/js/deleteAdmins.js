
function deleteAdmins(userID) {
    $.ajax({
        url: '/showAdmins/' + userID + '/delete_json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ userID }),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res);
            $("#"+userID).remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}