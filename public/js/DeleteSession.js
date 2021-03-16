function DeleteSession(sessionId) {
    $.ajax({
        url: '/createdSessions/' + sessionId + '/delete_json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ sessionId }),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res);
            $("#"+sessionId).remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}