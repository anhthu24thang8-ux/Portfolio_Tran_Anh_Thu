import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, XCircle, FileSpreadsheet, PieChart, BarChart3 } from 'lucide-react';

interface DossierRecord {
  no: number;
  date: string;
  dossierCode: string;
  receiptCode: string;
  program: string;
  status: 'Thành công' | 'Từ chối';
}

const DOSSIERS_DATA: DossierRecord[] = [
  { no: 1, date: '26/05', dossierCode: '—', receiptCode: 'H29.2-230526-2652', program: 'Pop-up An Lạc', status: 'Thành công' },
  { no: 2, date: '31/05', dossierCode: 'G22.99-230531-020286', receiptCode: 'H29.2-230531-7340', program: 'Pop-up An Lạc', status: 'Thành công' },
  { no: 3, date: '09/06', dossierCode: 'G22.99-230609-020078', receiptCode: 'H29.2-230609-5735', program: 'G-Shock (giảm giá / mua tặng)', status: 'Thành công' },
  { no: 4, date: '09/06', dossierCode: 'G22.99-230609-020146', receiptCode: 'H29.2-230609-7103', program: 'G-Shock (giảm giá / mua tặng)', status: 'Thành công' },
  { no: 5, date: '09/06', dossierCode: 'G22.99-230609-020287', receiptCode: 'H29.2-230609-8106', program: 'G-Shock (giảm giá / mua tặng)', status: 'Thành công' },
  { no: 6, date: '09/06', dossierCode: 'G22.99-230609-020193', receiptCode: 'H29.2-230609-7493', program: 'G-Shock (giảm giá / mua tặng)', status: 'Thành công' },
  { no: 7, date: '12/06', dossierCode: 'G22.99-230612-020145', receiptCode: 'H29.2-230612-8423', program: 'Mùa hè rực rỡ', status: 'Từ chối' },
  { no: 8, date: '19/06', dossierCode: 'G22.99-230619-020174', receiptCode: 'H29.2-230619-12563', program: 'Mùa hè rực rỡ', status: 'Từ chối' },
  { no: 9, date: '19/06', dossierCode: 'G22.99-230619-020140', receiptCode: 'H29.2-230619-10618', program: 'Mùa hè rực rỡ', status: 'Thành công' },
  { no: 10, date: '20/06', dossierCode: 'G22.99-230620-020366', receiptCode: 'H29.2-230620-16465', program: 'Mùa hè rực rỡ', status: 'Thành công' },
  { no: 11, date: '21/06', dossierCode: 'G22.99-230621-020149', receiptCode: 'H29.2-230621-0540', program: 'Tưng bừng mua sắm hè', status: 'Thành công' },
  { no: 12, date: '21/06', dossierCode: 'G22.99-230621-020219', receiptCode: 'H29.2-230621-1111', program: 'Hợp tác Co.opmart – Casio', status: 'Thành công' },
  { no: 13, date: '22/06', dossierCode: 'G22.99-230622-020169', receiptCode: 'H29.2-230622-4160', program: 'Liên kết đối tác thời trang', status: 'Thành công' },
  { no: 14, date: '23/06', dossierCode: 'G22.99-230623-020393', receiptCode: 'H29.2-230623-8395', program: 'VStyle', status: 'Thành công' },
  { no: 15, date: '26/06', dossierCode: 'G22.99-230626-020618', receiptCode: 'H29.2-230626-0753', program: 'VStyle', status: 'Thành công' },
  { no: 16, date: '27/06', dossierCode: 'G22.99-230627-00706', receiptCode: 'H29.2-230627-0663', program: 'Tưng bừng mua sắm hè', status: 'Thành công' },
  { no: 17, date: '27/06', dossierCode: 'G22.99-230627-020780', receiptCode: 'H29.2-230627-0717', program: 'Bán hàng đặc biệt', status: 'Thành công' },
  { no: 18, date: '01/07', dossierCode: 'G22.99-230701-020005', receiptCode: 'H29.2-230701-0360', program: 'VStyle', status: 'Thành công' },
  { no: 19, date: '03/07', dossierCode: 'G22.99-230703-020222', receiptCode: 'H29.2-230703-0750', program: 'G-Shock (giảm giá / mua tặng)', status: 'Từ chối' },
  { no: 20, date: '03/07', dossierCode: 'G22.99-230703-020187', receiptCode: 'H29.2-230703-0685', program: 'Liên kết đối tác thời trang', status: 'Từ chối' },
  { no: 21, date: '04/07', dossierCode: 'G22.99-230704-020153', receiptCode: 'PAKN20230704-0145820', program: 'Pop-up An Lạc', status: 'Thành công' },
  { no: 22, date: '04/07', dossierCode: 'G22.99-230704-020184', receiptCode: 'H29.2-230704-0870', program: 'Remarketing 2023', status: 'Thành công' },
  { no: 23, date: '04/07', dossierCode: 'G22.99-230704-020135', receiptCode: 'H29.2-230704-0797', program: 'Hợp tác Co.opmart – Casio', status: 'Thành công' },
  { no: 24, date: '04/07', dossierCode: 'G22.99-230704-020127', receiptCode: '—', program: 'Sale event AEON Bình Dương', status: 'Thành công' },
  { no: 25, date: '06/07', dossierCode: 'G22.99-230706-020264', receiptCode: 'H29.2-230706-0584', program: 'Đồng hồ trên tay – trúng quà lớn', status: 'Từ chối' },
  { no: 26, date: '10/07', dossierCode: 'G22.99-230710-020025', receiptCode: 'H29.2-230710-0611', program: 'G-Shock (giảm giá / mua tặng)', status: 'Thành công' },
  { no: 27, date: '10/07', dossierCode: 'G22.99-230710-020038', receiptCode: 'H29.2-230710-0651', program: 'Liên kết đối tác thời trang', status: 'Từ chối' },
  { no: 28, date: '11/07', dossierCode: 'G22.99-230711-020093', receiptCode: 'H29.2-230711-0443', program: 'Liên kết đối tác thời trang', status: 'Thành công' },
  { no: 29, date: '15/07', dossierCode: '—', receiptCode: 'H29.2-230715-0048', program: 'Gigamall / Diamond', status: 'Từ chối' },
  { no: 30, date: '15/07', dossierCode: '—', receiptCode: 'H29.2-230715-0047', program: 'Gigamall / Diamond', status: 'Từ chối' },
  { no: 31, date: '28/07', dossierCode: 'G22.99-230728-020221', receiptCode: 'H29.2-230728-0179', program: 'CLEARSALE', status: 'Thành công' },
  { no: 32, date: '28/07', dossierCode: 'G22.99-230728-020233', receiptCode: 'H29.2-230728-0191', program: 'CLEARSALE', status: 'Thành công' },
  { no: 33, date: '28/07', dossierCode: 'G22.99-230728-020241', receiptCode: 'H29.2-230728-0199', program: 'CLEARSALE', status: 'Thành công' },
  { no: 34, date: '08/08', dossierCode: 'G22.99-230808-020279', receiptCode: 'H29.2-230808-0335', program: 'Pop-up An Lạc', status: 'Thành công' },
  { no: 35, date: '08/08', dossierCode: 'G22.99-230808-020262', receiptCode: 'H29.2-230808-0313', program: 'Remarketing 2023', status: 'Từ chối' },
  { no: 36, date: '10/08', dossierCode: 'G22.99-230810-020030', receiptCode: 'H29.2-230810-0174', program: 'Bán hàng đặc biệt', status: 'Thành công' },
  { no: 37, date: '21/08', dossierCode: 'G22.99-230821-020226', receiptCode: 'H29.2-230821-0256', program: 'Hợp tác Co.opmart – Casio', status: 'Từ chối' },
  { no: 38, date: '21/08', dossierCode: 'G22.99-230821-020259', receiptCode: 'H29.2-230821-0286', program: 'Liên kết đối tác thời trang', status: 'Từ chối' },
  { no: 39, date: '26/08', dossierCode: 'G22.99-230826-030001', receiptCode: '—', program: 'CLEARSALE', status: 'Từ chối' },
];

