$(document).ready(function() {

var count = 1;
var lastpic = 20;
var auno_count = 1;
var maybelline_count = 1;
var sateca_count = 1;
var wella_count = 1;
var oportunidad_count = 1;
var gamma_count = 1;
var auno_last = 4;
var maybelline_last = 3;
var sateca_last = 3;
var wella_last = 7;
var oportunidad_last = 3;
var gamma_last = 2;
var toggle = true;
var id = null;

$("#flecha-galeria-der").on("tap", function() {
$("#loader-gallery").show();
count = count + 1;
if (count <= lastpic) {
$("#main-img").load(function() {
$("#loader-gallery").hide();
}).attr("src", "img/equipo/equipo-" + count + ".png");}
else if (count > lastpic) {
count = 1;
$("#main-img").load(function() {
$("#loader-gallery").hide();
}).attr("src", "img/equipo/equipo-" + count + ".png");}
});

$("#flecha-galeria-izq").on("tap", function() {
$("#loader-gallery").show();
count = count - 1;
if (count > 0) {
$("#main-img").load(function() {
$("#loader-gallery").hide();
}).attr("src", "img/equipo/equipo-" + count + ".png");}
else if (count == 0) {
count = lastpic;
$("#main-img").load(function() {
$("#loader-gallery").hide();
}).attr("src", "img/equipo/equipo-" + lastpic + ".png");}
});

$(".portafolioImage").on("tap", function() {

id = $(this).attr("id");

if (toggle == true) {
$("#wella").fadeOut('slow');
$("#sateca").fadeOut('slow');
$("#oportunidad").fadeOut('slow');
$("#maybelline").fadeOut('slow');
$("#gamma").fadeOut('slow');
toggle = false;
$("#auno").load(function() {
$("#auno").css('width', '90%');
$("#auno").css('max-width', '624px');
$("#tabla-controles-portafolio").show();
}).attr("src", "img/proyectos/proyectos/" + id + "-1.png");
}

else if (toggle == false) {
$("#gamma").fadeIn('slow');
$("#maybelline").fadeIn('slow');
$("#oportunidad").fadeIn('slow');
$("#sateca").fadeIn('slow');
$("#wella").fadeIn('slow');
$("#tabla-controles-portafolio").fadeOut('slow');
toggle = true;
$("#auno").load(function() {
$("#auno").css('width', '70%');
$("#auno").css('max-width', '420px');
}).attr("src", "img/proyectos/botones/boton-a1-off.png");
}

});

$("#flecha-portafolio-der").on("tap", function() {

if (id == "auno") {
auno_count = auno_count + 1;
if (auno_count <= auno_last) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/auno-" + auno_count + ".png");}
else if (auno_count > auno_last) {
auno_count = 1;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/auno-" + auno_count + ".png");}
}

else if (id == "gamma") {
gamma_count = gamma_count + 1;
if (gamma_count <= gamma_last) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/gamma-" + gamma_count + ".png");}
else if (gamma_count > gamma_last) {
gamma_count = 1;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/gamma-" + gamma_count + ".png");}
}

else if (id == "maybelline") {
maybelline_count = maybelline_count + 1;
if (maybelline_count <= maybelline_last) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/maybelline-" + maybelline_count + ".png");}
else if (maybelline_count > maybelline_last) {
maybelline_count = 1;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/maybelline-" + maybelline_count + ".png");}
}

else if (id == "oportunidad") {
oportunidad_count = oportunidad_count + 1;
if (oportunidad_count <= oportunidad_last) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/oportunidad-" + oportunidad_count + ".png");}
else if (oportunidad_count > oportunidad_last) {
oportunidad_count = 1;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/oportunidad-" + oportunidad_count + ".png");}
}

else if (id == "sateca") {
sateca_count = sateca_count + 1;
if (sateca_count <= sateca_last) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/sateca-" + sateca_count + ".png");}
else if (sateca_count > sateca_last) {
sateca_count = 1;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/sateca-" + sateca_count + ".png");}
}

else if (id == "wella") {
wella_count = wella_count + 1;
if (wella_count <= wella_last) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/wella-" + wella_count + ".png");}
else if (wella_count > wella_last) {
wella_count = 1;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/wella-" + wella_count + ".png");}
}

});

$("#flecha-portafolio-izq").on("tap", function() {

if (id == "auno") {
auno_count = auno_count - 1;
if (auno_count > 0) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/auno-" + auno_count + ".png");}
else if (auno_count == 0) {
auno_count = auno_last;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/auno-" + auno_last + ".png");}
}

else if (id == "gamma") {
gamma_count = gamma_count - 1;
if (gamma_count > 0) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/gamma-" + gamma_count + ".png");}
else if (gamma_count == 0) {
gamma_count = gamma_last;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/gamma-" + gamma_last + ".png");}
}

else if (id == "maybelline") {
maybelline_count = maybelline_count - 1;
if (maybelline_count > 0) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/maybelline-" + maybelline_count + ".png");}
else if (maybelline_count == 0) {
maybelline_count = maybelline_last;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/maybelline-" + maybelline_last + ".png");}
}

else if (id == "oportunidad") {
oportunidad_count = oportunidad_count - 1;
if (oportunidad_count > 0) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/oportunidad-" + oportunidad_count + ".png");}
else if (oportunidad_count == 0) {
oportunidad_count = oportunidad_last;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/oportunidad-" + oportunidad_last + ".png");}
}

else if (id == "sateca") {
sateca_count = sateca_count - 1;
if (sateca_count > 0) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/sateca-" + sateca_count + ".png");}
else if (sateca_count == 0) {
sateca_count = sateca_last;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/sateca-" + sateca_last + ".png");}
}

else if (id == "wella") {
wella_count = wella_count - 1;
if (wella_count > 0) {
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/wella-" + wella_count + ".png");}
else if (wella_count == 0) {
wella_count = wella_last;
$("#auno").load(function() {
}).attr("src", "img/proyectos/proyectos/wella-" + wella_last + ".png");}
}

});

})(window.Zepto); 