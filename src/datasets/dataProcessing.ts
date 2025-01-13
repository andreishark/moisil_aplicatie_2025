import fs from "fs";
import path from "path";
import { parse } from "csv-parse";

const currentYear = 2023;

const headers = [
  "Country Name",
  "Country Code",
  "Indicator Name",
  "Indicator Code",
];

for (let index = 1960; index <= currentYear; index++) {
  headers.push(index.toString());
}

type WorldData = {
  "Country Name": string;
  "Country Code": string;
  "Indicator Name": string;
  "Indicator Code": string;
  1960: string;
  1961: string;
  1962: string;
  1963: string;
  1964: string;
  1965: string;
  1966: string;
  1967: string;
  1968: string;
  1969: string;
  1970: string;
  1971: string;
  1972: string;
  1973: string;
  1974: string;
  1975: string;
  1976: string;
  1977: string;
  1978: string;
  1979: string;
  1980: string;
  1981: string;
  1982: string;
  1983: string;
  1984: string;
  1985: string;
  1986: string;
  1987: string;
  1988: string;
  1989: string;
  1990: string;
  1991: string;
  1992: string;
  1993: string;
  1994: string;
  1995: string;
  1996: string;
  1997: string;
  1998: string;
  1999: string;
  2000: string;
  2001: string;
  2002: string;
  2003: string;
  2004: string;
  2005: string;
  2006: string;
  2007: string;
  2008: string;
  2009: string;
  2010: string;
  2011: string;
  2012: string;
  2013: string;
  2014: string;
  2015: string;
  2016: string;
  2017: string;
  2018: string;
  2019: string;
  2020: string;
  2021: string;
  2022: string;
  2023: string;
};

type WorldDataCurated = {
  "Country Name": string;
  "Country Code": string;
  "Indicator Name": string;
  "Indicator Code": string;
  data: string[];
};

const results: WorldDataCurated[] = [];

const csvFilePath = path.resolve(process.cwd(), "src/datasets/WDICSV.csv");

const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

parse(
  fileContent,
  {
    delimiter: ",",
    columns: headers,
  },
  (error, result: WorldData[]) => {
    if (error) {
      console.error(error);
    }

    for (let index = 0; index < result.length; index++) {
      const yearReport = [];
      for (let j = 1960; j <= currentYear; j++) {
        //@ts-expect-error Indexing dynamically
        yearReport.push(result[index][j]);
      }

      results.push({
        "Country Name": result[index]["Country Name"],
        "Country Code": result[index]["Country Code"],
        "Indicator Name": result[index]["Indicator Name"],
        "Indicator Code": result[index]["Indicator Code"],
        data: yearReport,
      });
    }
  },
);

// const finalData = results
//   .filter((val) => val["Indicator Name"] == "Forest area (% of land area)")
//   .map((val) => {
//     return {
//       countryCode: val["Country Code"],
//       data: val.data,
//     };
//   });

// fs.writefile("forests_percent.json", json.stringify(finaldata), (err) => {});

export function getForestPercentPerYear() {
  const perYear = results
    .filter(
      (val) =>
        val["Indicator Name"] == "Fossil fuel energy consumption (% of total)",
    )
    .map((val) => {
      return {
        countryCode: val["Country Code"],
        data: val.data,
      };
    });

  fs.writeFile("fuel.json", JSON.stringify(perYear), (err) => {});

  return perYear;
}
