export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface ClientsData {
  clients: Client[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  client?: Client;
}

export interface ProjectsData {
  projects: Project[];
}
