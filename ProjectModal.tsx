import React, { useEffect } from 'react';
import { X, CheckCircle, Target, Layers, TrendingUp, Building, FileText } from 'lucide-react';
import { ProjectResult } from '../types';
import { SCTReportDashboard } from './SCTReportDashboard';
import { CasioEventMediaShowcase } from './CasioEventMediaShowcase';

interface ProjectModalProps {
  project: ProjectResult | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-sky-800 flex items-center gap-1">
              <Building className="w-3.5 h-3.5" />
              {project.companyName}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.typeName}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Title & Metric Banner */}
          <div className="space-y-3">
            <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {project.title}
            </h3>
            <div className="p-3 bg-amber-50 border border-amber-200/90 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-amber-900">
              <TrendingUp className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Chỉ số ấn tượng: {project.metricHighlight}</span>
            </div>
          </div>

          {project.id === 'prj-8' || project.id === 'prj-7' ? (
            <CasioEventMediaShowcase />
          ) : (
            <>
              {/* Context */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-sky-600" />
                  <span>Bối cảnh dự án</span>
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {project.details.context}
                </p>
              </div>

              {/* Objectives */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-600" />
                  <span>Mục tiêu chiến dịch</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {project.details.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Execution steps */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-600" />
                  <span>Kế hoạch & Triển khai thực tế</span>
                </h4>
                <div className="space-y-2">
                  {project.details.execution.map((step, i) => (
                    <div key={i} className="p-3 bg-sky-50/50 rounded-xl border border-sky-100 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-sky-700 mt-0.5">0{i + 1}.</span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable outcomes */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kết quả & Giá trị mang lại</span>
                </h4>
                {project.id === 'prj-9' ? (
                  <SCTReportDashboard />
                ) : (
                  <div className="space-y-2">
                    {project.details.outcomes.map((out, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{out}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-50 px-6 py-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Trần Anh Thư · Portfolio Case Study</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Đóng lại
          </button>
        </div>
      </div>
    </div>
  );
};
