$('#topAD').on('click', function () {
    $("#topA").toggleClass("glyphicon-triangle-right");
    $("#topA").toggleClass("glyphicon-triangle-bottom");
});

$('.list li').on('click', function () {
    $('.list li').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('data-id');
    $('.tab-pane').removeClass('active');
    $('#' + id).addClass('active');
});

$('.toggle-btn').on('click', function () {
    $(".left-menu").toggleClass("show");
    $(".right-con").toggleClass("pd0px");
});