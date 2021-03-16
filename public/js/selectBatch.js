
function selectBatch(batchID) {
    $.ajax({
        url: '/Teacher/uploadSupplyOrImprove/'+batchID+'/json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ batchID }),
        type: 'GET',
        success: ((res) => {
            console.log("Result: ", res);
            $("#Batch").remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}