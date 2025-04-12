import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PricingCard({
    title,
    price,
    period,
    description,
    features,
    buttonText,
    buttonVariant = "default",
    highlighted = false,
  }: {
    title: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonVariant?: "default" | "outline" | "secondary";
    highlighted?: boolean;
  }) {
    return (
      <div
        className={`rounded-lg ${
          highlighted
            ? "ring-2 ring-primary shadow-lg scale-105"
            : "border border-gray-200"
        } bg-white p-8 flex flex-col`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">/{period}</span>
        </div>
        <ul className="mb-8 space-y-3 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
      </div>
    );
  }
  