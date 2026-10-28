import React, { useState } from 'react';
import { ArrowDown, Copy, Check, Phone, Mail, MapPin, Calendar, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onShowToast: (message: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onShowToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast(`Đã sao chép ${fieldName} vào clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomAvatar(reader.result as string);
        onShowToast('Đã cập nhật ảnh đại diện thành công!');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="gioi-thieu" className="pt-8 sm:pt-14 pb-12 sm:pb-16">
      {/* Hero Container with Avatar horizontally aligned with Name and Details */}
      <div className="bg-white border border-sky-100/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
        {/* Soft decorative background accents */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-amber-100/60 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-sky-100/70 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Cột hình đại diện: Nằm ngang hàng với Họ và tên */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-center">
            <div className="relative group w-48 sm:w-56 md:w-full max-w-[240px]">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-sky-200/90 shadow-xs bg-linear-to-b from-sky-50 via-amber-50 to-sky-100 flex items-center justify-center relative">
                {customAvatar ? (
                  <img
                    src={customAvatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="/assets/aistudio/ava_tr_9cfa4d50.png"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Upload custom photo button hover trigger */}
                <label
                  htmlFor="avatar-upload"
                  className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer p-2"
                  title="Nhấn để tải ảnh chân dung thực tế"
                >
                  <Camera className="w-6 h-6 mb-1 text-amber-200" />
                  <span className="text-xs font-medium leading-tight">Thay đổi ảnh đại diện</span>
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="sr-only"
                />
              </div>

              {/* Subdued Status Badge */}
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Sẵn sàng cho các dự án mới</span>
                </span>
              </div>
            </div>
          </div>

          {/* Cột Họ và tên & Thông tin chi tiết */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col justify-center space-y-4">

            {/* Primary Name Display Headline with balanced wrap */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-balance leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="inline-flex items-center px-3.5 py-1 rounded-lg bg-amber-100 text-amber-950 font-bold text-sm sm:text-base border border-amber-300/90 shadow-2xs">
                  Marketing Executive
                </p>
                <span className="text-xs sm:text-sm font-medium text-sky-800">
                  Trade Marketing · Marketing Activation · Dự án STEM
                </span>
              </div>
            </div>

            {/* Lead Summary */}
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm lg:text-base max-w-2xl text-justify">
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Contact Info Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {/* Phone */}
              <div className="flex items-center justify-between p-2.5 bg-slate-50/80 hover:bg-sky-50/60 border border-slate-200/70 rounded-xl transition-colors">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wide">Điện thoại / Zalo</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                      className="text-xs font-bold text-slate-800 hover:text-sky-600 block truncate"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'Số điện thoại')}
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-white transition-colors cursor-pointer"
                  title="Sao chép số điện thoại"
                >
                  {copiedField === 'Số điện thoại' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-2.5 bg-slate-50/80 hover:bg-sky-50/60 border border-slate-200/70 rounded-xl transition-colors">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wide">Email liên hệ</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-bold text-slate-800 hover:text-sky-600 block truncate"
                      title={PERSONAL_INFO.email}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-white transition-colors cursor-pointer"
                  title="Sao chép email"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Birthday */}
              <div className="flex items-center gap-2.5 p-2.5 bg-slate-50/80 border border-slate-200/70 rounded-xl text-xs text-slate-600">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">Ngày sinh</div>
                  <span className="font-semibold text-slate-800 block">{PERSONAL_INFO.birthDate}</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-2.5 p-2.5 bg-slate-50/80 border border-slate-200/70 rounded-xl text-xs text-slate-600">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-left min-w-0 truncate" title={PERSONAL_INFO.address}>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">Địa chỉ</div>
                  <span className="font-semibold text-slate-800 block truncate">{PERSONAL_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('kinh-nghiem')}
                className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-sky-200 hover:bg-sky-300 border border-sky-300 rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-2"
              >
                <span>Xem quá trình làm việc</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-800" />
              </button>
              <button
                onClick={() => onNavigate('du-an')}
                className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-2xs cursor-pointer"
              >
                Khám phá kết quả dự án
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Metric Strip below hero split - Căn giữa và khoảng cách đều */}
      <div className="mt-10 sm:mt-12 pt-6 border-t border-sky-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:border-sky-200 transition-all text-center flex flex-col items-center justify-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums text-sky-900">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1.5 text-center">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 text-center">
                {metric.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
