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
        if ($(".c001").is(":hidden")) {
            $("#test").show(3000);
            $(".c001").show(1000);
            $(".c002").show(1000);
            $(".c003").show(1000);
            $("#rating-text").slideDown(1200);
            $("#c014").slideDown(1300);
            $("#c024").slideDown(1300);
            $("#c034").slideDown(1300);
            $("#c044").slideDown(1300);
            $("#c054").slideDown(1300);
            // $("#CommentText").show(3000);
            $("#CommentBox").slideDown(1900);
            $("#Submit").slideDown(2000);
            $("#reset").slideDown(2100);
        } else {
            $("#test").hide(3000);
            $(".c001").hide(1800);
            $(".c002").hide(1800);
            $(".c003").hide(1800);
            $("#rating-text").slideUp(1700);
            $("#c014").slideUp(1300);
            $("#c024").slideUp(1300);
            $("#c034").slideUp(1300);
            $("#c044").slideUp(1300);
            $("#c054").slideUp(1300);
            // $("#CommentText").hide(1100);
            $("#CommentBox").slideUp(1300);
            $("#Submit").slideUp(1200);
            $("#reset").slideUp(1200);
        }
    });
});
// $(document).ready(function () {
//     $("#contact-button").click(function () {
//         if ($(".contact-page").is(":hidden")) {
//             $(".contact-page").slideDown('slow');
//             $(".c001").fadeIn(3000);
//             $(".c002").fadeIn(3000);
//             $(".c003").fadeIn(3000);
//             $("#c004").fadeIn(3000);
//             $("#c014").fadeIn(3000);
//             $("#c024").fadeIn(3000);
//             $("#c034").fadeIn(3000);
//             $("#c044").fadeIn(3000);
//             $("#c054").fadeIn(3000);
//             $("#c005").fadeIn(3000);
//             $("#c006").fadeIn(3000);
//         } else {
//             $(".contact-page").slideUp();
//             $(".c001").fadeOut();
//             $(".c002").fadeOut();
//             $(".c003").fadeOut();
//             $("#c004").fadeOut();
//             $("#c014").fadeOut();
//             $("#c024").fadeOut();
//             $("#c034").fadeOut();
//             $("#c044").fadeOut();
//             $("#c054").fadeOut();
//             $("#c005").fadeOut();
//             $("#c006").fadeOut();
//         }
//     });
// });

// $(document).ready(function () {
//     $("#contact-button").click(function () {
//         if ($(".c001").is(":visible")) {
//             $(".c001").fadeOut(3000);
//             $(".c002").fadeOut(3000);
//             $(".c003").fadeOut(3000);
//             $("#c004").fadeOut(3000);
//             $("#c024").fadeOut(3000);
//             $("#c034").fadeOut(3000);
//             $("#c014").fadeOut(3000);
//             $("#c044").fadeOut(3000);
//             $("#c054").fadeOut(3000);
//             $("#c005").fadeOut(3000);
//             $("#c006").fadeOut(3000);
//         } elseif($(".c001").is(":hidden")); {
//             $(".c001").fadeIn();
//             $(".c002").fadeIn();
//             $(".c003").fadeIn();
//             $("#c004").fadeIn();
//             $("#c014").fadeIn();
//             $("#c024").fadeIn();
//             $("#c034").fadeIn();
//             $("#c044").fadeIn();
//             $("#c054").fadeIn();
//             $("#c005").fadeIn();
//             $("#c006").fadeIn();
//         }
//     });
// });
// $(document).ready(function () {
//     $("#contact-button").click(function () {
//         $("#test").animate({ right: '250px' });
//     });
// });