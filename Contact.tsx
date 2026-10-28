import React, { useState } from 'react';
import { Phone, Mail, Copy, Check, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string) => void;
  onOpenCvModal: () => void;
  onScrollTop: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  onShowToast,
  onOpenCvModal,
  onScrollTop,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Đã sao chép ${label}!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="lien-he" className="pt-12 sm:pt-16 pb-8 border-t border-slate-100">
      <div className="bg-linear-to-br from-sky-50 via-white to-amber-50/70 border border-sky-100/90 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
        {/* Soft background shape */}
        <div
          className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Liên hệ với mình
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nhắn mình qua kênh nào tiện nhất với bạn, mình luôn sẵn sàng trao đổi về các cơ hội hợp tác và dự án mới.
            </p>
          </div>

          {/* Direct Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {/* Phone */}
            <div className="p-4 bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between shadow-2xs hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 block font-medium">Điện thoại trực tiếp</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                    className="text-sm font-bold text-slate-900 hover:text-sky-700 block truncate"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                  className="text-xs font-semibold text-sky-700 hover:underline"
                >
                  Gọi ngay
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'Số điện thoại')}
                  className="px-2 py-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  {copiedField === 'Số điện thoại' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>Sao chép</span>
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between shadow-2xs hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 block font-medium">Hộp thư điện tử</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-sky-700 block truncate"
                    title={PERSONAL_INFO.email}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-semibold text-sky-700 hover:underline"
                >
                  Gửi thư
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                  className="px-2 py-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg flex items-center gap-1 cursor-pointer shrink-0"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>Sao chép</span>
                </button>
              </div>
            </div>

            {/* Zalo */}
            <a
              href={PERSONAL_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between shadow-2xs hover:border-sky-300 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  Zalo
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 block font-medium">Nhắn tin Zalo</span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-sky-700 block truncate">
                    0967 258 317
                  </span>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-700 group-hover:underline">
                  Mở ứng dụng Zalo &rarr;
                </span>
                <span className="text-[11px] text-slate-400">Phản hồi nhanh</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Area */}
      <footer className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name} · Marketing Executive Portfolio</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCvModal}
            className="hover:text-slate-800 transition-colors cursor-pointer"
          >
            Tệp đính kèm HTML
          </button>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <button
            onClick={onScrollTop}
            className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer font-medium"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </section>
  );
};
