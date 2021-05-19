// menu
let acum = 1

for(i=0; i<acum; i++){
  
    cont.innerHTML +=
    `<div>
          <nav>
           <ul class="show">
            <li class="lp"><a href="file:///C:/Users/JOVAHIN/Desktop/PRUEBA%20CURSO%204/Index.HTML" class="la">Home</a></li>
              <li class="lp"><a href="/E-Comerce.HTML" class="la">E-Comerce</a></li>
               <li class="lp"><a href="file:///C:/Users/JOVAHIN/Desktop/PRUEBA%20CURSO%204/Social%20Media%20Marketing.HTML" class="la">Chekout</a></li>
                <img src="iconos/carrito.png" alt="" class="menu-bar"> </img> <span id="contadorCarrito"> 0 </span>   
                 </nav>
              
             </div>
            `
          }

            // const cantidadC = document.getElementById('contadorCarrito')
            //  cantidadC.innerText = carrito.length
           
           
            $('.menu-bar').on('click', function() {
              $('.contenido').toggleClass('abrir');
            }
            );
            

         
