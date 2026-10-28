import React from 'react';
import { MapPin, Building, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  onFilterCompany: (companyKey: 'all' | 'bizmo' | 'nhanhau' | 'anhkhue') => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onFilterCompany }) => {
  return (
    <section id="kinh-nghiem" className="py-12 sm:py-16 border-t border-slate-100">
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-sky-700 mb-1">
          <span>Hành trình sự nghiệp</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span>4+ năm kinh nghiệm</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Quá trình làm việc
        </h2>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-6 sm:space-y-8">
        {EXPERIENCES.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-2xs hover:border-sky-300 transition-all group"
          >
            {/* Header: Role, Company & Period */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                  {job.role}
                </h3>
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-slate-600">
                  <span className="font-semibold text-sky-800 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-sky-600" />
                    {job.companyName}
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {job.location}
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-slate-500 italic">{job.industry}</span>
                </div>
              </div>

              {/* Period display */}
              <div className="shrink-0 self-start">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-slate-800 bg-amber-100/70 border border-amber-200/90 rounded-md">
                  {job.period}
                </span>
              </div>
            </div>

            {/* Highlights List */}
            <div className="mt-4 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Nhiệm vụ trọng tâm
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {job.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Achievements */}
            <div className="mt-5 pt-4 border-t border-slate-100 bg-sky-50/50 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-900 mb-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Thành tựu nổi bật</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-slate-700">
                {job.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white/90 p-2.5 rounded-lg border border-sky-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{ach}</span>
                  </div>
                ))}
              </div>

              {/* Action Button: Filter projects of this company */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200/70 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onFilterCompany(job.companyKey)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 hover:underline underline-offset-4 cursor-pointer py-1"
                >
                  <span>Xem hồ sơ & kết quả {job.companyKey === 'bizmo' ? 'Bizmo' : job.companyKey === 'nhanhau' ? 'Nhân Hậu' : 'Anh Khuê'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
