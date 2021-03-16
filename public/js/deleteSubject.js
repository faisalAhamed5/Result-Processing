function deleteSubject(subjectID) {
    $.ajax({
        url: '/Admin/Subjects/' + subjectID + '/delete_json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ subjectID }),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res);
            $("#"+subjectID).remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}