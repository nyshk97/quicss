// ファイル送信用のjquery
  $(function () {
    $(".file").on('change', function () {
      var file = $(this).prop('files')[0];
      var label = $(this).next();
      if (!($(this).children(".filename").length)) {
        $(this).parent(".form__file").append('<span class="filename"></span>');
        label.addClass('changed');
      }
      label.next().html(file.name);
    });
  });