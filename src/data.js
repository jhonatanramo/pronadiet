/* src/data.js - Datos de configuración */

// Importación de imágenes (ajusta las rutas según tu estructura final)
import producto1 from './assets/productos/Captura_de_pantalla_2025-10-23_174209-removebg-preview.png';
import producto2 from './assets/productos/Captura_de_pantalla_2025-10-23_174219-removebg-preview.png';
import producto3 from './assets/productos/Captura_de_pantalla_2025-10-23_174227-removebg-preview.png';
import producto4 from './assets/productos/Captura_de_pantalla_2025-10-23_174338-removebg-preview.png';
import producto5 from './assets/productos/Captura_de_pantalla_2025-10-23_174439-removebg-preview.png';

export const NAV_LINKS = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#vision', text: 'Visión General' },
    { href: '#productos', text: 'Productos' },
    { href: '#pedidos', text: 'Pedidos' },
    { href: '#entregas', text: 'Entregas' }
];

export const PRODUCTOS_DATA = [
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

export const PHONE_NUMBER = "591750575472";