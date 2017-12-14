$(document).ready(function() {
  /*esconder todas las imagenes*/
  $("a").hide();

  /*SELECTOR FILTRO*/
  $(".selLabel").click(function() {
    $('.dropdown').toggleClass('active');
  });

  $(".dropdown-list li").click(function() {
    $('.selLabel').text($(this).text());
    $('.dropdown').removeClass('active');
    $('.selected-item p span').text($('.selLabel').text());
  });
  /*FIN SELECTOR FILTRO*/

  /*que cuando el splash desaparezca aparezca el la página principal*/
  $("#main-page").hide();
  $('#splash').fadeOut(3000, function() {
    $("#splash").remove();
    $('#main-page').fadeIn(1000);
  });


/*Que se oculte y se vacíe el modal cada vez que se cierra*/
  $('#close').click(function() {
    $(this).parent().hide();
    $(".modal-content").empty();
  });


  /*filtro para que aparezcan las imagenes según el botón seleccionado
   *y que al apretarlas aparezca un modal con el contenido especificado
   */
   $("#vegana").click(function() {
    $('a').show().filter(':not(.vegana)').hide();

    $("#katako").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>Katako Vegan</h1></div>" +
        "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d53275.03474135372!2d-70.67457422344674!3d-33.43133411686199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662c59732b69259%3A0xd30b26797081a4e9!2skatako+veg+restaurant!3m2!1d-33.4313538!2d-70.63955299999999!5e0!3m2!1ses-419!2scl!4v1513205581336' width='400' height='200' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Bombero Núñez 231, Recoleta, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>"
      );
      /*Mouseover*/
      $('#katako').mouseover(function () {
          $('#overlay5').show();
      }).mouseout(function () {
          $('#overlay5').hide();
      });
    });

    $("#huerto").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>El Huerto</h1></div>" +
        "<div class='row' id='mapmodal'><iframe  class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106540.63267110336!2d-70.61959037861854!3d-33.43902008505537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662cf666360fe65%3A0xb5863e8992b59307!2sel+huerto+restaurante!3m2!1d-33.4227081!2d-70.6123783!5e0!3m2!1ses-419!2scl!4v1513211709171' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Orrego Luco 54, Providencia, Santiago, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#huerto').mouseover(function () {
            $('#overlay6').show();
        }).mouseout(function () {
            $('#overlay6').hide();
        });
    });

    $("#el-vegano").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>El Vegano Chile</h1></div>" +
        "<div class='row' id='mapmodal'><iframe  class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d106514.94738531056!2d-70.61960823053207!3d-33.459931989863634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m0!4m4!1s0x9662c597b297bdc5%3A0xb7dd153381510f18!3m2!1d-33.431304499999996!2d-70.6432952!5e0!3m2!1ses-419!2scl!4v1513213003684' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'> Río de Janeiro 211, Recoleta, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#el-vegano').mouseover(function () {
            $('#overlay7').show();
        }).mouseout(function () {
            $('#overlay7').hide();
        });
    });

    $("#bunker").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>Vegan Bunker</h1></div>" +
        "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106491.02256551993!2d-70.61402048574986!3d-33.47940021212389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662c57dc2d48e91%3A0xd703bf37d86de8de!2svegan+bunker+restaurant!3m2!1d-33.447628099999996!2d-70.6232879!5e0!3m2!1ses-419!2scl!4v1513213408097' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Fresia 529, Providencia, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#bunker').mouseover(function () {
            $('#overlay8').show();
        }).mouseout(function () {
            $('#overlay8').hide();
        });
    });
  });


  $("#koreana").click(function() {
    $('a').show().filter(':not(.koreana)').hide();
    $("#chicken-story").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>Chicken Story</h1></div>" +
        "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106531.37582221921!2d-70.66737581606867!3d-33.44655796296212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662c597af1da971%3A0x3e9f294404b2f277!2schicken+story+patronato!3m2!1d-33.43168!2d-70.6429976!5e0!3m2!1ses-419!2scl!4v1513213534996' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Antonia López de Bello 267, Recoleta, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#chicken-story').mouseover(function () {
            $('#overlay1').show();
        }).mouseout(function () {
            $('#overlay1').hide();
        });
    });

    $("#dae-jang").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>Dae Jang Kum</h1></div>" +
        "<div class='row' id='mapmodal'><iframe  class='col-xs-12 text-center'src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106539.9258336521!2d-70.66216747953199!3d-33.43959571772174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662c5974a329ce5%3A0x973525fc96387ea2!2sdae+jang+kum+restaurante+coreano!3m2!1d-33.4321663!2d-70.6398492!5e0!3m2!1ses-419!2scl!4v1513213623624' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Bombero Núñez 174, Recoleta, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#dae-jang').mouseover(function () {
            $('#overlay2').show();
        }).mouseout(function () {
            $('#overlay2').hide();
        });
    });

    $("#hansoban").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>Hansoban</h1></div>" +
        "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106528.24779339423!2d-70.65447362868282!3d-33.449104786214704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662c5964d044437%3A0x7f4f15a83ab6f223!2shansoban+patronato!3m2!1d-33.4310756!2d-70.643485!5e0!3m2!1ses-419!2scl!4v1513213719740' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Río de Janeiro 248, Santiago, Recoleta, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#hansoban').mouseover(function () {
            $('#overlay3').show();
        }).mouseout(function () {
            $('#overlay3').hide();
        });
    });

    $("#sukine").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>Sukine</h1></div>" +
        "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106525.58398377972!2d-70.63772833647519!3d-33.4512735097305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662c597a54e7005%3A0x1e8f72d3ee9f32b9!2ssukine!3m2!1d-33.431812199999996!2d-70.64321919999999!5e0!3m2!1ses-419!2scl!4v1513213825733' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Antonia López de Bello 244, Santiago, Recoleta, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#sukine').mouseover(function () {
            $('#overlay4').show();
        }).mouseout(function () {
            $('#overlay4').hide();
        });
    });
  });



  $("#italiana").click(function() {
    $('a').show().filter(':not(.italiana)').hide();

    $("#trattoria").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>Trattoria Rita</h1></div>" +
        "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106566.56005159717!2d-70.57340078280106!3d-33.417899348108065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662cf2610bcd74f%3A0xd3aa0800b3472b5b!2sTrattoria+Rita!3m2!1d-33.401869999999995!2d-70.578205!5e0!3m2!1ses-419!2scl!4v1513214168989' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Boulevard Parque Arauco, Local 369, Las Condes, Av Presidente Kennedy 5413, Santiago, Vitacura, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#trattoria').mouseover(function () {
            $('#overlay9').show();
        }).mouseout(function () {
            $('#overlay9').hide();
        });
    });

    $("#signore").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>Signore</h1></div>" +
        "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106558.42112286312!2d-70.60603849196323!3d-33.42453068165265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662cf69e29c1f29%3A0xfd2315d8ee1fd93b!2ssignore+pizza!3m2!1d-33.416813399999995!2d-70.6046629!5e0!3m2!1ses-419!2scl!4v1513214255016' width='400' height='300'frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Av Vitacura 2615, Santiago, Las Condes, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#signore').mouseover(function () {
            $('#overlay10').show();
        }).mouseout(function () {
            $('#overlay10').hide();
        });
    });

    $("#golfo").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>Golfo Di Napoli</h1></div>" +
        "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106492.7655485989!2d-70.58035931609656!3d-33.47798224117549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9662cf916f827eaf%3A0x65a6a856994a5153!2sGolfo+di+Napoli!3m2!1d-33.4556626!2d-70.6057629!5e0!3m2!1ses-419!2scl!4v1513214351451' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Dublé Almeyda 2435, Ñuñoa, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#golfo').mouseover(function () {
            $('#overlay11').show();
        }).mouseout(function () {
            $('#overlay11').hide();
        });
    });

    $("#fabbrica").click(function() {
      $("#modal1").show();
      $(".modal-content").append("<div class='row'><h1 id='titlemodal' class='text-center'>La Fabbrica</h1></div>" +
        "<div class='row' id='mapmodal'><iframe class='col-xs-12 text-center' src='https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d106494.994682327!2d-70.5598809946111!3d-33.47616869422169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m0!4m4!1s0x9662ce4a51870ab3%3A0xd7653b7c7b998404!3m2!1d-33.452129899999996!2d-70.5705217!5e0!3m2!1ses-419!2scl!4v1513214452894' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe></div>" +
        "<div class='row'><p class='col-xs-10 col-xs-offset-1' id='addressmodal'>Av. Ossa 101-169, La Reina, Región Metropolitana</p></div>" +
        "<div class='row'><button id='btnmodal' class='btn btn-default col-xs-4 col-xs-offset-4'>Pedir</button></div>");
        /*Mouseover*/
        $('#fabbrica').mouseover(function () {
            $('#overlay12').show();
        }).mouseout(function () {
            $('#overlay12').hide();
        });
    });
  });




});
