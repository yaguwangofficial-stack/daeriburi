"use client";

import React, { useState, useEffect } from "react";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });
  const [fundingRate, setFundingRate] = useState(0);

  // 1. 카운트다운 및 달성률 로직
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else { s = 59; if (m > 0) m--; else { m = 59; if (h > 0) h--; } }
        return { h, m, s };
      });
    }, 1000);
    const rateTimer = setTimeout(() => setFundingRate(88), 500);
    return () => { clearInterval(timer); clearTimeout(rateTimer); };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 scroll-smooth">
      {/* SECTION 1: GNB */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 z-[100]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-3xl font-black text-emerald-600 tracking-tighter italic uppercase">
            DAERIBERI
          </div>
          <div className="flex gap-4 md:gap-8 items-center font-bold text-sm">
            <span className="text-emerald-500 animate-pulse text-xs">● 펀딩 진행 중</span>
            <button className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:scale-105 transition shadow-lg shadow-emerald-200">
              참여하기
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 2: HERO (사용자 멘트 완벽 유지) */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col items-center text-center">
        <div className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-xs mb-8 animate-bounce">
          🏆 (주) A get - 2026 환경 혁신 브랜드 대상 수상
        </div>
        <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tight">
          당신의 시간을 <br />
          <span className="text-emerald-500 underline decoration-slate-200">
            버리지 마세요.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed font-medium">
          분리수거에 뺏긴 당신의 소중한 시간 1시간. <br />
          <span className="text-slate-900 font-bold">대리버리(DAERIBERI)</span>가 당신의 저녁시간을 책임집니다.
        </p>
        <div className="relative w-full aspect-video rounded-[50px] overflow-hidden shadow-2xl border-8 border-slate-50 group">
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 animate-pulse"></div>
          <img
            src="/hero.png" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms]"
            alt="대리버리가 제공하는 프리미엄 A get 수거함"
          />
          {/* 가독성 개선 오버레이 */}
          <div className="absolute bottom-10 left-10 text-left z-20 space-y-4">
            <p className="text-6xl md:text-8xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              {fundingRate}%
            </p>
            <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-white/20 inline-block transform -rotate-1">
              <p className="text-emerald-600 font-black text-xl md:text-2xl italic tracking-tight leading-none">
                마감 임박 ! 성공적인 펀딩이 진행 중입니다
              </p>
              <div className="mt-1 w-full h-1 bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 animate-pulse" style={{width: '70%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM */}
      <section className="py-40 bg-slate-950 text-white px-6">
        <div className="max-w-4xl mx-auto space-y-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            매주 반복되는 <br />
            <span className="text-slate-500 italic">"분리수거 지옥"</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[{t: "라벨 제거", d: "손톱이 깨지는 스트레스", i: "💅"}, {t: "용기 세척", d: "버려지는 물과 세제", i: "🧼"}, {t: "분류 오류", d: "60%가 폐기되는 진실", i: "🚫"}].map((v, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-emerald-500 transition-colors group">
                <div className="text-5xl mb-6 group-hover:scale-125 transition">{v.i}</div>
                <h4 className="text-2xl font-bold mb-4">{v.t}</h4>
                <p className="text-slate-400 group-hover:text-white transition">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: QUESTION (흰 배경 + 초록 글씨) */}
      {/* SECTION 4: QUESTION (배경 이미지 패치 완료) */}
<section className="py-60 bg-white text-center px-6 relative overflow-hidden group">
  {/* 👇 가독성 개선된 배경 이미지 패치 👇 */}
  <img
    src="/question_bg.png" // public 폴더의 question_bg.png를 불러온다.
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms]"
    alt="Why is environmental protection so stressful?"
  />
  
  {/* 👇 기존 멘트 유지 + 가독성 플레이트 적용 👇 */}
  <div className="bg-white/90 backdrop-blur-md px-10 py-6 rounded-[30px] inline-block shadow-2xl border border-white/20 relative z-10">
    <h2 className="text-4xl md:text-7xl font-black text-emerald-500 leading-tight animate-pulse">
      "왜 환경을 지키는 일이 <br /> 스트레스여야 할까요?"
    </h2>
  </div>
</section>

{/* SECTION 6: VALUE 01 - 시간 (전민건 파운더 기획안 반영) */}
<section className="py-40 bg-white px-6 border-b border-slate-50">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
    <div className="w-full md:w-1/2 aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 relative group">
      <img src="/freedom.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Family Time" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
    </div>
    <div className="w-full md:w-1/2 space-y-8">
      <span className="text-emerald-600 font-black tracking-widest text-sm uppercase">RECLAIM YOUR EVENING</span>
      <h3 className="text-5xl font-black leading-tight">① 당신의 저녁 <br /><span className="text-emerald-500">1시간을 돌려드립니다.</span></h3>
      <div className="space-y-4 text-xl text-slate-600 leading-relaxed">
        <p>매주 쏟아지는 배달 용기를 씻고, 박스 테이프를 뜯고, 엘리베이터 앞에서 무거운 짐을 들고 대기하는 시간.</p>
        <p className="font-bold text-slate-900 italic">"그 시간은 당신이 가장 사랑하는 사람들과 함께해야 할 소중한 휴식입니다."</p>
        <p>대리버리는 한 달 평균 5시간의 노동을 제거하여, 당신에게 잃어버린 저녁을 선물합니다.</p>
      </div>
    </div>
  </div>
</section>

{/* SECTION 7: VALUE 02 - 환경 (데이터 기반 확장) */}
<section className="py-40 bg-emerald-50 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-20">
    <div className="w-full md:w-1/2 aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-white relative group">
      <img src="/recycling.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Professional Sorting" />
    </div>
    <div className="w-full md:w-1/2 space-y-8">
      <span className="text-emerald-600 font-black tracking-widest text-sm uppercase">ZERO-WASTE REVOLUTION</span>
      <h3 className="text-5xl font-black leading-tight">② <span className="text-emerald-500">'진짜'</span> 재활용률을 <br />비약적으로 높입니다.</h3>
      <p className="text-xl text-slate-700 leading-relaxed">
        개인이 대충 버린 쓰레기의 60% 이상이 선별장에서 탈락되어 매립되거나 소각된다는 사실을 알고 계셨나요? 
        <br /><br />
        대리버리는 다릅니다. 전문 교육을 이수한 <span className="font-bold text-emerald-600">대리버리 크루</span>가 
        '대리버리 정밀 선별 가이드'에 따라 세척, 라벨 제거, 소재 분류를 완벽하게 수행합니다. 
        우리는 자원 회수율을 <span className="underline decoration-emerald-300 decoration-4 font-bold">90% 이상</span>으로 끌어올립니다.
      </p>
    </div>
  </div>
</section>

{/* SECTION 8: VALUE 03 - 인테리어 (감성/공간 확장) */}
<section className="py-40 bg-white px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
    <div className="w-full md:w-1/2 aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 relative group">
      <img src="/gallery_bg.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="A get interior" />
    </div>
    <div className="w-full md:w-1/2 space-y-8">
      <span className="text-emerald-600 font-black tracking-widest text-sm uppercase">THE ART OF ENTRANCE</span>
      <h3 className="text-5xl font-black leading-tight">③ 현관문 앞이 <br /><span className="text-emerald-500">하나의 갤러리가 됩니다.</span></h3>
      <p className="text-xl text-slate-700 leading-relaxed">
        현관 구석을 차지하던 칙칙한 비닐봉지와 박스들은 이제 잊으세요. 
        <br /><br />
        대리버리 전용 수거함 <span className="font-bold italic text-emerald-600">'A get'</span>은 
        공간의 품격을 높이는 미니멀한 오브제 디자인을 지향합니다. 
        단순한 쓰레기통이 아닙니다. 집의 첫인상을 바꾸는 <span className="text-slate-900 font-black">라이프스타일 가전</span>입니다.
      </p>
    </div>
  </div>
</section>

{/* SECTION 7: FEATURES - 진짜 재활용률 90% (지그재그 레이아웃) */}
<section className="py-40 bg-emerald-50 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row-reverse items-center gap-20">
      
      {/* 1. 이미지 영역 (오른쪽 배치) */}
      <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
        <img
          src="/recycling2.jpeg" // 방금 저장한 이미지 파일명
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms]"
          alt="대리버리 크루의 전문 선별 작업"
        />
      </div>

      {/* 2. 텍스트 영역 (왼쪽 배치) */}
      <div className="w-full md:w-1/2 space-y-8">
        <div className="inline-block bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
          ECO-FRIENDLY TECHNOLOGY
        </div>
        <p className="text-2xl font-bold opacity-80">♻️</p>
        <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
          진짜 재활용률 <span className="text-emerald-600">90%</span>
        </h3>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          단순히 수거에서 끝나지 않습니다. <br />
          전문 교육을 받은 <span className="text-slate-900 font-bold">대리버리 크루</span>가 
          배달 용기 세척부터 라벨 제거까지 완벽하게 재선별하여 
          버려지는 자원을 최소화합니다.
        </p>
        
        {/* 신뢰도를 높이는 미니 스탯 바 */}
        <div className="pt-6 space-y-4">
          <div className="flex justify-between font-bold text-sm text-slate-500 mb-2">
            <span>일반 분리수거 재활용률</span>
            <span>약 30%</span>
          </div>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[90%] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
          </div>
          <p className="text-xs text-emerald-600 font-bold tracking-widest uppercase">
            DAERIBERI PREMIUM SORTING SYSTEM
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* SECTION 8: GALLERY (배경 이미지 패치 완료) */}
{/* SECTION 8: GALLERY (텍스트 위치 하단 조정 패치) */}
<section className="py-60 bg-white text-center px-6 relative overflow-hidden group">
  <img
    src="/gallery_bg.png"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms]"
    alt="Premium DAERIBURI Bin"
  />
  
  {/* 👇 텍스트 바를 하단(bottom-20)으로 내리고 크기를 조절해 이미지를 살림 👇 */}
  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white/20 z-10 w-[90%] md:w-auto">
    <h2 className="text-2xl md:text-4xl font-black text-emerald-700 leading-tight">
      현관의 품격을 높이는 전용 수거함
    </h2>
  </div>
