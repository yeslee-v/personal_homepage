export interface ProjectProps {
  params: { id: number };
}

export interface ProjectsDetailProps {
  id: number;
  name: string;
  title: string;
  description: string[];
  githubUrl: string;
}
