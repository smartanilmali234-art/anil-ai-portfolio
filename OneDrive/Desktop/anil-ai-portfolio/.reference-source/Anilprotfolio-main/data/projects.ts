import { ProjectItem } from "@/types/project";

export const PROJECTS: ProjectItem[] = [
  {
    title: "RAG Chatbot",
    description:
      "Enterprise answer engine with retrieval, citations, and context-aware responses for knowledge bases.",
    technologies: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
    metrics: "92% answer relevance",
    deployment: "Production-ready",
    live: "#",
    github: "#"
  },
  {
    title: "LLM Fine-Tuning Platform",
    description:
      "Dataset management and lightweight training orchestration for fine-tuning small business assistants.",
    technologies: ["PyTorch", "Hugging Face", "Docker", "MLflow"],
    metrics: "3x faster experimentation",
    deployment: "Staging",
    live: "#",
    github: "#"
  },
  {
    title: "AI Document Assistant",
    description:
      "OCR, classification, and summarization pipeline for documents with searchable extracted insights.",
    technologies: ["OCR", "NLP", "OpenCV", "Next.js"],
    metrics: "1.8s median processing",
    deployment: "Production",
    live: "#",
    github: "#"
  },
  {
    title: "Computer Vision Detection System",
    description:
      "Industrial defect detection interface with inspection overlays and batch analytics dashboards.",
    technologies: ["YOLO", "PyTorch", "OpenCV", "FastAPI"],
    metrics: "99.4% validation accuracy",
    deployment: "Production",
    live: "#",
    github: "#"
  },
  {
    title: "Recommendation Engine",
    description:
      "Hybrid ranking system with session-aware product ranking and similarity search signals.",
    technologies: ["Scikit-Learn", "XGBoost", "Pandas", "SQL"],
    metrics: "14% lift in CTR",
    deployment: "Production",
    live: "#",
    github: "#"
  },
  {
    title: "MLOps Pipeline",
    description:
      "CI/CD workflow for data validation, model tracking, container deployment, and evaluation gates.",
    technologies: ["Docker", "Kubernetes", "MLflow", "Airflow"],
    metrics: "Automated release flow",
    deployment: "Production",
    live: "#",
    github: "#"
  },
  {
    title: "Predictive Analytics Dashboard",
    description:
      "Interactive business intelligence dashboard powered by forecasts, KPIs, and cohort modeling.",
    technologies: ["Dash", "Python", "SQL", "Charts"],
    metrics: "100K+ rows processed",
    deployment: "Internal",
    live: "#",
    github: "#"
  },
  {
    title: "Multi-Agent AI System",
    description:
      "Collaborative multi-agent architecture for task decomposition, planning, and orchestration.",
    technologies: ["LangGraph", "OpenAI", "Python", "Vector DB"],
    metrics: "Multi-step workflow automation",
    deployment: "Prototype",
    live: "#",
    github: "#"
  }
];