</section>
{/* SECTION 10: FUNDING PLAN - 투명한 운영 계획 */}
<section className="py-40 bg-slate-50 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-20 space-y-4">
      <span className="text-emerald-600 font-black tracking-widest text-sm uppercase">Transparency</span>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter">펀딩 운영 및 자금 사용 계획</h2>
      <p className="text-xl text-slate-500">여러분의 소중한 후원금은 더 나은 지구와 당신의 시간을 위해 이렇게 쓰입니다.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* 왼쪽: 사용 계획 리스트 */}
      <div className="space-y-8">
        <div className="flex gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl shrink-0">🛠️</div>
          <div>
            <h4 className="text-2xl font-bold mb-2">전용 수거함 'A get' 양산 (40%)</h4>
            <p className="text-slate-500 leading-relaxed">친환경 재생 플라스틱 소재를 활용한 'A get'의 금형 제작 및 초기 물량 1,000개 생산 비용으로 사용됩니다.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl shrink-0">🏃</div>
          <div>
            <h4 className="text-2xl font-bold mb-2">대리버리 크루 교육 시스템 (30%)</h4>
            <p className="text-slate-500 leading-relaxed">완벽한 자원 선별을 위한 크루 양성 아카데미 운영 및 전용 물류 거점(Sorting Hub) 구축 비용에 투입됩니다.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl shrink-0">📱</div>
          <div>
            <h4 className="text-2xl font-bold mb-2">서비스 관제 앱 고도화 (20%)</h4>
            <p className="text-slate-500 leading-relaxed">실시간 수거 알림, 탄소 절감량 확인 기능을 포함한 사용자 전용 앱의 UX/UI 개선에 사용됩니다.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl shrink-0">📢</div>
          <div>
            <h4 className="text-2xl font-bold mb-2">마케팅 및 운영비 (10%)</h4>
            <p className="text-slate-500 leading-relaxed">더 많은 가구가 대리버리를 통해 환경 보호에 동참할 수 있도록 홍보 및 초기 운영 안정화에 활용됩니다.</p>
          </div>
        </div>
      </div>

      {/* 오른쪽: 목표 금액 카드 */}
      <div className="bg-emerald-600 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <h4 className="text-xl font-bold opacity-80 mb-2">Goal Amount</h4>
        <div className="text-6xl font-black mb-8 italic">50,000,000원</div>
        
        <div className="space-y-6 border-t border-white/20 pt-8">
          <div className="flex justify-between items-end">
            <span className="font-bold opacity-80">현재 달성률</span>
            <span className="text-3xl font-black">112%</span>
          </div>
          <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white w-[112%] shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
          </div>
          <p className="text-sm leading-relaxed opacity-90">
            * 목표 금액 달성 시, 펀딩 종료 후 즉시 제품 양산 단계로 진입하며, 
            미달성 시 모든 후원금은 자동 환불 처리되는 Safe-Funding 시스템을 채택하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* SECTION 11: ROADMAP - 타임라인 */}
