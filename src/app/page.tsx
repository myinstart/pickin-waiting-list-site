import WaitingListForm from "./components/WaitingListForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== Section 1: Hero ===== */}
      <section className="hero-gradient min-h-screen flex items-center justify-center px-6 py-20">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/70 text-xs font-medium tracking-wide">
              Coming Soon — 사전 등록 진행 중
            </span>
          </div>

          {/* Brand Name */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-gradient">PICKIN</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-4 font-medium">
            뷰티 브랜드와 인플루언서를 잇는
            <br className="sm:hidden" />{" "}
            <span className="text-white/90">스마트 매칭 플랫폼</span>
          </p>

          <p className="text-sm sm:text-base text-white/40 leading-relaxed mb-10 max-w-md mx-auto">
            데이터 기반 최적의 매칭으로, 브랜드는 딱 맞는 인플루언서를,
            인플루언서는 나에게 맞는 브랜드를 만나보세요.
          </p>

          {/* CTA Button */}
          <a
            href="#waitlist"
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
          >
            <span>웨이팅리스트 등록하기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-14">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                500+
              </p>
              <p className="text-xs text-white/40 mt-1">사전 등록</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                98%
              </p>
              <p className="text-xs text-white/40 mt-1">매칭 만족도</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">3x</p>
              <p className="text-xs text-white/40 mt-1">캠페인 효율</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Problem & Value ===== */}
      <section className="section-gradient py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              WHY PICKIN
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
              뷰티 마케팅,
              <br className="sm:hidden" /> 아직도 감으로 하시나요?
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              브랜드와 인플루언서 모두가 만족하는 캠페인.
              PICKIN이 데이터로 만들어 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="feature-card bg-white rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                정확한 매칭
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                브랜드 카테고리, 타겟 고객, 콘텐츠 스타일을 분석하여 최적의 파트너를
                추천합니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card bg-white rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                데이터 인사이트
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                실시간 캠페인 성과 분석과 인사이트로 마케팅 효율을 극대화합니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card bg-white rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                빠른 프로세스
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                복잡한 협업 과정을 간소화하여 캠페인 시작까지의 시간을 단축합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 3: How It Works ===== */}
      <section className="section-gradient-alt py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
              3단계로 시작하는
              <br className="sm:hidden" /> 스마트 매칭
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              간단한 프로필 등록만으로 최적의 파트너를 만나보세요.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
            {/* Step 1 */}
            <div className="relative bg-white rounded-2xl p-6 border border-border feature-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground">프로필 등록</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                브랜드 또는 인플루언서 프로필을 등록하고 원하는 조건을 설정하세요.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-2xl p-6 border border-border feature-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  AI 매칭 추천
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                AI가 데이터를 분석하여 가장 적합한 파트너 후보를 추천해 드립니다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-2xl p-6 border border-border feature-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  캠페인 시작
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                매칭된 파트너와 바로 캠페인을 시작하고 실시간 성과를 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 4: For Both Sides ===== */}
      <section className="section-gradient py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              FOR EVERYONE
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
              브랜드도, 인플루언서도
              <br className="sm:hidden" /> 모두를 위한 플랫폼
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* For Brands */}
            <div className="feature-card rounded-2xl p-7 bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                광고주 · 브랜드
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  타겟 오디언스에 맞는 인플루언서 자동 추천
                </li>
                <li className="flex items-start gap-3 text-sm text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  캠페인 ROI 실시간 추적 및 리포트
                </li>
                <li className="flex items-start gap-3 text-sm text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  간편한 계약 및 정산 관리
                </li>
              </ul>
            </div>

            {/* For Influencers */}
            <div className="feature-card rounded-2xl p-7 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                인플루언서 · 크리에이터
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  나의 스타일에 맞는 브랜드 캠페인 매칭
                </li>
                <li className="flex items-start gap-3 text-sm text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  공정하고 투명한 보상 시스템
                </li>
                <li className="flex items-start gap-3 text-sm text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  콘텐츠 성과 분석 대시보드 제공
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Waiting List Form ===== */}
      <section id="waitlist" className="cta-gradient py-20 sm:py-28 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-purple-300 tracking-widest uppercase mb-3">
              JOIN WAITLIST
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              지금 바로 시작하세요
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
              웨이팅리스트에 등록하시면 PICKIN 런칭 시 가장 먼저 초대해 드립니다.
            </p>
          </div>

          {/* Form Container */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 max-w-lg mx-auto">
            <WaitingListForm />
          </div>

          {/* Trust note */}
          <p className="text-center text-xs text-white/30 mt-6">
            입력하신 정보는 안전하게 보호되며, 마케팅 용도로만 사용됩니다.
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#0a0820] py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gradient text-lg font-bold mb-2">PICKIN</p>
          <p className="text-white/30 text-xs">
            &copy; 2025 PICKIN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
