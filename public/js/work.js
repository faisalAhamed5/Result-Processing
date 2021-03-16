
function submitResult() {
   
    $("#" + ID).on('submit', function (e) {
        var form = $("#send");
        e.preventDefault();
        
         var formData = {
             "sid": $('input[name=sid]').val(),
             "q1":$('input[name=q1]').val(),
             "q2":$('input[name=q2]').val(),
             "q3":$('input[name=q3]').val(),
             "q4":$('input[name=q4]').val(),
             "q5":$('input[name=q5]').val(),
             "q6":$('input[name=q6]').val(),
             "q7":$('input[name=q7]').val(),
             "q8":$('input[name=q8]').val(),
             "q9":$('input[name=q9]').val(),
             "q10":$('input[name=q10]').val(),
             "q11":$('input[name=q11]').val(),
             "q12":$('input[name=q12]').val(),
             "q13":$('input[name=q13]').val(),
             "q14":$('input[name=q14]').val(),
             "q15":$('input[name=q15]').val(),
             "t1":$('input[name=t1]').val(),
             "t2":$('input[name=t2]').val(),
             "m1":$('input[name=m1]').val(),
             "viva":$('input[name=viva]').val(),
             "attendance":$('input[name=attendance]').val(),
             "lab":$('input[name=lab]').val(),
             "result": $('.result:checked').val()
             
             
        };
        
        $.ajax({
         
        url:form.attr("action"),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(formData),
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