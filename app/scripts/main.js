'use strict';

function showSize() {
    // $('#size').html('Window Height : '+$(window).height()+'<br>Window Width : '+$(window).width());
    // $('#size2').html('Screen Height : '+screen.height+'<br>Screen Width : '+screen.width);
    $('#size').html('Window ' + $(window).width() + ' x '+$(window).height());
    $('#size2').html('Screen ' + screen.width + 'x ' + screen.height);
}

$(window).on('resize', showSize);

showSize();
