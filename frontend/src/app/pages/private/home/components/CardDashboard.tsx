import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface CardDashboardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  number?: number;
}
export default function CardDashboard({
  title,
  description,
  icon,
  number,
}: CardDashboardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{number}</div>
      </CardContent>
    </Card>
  );
}
