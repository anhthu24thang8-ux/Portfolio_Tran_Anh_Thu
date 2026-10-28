import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize2, Image as ImageIcon, Video, Award, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const CasioEventMediaShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const photos = [
    {
      src: '/assets/images/casio_event_stage.jpg',
      title: 'Sân khấu chính & Đại nhạc hội mini tại TTTM',
      desc: 'Màn hình LED cong khổng lồ trình diễn BST G-Shock MR-G & Baby-G, thu hút hơn 3.500 lượt khách tham quan.',
      tag: 'Sân khấu & Không gian',
    },
    {
      src: '/assets/images/casio_watch_booth.jpg',
      title: 'Gian hàng Trải nghiệm & G-Shock Photobooth',
      desc: 'Khu vực quầy trưng bày phát sáng chuẩn quốc tế kết hợp photobooth check-in in ảnh lấy liền cho khách hàng VIP.',
      tag: 'Trải nghiệm & Check-in',
    },
  ];

  return (
    <div className="space-y-5 bg-slate-50/80 p-3.5 sm:p-5 rounded-2xl border border-slate-200">
      {/* Section 1: Video Showcase */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Video Recap Sự Kiện Tri Ân & Ra Mắt Sản Phẩm</h4>
              <p className="text-[11px] text-slate-500">Đại nhạc hội mini & Tri ân khách hàng thân thiết tại TTTM</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/results?search_query=casio+gshock+vietnam+event"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow-2xs transition-colors"
              title="Xem trực tiếp trên YouTube"
            >
              <span>Xem trên YouTube</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200/60">
              4K UHD · 02:45
            </span>
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group">
          <img
            src="/assets/images/casio_event_stage.jpg"
            alt="Video recap sự kiện tri ân Casio G-Shock"
            className={`w-full aspect-video object-cover transition-opacity duration-300 ${
              isPlaying ? 'opacity-85' : 'opacity-90'
            }`}
          />

          {/* Dark Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Play/Pause Button in Center */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Tạm dừng video' : 'Phát video'}
            className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-600/90 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg transform transition hover:scale-105 active:scale-95 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
            ) : (
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
            )}
          </button>

          {/* Video Title on Top Left */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
            <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold">
              Casio G-Shock · Synergy of Toughness Event
            </span>
            <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
              {isPlaying ? 'Đang phát' : 'Xem Video'}
            </span>
          </div>

          {/* Video Controls Bar on Bottom */}
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-white flex flex-col gap-1.5">
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-rose-500 rounded-full transition-all duration-300"
                style={{ width: isPlaying ? '58%' : '32%' }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-white/90">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-rose-400 cursor-pointer"
                >
                  {isPlaying ? 'Tạm dừng' : 'Phát tiếp'}
                </button>
                <span>·</span>
                <span>{isPlaying ? '01:36' : '00:48'} / 02:45</span>
              </div>
              <div className="flex items-center gap-3">
                <Volume2 className="w-3.5 h-3.5 opacity-80" />
                <Maximize2 className="w-3.5 h-3.5 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Photo Gallery */}
      <div className="space-y-2.5 pt-2 border-t border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
            <ImageIcon className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Hình Ảnh Thực Tế Tại Điểm Bán & Sảnh Sự Kiện</h4>
            <p className="text-[11px] text-slate-500">Phối cảnh sân khấu, booth trải nghiệm và khu vực check-in</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {photos.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-16/10 cursor-pointer" onClick={() => setSelectedPhoto(item.src)}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                  {item.tag}
                </span>
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Key Event Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-200">
        <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
          <div className="flex items-center justify-center text-sky-600 mb-1">
            <Users className="w-4 h-4" />
          </div>
          <div className="text-base font-extrabold text-slate-900">3.500+</div>
          <div className="text-[10px] font-semibold text-slate-500">Lượt khách tham quan</div>
        </div>
        <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
          <div className="flex items-center justify-center text-emerald-600 mb-1">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-base font-extrabold text-emerald-600">100%</div>
          <div className="text-[10px] font-semibold text-slate-500">Sold out bản giới hạn</div>
        </div>
        <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
          <div className="flex items-center justify-center text-rose-600 mb-1">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-base font-extrabold text-rose-600">50.000+</div>
          <div className="text-[10px] font-semibold text-slate-500">Lượt xem video recap</div>
        </div>
        <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
          <div className="flex items-center justify-center text-amber-600 mb-1">
            <Award className="w-4 h-4" />
          </div>
          <div className="text-base font-extrabold text-slate-900">Casio Asia</div>
          <div className="text-[10px] font-semibold text-slate-500">Khen ngợi chuẩn nhận diện</div>
        </div>
      </div>

      {/* Lightbox Modal for enlarged photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-60 bg-black/85 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl">
            <img src={selectedPhoto} alt="Phóng to hình ảnh" className="max-w-full max-h-[85vh] object-contain" />
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
