$("a").on( "click", function(e) {
    let icon = $(e.target).closest("i");

    if(icon.hasClass("bi-chevron-down")) {
        icon.removeClass("bi-chevron-down")
            .toggleClass("bi-chevron-up");
    }
    else {
        icon.removeClass("bi-chevron-up")
            .toggleClass("bi-chevron-down");
    }
});