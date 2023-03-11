function validateForm() {
    if (document.forms[0].rating.value == "") {
        alert("Please select a rating.");
        return false;
    }
    return true;
}

function lastModified() {
    var lastMod = document.lastModified;
    document.getElementById("lastModified").innerHTML = lastMod;
}

$(document).ready(function () {
    $('form').validate();

    $('#imageStack a').hover(function () {
        var imageHref = $(this).attr('href');
        var imageAlt = $(this).attr('title');
        $('figure img').attr({ src: imageHref, alt: imageAlt });
        $('figcaption').html(imageAlt);
    });

    $(".contact-page").hide();
    $(document).on("click", "#contact-button", function () {
        $(".contact-page").slideToggle(1000);
    });
});