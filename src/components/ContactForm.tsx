"use client";

import { useState, FormEvent } from "react";

interface FormData {
  clinicName: string;
  name: string;
  email: string;
  phone: string;
  avgPatients: string;
  receptionSetup: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  clinicName?: string;
  name?: string;
  email?: string;
  phone?: string;
  avgPatients?: string;
  receptionSetup?: string;
  timeline?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    clinicName: "",
    name: "",
    email: "",
    phone: "",
    avgPatients: "",
    receptionSetup: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.clinicName.trim()) {
      newErrors.clinicName = "この項目は必須です";
    }

    if (!formData.name.trim()) {
      newErrors.name = "この項目は必須です";
    }

    if (!formData.email.trim()) {
      newErrors.email = "この項目は必須です";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "この項目は必須です";
    } else if (!/^[\d\-\+\(\)\s]+$/.test(formData.phone)) {
      newErrors.phone = "有効な電話番号を入力してください";
    }

    if (!formData.avgPatients) {
      newErrors.avgPatients = "この項目は必須です";
    }

    if (!formData.receptionSetup) {
      newErrors.receptionSetup = "この項目は必須です";
    }

    if (!formData.timeline) {
      newErrors.timeline = "この項目は必須です";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
      }
    } catch {
      alert("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-[var(--bg-cream)] py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5 md:px-10">
          <div className="bg-[var(--brand-teal-light)] rounded-xl p-10 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-[var(--brand-teal)] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
              お問い合わせありがとうございます
            </h3>
            <p className="text-base text-[var(--text-medium)] leading-relaxed">
              送信が完了しました。
              <br />
              2営業日以内にご連絡いたします。
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[var(--bg-cream)] py-16 md:py-20">
      <div className="max-w-[800px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--text-dark)] mb-3">
            お問い合わせ
          </h2>
          <p className="text-base text-[var(--text-medium)]">
            まずは無料相談から。貴院に最適な導入プランをご提案します。
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6 md:p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            {/* Clinic Name */}
            <FormField
              label="クリニック名"
              name="clinicName"
              type="text"
              placeholder="例: 表参道デンタルクリニック"
              value={formData.clinicName}
              onChange={handleChange}
              error={errors.clinicName}
              required
            />

            {/* Name */}
            <FormField
              label="お名前"
              name="name"
              type="text"
              placeholder="例: 山田 太郎"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            {/* Email */}
            <FormField
              label="メールアドレス"
              name="email"
              type="email"
              placeholder="例: yamada@clinic.co.jp"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            {/* Phone */}
            <FormField
              label="電話番号"
              name="phone"
              type="tel"
              placeholder="例: 03-1234-5678"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
            />

            {/* Average Patients */}
            <SelectField
              label="1日の平均患者数"
              name="avgPatients"
              value={formData.avgPatients}
              onChange={handleChange}
              error={errors.avgPatients}
              required
              options={[
                { value: "", label: "選択してください", disabled: true },
                { value: "20名以下", label: "20名以下" },
                { value: "21-50名", label: "21-50名" },
                { value: "51-100名", label: "51-100名" },
                { value: "100名以上", label: "100名以上" },
              ]}
            />

            {/* Reception Setup */}
            <SelectField
              label="現在の受付体制"
              name="receptionSetup"
              value={formData.receptionSetup}
              onChange={handleChange}
              error={errors.receptionSetup}
              required
              options={[
                { value: "", label: "選択してください", disabled: true },
                { value: "専任の受付スタッフあり", label: "専任の受付スタッフあり" },
                { value: "他業務と兼任", label: "他業務と兼任" },
                { value: "受付スタッフなし", label: "受付スタッフなし" },
              ]}
            />

            {/* Timeline */}
            <SelectField
              label="導入希望時期"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              error={errors.timeline}
              required
              options={[
                { value: "", label: "選択してください", disabled: true },
                { value: "できるだけ早く", label: "できるだけ早く" },
                { value: "1-3ヶ月以内", label: "1-3ヶ月以内" },
                { value: "3-6ヶ月以内", label: "3-6ヶ月以内" },
                { value: "まずは情報収集", label: "まずは情報収集" },
              ]}
            />

            {/* Message (Optional) */}
            <div>
              <label className="block text-[15px] font-semibold text-[var(--text-dark)] mb-2">
                お問い合わせ内容（任意）
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="ご質問やご要望などがあればご記入ください"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base border border-[var(--border-gray)] rounded-md focus:outline-none focus:border-[var(--brand-teal)] focus:ring-[3px] focus:ring-[rgba(0,160,160,0.1)] transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto md:min-w-[240px] md:mx-auto md:block px-12 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-200 ${
                  isSubmitting
                    ? "bg-[var(--text-medium)] cursor-not-allowed"
                    : "bg-[var(--btn-black)] hover:bg-[var(--btn-black-hover)] hover:-translate-y-0.5 hover:shadow-lg"
                }`}
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-[var(--text-light)] text-center leading-relaxed pt-2">
              送信いただいた情報は、
              <a
                href="/privacy"
                className="text-[var(--brand-teal)] underline hover:text-[var(--brand-teal-hover)]"
              >
                プライバシーポリシー
              </a>
              に基づき適切に管理いたします。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

// Form Field Component
function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[15px] font-semibold text-[var(--text-dark)] mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 text-base border rounded-md focus:outline-none focus:border-[var(--brand-teal)] focus:ring-[3px] focus:ring-[rgba(0,160,160,0.1)] transition-all ${
          error ? "border-red-500" : "border-[var(--border-gray)]"
        }`}
      />
      {error && <p className="mt-1.5 text-[13px] text-red-500">{error}</p>}
    </div>
  );
}

// Select Field Component
function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  required,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  options: { value: string; label: string; disabled?: boolean }[];
}) {
  return (
    <div>
      <label className="block text-[15px] font-semibold text-[var(--text-dark)] mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 text-base border rounded-md appearance-none bg-white focus:outline-none focus:border-[var(--brand-teal)] focus:ring-[3px] focus:ring-[rgba(0,160,160,0.1)] transition-all cursor-pointer ${
            error ? "border-red-500" : "border-[var(--border-gray)]"
          } ${!value ? "text-gray-400" : "text-[var(--text-dark)]"}`}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-[var(--brand-teal)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {error && <p className="mt-1.5 text-[13px] text-red-500">{error}</p>}
    </div>
  );
}