const PROGRAM_GROUPS = [
  { name: 'G-Shock (giảm giá / mua tặng)', total: 6, success: 5, reject: 1, rate: '83.3%' },
  { name: 'Liên kết đối tác thời trang', total: 5, success: 2, reject: 3, rate: '40.0%' },
  { name: 'Pop-up An Lạc', total: 4, success: 4, reject: 0, rate: '100%' },
  { name: 'Mùa hè rực rỡ', total: 4, success: 2, reject: 2, rate: '50.0%' },
  { name: 'CLEARSALE', total: 4, success: 3, reject: 1, rate: '75.0%' },
  { name: 'Hợp tác Co.opmart – Casio', total: 3, success: 2, reject: 1, rate: '66.7%' },
  { name: 'VStyle', total: 3, success: 3, reject: 0, rate: '100%' },
  { name: 'Tưng bừng mua sắm hè', total: 2, success: 2, reject: 0, rate: '100%' },
  { name: 'Bán hàng đặc biệt', total: 2, success: 2, reject: 0, rate: '100%' },
  { name: 'Remarketing 2023', total: 2, success: 1, reject: 1, rate: '50.0%' },
  { name: 'Gigamall / Diamond', total: 2, success: 0, reject: 2, rate: '0%' },
  { name: 'Sale event AEON Bình Dương', total: 1, success: 1, reject: 0, rate: '100%' },
  { name: 'Đồng hồ trên tay – trúng quà lớn', total: 1, success: 0, reject: 1, rate: '0%' },
];

