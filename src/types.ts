/**
 * Types and interfaces for Libaful Corporate Website
 */

export interface Facility {
  id: string;
  name: string;
  kana: string;
  type: string; // e.g. "通所介護", "居宅介護支援", etc.
  registryNumber: string; // 事業所番号
  postalCode: string;
  address: string;
  tel: string;
  fax: string;
  email?: string;
  capacity?: string; // 定員
  staffDetails?: string; // ケアマネなどの在籍情報
  features: {
    icon: string; // Lucide icon name
    label: string;
    description: string;
  }[];
  detailedDescription: string;
  recreationText?: string;
  otherText?: string; // e.g. 介護タクシーほのか等
  socialLinks?: {
    line?: string;
    instagram?: string;
  };
}

export interface ServiceCategory {
  id: string;
  name: string;
  japaneseName: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  targetAudience: string;
  image: string;
  facilities: string[]; // Facility IDs
}

export interface AssuranceItem {
  id: number;
  title: string;
  description: string;
  badge: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface JobOpening {
  id: string;
  title: string;
  facility: string;
  employmentType: string; // 正社員, パート, etc.
  salary: string;
  hours: string;
  requirements: string;
  benefits: string;
  description: string;
  isUrgent?: boolean;
}
