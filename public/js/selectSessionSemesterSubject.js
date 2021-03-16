
function selectSessionSemesterSubject(sessID,semID,subID) {
    $.ajax({
        url: '/Teacher/uploadResult/' + sessID +'/'+semID+'/'+subID,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ sessID ,semID,subID}),
        type: 'GET',
        success: ((students) => {
            console.log("Result: ", students);
            $("#buttons").remove();
            

        error: ((error) => {
            console.log("Error: ", error);
        })
    })
}