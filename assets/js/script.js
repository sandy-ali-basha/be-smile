$(document).ready(function () {
    $(".loader").hide();
    for (let i = 1; i < 30; i++) {
        $(".dotts").append(
            `<div class="dot">`
        );
    }
    $(".arabic").click(() => {
        $("body").addClass("rtl")
        document.body.setAttribute('dir', 'rtl')
    })
    $(".english").click(() => {
        $("body").removeClass("rtl")
        document.body.setAttribute('dir', 'ltr')
    })
    $(".viewMore_btn").click(() => {
        $(".card_container").removeClass("d-none")
        $(".card_container").addClass("animate__fadeIn")
        $(".viewMore_btn").addClass("d-none")

    })

});