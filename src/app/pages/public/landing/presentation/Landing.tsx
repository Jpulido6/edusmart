import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import logo from "@/app/pages/public/landing/assets/img1.jpg";
import FaqItem from "../components/FaqItem";
import PricingCard from "../components/PricingCard";
import TestimonialCard from "../components/TestimonialCard";
import FeatureCard from "../components/FeatureCard";
import useLanding from "../view-model/useLanding";
import { GraduationCap } from "lucide-react";

export default function LandingPage() {
  const { itemsFeature, itemsTestimonial, itemsPricing, itemsFaq } =
    useLanding();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">EduSmart</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary">
              Características
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-primary"
            >
              Testimonios
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary">
              Precios
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary">
              FAQ
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-primary">
              Iniciar sesión
            </Link>
            <Button asChild>
              <Link to="/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gestión escolar simplificada
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Administra tu escuela de manera eficiente con nuestra plataforma
                integral. Estudiantes, profesores y clases en un solo lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/register">Comenzar gratis</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#demo">Ver demostración</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-bl from-primary/10 to-primary/5  shadow-xl">
              <img
                src={logo}
                alt="Dashboard de gestión escolar"
                width={600}
                height={400}
                className=""
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Todo lo que necesitas para gestionar tu escuela
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itemsFeature.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Screenshot/Demo Section */}
        <section id="demo" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Conoce nuestra plataforma
            </h2>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Dashboard de gestión escolar"
                width={1200}
                height={600}
                className="w-full"
              /> */}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Lo que dicen nuestros usuarios
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itemsTestimonial.map((item, index) => (
                <TestimonialCard
                  key={index}
                  quote={item.quote}
                  author={item.author}
                  role={item.role}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Planes simples y transparentes
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades de tu
              institución educativa
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {itemsPricing.map((item, index) => (
                <PricingCard
                  key={index}
                  title={item.title}
                  price={item.price}
                  period={item.period}
                  description={item.description}
                  features={item.features}
                  buttonText={item.buttonText}
                  buttonVariant={item.buttonVariant}
                  highlighted={item.highlighted}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Preguntas frecuentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {itemsFaq.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Comienza a transformar tu escuela hoy
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a miles de instituciones educativas que ya confían en
              EduSmart para simplificar su gestión escolar.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">Prueba gratuita de 14 días</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">EduSmart</h3>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="font-bold">EduSmart</span>
              </div>
              <p className="text-gray-400">
                Simplificando la gestión escolar desde 2023
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Características
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Guías
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Carreras
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Seguridad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} EduSmart. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
