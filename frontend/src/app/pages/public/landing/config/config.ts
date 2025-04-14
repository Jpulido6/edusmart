
interface FeatureCardItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
interface TestimonialCardItem {
  quote: string;
  author: string;
  role: string;
}
interface PricingCardItem {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
  highlighted?: boolean;
}
interface FqaItem {
  question: string;
  answer: string;
}

export const feature: FeatureCardItem[] = [
  {
    title: "Gestión de estudiantes",
    description:
      "Administra perfiles de estudiantes, asistencia, calificaciones y más en un solo lugar.",
    icon: 'users',
  },
  {
    title: "Gestión de profesores",
    description:
      "Organiza horarios, asignaciones y evaluaciones de desempeño para tu equipo docente.",
    icon: 'GraduationCap',
  },
  {
    title: "Gestión de clases",
    description:
      "Crea y administra clases, horarios y asignaciones de manera sencilla.",
    icon: 'BookOpen',
  },
  {
    title: "Informes y análisis",
    description:
      "Obtén estadísticas detalladas sobre rendimiento académico y operaciones escolares.",
    icon: 'BarChart4',
  },
  {
    title: "Asistencia y calificaciones",
    description:
      "Seguimiento de asistencia y sistema de calificaciones integrado.",
    icon: 'CheckCircle',
  },
  {
    title: "Portal para padres",
    description:
      "Mantén a los padres informados sobre el progreso de sus hijos.",
    icon: 'Users',
  },
];

export const testimonial: TestimonialCardItem[] = [
  {
    quote:
      "EduSmart ha transformado la forma en que administramos nuestra escuela. Ahora todo es más eficiente y organizado.",
    author: "María Rodríguez",
    role: "Directora, Colegio San José",
  },
  {
    quote:
      "Como profesor, puedo concentrarme en enseñar en lugar de lidiar con papeleo. La plataforma es intuitiva y fácil de usar.",
    author: "Carlos Mendoza",
    role: "Profesor de Matemáticas",
  },
  {
    quote:
      "La comunicación con los padres ha mejorado significativamente desde que implementamos EduSmart.",
    author: "Ana Gómez",
    role: "Coordinadora Académica",
  },
];

export const pricing: PricingCardItem[] = [
  {
    title: "Básico",
    price: "$99",
    period: "mes",
    description:
      "Ideal para escuelas pequeñas",
    features: [
      "Hasta 200 estudiantes",
      "Gestión de estudiantes y profesores",
      "Gestión de clases básica",
      "Soporte por email",
    ],
    buttonText: "Comenzar gratis",
    buttonVariant: "outline",
  },
  {
    title: "Profesional",
    price: "$199",
    period: "mes",
    description:
      "Para escuelas en crecimiento",
    features: [
      "Hasta 500 estudiantes",
      "Todas las características del plan Básico",
      "Informes avanzados",
      "Portal para padres",
      "Soporte prioritario",
    ],
    buttonText: "Comenzar gratis",
    buttonVariant: "default",
    highlighted: true,
  },
  {
    title: "Empresarial",
    price: "$399",
    period: "mes",
    description:
      "Para instituciones grandes",
    features: [
      "Estudiantes ilimitados",
      "Todas las características del plan Profesional",
      "API personalizada",
      "Integración con sistemas existentes",
      "Soporte 24/7",
    ],
    buttonText: "Contactar ventas",
    buttonVariant: "outline",
  },
];

export const faq: FqaItem[] = [
  {
    question: "¿Cómo puedo comenzar a usar EduSmart?",
    answer:
      "Simplemente regístrate para una prueba gratuita de 14 días. No se requiere tarjeta de crédito. Una vez registrado, podrás configurar tu escuela y comenzar a usar todas las funciones.",
  },
  {
    question: "¿Puedo importar datos de otro sistema?",
    answer:
      "Sí, ofrecemos herramientas de importación para migrar datos desde Excel o desde otros sistemas de gestión escolar populares.",
  },
  {
    question: "¿Es segura mi información?",
    answer:
      "Absolutamente. Utilizamos encaación de nivel bancario y cumplimos con todas las regulaciones de protección de datos educativos.",
  },
  {
    question: "¿Ofrecen capacitación para el personal?",
    answer:
      "Sí, todos los planes incluyen recursos de capacitación. Los planes Profesional y Empresarial incluyen sesiones de capacitación personalizadas.",
  },
  {
    question: "¿Puedo cambiar de plan más adelante?",
    answer:
      "Sí, puedes actualizar o cambiar tu plan en cualquier momento según las necesidades de tu institución.",
  },
];