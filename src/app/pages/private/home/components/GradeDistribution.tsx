"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart } from "recharts";

export function GradeDistribution() {
  const chartData = [
    { label: "9-10", value: 25, color: "#22c55e" },
    { label: "8-9", value: 40, color: "#3b82f6" },
    { label: "7-8", value: 20, color: "#eab308" },
    { label: "6-7", value: 10, color: "#f97316" },
    { label: "<6", value: 5, color: "#ef4444" },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
  );
}
