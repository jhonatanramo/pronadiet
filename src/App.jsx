import { useEffect } from 'react';
import Css from './pages/new.module.css';
import Logo_Verde_letra from '../public/imagenes/logos/Logo_fondo_verde_con_letra.png';
import Logo_Blando from '../public/imagenes/logos/logo_letra_costado.png';

// Productos
import producto1 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174209-removebg-preview.png';
import producto2 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174219-removebg-preview.png';
import producto3 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174227-removebg-preview.png';
import producto4 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174338-removebg-preview.png';
import producto5 from '../public/imagenes/productos/Captura_de_pantalla_2025-10-23_174439-removebg-preview.png';

const Nombres_Productos = ['Linaza', 'Chía', 'Sésamo', 'Milaneza', 'Avena'];
const Detalle_productos = [
  'La linaza es rica en omega-3, fibra y proteínas vegetales, ideal para mejorar la digestión.',
  'La chía es una semilla energética que aporta calcio, hierro y ácidos grasos esenciales.',
  'El sésamo contiene minerales importantes como magnesio, zinc y calcio.',
  'La milaneza es una opción saludable, rica en proteínas vegetales.',
  'La avena ayuda a reducir el colesterol y aporta energía sostenida.'
];

function App() {
  const productos = [producto1, producto2, producto3, producto4, producto5];

  // 👉 Función para abrir WhatsApp
  const handleWhatsAppClick = () => {
    const phoneNumber = "591750575472"; // tu número de WhatsApp
    const message = "Hola, me gustaría obtener más información sobre sus productos.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // 👉 Interactividad con el DOM: mostrar/ocultar detalle de productos
  useEffect(() => {
    const botones = document.querySelectorAll(`.${Css.contenedor} button`);
    botones.forEach((boton, index) => {
      boton.addEventListener('click', () => {
        const detalle = document.querySelectorAll(`.${Css.contenedor2}`)[index];
        if (detalle.style.display === 'flex') {
          detalle.style.display = 'none';
        } else {
          detalle.style.display = 'flex';
        }
      });
    });
  }, []);

  return (
    <div className={Css.fondo}>
      {/* Botón flotante de WhatsApp */}
      <div className={Css.whatsApp} onClick={handleWhatsAppClick}>
        <ion-icon name="logo-whatsapp"></ion-icon>
      </div>

      {/* Barra de navegación */}
      <nav className={Css.logo}>
        <div className={Css.logo_sub}>
          <div className={Css.cabeza1}>
            <img src={Logo_Blando} alt="Logo Blanco" />
          </div>
          <div className={Css.cabeza2}>
            <a href="#11">Visión General</a>
            <a href="#22">Productos</a>
            <a href="#33">Pedido</a>
            <a href="#44">Entregas</a>
          </div>
        </div>
        <div className={Css.img}></div>
      </nav>

      {/* Sección principal con logo centrado */}
      <div className={`${Css.caja} ${Css.centrar}`}>
        <img 
          src={Logo_Verde_letra} 
          alt="Logo Verde" 
          style={{ maxWidth: '80%', height: 'auto', maxHeight: '70vh' }} 
        />
      </div>

      {/* Secciones */}
      <div id="11" className={`${Css.caja} ${Css.blanco}`}>
        <h1>Sección Visión General</h1>
      </div>

      <div id="22" className={`${Css.caja} ${Css.verde}`}>
        <h1>Productos <hr /></h1><br />
        <div className={Css.scrol}>
          {productos.map((prod, i) => (
            <div className={Css.contenedor} key={i}>
              <img src={prod} alt={`Producto ${i + 1}`} />
              <h2>{Nombres_Productos[i]}</h2>
              <button>Información</button>
              <div className={Css.contenedor2}>
                <p>{Detalle_productos[i]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="33" className={`${Css.caja} ${Css.blanco}`}>
        <h1>Sección Pedido</h1>
      </div>

      <div id="44" className={`${Css.caja} ${Css.verde}`}>
        <h1 style={{ color: 'white' }}>Sección Entregas</h1>
      </div>
    </div>
  );
}

export default App;
