import { useState, useEffect } from 'react';
import Css from './pages/new.module.css';

// Importación de imágenes
import Logo_Verde_letra from '../public/imagenes/logos/Logo_fondo_verde_con_letra.png';
import Logo_Blando from '../public/imagenes/logos/logo_letra_costado.png';

// Productos
import producto1 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174209-removebg-preview.png';
import producto2 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174219-removebg-preview.png';
import producto3 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174227-removebg-preview.png';
import producto4 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174338-removebg-preview.png';
import producto5 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174439-removebg-preview.png';

// Datos de productos
const productosData = [
  {
    id: 1,
    nombre: 'Linaza',
    imagen: producto1,
    descripcion: 'La linaza es rica en omega-3, fibra y proteínas vegetales, ideal para mejorar la digestión.',
    beneficios: ['Mejora la digestión', 'Fuente de omega-3', 'Rica en fibra']
  },
  {
    id: 2,
    nombre: 'Chía',
    imagen: producto2,
    descripcion: 'La chía es una semilla energética que aporta calcio, hierro y ácidos grasos esenciales.',
    beneficios: ['Aporta energía', 'Fuente de calcio', 'Rica en hierro']
  },
  {
    id: 3,
    nombre: 'Sésamo',
    imagen: producto3,
    descripcion: 'El sésamo contiene minerales importantes como magnesio, zinc y calcio.',
    beneficios: ['Alto en minerales', 'Fuente de magnesio', 'Contiene zinc y calcio']
  },
  {
    id: 4,
    nombre: 'Milaneza',
    imagen: producto4,
    descripcion: 'La milaneza es una opción saludable, rica en proteínas vegetales.',
    beneficios: ['Rica en proteínas', 'Opción saludable', 'Versátil en cocina']
  },
  {
    id: 5,
    nombre: 'Avena',
    imagen: producto5,
    descripcion: 'La avena ayuda a reducir el colesterol y aporta energía sostenida.',
    beneficios: ['Reduce colesterol', 'Energía sostenida', 'Rica en fibra']
  }
];

