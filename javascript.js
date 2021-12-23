$(function(){           //クリックで転換
    $('#img1').click(function(){setTimeout(function(){$('#img1').fadeOut(1000,function(){$('#img2').fadeIn(1000)});     },500);     });
    $('#img2').click(function(){setTimeout(function(){$('#img2').fadeOut(1000,function(){$('#img3').fadeIn(1000)});     },500);     });
    $('#img3').click(function(){setTimeout(function(){$('#img3').fadeOut(1000,function(){$('#img4').fadeIn(1000)});     },500);     });
    $('#img4').click(function(){setTimeout(function(){$('#img4').fadeOut(1000,function(){$('#img1').fadeIn(1000)});     },500);     });   });
$(function(){           //クリックで転換
    $('#tag1').click(function(){setTimeout(function(){$('#contact').fadeOut(1000,function(){$('#about').fadeIn(1000)});     },500);     });
    $('#tag1').click(function(){setTimeout(function(){$('#imgs').fadeOut(1000,function(){$('#about').fadeIn(1000)});     },500);     });
    $('#tag2').click(function(){setTimeout(function(){$('#about').fadeOut(1000,function(){$('#imgs').fadeIn(1000)});     },500);     });
    $('#tag2').click(function(){setTimeout(function(){$('#contact').fadeOut(1000,function(){$('#imgs').fadeIn(1000)});     },500);     });
    $('#tag3').click(function(){setTimeout(function(){$('#imgs').fadeOut(1000,function(){$('#contact').fadeIn(1000)});     },500);     });
    $('#tag3').click(function(){setTimeout(function(){$('#about').fadeOut(1000,function(){$('#contact').fadeIn(1000)});     },500);     });   });
