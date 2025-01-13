"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import forest_data from "@/datasets/forests_percent.json";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartDataWithCountry = forest_data.map((val) => {
  const yearData = [];
  for (let index = 1960; index <= 2021; index++) {
    yearData.push({
      year: index,
      desktop:
        val.data[index - 1960] == "" ? 0 : parseFloat(val.data[index - 1960]),
    });
  }

  return {
    countryCode: val.countryCode,
    data: yearData,
  };
});

const chartConfig = {
  desktop: {
    label: "Year",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Component({
  content,
  countryCode,
}: {
  content: string;
  countryCode: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{content}</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={
              chartDataWithCountry.find((val) => val.countryCode == countryCode)
                ?.data
            }
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
