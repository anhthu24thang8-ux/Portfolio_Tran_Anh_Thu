import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';
import { ProjectResult } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('gioi-thieu');
  const [selectedCompany, setSelectedCompany] = useState<'all' | 'bizmo' | 'nhanhau' | 'anhkhue'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectResult | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Set up Intersection Observer to track active section smoothly
  useEffect(() => {
    const sectionIds = ['gioi-thieu', 'kinh-nghiem', 'du-an', 'ky-nang', 'lien-he'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleFilterCompanyFromExperience = (companyKey: 'all' | 'bizmo' | 'nhanhau' | 'anhkhue') => {
    setSelectedCompany(companyKey);
    handleNavigate('du-an');
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-sky-200">
      {/* Top Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Container with 1440px desktop baseline */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Hero Profile & Metrics */}
        <Hero
          onNavigate={handleNavigate}
          onShowToast={showToast}
        />

        {/* Section 2: Work Experience Timeline */}
        <Experience
          onFilterCompany={handleFilterCompanyFromExperience}
        />

        {/* Section 3: Projects & Deliverables Showcase */}
        <Projects
          selectedCompany={selectedCompany}
          onSelectCompany={setSelectedCompany}
          onOpenProject={(proj) => setSelectedProject(proj)}
        />

        {/* Section 4: Skills & Academic Background */}
        <Skills />

        {/* Section 5: Direct Contact, Message Form & Footer */}
        <Contact
          onShowToast={showToast}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onScrollTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </main>

      {/* Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Attached CV Original Preview Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
