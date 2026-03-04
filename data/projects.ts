// Shared project data
export interface Project {
  id: string;
  title: string;
  catchPhrase: string;
  image: string;
  categories: string[];
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    id: "vr-wayfinding",
    title: "VR wayfinding",
    catchPhrase: "Exploring intuitive navigation through GPS, maps and camera",
    image: "/vr huh.svg",
    categories: ["Interactiondesign", "Visual design"]
  },
  {
    id: "vipps-gleder",
    title: "Vipps gleder",
    catchPhrase: "How do we increase sales in eCommerce with design",
    image: "/vipps-gleder/vipps-cover.svg",
    categories: ["Interactiondesign", "Servicedesign"]
  },
  {
    id: "matchi",
    title: "Matchi",
    catchPhrase: "Analyzing and redesigning an existing UI",
    image: "/matchi/matchi-cover.png",
    categories: ["Interactiondesign"]
  },
  {
    id: "infraspace",
    title: "infraspace",
    catchPhrase: "Project catch phrase Project catch phrase",
    image: "/infraspace/infraspace-card.png",
    categories: ["Interactiondesign", "Front-end development", "Visualdesign"]
  },
  {
    id: "deichman",
    title: "Deichman",
    catchPhrase: "Engaging youth in shaping library services",
    image: "/deichman/deichman-cover.svg",
    categories: ["Servicedesign"]
  },
  {
    id: "critical-minerals",
    title: "Critical Minerals",
    catchPhrase: "Using design methods to zoom in on mineral mining in Chile.",
    image: "",
    categories: ["Systemsoriented design"],
    externalUrl: "https://systemsorienteddesign.net/student-project-spotlight-%c2%b7-critical-minerals-mining/"
  },
  {
    id: "wcag-for-designers",
    title: "WCAG for design students",
    catchPhrase: "How do we design an explanation of the WCAG rules so new designers understand it?",
    image: "",
    categories: ["Interactiondesign"],
    externalUrl: "https://www.figma.com/design/pZYQ2mGWRfbFPlMF1RY7Uk/Introduction-to-accessibility?node-id=1-3&p=f&t=WJuRD7Sgd8yXujKn-0"
  },
];

export const categories = [
  "Interactiondesign",
  "Servicedesign",
  "Front-end development",
  "Visual design",
  "Systemic design"
];

// Filter projects that have actual images (not placeholder .jpg files)
export const featuredProjects = projects.filter(
  project => project.image.endsWith('.png') || project.image.endsWith('.webp') || project.image.endsWith('.svg')
);

