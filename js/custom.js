+function(){

//tiny scrollbar
  $('.user-comment').tinyscrollbar();

//  skill toggle
  $('.skill-slide').click(function(){
    $(this).parent().parent().find('.skills-wrap').toggleClass('toggle');
    if($(this).parent().parent().find('.skills-wrap').hasClass('toggle')){
      $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
    }
    else{
      $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
    }
  });
}();





