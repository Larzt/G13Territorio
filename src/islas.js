var teideContent = "Este parque presenta, no solamente uno de los más impresionantes espectáculos geológicos del mundo, con su conjunto de coladas y conos volcánicos de caprichosas formas y armoniosos colores (que van del pardo y el ocre hasta el negro eruptivo de la lava y el blanco de la nieve durante los meses del invierno), sino que también atesora una extraordinaria biodiversidad formada por exclusivas especies de invertebrados y un amplio número de endemismos vegetales.";
var garajonayContent = "El parque destaca sobre todo por ser el principal exponente de la laurisilva canaria, un ecosistema proveniente de la Era Terciaria, que desapareció del continente como consecuencia de los cambios climáticos ocurridos en el Cuaternario. El bosque de laurisilva del Garajonay concentra la mitad de la extensión arbórea madura de este tipo de vegetación en todo el archipiélago, en unas condiciones óptimas de conservación.";
var taburienteContent = "El parque destaca sobre todo por ser el principal exponente de la laurisilva canaria, un ecosistema proveniente de la Era Terciaria, que desapareció del continente como consecuencia de los cambios climáticos ocurridos en el Cuaternario. El bosque de laurisilva del Garajonay concentra la mitad de la extensión arbórea madura de este tipo de vegetación en todo el archipiélago, en unas condiciones óptimas de conservación.";
var roqueNubloContent = "Situado en el municipio central de Tejeda, en la isla de Gran Canaria, el Roque Nublo es considerado una de las peñas naturales más grandes del mundo. De especial significado para los isleños, este roque de origen volcánico se eleva ochenta metros sobre su base y 1.813 metros sobre el mar. Antiguo lugar de culto para los aborígenes, todo su entorno fue declarado espacio natural protegido en 1987 y parque rural siete años después. Su enorme presencia solo es superada en altura por el pico de Las Nieves, con 1.949 metros, el lugar más elevado de Gran Canaria.";
var timanfayaContent = "El Parque Nacional de Timanfaya es el único parque nacional de La Red Española de Parques Nacionales eminentemente geológico y representa una muestra del volcanismo reciente e histórico en la Región Macaronésica. Las erupciones volcánicas ocurridas entre 1730 y 1736, y en 1824, dieron lugar a numerosas estructuras geomorfológicas de elevado interés vulcanológico. La ausencia de un manto de vegetación, la extrema rugosidad de las formas y la variedad de colores presentes, rojos, pardos, ocres, negros y naranjas, junto a la silueta de los volcanes y la abrupta costa confieren al parque una extraordinaria belleza.";

$(document).ready(function() {
  var page = $('.page');
  $('#teide').click(function() {
    var hasId = page.attr('id')
    if (hasId !== 'teide') {
      page.attr('id', 'teide');
      page.addClass('show');
      $('h1').html("Teide");
      $('.content').html(teideContent);
    } else {
      page.attr('id', 'default');
      page.removeClass('show');
    }
  });
  
  $('#garajonay').click(function() {
    var hasId = page.attr('id')
    if (hasId !== 'garajonay') {
      page.attr('id', 'garajonay');
      page.addClass('show');
      $('h1').html("Garajonay");
      $('.content').html(garajonayContent);
    } else {
      page.attr('id', 'default');
      page.removeClass('show');
    }
  });
  
  $('#taburiente').click(function() {
    var hasId = page.attr('id')
    if (hasId !== 'taburiente') {
      page.attr('id', 'taburiente');
      page.addClass('show');
      $('h1').html("Taburiente");
      $('.content').html(taburienteContent);
    } else {
      page.attr('id', 'default');
      page.removeClass('show');
    }
  });  

  $('#roqueNublo').click(function() {
    var hasId = page.attr('id')
    if (hasId !== 'roqueNublo') {
      page.attr('id', 'roqueNublo');
      page.addClass('show');
      $('h1').html("Roque Nublo");
      $('.content').html(roqueNubloContent);
    } else {
      page.attr('id', 'default');
      page.removeClass('show');
    }
  });

  $('#timanfaya').click(function() {
    var hasId = page.attr('id')
    if (hasId !== 'timanfaya') {
      page.attr('id', 'timanfaya');
      page.addClass('show');
      $('h1').html("Timanfaya");
      $('.content').html(timanfayaContent);
    } else {
      page.attr('id', 'default');
      page.removeClass('show');
    }
  });
  
// EL PEPE
$('#teide').on("focus", function() {
  var hasId = page.attr('id')
  if (hasId !== 'teide') {
    page.attr('id', 'teide');
    page.addClass('show');
    $('h1').html("Teide");
    $('.content').html(teideContent);
  } else {
    page.attr('id', 'default');
    page.removeClass('show');
  }
});

$('#garajonay').on("focus", function() {
  var hasId = page.attr('id')
  if (hasId !== 'garajonay') {
    page.attr('id', 'garajonay');
    page.addClass('show');
    $('h1').html("Garajonay");
    $('.content').html(garajonayContent);
  } else {
    page.attr('id', 'default');
    page.removeClass('show');
  }
});

$('#taburiente').on("focus", function() {
  var hasId = page.attr('id')
  if (hasId !== 'taburiente') {
    page.attr('id', 'taburiente');
    page.addClass('show');
    $('h1').html("Taburiente");
    $('.content').html(taburienteContent);
  } else {
    page.attr('id', 'default');
    page.removeClass('show');
  }
});  

$('#roqueNublo').on("focus", function() {
  var hasId = page.attr('id')
  if (hasId !== 'roqueNublo') {
    page.attr('id', 'roqueNublo');
    page.addClass('show');
    $('h1').html("Roque Nublo");
    $('.content').html(roqueNubloContent);
  } else {
    page.attr('id', 'default');
    page.removeClass('show');
  }
});

$('#timanfaya').on("focus", function() {
  var hasId = page.attr('id')
  if (hasId !== 'timanfaya') {
    page.attr('id', 'timanfaya');
    page.addClass('show');
    $('h1').html("Timanfaya");
    $('.content').html(timanfayaContent);
  } else {
    page.attr('id', 'default');
    page.removeClass('show');
  }
});
});