import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenCvModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'gioi-thieu', label: 'Giới thiệu' },
    { id: 'kinh-nghiem', label: 'Kinh nghiệm' },
    { id: 'du-an', label: 'Dự án & Kết quả' },
    { id: 'ky-nang', label: 'Kỹ năng & Học vấn' },
    { id: 'lien-he', label: 'Liên hệ' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-xs border-b border-sky-100/80'
          : 'bg-white/70 backdrop-blur-xs border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <button
          onClick={() => handleLinkClick('gioi-thieu')}
          className="text-left font-bold text-lg sm:text-xl tracking-tight text-slate-900 hover:text-sky-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-500 rounded-sm"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300 ring-2 ring-sky-300"></span>
          <span>{PERSONAL_INFO.name}</span>
        </button>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 font-medium ${
                  isActive
                    ? 'text-sky-900 border-sky-500 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
            title="Xem tệp CV gốc đính kèm"
          >
            <FileText className="w-3.5 h-3.5 text-amber-700" />
            <span>Xem CV gốc</span>
          </button>
          <button
            onClick={() => handleLinkClick('lien-he')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-900 bg-sky-200 hover:bg-sky-300 border border-sky-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-2xs focus-visible:outline-2 focus-visible:outline-sky-600"
          >
            <span>Liên hệ ngay</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-800" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenCvModal}
            className="p-2 text-xs font-medium text-amber-900 bg-amber-100/80 rounded-lg flex items-center gap-1"
            aria-label="Xem CV đính kèm"
          >
            <FileText className="w-4 h-4 text-amber-700" />
            <span className="hidden xs:inline">CV</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-sky-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-50 text-sky-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-amber-50 border border-amber-200 rounded-lg"
            >
              <FileText className="w-4 h-4 text-amber-700" />
              <span>Xem tệp CV gốc (HTML)</span>
            </button>
            <button
              onClick={() => handleLinkClick('lien-he')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-sky-200 border border-sky-300 rounded-lg"
            >
              <span>Liên hệ trực tiếp</span>
              <ArrowUpRight className="w-4 h-4 text-slate-800" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
