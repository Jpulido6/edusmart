import { faq, feature, pricing, testimonial } from "../config/config";

export default function useLanding() {
  const itemsFeature = feature
  const itemsTestimonial = testimonial
  const itemsPricing = pricing
  const itemsFaq = faq

  return {
    itemsFeature,
    itemsTestimonial,
    itemsPricing,
    itemsFaq,
  };
}
