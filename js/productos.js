const enlaces = document.querySelectorAll('.opciones a');
const productSection = document.getElementById('product-section');

const productos = {
    pasteles: `
        <div class="direction-row">
      <div class="cake-card">
        <a href="/Nueva carpeta/compras.html">
        <img src="/img/cakes/pastel-de-chocolate.png" alt="Pastel De Chocolate">
        </a>
        <h3>Pastel De Chocolate</h3>
          <div class="contenido-card">
            <p>S/ 37.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
          </div>
      </div>
    </a>
      <div class="cake-card">
        <a href="/Nueva carpeta/compras.html">
        <img src="/img/cakes/pastel-de-vainilla.png" alt="Pastel De Vainilla">
        </a>
        <h3>Pastel De Vainilla </h3>
          <div class="contenido-card">
            
            <p>S/ 30.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel de Vainilla" data-price="S/ 30.00">Añadir al carrito</button>
          </div>
      </div>
      <div class="cake-card">
        <a href="/Nueva carpeta/compras.html">
        <img src="/img/cakes/pastel-lucuma.png" alt="Pastel De Lúcuma">
        </a>
        <h3>Pastel De Lúcuma</h3>
          <div class="contenido-card">
            
            <p>S/ 42.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Lúcuma" data-price="S/ 42.00">Añadir al carrito</button>
          </div>
      </div>
      <div class="cake-card">
        <a href="/Nueva carpeta/compras.html">
        <img src="/img/cakes/pastel-fresa.png" alt="Cheesecake De Fresa">
        </a>
        <h3>Cheesecake De Fresa</h3>
          <div class="contenido-card">
            
            <p>S/ 52.00</p>
            <button class="add-to-cart" data-id="1" data-name="Cheesecake De Fresa" data-price="S/ 52.00">Añadir al carrito</button>
          </div>
      </div>
      <div class="cake-card">
        <a href="/Nueva carpeta/compras.html">
        <img src="/img/cakes/Torta-3-leches.png" alt="Cheesecake De Fresa">
        </a>
        <h3>Torta de Tres Leches</h3>
          <div class="contenido-card">
            <p>S/ 35.00</p>
            <button class="add-to-cart" data-id="1" data-name="Torta de Tres Leches" data-price="S/ 35.00">Añadir al carrito</button>
          </div>
        </a>
      </div>
      <div class="cake-card">
        <a href="/Nueva carpeta/compras.html">
        <img src="/img/cakes/Pastel-selva-negra.png" alt="Cheesecake De Fresa">
        </a>
        <h3>Pastel Selva Negra</h3>
          <div class="contenido-card">
            
            <p>S/ 35.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel Selva Negra" data-price="S/ 35.00">Añadir al carrito</button>
          </div>
      </div>
      <div class="cake-card">
        <a href="/Nueva carpeta/compras.html">
        <img src="/img/cakes/Pastel-de-manzana.png" alt="Cheesecake De Fresa">
        </a>
        <h3>Pastel de Manzana</h3>
          <div class="contenido-card">
            
            <p>S/ 25.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel de Manzana" data-price="S/ 25.00">Agregar al carrito</button>
          </div>
      </div>
      <div class="cake-card">
        <a href="/Nueva carpeta/compras.html">
        <img src="/img/cakes/Pastel-de-maracuyá.png" alt="Cheesecake De Fresa">
        </a>
        <h3>Pastel de Maracuyá</h3>
          <div class="contenido-card">
            
            <p>S/ 52.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel de Maracuyá" data-price="S/ 52.00">Agregar al carrito</button>
          </div>
      </div>
    </div> 
    `,
    galletas: `
        <div class="direction-row">
      <div class="cake-card">
      <a href="/interfaz-compras.html">
        <img src="/img/galletas/chocolate-chips.png" alt="Pastel De Chocolate">
      </a>
        <h3>Chocolate chips</h3>
          <div class="contenido-card">
            <p>S/ 5.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
          </div>
      </div>

      <div class="cake-card">
      <a href="/interfaz-compras.html">
        <img src="/img/galletas/oreo.png" alt="Oreo">
      </a>
        <h3>Oreo </h3>
          <div class="contenido-card">
            <p>S/ 2.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
          </div>
      </div>

      <div class="cake-card">
      <a href="/interfaz-compras.html">
        <img src="/img/galletas/galleta-de-jengibre.png" alt="Galleta de Jengibre">
        </a>
        <h3>Galleta de Jengibre</h3>
          <div class="contenido-card">
            <p>S/ 4.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
          </div>
      </div>

      <div class="cake-card">
      <a href="/interfaz-compras.html">
        <img src="/img/galletas/macarons.png" alt="Macarons">
      </a>
        <h3>Maracons</h3>
          <div class="contenido-card">
            <p>S/ 6.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
          </div>
      </div>
    </div> 
    `,
    postres: `
      <div class="direction-row">
      <div class="cake-card">
      <a href="/interfaz-compras.html">
        <img src="/img/postres/crema-volteada.png" alt="Pastel De Chocolate">
      </a>
        <h3>Crema Volteada</h3>
          <div class="contenido-card">
            <p>S/ 8.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
          </div>
      </div>

      <div class="cake-card">
      <a href="/interfaz-compras.html">
        <img src="/img/postres/alfajor.png" alt="Pastel De Vainilla">
      </a>
        <h3>Alfajor</h3>
          <div class="contenido-card">
            <p>S/ 3.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
          </div>
      </div>
    
    <div class="cake-card">
    <a href="/interfaz-compras.html">
      <img src="/img/postres/postre-galleta.png" alt="Cupcake Red Velvet">
    </a>
      <h3>Postre de Galleta </h3>
        <div class="contenido-card">
          <p>S/ 6.00</p>
          <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
        </div>
    </div>
  
  <div class="cake-card">
  <a href="/interfaz-compras.html">
    <img src="/img/postres/arroz-con-leche.png" alt="Cupcake de Fresa">
  </a>
    <h3>Arroz con Leche </h3>
      <div class="contenido-card">
        <p>S/ 8.00</p>
        <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
      </div>
  </div>
</div>
    `,
    cupcakes: `
    <div class="direction-row">
      <div class="cake-card">
      <a href="/interfaz-compras.html">
        <img src="/img/cupcakes/cupcake-vainilla.png" alt="Pastel De Chocolate">
      </a>
        <h3>Cupcake de Vainilla</h3>
          <div class="contenido-card">
            <p>S/ 5.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
          </div>
      </div>

      <div class="cake-card">
      <a href="/interfaz-compras.html">
        <img src="/img/cupcakes/cupcake-de-amor.png" alt="Pastel De Vainilla">
      </a>
        <h3>Cupcakes de Amor </h3>
          <div class="contenido-card">
            <p>S/ 25.00</p>
            <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
          </div>
      </div>
    
    <div class="cake-card">
    <a href="/interfaz-compras.html">
      <img src="/img/cupcakes/cupcake-red-velvet.png" alt="Cupcake Red Velvet">
    </a>
      <h3>Cupcake Red Velvet </h3>
        <div class="contenido-card">
          <p>S/ 9.00</p>
          <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
        </div>
    </div>
  
  <div class="cake-card">
  <a href="/interfaz-compras.html">
    <img src="/img/cupcakes/cupcake-de-fresa.png" alt="Cupcake de Fresa">
  </a>
    <h3>Cupcake de Fresa </h3>
      <div class="contenido-card">
        <p>S/ 8.00</p>
        <button class="add-to-cart" data-id="1" data-name="Pastel De Chocolate" data-price="S/ 37.00">Agregar al carrito</button>
      </div>
  </div>
</div>   

  `
};
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        event.preventDefault();

        // Eliminar la clase 'active' de todos los enlaces
        enlaces.forEach(enlace => enlace.classList.remove('active'));
        
        // Añadir la clase 'active' al enlace clicado
        this.classList.add('active');

        // Actualizar el contenido de la sección de productos
        const categoria = this.getAttribute('href').substring(1);
        productSection.innerHTML = productos[categoria];
    });
});
