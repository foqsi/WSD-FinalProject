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
    $(".contact-page").hide();
    $(document).on("click", "#contact-button", function () {
        $(".contact-page").slideToggle(1000);
    });
});


//    testing***************


// $(document).ready(function () {
//     $("#contact-button").click(function () {
//         if ($(".contact-page").is(":hidden")) {
//             $("#test").showToggle(3000);
//             $(".c001").show(2000);
//             $(".c002").show(2000);
//             $(".c003").show(2000);
//             $("#rating-text").show(2000);
//             $("#c014").slideDown(2000);
//             $("#c024").slideDown(2000);
//             $("#c034").slideDown(2000);
//             $("#c044").slideDown(2000);
//             $("#c054").slideDown(2000);
//             // $("#CommentText").show(2000);
//             $("#CommentBox").slideDown(2000);
//             $("#Submit").slideDown(2000);
//             $("#reset").slideDown(2000);
//         } else {
//             $("#test").hide(1700);
//             $(".c001").hide(1700);
//             $(".c002").hide(1700);
//             $(".c003").hide(1700);
//             $("#rating-text").hide(1700);
//             $("#CommentBox").slideUp(1700);
//             $("#c014").slideUp(1200);
//             $("#c024").slideUp(1200);
//             $("#c034").slideUp(1200);
//             $("#c044").slideUp(1200);
//             $("#c054").slideUp(1200);
//             // $("#CommentText").hide(1100);
//             $("#Submit").slideUp(1800);
//             $("#reset").slideUp(1800);
//         }
//     });
// });

// $(document).ready(function () {
//     $("#contact-button").click(function () {
//         $("#test").animate({ right: '250px' });
//     });
// });