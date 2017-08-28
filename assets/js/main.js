//Datos globales.
var porcion1= arrayDatos.slice(0,20);
var porcion2= arrayDatos.slice(20,41);
cont= 0;

$(document).ready(function(){
 //Tomo la primera porcion y la recorro.
    porcion1.forEach(function(el){
        recorrer(el);
    }); 
});
//Ocupo scroll para que cuendo llegue al final de la pagina me termine de cargar el resto de imagenes.
$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height() - $(window).height()){

        if(cont == 20){
            porcion2.forEach(function(el){
                recorrer(el);
            })
        }
    }                 
});

function recorrer(el){
	console.log(el);
	//Tomo datos del Json.
		var id= el.id;
		var titulo= el.title;
		var des= el.description;
		var usuario= el.user;
		var hash= el.hashtag;

	
    //Se crea cada una de las etiquetas donde se guardaran los elementos que tome del Json.
	var contInfo = $('<div/>',{'class' : 'contInfo'});
	var contImg= $('<div/>', {'class' : 'contImg'});
	var contTotal= $('<div/>', {'class' : 'contTotal', 'id' : 'myBtn'});
    var pDes = $('<p/>');
	var h2Title= $('<h2/>');
	var spanImg= $('<span/>',{'text' : '6'}).css({'vertical-align': 'super'});
	var iconSpan = $('<span/>');
	var icon= $('<i/>',{'class':'material-icons', 'text' :'done'});
	var spanUser = $('<span/>');
	var spanHash = $('<span/>',{'text': ' #'});
    var inicial= $('<span/>',{'class': 'letra','text' : el.user[0]});

	//Ocupe el numero del Id de los elementos para asi generar que me otorge tres tamaños distintos a las img.	
    if(el.id % 3 == 0){
     var img= $('<img/>',{'src': 'dist/img/'+ id + '.jpg'}).width('220px').height('350px');
    }else if(el.id % 5 == 0){
 	var img= $('<img/>',{'src': 'dist/img/'+ id + '.jpg'}).width('220px').height('500px');
    }else{
	var img= $('<img/>',{'src': 'dist/img/'+ id + '.jpg'}).width('220px').height('250px');
    }
    //Le otorgo a cada etiqueta su elemento que recorri.
    spanHash.append(hash);
    spanUser.append(inicial);
    spanUser.append(usuario);
    h2Title.append(titulo);
    pDes.append(des);
    iconSpan.append(icon);
    contImg.append(img);
    contImg.append(iconSpan);
    contImg.append(spanImg);
    contInfo.append(h2Title);
    contInfo.append(pDes);
    contInfo.append(spanUser);
    contInfo.append(spanHash);

    contTotal.append(contImg).width('220px');
    contTotal.append(contInfo).width('220px');

    //Tomo el div que reune todos los datos y se lo otorgo a mi div declarado en el HTML a traves de un Id.
    $('#imagenes').append(contTotal);
  
  //contador.
    cont++;

  //Modal
     
  contTotal.click(function() {
    //Estructura del modal
    var modal = $('<div/>',{'class':'modal', 'id': 'myModal'+ el.id });
    var contenido = $('<div/>', {'class': 'modal-content'});
    var spanX = $('<span/>', {'class': 'close material-icons', 'text' : 'clear'});
    
    //Contenido del modal tomado desde el array
    var fotoModal = $('<img/>',{'src': 'dist/img/'+ id + '.jpg'});
    var tituloModal = $('<h2/>', {'text': el.title});
    var userModal = $('<span/>',{'text': el.user});
    var hashModal= $('<span/>',{'text': ' #' + el.hashtag});
    var desModal= $('<p/>', {'text': el.description});
    var pModal=$('<p/>');
    var iconsModal =$('<span/>');
    var iconSubida= $('<span/>', {'class': 'material-icons', 'text' :'file_upload' });
    var iconHecho= $('<span/>', {'class': 'material-icons', 'text' :'done' });
    var iconMas = $('<span/>', {'class': 'material-icons', 'text' :'more_horiz' });
    var btnGuardar= $('<a/>', {'href' : '#' ,'class': 'btnGuardar', 'text' : 'Guardar '});
    var iconPin = $('<span/>', {'class': 'fa fa-thumb-tack' });
    var btnLeer= $('<a/>', {'href' : '#' ,'text': 'Leer'});
    var letraInicial= $('<span/>',{'class': 'letra', 'text' : el.user[0]});

    iconsModal.append(iconSubida);
    iconsModal.append(iconHecho);
    iconsModal.append(iconMas);
    btnGuardar.append(iconPin);
    pModal.append(letraInicial);
    pModal.append(userModal);
    pModal.append(hashModal);
    contenido.append(spanX);
    contenido.append(iconsModal);
    contenido.append(btnGuardar);
    contenido.append(tituloModal);
    contenido.append(fotoModal);
    contenido.append(btnLeer);
    contenido.append(pModal);
    contenido.append(desModal);
    modal.append(contenido);

     //Coloco todo lo del modal en mi seccion de clase modal que coloque en HTML
        $('.cont-modal').append(modal);
     

     //Hago que aparesca el modal al hacer click al contenido
        $('.cont-modal').show();

     //Al hacer click en la x se desaparece el modal 
        spanX.click(function(){
        $('.cont-modal').hide();    
        $('.modal').remove();  
        })

        $('.cont-modal').click(function(){
            $('.cont-modal').hide();    
            $('.modal').remove(); 
        })    
    })
  
}