<section className="py-40 bg-white px-6">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-20 space-y-4">
      <span className="text-emerald-600 font-black tracking-widest text-sm uppercase">Roadmap</span>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter">서비스 런칭 타임라인</h2>
    </div>

    <div className="relative">
      {/* 세로선 */}
      <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-100 hidden md:block"></div>

      <div className="space-y-24 relative">
        {/* 단계 1: 펀딩 기간 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-right hidden md:block pr-10">
            <h4 className="text-2xl font-black text-emerald-500">2026. 04. 15 - 05. 15</h4>
            <p className="text-slate-500 mt-2 font-bold">오픈 펀딩 캠페인 진행</p>
          </div>
          <div className="w-8 h-8 bg-emerald-500 rounded-full border-4 border-white shadow-lg z-10"></div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-2xl font-black">와디즈/텀블벅 캠페인 런칭</h4>
            <p className="text-slate-600 mt-2">
              슈퍼 얼리버드 모집 및 런칭 멤버십 확정. <br />
              전용 수거함 'A get'의 최종 프로토타입 공개 및 시연회 진행.
            </p>
          </div>
        </div>

        {/* 단계 2: 생산 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="w-full md:w-1/2 text-left hidden md:block pl-10">
            <h4 className="text-2xl font-black text-emerald-500">2026. 06. 01</h4>
            <p className="text-slate-500 mt-2 font-bold">제품 양산 및 크루 교육</p>
          </div>
          <div className="w-8 h-8 bg-slate-200 rounded-full border-4 border-white shadow-lg z-10"></div>
          <div className="w-full md:w-1/2 text-right pr-10">
            <h4 className="text-2xl font-black">'A get' 양산 공정 가동</h4>
            <p className="text-slate-600 mt-2">
              친환경 소재 수거함 대량 생산 시작. <br />
              권역별 대리버리 크루(전문 선별 인력) 선발 및 직무 교육 실시.
            </p>
          </div>
        </div>

        {/* 단계 3: 베타 서비스 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-right hidden md:block pr-10">
            <h4 className="text-2xl font-black text-emerald-500">2026. 07. 15</h4>
            <p className="text-slate-500 mt-2 font-bold">수도권 지역 베타 테스트</p>
          </div>
          <div className="w-8 h-8 bg-slate-200 rounded-full border-4 border-white shadow-lg z-10"></div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-2xl font-black">서비스 정식 도입 (베타)</h4>
            <p className="text-slate-600 mt-2">
              펀딩 참여자 대상 수거함 배송 및 서비스 개시. <br />
              현장 피드백 수집을 통한 운영 프로세스 최적화.
            </p>
          </div>
        </div>

        {/* 단계 4: 정식 런칭 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="w-full md:w-1/2 text-left hidden md:block pl-10">
            <h4 className="text-2xl font-black text-emerald-500">2026. 09. 01</h4>
            <p className="text-slate-500 mt-2 font-bold">전국 주요 도시 확장</p>
          </div>
          <div className="w-8 h-8 bg-slate-200 rounded-full border-4 border-white shadow-lg z-10"></div>
          <div className="w-full md:w-1/2 text-right pr-10">
            <h4 className="text-2xl font-black">DAERIBERI 그랜드 오픈</h4>
            <p className="text-slate-600 mt-2">
              전용 모바일 앱 정식 런칭 및 전국 서비스 확대. <br />
              지속 가능한 쓰레기 제로 라이프스타일의 보편화 선언.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SECTION 12: REWARD (한국어 패치 완료) */}
      <section id="reward" className="py-40 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-20 tracking-tighter">대리버리 멤버십 혜택</h2>
        <div className="p-12 border-8 border-emerald-500 rounded-[60px] shadow-2xl space-y-10 group hover:scale-[1.02] transition-all">
          <div className="flex justify-between items-start">
            <span className="bg-emerald-500 text-white px-6 py-2 rounded-full font-black animate-pulse">슈퍼 얼리버드 (한정 수량)</span>
            <div className="text-right font-black">
              <p className="text-slate-400 line-through text-2xl">49,000원</p>
              <p className="text-5xl text-emerald-600">19,000원</p>
            </div>
          </div>
          <h3 className="text-4xl font-black tracking-tighter italic text-slate-800 underline decoration-emerald-200">
            대리버리 1개월 이용권 <br /> + '얼리버드 멤버 (VIP) 전용 수거함
          </h3>
          <ul className="space-y-4 text-xl text-slate-500 font-medium">
            <li>✅ 프리미엄 수거함 '얼리버리' 증정 (3만원 상당)</li>
            <li>✅ 주 1회 전문 크루 방문 수거 서비스</li>
            <li>✅ 배달 용기 세척 & 라벨 제거 완벽 대행</li>
          </ul>
          <button className="w-full bg-emerald-500 text-white py-8 rounded-[30px] font-black text-3xl shadow-xl hover:bg-emerald-600 transition-all">
            지금 바로 펀딩 참여하기
          </button>
        </div>
      </section>

      {/* SECTION 13: COUNTDOWN (단위 한국어화) */}
      <section className="py-40 bg-slate-50 text-center px-6 border-y border-slate-200">
        <h2 className="text-2xl font-black text-slate-400 mb-10 tracking-[0.3em] uppercase">남은 시간</h2>
        <div className="flex justify-center gap-6 text-7xl md:text-[150px] font-black text-slate-900 leading-none">
          <div className="flex flex-col"><span>{String(timeLeft.h).padStart(2, '0')}</span><span className="text-sm font-bold text-slate-300">시간</span></div>
          <span className="text-emerald-500">:</span>
          <div className="flex flex-col"><span>{String(timeLeft.m).padStart(2, '0')}</span><span className="text-sm font-bold text-slate-300">분</span></div>
          <span className="text-emerald-500">:</span>
          <div className="flex flex-col text-emerald-300"><span>{String(timeLeft.s).padStart(2, '0')}</span><span className="text-sm font-bold text-slate-300">초</span></div>
        </div>
        <p className="mt-10 text-xl font-bold text-emerald-600">전체 물량의 92%가 이미 소진되었습니다!</p>
      </section>

      {/* SECTION 14: FAQ */}
      <section className="py-40 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center underline decoration-slate-200 underline-offset-8">자주 묻는 질문</h2>
        <div className="space-y-6">
          {["수거 요일은 선택 가능한가요?", "어디까지 분리수거를 해주시나요?", "수거함 크기는 어느 정도인가요?"].map((q, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl font-bold flex justify-between items-center cursor-pointer hover:bg-emerald-50 transition">
              <span>{q}</span>
              <span className="text-emerald-500 text-2xl">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 15: FOOTER */}
      <footer className="py-20 bg-slate-950 text-white text-center px-6">
        <div className="max-w-xl mx-auto space-y-10 opacity-50">
          <div className="text-3xl font-black tracking-tighter uppercase italic">DAERIBERI</div>
          <p className="text-xs leading-relaxed">
            본 페이지는 (주) A get에서 운영하는 서비스 대리버리의 시뮬레이션 페이지입니다. <br />
            실제 서비스 및 결제와는 무관하며, 모든 이미지는 AI에 의해 생성되었습니다.
          </p>
          <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest">
            <span>© 2026 A get Corp.</span>
            <span>개인정보처리방침</span>
            <span>이용약관</span>
          </div>
        </div>
      </footer>
    </div>
  );
}