
function submitCombinedResult(ID) {   
    $("#" + ID).on('submit', function (e) {
        var form = $("#" + ID);
        var data = $("#" + ID).serializeArray().reduce(function(obj, item) {
         obj[item.name] = item.value;
         return obj;
         }, {});
        
        e.preventDefault();
       
        $.ajax({
            url: form.attr("action"),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(data, null, ''),
            type: 'post',
            success: ((res) => {
                console.log("Result: ", res);
                
            $("."+ID).remove();   
}),
        error: ((error) => {
            console.log("Error: ", error);
        })
    })
    })
   
}