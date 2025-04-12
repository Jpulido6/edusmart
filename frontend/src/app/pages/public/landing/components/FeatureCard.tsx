import { BarChart4, BookOpen, CheckCircle, GraduationCap, Users } from "lucide-react";

export default function FeatureCard({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) {
    switch (icon) {
     case 'Users':
      icon = <Users className="h-10 w-10 text-primary" />
      break;
     case 'GraduationCap':
      icon = <GraduationCap className="h-10 w-10 text-primary" />
      break;
     case 'BookOpen':
      icon = <BookOpen className="h-10 w-10 text-primary" />
      break;
     case 'BarChart4':
      icon = <BarChart4 className="h-10 w-10 text-primary" />
      break;
      case 'CheckCircle':
      icon = <CheckCircle className="h-10 w-10 text-primary" />
      break;
      default:
      icon = <Users className="h-10 w-10 text-primary" />
    }
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }