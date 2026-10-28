import React from 'react';
import { Check, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES, EDUCATION_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="ky-nang" className="py-12 sm:py-16 border-t border-slate-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-sky-700 mb-1">
            <span>Năng lực cốt lõi</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Chuyên môn & Bằng cấp</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kỹ năng & Học vấn
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-md">
          Sự kết hợp giữa tư duy pháp lý thương mại, năng lực điều phối thực địa và kỹ năng số hóa nội dung hiện đại.
        </p>
      </div>

      {/* 3 Skill Domains */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs hover:border-sky-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                {cat.description}
              </p>

              {/* Skills List without Pill Enclosures */}
              <ul className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span className={skill.highlight ? 'font-semibold text-slate-900' : 'text-slate-700'}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              {idx === 0
                ? 'Thực chiến qua 40+ đợt khuyến mãi & 50+ điểm bán'
                : idx === 1
                ? 'Đã đấu thầu & nghiệm thu 6 hợp đồng giáo dục'
                : 'Sáng tạo nội dung thu hút hàng trăm nghìn tương tác'}
            </div>
          </div>
        ))}
      </div>

      {/* Education & Certificates Section */}
      <div className="mt-10 sm:mt-12 bg-linear-to-br from-white to-sky-50/40 border border-sky-100 rounded-2xl p-6 sm:p-8 shadow-2xs">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Học vấn & Chứng chỉ chuyên môn
            </h3>
            <p className="text-xs text-slate-500">
              Nền tảng đào tạo chính quy kết hợp năng lực ngoại ngữ và tin học ứng dụng
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-sky-800">{item.institution}</span>
                <span className="text-amber-800 font-medium bg-amber-50 px-2 py-0.5 rounded text-[11px] border border-amber-200/60">
                  {item.period}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {item.degree}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
