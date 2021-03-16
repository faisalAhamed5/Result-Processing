
function deleteChairman(ID) {
    $.ajax({
        url: '/Admin/showChairmans/' + ID + '/delete_json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ ID }),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res);
            $("#"+ID).remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}