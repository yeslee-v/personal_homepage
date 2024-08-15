export interface ProjectProps {
  params: { id: number };
}

export interface ProjectsDetailProps {
  id: number;
  title: string;
  description: string;
  period: string;
  skills: string[];
  position: string;
  roles: string[];
  githubUrl: string;
}
