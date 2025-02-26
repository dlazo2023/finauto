interface IProducts {
  id: number;
  nombredelproducto: string;
  descripion: string;
  módulo: string;
  nombre: string;
  apellidos: string;
  correo: string;
  teléfono: string;
}

const productos: Array<IProducts> = [
  {
    id: 1,
    nombredelproducto: "Toyota Corolla 2022",
    descripion:
      "Sedán compacto con excelente eficiencia de combustible y tecnología avanzada.",
    módulo: "carro",
    nombre: "Carlos",
    apellidos: "González",
    correo: "carlos.gonzalez@example.com",
    teléfono: "+34 612 345 678",
  },
  {
    id: 2,
    nombredelproducto: "Filtro de Aceite Bosch",
    descripion:
      "Filtro de aceite de alto rendimiento que prolonga la vida del motor.",
    módulo: "piezas",
    nombre: "Laura",
    apellidos: "Martínez",
    correo: "laura.martinez@example.com",
    teléfono: "+34 623 456 789",
  },
  {
    id: 3,
    nombredelproducto: "Compresor de Aire Portátil",
    descripion:
      "Ideal para inflar neumáticos y realizar tareas de mantenimiento en el garaje.",
    módulo: "equipamiento de garaje",
    nombre: "José",
    apellidos: "Fernández",
    correo: "jose.fernandez@example.com",
    teléfono: "+34 634 567 890",
  },
  {
    id: 4,
    nombredelproducto: "Pastillas de Freno Brembo",
    descripion:
      "Pastillas de freno de alto rendimiento para una frenada segura y eficaz.",
    módulo: "piezas",
    nombre: "Ana",
    apellidos: "López",
    correo: "ana.lopez@example.com",
    teléfono: "+34 645 678 901",
  },
  {
    id: 5,
    nombredelproducto: "Elevador Hidráulico de 2 Columnas",
    descripion:
      "Equipo profesional para elevar vehículos y facilitar reparaciones.",
    módulo: "equipamiento de garaje",
    nombre: "Miguel",
    apellidos: "Ramírez",
    correo: "miguel.ramirez@example.com",
    teléfono: "+34 656 789 012",
  },
  {
    id: 6,
    nombredelproducto: "Mazda CX-5 2024",
    descripion:
      "SUV compacto con tecnología avanzada y diseño elegante para toda la familia.",
    módulo: "carro",
    nombre: "Sofía",
    apellidos: "Hernández",
    correo: "sofia.hernandez@example.com",
    teléfono: "+34 667 890 123",
  },
  {
    id: 7,
    nombredelproducto: "Amortiguadores Monroe",
    descripion:
      "Amortiguadores de alta calidad para una conducción cómoda y segura.",
    módulo: "piezas",
    nombre: "Daniel",
    apellidos: "Ruiz",
    correo: "daniel.ruiz@example.com",
    teléfono: "+34 678 901 234",
  },
  {
    id: 8,
    nombredelproducto: "Rampa Hidráulica para Garaje",
    descripion:
      "Facilita la elevación de vehículos para mantenimiento y reparación.",
    módulo: "equipamiento de garaje",
    nombre: "Isabel",
    apellidos: "Moreno",
    correo: "isabel.moreno@example.com",
    teléfono: "+34 689 012 345",
  },
  {
    id: 9,
    nombredelproducto: "Juego de Neumáticos Michelin",
    descripion:
      "Neumáticos duraderos que ofrecen un excelente agarre y seguridad.",
    módulo: "piezas",
    nombre: "Pedro",
    apellidos: "Vega",
    correo: "pedro.vega@example.com",
    teléfono: "+34 690 123 456",
  },
  {
    id: 10,
    nombredelproducto: "Caja de Herramientas Stanley",
    descripion:
      "Conjunto completo de herramientas para trabajos de mantenimiento y reparación.",
    módulo: "equipamiento de garaje",
    nombre: "Lucía",
    apellidos: "Castro",
    correo: "lucia.castro@example.com",
    teléfono: "+34 601 234 567",
  },
];

export type { IProducts };
export default productos;
