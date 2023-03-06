function validateForm() {
    if (document.forms[0].rating.value == "") {
        alert("Please select a rating.");
        return false;
    }
    return true;
}

$(document).ready(function () {
    $('form').validate();
});

$(document).ready(function () {
    $("#contact-button").click(function () {
        if ($(".contact-page").is(":visible")) {
            $(".contact-page").slideUp('slow');
        } else {
            $(".contact-page").slideDown('slow');
        }
    });
});