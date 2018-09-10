$('.page').on('click',function(e) {
//ambil isi a href

  var href = $(this).attr('href');
//tangkap elemen
  var elementHref = $(href);


 $('body').animate({

 scrollTop: elementHref.offset().top

 })

e.preventDefault();

});