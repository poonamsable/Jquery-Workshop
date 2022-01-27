$(document).ready(()=>{
    $('input[type="button"]').click(
        ()=>{
            var fname = $('input[type="text"').val();
            var lname = $('input[type="text"]').val();
            if(fname!='' &&lname!='')
                alert("Registration is Successfull");
            else
                alert("enter all the data");
        }
    )

})