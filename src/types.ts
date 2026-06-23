/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 'customer' | 'provider' | 'admin';

export interface ProviderProfile {
  bio: string;
  categories: string[];
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  isVerified: 'unverified' | 'pending' | 'verified';
  skills: string[];
  avatar: string;
  phone: string;
  businessAddress: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  providerProfile?: ProviderProfile;
}

export interface Booking {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  providerId: string;
  providerName: string;
  serviceCategory: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g. "10:00"
  hours: number;
  hourlyRate: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'disputed';
  notes?: string;
  address: string;
  invoiceId: string;
  rating?: number;
  reviewText?: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  bookingId: string;
  customerId: string;
  customerName: string;
  providerId: string;
  providerName: string;
  date: string;
  serviceCategory: string;
  hours: number;
  hourlyRate: number;
  subtotal: number;
  tax: number;
  finalTotal: number;
  status: 'unpaid' | 'paid' | 'refunded';
}

export interface Dispute {
  id: string;
  bookingId: string;
  customerId: string;
  customerName: string;
  providerId: string;
  providerName: string;
  reason: string;
  description: string;
  status: 'open' | 'resolved_refunded' | 'resolved_paid';
  createdAt: string;
  resolutionNotes?: string;
}
