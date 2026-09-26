export const appData = {
  brandName: "DevPortafolio",
  navLinks: [
    { id: 1, label: 'Inicio', url: '#', active: true },
    { id: 2, label: 'Servicios', url: '#', active: false },
    { id: 3, label: 'Contacto', url: '#', active: false }
  ],
  services: [
    { 
      id: 1, 
      title: 'Desarrollo Frontend', 
      img: 'https://picsum.photos/id/0/400/250', 
      desc: 'Creación de interfaces web dinámicas utilizando HTML, CSS, JavaScript y frameworks modernos.' 
    },
    { 
      id: 2, 
      title: 'Bases de Datos', 
      img: 'https://picsum.photos/id/119/400/250', 
      desc: 'Diseño y gestión de esquemas de bases de datos relacionales (MySQL) y NoSQL (MongoDB).' 
    },
    { 
      id: 3, 
      title: 'Desarrollo Móvil', 
      img: 'https://picsum.photos/id/160/400/250', 
      desc: 'Aplicaciones multiplataforma nativas e híbridas diseñadas para funcionar en cualquier dispositivo.' 
    }
  ]
};