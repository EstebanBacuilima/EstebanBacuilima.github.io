import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/utils';

import posMain from '../assets/projects/pos/pos.png';
import posDashboard from '../assets/projects/pos/dashboard.png';
import posCash from '../assets/projects/pos/cash.png';
import posProducts from '../assets/projects/pos/products.png';
import posSales from '../assets/projects/pos/sales.png';
import posTables from '../assets/projects/pos/tables.png';
import posOrders from '../assets/projects/pos/orders.png';

import toolDashboard from '../assets/projects/tool/dashboard.png';
import toolOrderList from '../assets/projects/tool/orderList.png';
import toolCustomers from '../assets/projects/tool/customerAndVehicles.png';
import toolInventory from '../assets/projects/tool/inventory.png';
import toolServices from '../assets/projects/tool/serviceList.png';
import toolOrderDetail from '../assets/projects/tool/orderDetail.png';

import eduSales from '../assets/projects/edu/proyectoUno.png';
import eduVet from '../assets/projects/edu/proyectoDos.png';
import eduAdoption from '../assets/projects/edu/proyectoTres.png';
import eduUsers from '../assets/projects/edu/proyectoCuatro.jpeg';
import eduRickMorty from '../assets/projects/edu/proyectoCincoPt2.png';
import eduSies from '../assets/projects/edu/proyectoSiesF.jpeg';

export interface Screenshot {
  image: ImageMetadata;
  label: Localized;
  alt: Localized;
}

export interface Feature {
  title: Localized;
  text: Localized;
}

export interface Project {
  id: string;
  name: string;
  tagline: Localized;
  description: Localized;
  /** What "multi-location" means for this product. */
  tenancy: Localized;
  features: Feature[];
  /** Stack verified against the project's repositories. */
  tech: string[];
  screenshots: Screenshot[];
  demoMessage: Localized;
  /** Order states shown as a timeline (DomifyTool only). */
  flow?: Localized<string[]>;
}

