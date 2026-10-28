import React, { useState } from 'react';
import { FileText, Sparkles, Eye, ArrowUpRight, CheckCircle2, TrendingUp, Presentation, Image as ImageIcon, Video, Play, ExternalLink } from 'lucide-react';
import { ProjectResult } from '../types';
import { PROJECTS_RESULTS } from '../data/portfolioData';

interface ProjectsProps {
  selectedCompany: 'all' | 'bizmo' | 'nhanhau' | 'anhkhue';
  onSelectCompany: (company: 'all' | 'bizmo' | 'nhanhau' | 'anhkhue') => void;
  onOpenProject: (project: ProjectResult) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  selectedCompany,
  onSelectCompany,
  onOpenProject,
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredProjects = PROJECTS_RESULTS.filter((p) => {
    const matchesCompany = selectedCompany === 'all' || p.companyKey === selectedCompany;
    const matchesType = selectedType === 'all' || p.type === selectedType;
    return matchesCompany && matchesType;
  });

  const getThumbnailIcon = (type: string) => {
    switch (type) {
      case 'bao-cao':
        return <FileText className="w-5 h-5 text-sky-700" />;
      case 'activation':
        return <Presentation className="w-5 h-5 text-amber-700" />;
      case 'posm':
        return <ImageIcon className="w-5 h-5 text-sky-800" />;
      case 'video':
        return <Video className="w-5 h-5 text-amber-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-700" />;
    }
  };

  const getThumbnailBg = (type: string) => {
    switch (type) {
      case 'bao-cao':
        return 'bg-sky-50 border-b border-sky-100 text-sky-900';
      case 'activation':
        return 'bg-amber-50/80 border-b border-amber-100 text-amber-900';
      case 'posm':
        return 'bg-blue-50/70 border-b border-blue-100 text-blue-900';
      case 'video':
        return 'bg-amber-100/60 border-b border-amber-200/60 text-amber-950';
      default:
        return 'bg-slate-50 border-b border-slate-100 text-slate-900';
    }
  };

  return (
    <section id="du-an" className="py-12 sm:py-16 border-t border-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-sky-700 mb-1">
            <span>Dự án & Minh chứng</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Kết quả thực tiễn</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kết quả mang lại
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-md">
          Hồ sơ đấu thầu thành công, các chương trình activation tại 6 trường học & hệ thống TTTM, cùng báo cáo tối ưu ngân sách.
        </p>
      </div>

      {/* Interactive Filters Area */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        {/* Company Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-slate-100/80 rounded-xl overflow-x-auto max-w-full">
          <button
            onClick={() => onSelectCompany('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCompany === 'all'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tất cả công ty ({PROJECTS_RESULTS.length})
          </button>
          <button
            onClick={() => onSelectCompany('bizmo')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCompany === 'bizmo'
                ? 'bg-sky-200 text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Bizmo STEM (4)
          </button>
          <button
            onClick={() => onSelectCompany('nhanhau')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCompany === 'nhanhau'
                ? 'bg-amber-200 text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Nhân Hậu Auto (2)
          </button>
          <button
            onClick={() => onSelectCompany('anhkhue')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCompany === 'anhkhue'
                ? 'bg-sky-200 text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Anh Khuê Casio (3)
          </button>
        </div>

        {/* Type Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-slate-400 font-medium shrink-0">Loại:</span>
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'bao-cao', label: 'Hồ sơ thầu / Báo cáo' },
            { id: 'activation', label: 'Activation / Sự kiện' },
            { id: 'posm', label: 'POSM' },
            { id: 'video', label: 'Video ngắn' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedType(item.id)}
              className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedType === item.id
                  ? 'bg-slate-900 text-white font-medium'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenProject(item)}
            className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer flex flex-col justify-between group"
          >
            {item.thumbnail ? (
              <div>
                <div className="relative w-full aspect-16/10 overflow-hidden bg-slate-900">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="text-[10.5px] font-bold bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md border border-white/20">
                      {item.type === 'video' ? '▶ Video Recap' : '📷 Hình ảnh thực tế'}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-rose-600/95 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{item.companyName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.typeName}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-900 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-md">
                      <ImageIcon className="w-3 h-3" />
                      Ảnh thực tế
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-md">
                      <Video className="w-3 h-3" />
                      Video 4K
                    </span>
                    <a
                      href={item.youtubeUrl || 'https://www.youtube.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-md hover:bg-red-100 transition-colors"
                      title="Xem trên YouTube"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Link YouTube
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className={`p-4 sm:p-5 flex items-center justify-between ${getThumbnailBg(item.type)}`}>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white rounded-lg shadow-2xs">
                      {getThumbnailIcon(item.type)}
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-bold uppercase tracking-wider block opacity-75">
                        {item.typeName}
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        {item.companyName}
                      </span>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-white/80 group-hover:bg-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-sky-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{item.companyName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.typeName}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-900 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            )}

            {/* Card Footer with Metric Highlight */}
            <div className="p-4 pt-3 mx-5 mb-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-800 font-semibold truncate mr-2">
                <TrendingUp className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="truncate">{item.metricHighlight}</span>
              </div>
              <span className="text-sky-700 font-semibold group-hover:underline text-[11px] shrink-0">
                {item.thumbnail ? 'Xem Video & Ảnh →' : 'Chi tiết'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-slate-200">
          <p className="text-sm text-slate-500">Không tìm thấy dự án phù hợp với bộ lọc hiện tại.</p>
          <button
            onClick={() => {
              onSelectCompany('all');
              setSelectedType('all');
            }}
            className="mt-3 px-4 py-2 text-xs font-semibold text-sky-800 bg-sky-100 rounded-lg hover:bg-sky-200"
          >
            Đặt lại tất cả bộ lọc
          </button>
        </div>
      )}
    </section>
  );
};
