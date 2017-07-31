$(document).ready(function(){

    recorrer(arrayDatos);
});

function recorrer(arrayDatos){
	console.log(arrayDatos);
	//Recorro el Json y tomo sus elementos.
	arrayDatos.forEach(function(el){
		var id= el.id;
		var titulo= el.title;
		var des= el.description;
		var usuario= el.user;
		var hash= el.hashtag;

	
    //Se crea cada una de las etiquetas donde se guardaran los elementos que tome del Json.
	var div = $('<div/>',{'class' : 'div1'});
	var div2= $('<div/>', {'class' : 'div2'});
	var div3= $('<div/>', {'class' : 'div3', 'id' : 'myBtn'});
    var pDes = $('<p/>');
	var h2Title= $('<h2/>');
	var spanImg= $('<span/>',{'text' : '6'}).css({'vertical-align': 'super'});
	var iconSpan = $('<span/>');
	var icon= $('<i/>',{'class':'material-icons', 'text' :'done'});
	var spanUser = $('<span/>');
	var spanHash = $('<span/>',{'text': ' #'});

	//Ocupe el numero del Id de los elementos para asi generar que me otorge tres tamaños distintos a las img.	
    if(el.id % 3 == 0){
     var img= $('<img/>',{'src': 'img/'+ id + '.jpg'}).width('220px').height('350px');
    }else if(el.id % 5 == 0){
 	var img= $('<img/>',{'src': 'img/'+ id + '.jpg'}).width('220px').height('500px');
    }else{
	var img= $('<img/>',{'src': 'img/'+ id + '.jpg'}).width('220px').height('250px');
    }
    //Le otorgo a cada etiqueta su elemento que recorri.
    spanHash.append(hash);
    spanUser.append(usuario);
    h2Title.append(titulo);
    pDes.append(des);
    iconSpan.append(icon);
    div2.append(img);
    div2.append(iconSpan);
    div2.append(spanImg);
    div.append(h2Title);
    div.append(pDes);
    div.append(spanUser);
    div.append(spanHash);

    div3.append(div2).width('220px');
    div3.append(div).width('220px');

    //Tomo el div que reune todos los datos y se lo otorgo a mi div declarado en el HTML a traves de un Id.
    $('#imagenes').append(div3);


  //Modal
 
     
  div3.click(function() {
    //Estructura del modal
    var modal = $('<div/>',{'class':'prueba', 'id': 'myModal'+ el.id });
    var contenido = $('<div/>', {'class': 'modal-content'});
    var spanX = $('<span/>', {'class': 'close', 'text': 'x'});
    
    //Contenido del modal tomado desde el array
    var fotoModal = $('<img/>',{'src': 'img/'+ id + '.jpg'}).width('220px').height('250px');
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

    iconsModal.append(iconSubida);
    iconsModal.append(iconHecho);
    iconsModal.append(iconMas);
    btnGuardar.append(iconPin);
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
    $('.modal').append(modal);
     

     //Hago que aparesca el modal al hacer click al contenido
   $('.modal').show();

     //Al hacer click en la x se desaparece el modal 
        spanX.click(function(){
        $('.modal').hide();    
        $('.prueba').hide();  
        })
    })
  })
}


