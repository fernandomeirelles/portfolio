var FM = FM || {};

FM.year = {
    init : function () {
        var d = new Date();
        var y = d.getFullYear();
        $('.date').text(y);
    }
};

$(function() {
    FM.year.init();
});