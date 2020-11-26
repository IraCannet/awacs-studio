$(function() {
  $('a').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault()
      var scrollTo = $(this).attr('href')
      var whitespace = scrollTo == '#vwacs-logo' ? 1200 : 800
      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000)
    })
  })
})