export const SCTReportDashboard: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Thành công' | 'Từ chối'>('all');

  const filteredDossiers = DOSSIERS_DATA.filter((d) => {
    if (filter === 'all') return true;
    return d.status === filter;
  });

  return (
    <div className="space-y-4 bg-slate-50/70 p-3.5 sm:p-4 rounded-xl border border-slate-200">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-200">
        <div>
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <FileSpreadsheet className="w-4 h-4 text-sky-600" />
            <span>Báo cáo theo dõi hồ sơ đăng ký khuyến mại</span>
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Sở Công Thương TP.HCM & Bình Dương · Giai đoạn 26/05 – 26/08/2023
          </p>
        </div>
        <a
          href="/assets/aistudio/Ba_o_ca_o_theo_do_i_ho___so__So___Co_ng_Thu_o_ng_-_Claude_bff13d97.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors shrink-0 w-fit cursor-pointer"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Xem file PDF gốc</span>
        </a>
      </div>

      {/* 5 KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-center shadow-2xs">
          <div className="text-xl font-extrabold text-slate-800">39</div>
          <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Tổng hồ sơ</div>
        </div>
        <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-center shadow-2xs">
          <div className="text-xl font-extrabold text-emerald-600">27</div>
          <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Thành công</div>
        </div>
        <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-center shadow-2xs">
          <div className="text-xl font-extrabold text-rose-600">12</div>
          <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Bị từ chối</div>
        </div>
        <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-center shadow-2xs">
          <div className="text-xl font-extrabold text-sky-600">69.2%</div>
          <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Tỷ lệ đạt</div>
        </div>
        <div className="col-span-2 sm:col-span-1 p-2.5 bg-white rounded-lg border border-slate-200 text-center shadow-2xs">
          <div className="text-xl font-extrabold text-slate-800">13</div>
          <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Nhóm CTKM</div>
        </div>
      </div>

      {/* 2 Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Donut Chart */}
        <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-2">
            <PieChart className="w-3.5 h-3.5 text-sky-600" />
            <span>Tỷ lệ kết quả hồ sơ</span>
          </div>

          <div className="flex items-center justify-around py-1">
            <div className="relative w-24 h-24 shrink-0">
              <svg width="96" height="96" viewBox="0 0 100 100" className="-rotate-90">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#F1F5F9" strokeWidth="14" />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="#F43F5E"
                  strokeWidth="14"
                  strokeDasharray="238.76"
                  strokeDashoffset="0"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="14"
                  strokeDasharray="165.2 238.76"
                  strokeDashoffset="0"
                />
                <g className="rotate-90 origin-center">
                  <text x="50" y="47" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0F172A">
                    69.2%
                  </text>
                  <text x="50" y="60" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#64748B">
                    THÀNH CÔNG
                  </text>
                </g>
              </svg>
            </div>

            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 shrink-0" />
                <span>
                  Thành công: <strong className="text-emerald-700">27</strong> (69.2%)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-rose-500 shrink-0" />
                <span>
                  Bị từ chối: <strong className="text-rose-700">12</strong> (30.8%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly breakdown */}
        <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-2">
            <BarChart3 className="w-3.5 h-3.5 text-sky-600" />
            <span>Hồ sơ theo tháng</span>
          </div>

          <div className="space-y-2 text-xs">
            {/* T5 */}
            <div className="flex items-center gap-2">
              <span className="w-14 text-slate-500 font-medium shrink-0">Tháng 5</span>
              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden flex" title="2/2 thành công (100%)">
                <div style={{ width: '100%' }} className="bg-emerald-500" />
              </div>
              <span className="w-10 text-right font-bold text-slate-700">2/2</span>
            </div>
            {/* T6 */}
            <div className="flex items-center gap-2">
              <span className="w-14 text-slate-500 font-medium shrink-0">Tháng 6</span>
              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden flex" title="13 thành công, 2 từ chối (86.7%)">
                <div style={{ width: '86.7%' }} className="bg-emerald-500" />
                <div style={{ width: '13.3%' }} className="bg-rose-500" />
              </div>
              <span className="w-10 text-right font-bold text-slate-700">13/15</span>
            </div>
            {/* T7 */}
            <div className="flex items-center gap-2">
              <span className="w-14 text-slate-500 font-medium shrink-0">Tháng 7</span>
              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden flex" title="10 thành công, 6 từ chối (62.5%)">
                <div style={{ width: '62.5%' }} className="bg-emerald-500" />
                <div style={{ width: '37.5%' }} className="bg-rose-500" />
              </div>
              <span className="w-10 text-right font-bold text-slate-700">10/16</span>
            </div>
            {/* T8 */}
            <div className="flex items-center gap-2">
              <span className="w-14 text-slate-500 font-medium shrink-0">Tháng 8</span>
              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden flex" title="2 thành công, 4 từ chối (33.3%)">
                <div style={{ width: '33.3%' }} className="bg-emerald-500" />
                <div style={{ width: '66.7%' }} className="bg-rose-500" />
              </div>
              <span className="w-10 text-right font-bold text-slate-700">2/6</span>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 text-right mt-2">
            <span className="text-emerald-600 font-semibold">● Xanh: thành công</span> ·{' '}
            <span className="text-rose-600 font-semibold">● Đỏ: từ chối</span>
          </div>
        </div>
      </div>

      {/* Program Groups Table */}
      <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-bold text-slate-700">Kết quả theo nhóm chương trình (13 nhóm)</div>
          <span className="text-[11px] text-slate-400">Tổng 39 hồ sơ</span>
        </div>
        <div className="overflow-x-auto max-h-44 border border-slate-100 rounded-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 font-bold sticky top-0 border-b border-slate-200">
              <tr>
                <th className="py-1.5 px-2.5">Nhóm chương trình</th>
                <th className="py-1.5 px-2 text-center">Hồ sơ</th>
                <th className="py-1.5 px-2 text-center">Thành công</th>
                <th className="py-1.5 px-2 text-center">Từ chối</th>
                <th className="py-1.5 px-2.5 text-right">Tỷ lệ đạt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {PROGRAM_GROUPS.map((pg, i) => (
                <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-1.5 px-2.5 font-medium">{pg.name}</td>
                  <td className="py-1.5 px-2 text-center text-slate-600">{pg.total}</td>
                  <td className="py-1.5 px-2 text-center font-bold text-emerald-600">{pg.success}</td>
                  <td className="py-1.5 px-2 text-center font-bold text-rose-600">{pg.reject}</td>
                  <td className="py-1.5 px-2.5 text-right font-bold text-sky-700">{pg.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full 39 Dossiers Filterable Log */}
      <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-xs font-bold text-slate-700">Chi tiết toàn bộ hồ sơ đăng ký</div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả (39)
            </button>
            <button
              type="button"
              onClick={() => setFilter('Thành công')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                filter === 'Thành công'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Thành công (27)
            </button>
            <button
              type="button"
              onClick={() => setFilter('Từ chối')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                filter === 'Từ chối'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Bị từ chối (12)
            </button>
          </div>
        </div>

        <div className="overflow-x-auto max-h-52 border border-slate-100 rounded-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 font-bold sticky top-0 border-b border-slate-200">
              <tr>
                <th className="py-1.5 px-2 text-center w-10">STT</th>
                <th className="py-1.5 px-2">Ngày</th>
                <th className="py-1.5 px-2">Mã hồ sơ</th>
                <th className="py-1.5 px-2">Mã biên nhận</th>
                <th className="py-1.5 px-2.5">Chương trình</th>
                <th className="py-1.5 px-2 text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredDossiers.map((d) => (
                <tr key={d.no} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-1.5 px-2 text-center text-slate-400">{d.no}</td>
                  <td className="py-1.5 px-2 font-semibold text-slate-800">{d.date}</td>
                  <td className="py-1.5 px-2 font-mono text-[11px] text-slate-600">{d.dossierCode}</td>
                  <td className="py-1.5 px-2 font-mono text-[11px] text-slate-600">{d.receiptCode}</td>
                  <td className="py-1.5 px-2.5 font-medium">{d.program}</td>
                  <td className="py-1.5 px-2 text-center">
                    {d.status === 'Thành công' ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Thành công</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700">
                        <XCircle className="w-3 h-3" />
                        <span>Bị từ chối</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[10.5px] text-slate-400 italic">
          * Quy ước: hồ sơ chưa ghi trạng thái cập nhật được tính là thành công. Nhóm chương trình được gộp từ tên chương trình trong file theo dõi Sở Công Thương.
        </p>
      </div>
    </div>
  );
};
