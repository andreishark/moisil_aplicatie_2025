"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import forest_data from "@/datasets/forests_percent.json";
import apa_data from "@/datasets/freshwater.json";
import electric_data from "@/datasets/electric.json";
import fosil_data from "@/datasets/fuel.json";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const forestChartDataWithCountry = forest_data.map((val) => {
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

const apaChartDataWithCountry = apa_data.map((val) => {
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

const electricChartDataWithCountry = electric_data.map((val) => {
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

const fosilChartDataWithCountry = fosil_data.map((val) => {
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
  selection,
}: {
  content: string;
  countryCode: string;
  selection: string;
}) {
  const chartData =
    selection == "apa"
      ? apaChartDataWithCountry
      : selection == "electric"
        ? electricChartDataWithCountry
        : selection == "fosil"
          ? fosilChartDataWithCountry
          : selection == "materii"
            ? forestChartDataWithCountry
            : [];

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
            data={chartData.find((val) => val.countryCode == countryCode)?.data}
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
