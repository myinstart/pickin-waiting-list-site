"use client";

import { useState } from "react";

type Tab = "advertiser" | "influencer";

export default function WaitingListForm() {
  const [activeTab, setActiveTab] = useState<Tab>("advertiser");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    name: "",
    snsAccount: "",
    influencerEmail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Tabs */}
      <div className="flex bg-white/10 rounded-2xl p-1.5 mb-8 backdrop-blur-sm border border-white/10">
        <button
          type="button"
          onClick={() => setActiveTab("advertiser")}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === "advertiser"
              ? "tab-active"
              : "text-white/60 hover:text-white/80"
          }`}
        >
          광고주
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("influencer")}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === "influencer"
              ? "tab-active"
              : "text-white/60 hover:text-white/80"
          }`}
        >
          인플루언서
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {activeTab === "advertiser" ? (
          <>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                브랜드 이름
              </label>
              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="브랜드 이름을 입력해주세요"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                이메일 주소
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@brand.com"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                이름
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력해주세요"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                SNS 계정
              </label>
              <input
                type="text"
                name="snsAccount"
                value={formData.snsAccount}
                onChange={handleChange}
                placeholder="@username"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                이메일 주소
              </label>
              <input
                type="email"
                name="influencerEmail"
                value={formData.influencerEmail}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm transition-all duration-200 focus:bg-white/12"
              />
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-gradient w-full py-4 rounded-xl text-white font-semibold text-base mt-6 cursor-pointer"
        >
          <span>
            {submitted ? "등록 완료!" : "웨이팅리스트 등록하기"}
          </span>
        </button>

        {submitted && (
          <p className="text-center text-sm text-green-400 mt-3 animate-fade-in">
            감사합니다! 빠른 시일 내에 연락드리겠습니다.
          </p>
        )}
      </form>
    </div>
  );
}
