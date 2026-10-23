export interface Profile {
  name: string;
  title: string;
  summary: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  languages: { lang: string; level: string }[];
  university: string;
  department: string;
  graduation: string;
}
