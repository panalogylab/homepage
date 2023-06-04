(function ($) {
  $('sup').each(function () {
    var number = parseInt($(this).text(), 10);
    if ($(this).hasClass('footnote')) {
      $(this).tooltip({
        html: true,
        title: $('#footnotes .col-xs-10 ol li:nth-child(' + (number) + ')').html(),
        placement: 'bottom',
      });
    } else {
      $(this).tooltip({
        html: true,
        title: $('#references .col-xs-10 ol li:nth-child(' + (number) + ')').html(),
        placement: 'bottom',
      });
    }
  });

  (function () {
    var parent = $('#table-of-content').append('<ul></ul>').find('ul');
    var currentLevel = 2;
    $('#content .col-xs-10').find('h2, h3, h4, h5, h6').each(function (index) {
      $(this).prop('id', 'h-' + index);
      var level = this.tagName[1];
      if (level > currentLevel) {
        $(parent).append('<ul></ul>');
        parent = $(parent).find('ul:last');
        currentLevel = level;
      } else if (level < currentLevel) {
        var upLevel = currentLevel - level;
        console.log(upLevel)
        for (var i = 0; i < upLevel; i++) {
          parent = $(parent).parent();
        }
        console.log(parent)
        currentLevel = level;
      }
      $(parent).append('<li><a href="#h-' + index + '">' + $(this).text() + '</a></li>')
    })
  })();
})(jQuery)