export const projects: Project[] = [
  {
    id: 'domify-pos',
    name: 'DomifyPOS',
    tagline: {
      es: 'Punto de venta SaaS para restaurantes y comercios',
      en: 'SaaS point of sale for restaurants and shops',
    },
    description: {
      es: 'Punto de venta en la nube para vender, cobrar y controlar la caja.',
      en: 'Cloud point of sale to sell, charge and manage the cash register.',
    },
    tenancy: {
      es: 'Multi-local: varios locales, una sola cuenta.',
      en: 'Multi-location: several locations, one account.',
    },
    features: [
      { title: { es: 'Gestión de productos', en: 'Product management' }, text: { es: 'Catálogo con categorías, imágenes, SKU y búsqueda rápida.', en: 'Catalog with categories, images, SKU and fast search.' } },
      { title: { es: 'Caja registradora', en: 'Cash register' }, text: { es: 'Apertura, ingresos, gastos, vuelto y cierre de caja del día.', en: 'Opening, income, expenses, change and end-of-day closing.' } },
      { title: { es: 'Impresión de tickets', en: 'Ticket printing' }, text: { es: 'Compatible con impresora térmica para recibos al instante y gaveta de dinero.', en: 'Works with thermal printers for instant receipts and a cash drawer.' } },
      { title: { es: 'Comandas a cocina', en: 'Kitchen orders' }, text: { es: 'Pedidos enviados a cocina en tiempo real.', en: 'Orders sent to the kitchen in real time.' } },
      { title: { es: 'Mesas', en: 'Tables' }, text: { es: 'Toma de pedidos y cobro por mesa.', en: 'Order taking and payment per table.' } },
      { title: { es: 'Reportería', en: 'Reporting' }, text: { es: 'Ventas, rentabilidad, productos top y dinero por método de pago.', en: 'Sales, profitability, top products and money per payment method.' } },
    ],
    tech: ['Angular 20', 'TypeScript', 'ng-zorro-antd', 'SignalR', '.NET 10', 'PostgreSQL', 'Entity Framework Core'],
    screenshots: [
      { image: posMain, label: { es: 'Punto de venta', en: 'Point of sale' }, alt: { es: 'Punto de venta web con catálogo de productos y carrito de cobro', en: 'Web point of sale with product catalog and checkout cart' } },
      { image: posDashboard, label: { es: 'Reportería', en: 'Reporting' }, alt: { es: 'Panel de reportería con ventas, rentabilidad y estadísticas', en: 'Reporting dashboard with sales, profitability and statistics' } },
      { image: posCash, label: { es: 'Caja registradora', en: 'Cash register' }, alt: { es: 'Módulo de caja con apertura, movimientos y cierre', en: 'Cash module with opening, movements and closing' } },
      { image: posProducts, label: { es: 'Productos', en: 'Products' }, alt: { es: 'Módulo de productos con categorías, imágenes y precios', en: 'Products module with categories, images and prices' } },
      { image: posSales, label: { es: 'Ventas', en: 'Sales' }, alt: { es: 'Listado de ventas con detalle y anulación', en: 'Sales list with detail and voiding' } },
      { image: posTables, label: { es: 'Pedido de mesa', en: 'Table order' }, alt: { es: 'Módulo para tomar pedidos de mesa', en: 'Module for taking table orders' } },
      { image: posOrders, label: { es: 'Comandas', en: 'Kitchen orders' }, alt: { es: 'Módulo de comandas en cocina', en: 'Kitchen orders module' } },
    ],
    demoMessage: {
      es: 'Hola Esteban, quiero solicitar una demo de DomifyPOS.',
      en: "Hi Esteban, I'd like to request a demo of DomifyPOS.",
    },
  },
  {
    id: 'domify-tool',
    name: 'DomifyTool',
    tagline: {
      es: 'Gestión SaaS para talleres automotrices',
      en: 'SaaS management for auto repair workshops',
    },
    description: {
      es: 'Panel web para gestionar un taller, del presupuesto al cobro.',
      en: 'Web panel to run a workshop, from quotation to payment.',
    },
    tenancy: {
      es: 'Multi-taller: varios talleres, una sola cuenta.',
      en: 'Multi-workshop: several workshops, one account.',
    },
    features: [
      { title: { es: 'Órdenes de trabajo', en: 'Work orders' }, text: { es: 'Nace como presupuesto, el cliente aprueba y pasa a orden activa.', en: 'Starts as a quotation; once approved it becomes an active order.' } },
      { title: { es: 'Clientes y vehículos', en: 'Customers and vehicles' }, text: { es: 'Placa, marca, modelo y kilometraje, con historial de servicio.', en: 'Plate, make, model and mileage, with service history.' } },
      { title: { es: 'Repuestos e inventario', en: 'Parts and inventory' }, text: { es: 'Stock por taller con descuento automático al cerrar la orden.', en: 'Stock per workshop, deducted automatically when the order closes.' } },
      { title: { es: 'Mano de obra', en: 'Labor and services' }, text: { es: 'Catálogo con precio estándar, mecánico asignado y horas trabajadas.', en: 'Catalog with standard price, assigned mechanic and hours worked.' } },
      { title: { es: 'Cobros y saldos', en: 'Payments and balances' }, text: { es: 'Totales con IVA, pagos parciales y saldo pendiente en cada orden.', en: 'Totals with VAT, partial payments and outstanding balance on each order.' } },
      { title: { es: 'Multi-taller', en: 'Multi-workshop' }, text: { es: 'Cada taller con sus propias tarifas, markup e IVA.', en: 'Each workshop with its own rates, markup and VAT.' } },
    ],
    tech: ['Angular 22', 'TypeScript', 'Tailwind CSS', '.NET 10', 'PostgreSQL', 'Entity Framework Core'],
    screenshots: [
      { image: toolDashboard, label: { es: 'Panel del taller', en: 'Workshop dashboard' }, alt: { es: 'Panel de inicio con datos de la empresa, el taller activo y las órdenes recientes', en: 'Home dashboard with company data, active workshop and recent orders' } },
      { image: toolOrderList, label: { es: 'Órdenes de trabajo', en: 'Work orders' }, alt: { es: 'Listado de órdenes con búsqueda y filtros por estado y por cobro', en: 'Order list with search and filters by status and payment' } },
      { image: toolCustomers, label: { es: 'Clientes y vehículos', en: 'Customers and vehicles' }, alt: { es: 'Ficha de cliente con sus datos de contacto y los vehículos asociados con placa y kilometraje', en: 'Customer record with contact details and linked vehicles with plate and mileage' } },
      { image: toolInventory, label: { es: 'Inventario', en: 'Inventory' }, alt: { es: 'Inventario de repuestos con categoría, marca, precio y stock', en: 'Parts inventory with category, brand, price and stock' } },
      { image: toolServices, label: { es: 'Servicios', en: 'Services' }, alt: { es: 'Catálogo de servicios de mano de obra con precio y estado', en: 'Labor services catalog with price and status' } },
      { image: toolOrderDetail, label: { es: 'Detalle de orden', en: 'Order detail' }, alt: { es: 'Detalle de una orden con mano de obra, repuestos, totales, pagos e historial', en: 'Order detail with labor, parts, totals, payments and history' } },
    ],
    flow: {
      es: ['Recepción', 'Inspección', 'Cotización', 'En reparación', 'Completado'],
      en: ['Intake', 'Inspection', 'Quotation', 'In repair', 'Completed'],
    },
    demoMessage: {
      es: 'Hola Esteban, quiero solicitar una demo de DomifyTool.',
      en: "Hi Esteban, I'd like to request a demo of DomifyTool.",
    },
  },
];

export interface EducationalProject {
  id: string;
  title: Localized;
  kind: Localized;
  image: ImageMetadata;
  /** Only technologies stated in the original portfolio. */
  tech: string[];
}

export const educationalProjects: EducationalProject[] = [
  { id: 'sales', title: { es: 'Sistema de ventas', en: 'Sales system' }, kind: { es: 'Aplicación de escritorio', en: 'Desktop application' }, image: eduSales, tech: ['Java', 'NetBeans', 'MVC'] },
  { id: 'vet', title: { es: 'Sistema de veterinaria', en: 'Veterinary system' }, kind: { es: 'Aplicación de escritorio', en: 'Desktop application' }, image: eduVet, tech: ['Java', 'NetBeans', 'MVC'] },
  { id: 'adoption', title: { es: 'Adopción de mascotas', en: 'Pet adoption' }, kind: { es: 'Sistema web', en: 'Web system' }, image: eduAdoption, tech: [] },
  { id: 'users-api', title: { es: 'Consumo de API de usuarios', en: 'Users API client' }, kind: { es: 'Consumo de API con React', en: 'API consumption with React' }, image: eduUsers, tech: ['React'] },
  { id: 'rick-morty', title: { es: 'Rick and Morty', en: 'Rick and Morty' }, kind: { es: 'Consumo de API con React', en: 'API consumption with React' }, image: eduRickMorty, tech: ['React'] },
  {
    id: 'sies',
    title: { es: 'Sistema de cursos y capacitaciones', en: 'Courses and training system' },
    kind: { es: 'Sistema web colaborativo', en: 'Collaborative web system' },
    image: eduSies,
    tech: ['Java', 'Spring Boot', 'Angular'],
  },
];
