import ServicePageTemplate from "@/components/ServicePageTemplate";
import dataAnalytics from "@/data/services/data-analytics";

export const metadata = {
  title: "Data Analytics Services & BI Dashboards | Astha Creatives",
  description:
    "Turn raw business numbers into growth with our data analytics services. We configure GA4 tracking pipelines, looker studio dashboards, database models, and marketing conversion analytics.",
};

export default function DataAnalyticsPage() {
  return <ServicePageTemplate service={dataAnalytics} />;
}
