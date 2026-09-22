import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pawan Kumar | DevOps Engineer | Cloud & Kubernetes" },
      { name: "description", content: "Portfolio of Pawan Kumar, a DevOps and Cloud Engineer specializing in AWS, GCP, Kubernetes, CI/CD automation, Docker and cloud infrastructure." },
      { property: "og:title", content: "Pawan Kumar | DevOps Engineer | Cloud & Kubernetes" },
      { property: "og:description", content: "DevOps and Cloud Engineer specializing in AWS, GCP, Kubernetes, CI/CD automation and cloud infrastructure." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