function App() {
  const [productos] = useState(productosData);
  const [productoActivo, setProductoActivo] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para abrir WhatsApp
  const handleWhatsAppClick = (producto = null) => {
    const phoneNumber = "591750575472";
    let message = "Hola, me gustaría obtener más información sobre sus productos.";
    
    if (producto) {
      message = `Hola, me interesa el producto: ${producto.nombre}. ¿Podrían darme más información?`;
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Alternar detalles del producto
  const toggleDetallesProducto = (id) => {
    setProductoActivo(productoActivo === id ? null : id);
  };

  // Cerrar menú al hacer clic en un enlace (en móviles)
  const cerrarMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuAbierto(false);
    }
  };

  // Cerrar menú al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuAbierto(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={Css.fondo}>
      {/* Botón flotante de WhatsApp */}
      <div 
        className={Css.whatsApp} 
        onClick={() => handleWhatsAppClick()}
        aria-label="Contactar por WhatsApp"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleWhatsAppClick()}
      >
        <ion-icon name="logo-whatsapp"></ion-icon>
      </div>

      {/* Barra de navegación */}
      <header className={Css.logo}>
        <div className={Css.logo_sub}>
          <div className={Css.cabeza1}>
            <img src={Logo_Blando} alt="Logo Natural Foods" />
          </div>
          
          {/* Menú hamburguesa para móviles */}
          <button 
            className={`${Css.menuHamburguesa} ${menuAbierto ? Css.menuAbierto : ''}`}
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú de navegación"
            aria-expanded={menuAbierto}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`${Css.cabeza2} ${menuAbierto ? Css.menuVisible : ''}`}>
            <a href="#inicio" onClick={cerrarMenu}>Inicio</a>
            <a href="#vision" onClick={cerrarMenu}>Visión General</a>
            <a href="#productos" onClick={cerrarMenu}>Productos</a>
            <a href="#pedidos" onClick={cerrarMenu}>Pedidos</a>
            <a href="#entregas" onClick={cerrarMenu}>Entregas</a>
          </nav>
        </div>
        <div className={Css.img}></div>
      </header>

      <main>
        {/* Sección principal con logo centrado */}
        <section id="inicio" className={`${Css.caja} ${Css.centrar} ${Css.hero}`}>
          <img 
            src={Logo_Verde_letra} 
            alt="Natural Foods - Productos naturales de calidad" 
            className={Css.logoPrincipal}
          />
          <p className={Css.heroTexto}>Productos naturales de la más alta calidad para tu bienestar</p>
        </section>

        {/* Sección Visión General */}
        <section id="vision" className={`${Css.caja} ${Css.blanco}`}>
          <div className={Css.contenidoSeccion}>
            <h1>Nuestra Visión</h1>
            <div className={Css.gridVision}>
              <div className={Css.cardVision}>
                <h3>Calidad</h3>
                <p>Seleccionamos cuidadosamente cada producto para garantizar la máxima calidad y frescura.</p>
              </div>
              <div className={Css.cardVision}>
                <h3>Salud</h3>
                <p>Promovemos una alimentación saludable con productos naturales y nutritivos.</p>
              </div>
              <div className={Css.cardVision}>
                <h3>Sostenibilidad</h3>
                <p>Trabajamos con proveedores responsables con el medio ambiente.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Productos */}
        <section id="productos" className={`${Css.caja} ${Css.verde}`}>
          <div className={Css.contenidoSeccion}>
            <h1>Nuestros Productos</h1>
            <p className={Css.subtitulo}>Descubre nuestra selección de productos naturales</p>
            
            <div className={Css.scrol}>
              {productos.map((producto) => (
                <div 
                  className={`${Css.contenedor} ${productoActivo === producto.id ? Css.activo : ''}`} 
                  key={producto.id}
                >
                  <img src={producto.imagen} alt={producto.nombre} />
                  <h2>{producto.nombre}</h2>
                  <button 
                    onClick={() => toggleDetallesProducto(producto.id)}
                    aria-expanded={productoActivo === producto.id}
                  >
                    {productoActivo === producto.id ? 'Cerrar' : 'Información'}
                  </button>
                  
                  <div 
                    className={Css.contenedor2}
                    style={{ display: productoActivo === producto.id ? 'flex' : 'none' }}
                  >
                    <button 
                      className={Css.cerrarDetalle}
                      onClick={() => setProductoActivo(null)}
                      aria-label="Cerrar detalles del producto"
                    >
                      ×
                    </button>
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <ul>
                      {producto.beneficios.map((beneficio, index) => (
                        <li key={index}>{beneficio}</li>
                      ))}
                    </ul>
                    <button 
                      className={Css.botonWhatsappProducto}
                      onClick={() => handleWhatsAppClick(producto)}
                    >
                      Consultar por WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Pedidos */}
        <section id="pedidos" className={`${Css.caja} ${Css.blanco}`}>
          <div className={Css.contenidoSeccion}>
            <h1>Realiza tu Pedido</h1>
            <div className={Css.pasosPedido}>
              <div className={Css.paso}>
                <div className={Css.numeroPaso}>1</div>
                <h3>Elige tus productos</h3>
                <p>Selecciona los productos que deseas ordenar de nuestro catálogo.</p>
              </div>
              <div className={Css.paso}>
                <div className={Css.numeroPaso}>2</div>
                <h3>Contáctanos</h3>
                <p>Envíanos un mensaje por WhatsApp con tu pedido.</p>
              </div>
              <div className={Css.paso}>
                <div className={Css.numeroPaso}>3</div>
                <h3>Recibe tu pedido</h3>
                <p>Coordinamos la entrega según tu ubicación y preferencias.</p>
              </div>
            </div>
            <button 
              className={Css.botonAccion}
              onClick={() => handleWhatsAppClick()}
            >
              Hacer Pedido por WhatsApp
            </button>
          </div>
        </section>

        {/* Sección Entregas */}
        <section id="entregas" className={`${Css.caja} ${Css.verde}`}>
          <div className={Css.contenidoSeccion}>
            <h1>Zonas de Entrega</h1>
            <div className={Css.infoEntrega}>
              <div className={Css.zonaEntrega}>
                <h3>Área Metropolitana</h3>
                <p>Entregas en 24-48 horas</p>
              </div>
              <div className={Css.zonaEntrega}>
                <h3>Otras Ciudades</h3>
                <p>Consultar disponibilidad y tiempos</p>
              </div>
              <div className={Css.zonaEntrega}>
                <h3>Envíos Nacionales</h3>
                <p>Coordinamos envíos a todo el país</p>
              </div>
            </div>
            <div className={Css.contactoDirecto}>
              <p>¿Tienes dudas sobre entregas?</p>
              <button 
                className={Css.botonAccion}
                onClick={() => handleWhatsAppClick()}
              >
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className={Css.footer}>
        <div className={Css.contenidoFooter}>
          <div className={Css.infoFooter}>
            <img src={Logo_Blando} alt="Natural Foods" className={Css.logoFooter} />
            <p>Productos naturales para una vida saludable</p>
          </div>
          <div className={Css.enlacesFooter}>
            <a href="#inicio">Inicio</a>
            <a href="#productos">Productos</a>
            <a href="#pedidos">Pedidos</a>
          </div>
          <div className={Css.contactoFooter}>
            <p>Síguenos en redes sociales</p>
            <div className={Css.redesSociales}>
              <a href="#" aria-label="Facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#" aria-label="Instagram">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
        </div>
        <div className={Css.derechos}>
          <p>&copy; {new Date().getFullYear()} Natural Foods. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;