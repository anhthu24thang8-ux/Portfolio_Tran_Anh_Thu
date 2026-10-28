export interface JobExperience {
  id: string;
  companyKey: 'bizmo' | 'nhanhau' | 'anhkhue';
  companyName: string;
  role: string;
  period: string;
  location: string;
  industry: string;
  highlights: string[];
  achievements: string[];
  tags: string[];
}

export interface ProjectResult {
  id: string;
  companyKey: 'bizmo' | 'nhanhau' | 'anhkhue';
  companyName: string;
  type: 'bao-cao' | 'activation' | 'posm' | 'content' | 'video';
  typeName: string;
  title: string;
  summary: string;
  metricHighlight: string;
  thumbnail?: string;
  youtubeUrl?: string;
  details: {
    context: string;
    objectives: string[];
    execution: string[];
    outcomes: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string;
}
