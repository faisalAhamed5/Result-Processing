
function upgradeStudent(semID,sem) {
    $.ajax({
        url: '/Admin/semesterUpgrade/' + semID + '/json/'+ sem,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ semID,sem }),
        type: 'POST',
        success: ((semesters) => {
            console.log("Result: ", semesters);
            $("#" + semID).remove();  
            
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}