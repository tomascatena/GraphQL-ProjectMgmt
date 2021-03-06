export interface Client {
  id: string;
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

export interface GetProject {
  project: Project
}

export interface GetClients {
  clients: Client[]
}

export type ProjectStatus = 'NEW' | 'PROGRESS' | 'COMPLETED'
