export const navigation = [
  "home", "about", "experience", "skills", "projects", "certifications", "education", "contact",
] as const;

export const experience = [
  {
    role: "Cloud Engineer",
    company: "Utho Cloud",
    period: "July 2026 — Present",
    items: [
      "Working on AWS and GCP migration projects.",
      "Moving workloads across cloud platforms as part of cloud engineering and DevOps initiatives.",
      "Handling cloud infrastructure, DevOps tasks, and Kubernetes deployments.",
      "Building hands-on multi-cloud experience across AWS and GCP.",
    ],
  },
  {
    role: "System Analyst L2",
    company: "Vehant Technologies Pvt. Ltd.",
    period: "Nov 2023 — Dec 2025",
    location: "Noida, Uttar Pradesh",
    items: [
      "Designed and managed Jenkins CI/CD pipelines for C++ build, compilation, and packaging.",
      "Packaged application binaries into Docker images and orchestrated Kubernetes rollouts.",
      "Published compiled binaries to centralized NFS storage to automate release workflows.",
      "Resolved dependency, compatibility, and configuration issues on CentOS production systems.",
      "Automated installation, upgrades, and maintenance using Bash scripting.",
      "Developed customized bootable ISO images for plug-and-play installation.",
      "Partnered with development and QA teams on production releases.",
    ],
  },
] as const;

export const skillGroups = [
  { title: "Cloud", skills: ["AWS", "EC2", "IAM", "VPC", "S3", "RDS", "CloudWatch", "GCP", "Cloud Migration", "Multi-cloud"] },
  { title: "CI/CD & Automation", skills: ["Jenkins", "Declarative Pipelines", "Groovy", "Git", "GitHub", "Maven", "SonarQube", "Bash / Shell"] },
  { title: "Containers & Orchestration", skills: ["Docker", "Kubernetes", "kubeadm", "CRI-O", "Helm", "Calico", "MetalLB", "Ingress", "Gateway API"] },
  { title: "Monitoring & Reliability", skills: ["Prometheus", "Grafana", "Metrics Server", "Horizontal Pod Autoscaler", "HPA"] },
  { title: "Linux & Networking", skills: ["Ubuntu", "Debian", "RHEL", "CentOS", "Networking Fundamentals", "NFS", "Persistent Volumes", "PVC", "LoadBalancer / MetalLB"] },
  { title: "Web Servers & Databases", skills: ["Apache HTTP Server", "Nginx", "Apache Tomcat", "MySQL", "PostgreSQL"] },
] as const;

export const projects = [
  {
    number: "01",
    title: "Java CI/CD Pipeline on AWS",
    description: "Provisioned and configured an AWS EC2 instance to host a complete end-to-end CI/CD pipeline environment.",
    technologies: ["AWS EC2", "Jenkins", "SonarQube", "Maven", "Apache Tomcat"],
    flow: ["Git", "Jenkins", "SonarQube", "Maven", "Tomcat"],
    problem: "Create a repeatable path from Java source code to a deployed application while reducing manual release work.",
    implementation: "Integrated Maven builds and SonarQube analysis into Jenkins, then automated WAR deployment to Apache Tomcat on AWS EC2.",
    outcomes: ["Automated build and dependency management", "Integrated code-quality analysis", "Complete build-to-release pipeline"],
  },
  {
    number: "02",
    title: "Kubernetes Home Lab",
    description: "Built and managed a multi-node Kubernetes cluster with networking, persistent storage, traffic routing, autoscaling, and observability.",
    technologies: ["kubeadm", "CRI-O", "Calico", "MetalLB", "Helm", "NFS", "Prometheus", "Grafana"],
    flow: ["Ingress", "Kubernetes", "Services", "Workloads", "Monitoring"],
    problem: "Build a realistic environment for operating workloads and practicing production-grade cluster patterns on bare metal.",
    implementation: "Configured Calico, MetalLB, NFS-backed storage, Helm, Ingress, Gateway API, Metrics Server, HPA, Prometheus, and Grafana.",
    outcomes: ["Multi-node cluster on CRI-O", "Persistent storage and load balancing", "Custom observability dashboards"],
  },
] as const;

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "JC Bose YMCA University", location: "Faridabad, Haryana", period: "2022 — 2024" },
  { degree: "Bachelor of Science in Programming", school: "University of Delhi", location: "New Delhi", period: "2017 — 2020" },
] as const;