$(document).ready(function () {
    $(".login-box").hide()
    $(".next-btn").click(function (e) {
        e.preventDefault()
        if ($("#user_Number").val().length ==11){
            $("#errorAlert").alert('close'); //

            $(".numberCodeShow").html($("#user_Number").val())
            const current = $(this).closest(".step");
            const next = current.next(".step");
            current.removeClass("active");
            next.addClass("active");
        }
        else {
            $("#errorAlert").removeClass("hide")
            $("#errorAlert").addClass("show")

        }
    });





    $(".codeSubmit").click(function (e) {
        e.preventDefault()
        if ($("#user_Number-Submit").val() == "0000"){
            $("#errorCodeAlert").alert('close'); //

            $(".numberCodeShow").html($("#user_Number").val())

            window.location.href = "../landing_page/LandingPage.html"



        }
        else if($("#user_Number-Submit").val() != "0000"){
            $("#errorCodeAlert").removeClass("hide")
            $("#errorCodeAlert").addClass("show")

        }
    });




    $(".Support").hide()
    $(".contact-support").click(function (){
        $(".Support").toggle("")

    } )




});








