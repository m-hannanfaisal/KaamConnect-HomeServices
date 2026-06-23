import React, { useState, useEffect, useMemo } from 'react';
import { 
  User, 
  Booking, 
  Invoice, 
  Dispute, 
  UserRole, 
  ProviderProfile 
} from './types';
import { 
  INITIAL_USERS, 
  INITIAL_BOOKINGS, 
  INITIAL_INVOICES, 
  INITIAL_DISPUTES, 
  MYSQL_DDL 
} from './data/seedData';
import { 
  Wrench, 
  Zap, 
  Sparkles, 
  Leaf, 
  Smartphone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  CheckCircle, 
  ShieldCheck, 
  AlertTriangle, 
  Database, 
  FileText, 
  Plus, 
  Search, 
  X, 
  TrendingUp, 
  Users, 
  CreditCard, 
  Info, 
  Award, 
  Sliders, 
  Home, 
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Car,
  Hammer,
  Package,
  Bug,
  Tv,
  Wind,
  LogOut,
  Lock,
  UserPlus,
  LogIn,
  Trash2
} from 'lucide-react';

const SERVICE_CATEGORIES = [
  { name: 'Plumbing', icon: Wrench, color: 'text-blue-500 bg-blue-50' },
  { name: 'Electrical Services', icon: Zap, color: 'text-amber-500 bg-amber-50' },
  { name: 'House Cleaning', icon: Sparkles, color: 'text-pink-500 bg-pink-50' },
  { name: 'Gardening & Landscaping', icon: Leaf, color: 'text-emerald-500 bg-emerald-50' },
  { name: 'Smart Home Setup', icon: Home, color: 'text-purple-500 bg-purple-50' },
  { name: 'Chauffeur & Driver', icon: Car, color: 'text-sky-500 bg-sky-50' },
  { name: 'Pest Control', icon: Bug, color: 'text-rose-500 bg-rose-50' },
  { name: 'Appliance Repair', icon: Tv, color: 'text-indigo-500 bg-indigo-50' },
  { name: 'Handyman Services', icon: Hammer, color: 'text-orange-500 bg-orange-50' },
  { name: 'AC & HVAC Maintenance', icon: Wind, color: 'text-cyan-500 bg-cyan-50' },
  { name: 'Moving & Packing', icon: Package, color: 'text-teal-500 bg-teal-50' },
];

export default function App() {
  // --- Persistent Local State mimicking MySQL RDBMS Tables ---
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('home_services_users');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('home_services_bookings');
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });

  const [invoices, setInvoices] = useState<Invoice[]>(() => {
    const saved = localStorage.getItem('home_services_invoices');
    return saved ? JSON.parse(saved) : INITIAL_INVOICES;
  });

  const [disputes, setDisputes] = useState<Dispute[]>(() => {
    const saved = localStorage.getItem('home_services_disputes');
    return saved ? JSON.parse(saved) : INITIAL_DISPUTES;
  });

  // Sync state to simulates DB updates in localStorage
  useEffect(() => {
    localStorage.setItem('home_services_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('home_services_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('home_services_invoices', JSON.stringify(invoices));
  }, [invoices]);

  useEffect(() => {
    localStorage.setItem('home_services_disputes', JSON.stringify(disputes));
  }, [disputes]);

  // --- Session Simulation State ---
  // Default logged in user is Sarah Johnson (Customer)
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'discover' | 'my-bookings' | 'provider-dashboard' | 'admin-dashboard'>('discover');

  // --- Customer UI States ---
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProvider, setSelectedProvider] = useState<User | null>(null);
  const [bookingDate, setBookingDate] = useState<string>('2026-06-25');
  const [bookingTime, setBookingTime] = useState<string>('09:00');
  const [bookingHours, setBookingHours] = useState<number>(2);
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [bookingAddress, setBookingAddress] = useState<string>('128 Birchwood Lane, Maple Heights');
  
  // Checkout Modal State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('4111 2222 3333 4444');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCVV, setCardCVV] = useState('382');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [checkoutConflictError, setCheckoutConflictError] = useState<string | null>(null);

  // Review Submitting State
  const [reviewBookingId, setReviewBookingId] = useState<string | null>(null);
  const [reviewRating, setReviewRating] = useState<number>(5);
  const [reviewText, setReviewText] = useState<string>('');

  // Dispute Filing State
  const [disputeBookingId, setDisputeBookingId] = useState<string | null>(null);
  const [disputeReason, setDisputeReason] = useState<string>('');
  const [disputeDescription, setDisputeDescription] = useState<string>('');

  // --- Provider UI States ---
  const [editBio, setEditBio] = useState('');
  const [editRate, setEditRate] = useState<number>(50);
  const [editSkills, setEditSkills] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editAddress, setEditAddress] = useState('');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // --- Admin UI States ---
  const [resolvingDisputeId, setResolvingDisputeId] = useState<string | null>(null);
  const [resolutionActionNotes, setResolutionActionNotes] = useState('');

  // --- Global Inspector Modal ---
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [inspectorTab, setInspectorTab] = useState<'visual' | 'ddl'>('visual');

  // --- Custom Notification Banner ---
  const [bannerMsg, setBannerMsg] = useState<{ type: 'success' | 'refusal' | 'info'; text: string } | null>(null);

  const showNotification = (text: string, type: 'success' | 'refusal' | 'info' = 'success') => {
    setBannerMsg({ type, text });
    setTimeout(() => {
      setBannerMsg(prev => prev?.text === text ? null : prev);
    }, 6000);
  };

  // Sync current user states when identity switches or user is updated
  useEffect(() => {
    if (!currentUser) return;
    const updatedUser = users.find(u => u.id === currentUser.id);
    if (updatedUser) {
      setCurrentUser(updatedUser);
      // Auto switch tabs based on user role to simplify the interface
      if (updatedUser.role === 'customer' && activeTab === 'provider-dashboard') {
        setActiveTab('discover');
      } else if (updatedUser.role === 'provider' && activeTab === 'discover') {
        setActiveTab('provider-dashboard');
      } else if (updatedUser.role === 'admin' && activeTab === 'discover') {
        setActiveTab('admin-dashboard');
      }
    }
  }, [users, currentUser?.id]);

  // Load provider profile edit states
  useEffect(() => {
    if (currentUser?.providerProfile) {
      setEditBio(currentUser.providerProfile.bio);
      setEditRate(currentUser.providerProfile.hourlyRate);
      setEditSkills(currentUser.providerProfile.skills.join(', '));
      setEditPhone(currentUser.phone || '');
      setEditAddress(currentUser.providerProfile.businessAddress || '');
    }
  }, [currentUser]);

  // Automatically trigger reset if we detect old seed data format (e.g. users count is very small)
  useEffect(() => {
    if (users.length < 100) {
      localStorage.removeItem('home_services_users');
      localStorage.removeItem('home_services_bookings');
      localStorage.removeItem('home_services_invoices');
      localStorage.removeItem('home_services_disputes');
      setUsers(INITIAL_USERS);
      setBookings(INITIAL_BOOKINGS);
      setInvoices(INITIAL_INVOICES);
      setDisputes(INITIAL_DISPUTES);
      setCurrentUser(null);
      setActiveTab('discover');
    }
  }, [users]);

  // Filter providers for display
  const providersList = useMemo(() => {
    return users.filter(u => u.role === 'provider');
  }, [users]);

  const filteredProviders = useMemo(() => {
    return providersList.filter(p => {
      const profile = p.providerProfile;
      if (!profile) return false;

      // Category filter
      const matchesCategory = selectedCategory === 'All' || 
        profile.categories.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()));

      // Search filter (handles skills, name, bio)
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        profile.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [providersList, selectedCategory, searchQuery]);

  // Dynamic booking conflict validator
  // Returns true if there is a overlap for the SAME provider, SAME date, and SAME timeSlot
  const checkBookingConflict = (providerId: string, date: string, time: string): boolean => {
    return bookings.some(b => 
      b.providerId === providerId && 
      b.date === date && 
      b.timeSlot === time && 
      b.status !== 'cancelled'
    );
  };

  // --- Real-time Actions ---

  // Handle identity Switch
  const handleUserSwitch = (userId: string) => {
    const nextUser = users.find(u => u.id === userId);
    if (nextUser) {
      setCurrentUser(nextUser);
      if (nextUser.role === 'customer') {
        setActiveTab('discover');
      } else if (nextUser.role === 'provider') {
        setActiveTab('provider-dashboard');
      } else if (nextUser.role === 'admin') {
        setActiveTab('admin-dashboard');
      }
      showNotification(`Switched simulator perspective to ${nextUser.name} (${nextUser.role.toUpperCase()})`, 'info');
    }
  };

  // Reset database state to defaults
  const handleResetData = () => {
    localStorage.removeItem('home_services_users');
    localStorage.removeItem('home_services_bookings');
    localStorage.removeItem('home_services_invoices');
    localStorage.removeItem('home_services_disputes');
    setUsers(INITIAL_USERS);
    setBookings(INITIAL_BOOKINGS);
    setInvoices(INITIAL_INVOICES);
    setDisputes(INITIAL_DISPUTES);
    setCurrentUser(null);
    setActiveTab('discover');
  };

  const handleDeleteBooking = (bookingId: string) => {
    setBookings(prev => prev.filter(b => b.id !== bookingId));
    setInvoices(prev => prev.filter(inv => inv.bookingId !== bookingId));
    setDisputes(prev => prev.filter(d => d.bookingId !== bookingId));
    showNotification(`Booking record ${bookingId} has been deleted.`, 'success');
  };

  // Submit Booking Dialog validation
  const initiateBookingProcess = (provider: User) => {
    if (provider.providerProfile?.isVerified !== 'verified') {
      showNotification(`Warning: ${provider.name} is currently undergoing background verification. Book with caution.`, 'info');
    }
    setSelectedProvider(provider);
    setIsCheckoutOpen(true);
    setCardHolder(currentUser?.name || '');
    setPaymentSuccess(false);
    setCheckoutConflictError(null);
  };

  // Customer: Handle Checkout Payment & SQL Record Creation (with transactional integrity)
  const handleCompletePaymentAndBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProvider || !selectedProvider.providerProfile) return;

    // 1. Enforce Real-time Scheduling Validation (prevent conflicts)
    const isConflicting = checkBookingConflict(selectedProvider.id, bookingDate, bookingTime);
    if (isConflicting) {
      setCheckoutConflictError(`Conflict detected! ${selectedProvider.name} is already booked on ${bookingDate} at ${bookingTime}. Please select an alternative hour to avoid overlaps.`);
      return;
    }

    // 2. Generate random IDs that mimic standard GUIDs
    const newBookingId = `book-${Date.now().toString().slice(-4)}`;
    const newInvoiceId = `inv-${Date.now().toString().slice(-4)}`;

    const hourlyRate = selectedProvider.providerProfile.hourlyRate;
    const subtotal = hourlyRate * bookingHours;
    const tax = Math.round(subtotal * 0.08 * 100) / 100; // 8% tax
    const finalTotal = subtotal + tax;

    // Simulate Network Latency
    setTimeout(() => {
      // 3. Create Booking DB entity
      const newBooking: Booking = {
        id: newBookingId,
        customerId: currentUser.id,
        customerName: currentUser.name,
        customerEmail: currentUser.email,
        customerPhone: currentUser.phone || '+1 (555) 7777',
        providerId: selectedProvider.id,
        providerName: selectedProvider.name,
        serviceCategory: selectedProvider.providerProfile!.categories[0] || 'General Maintenance',
        date: bookingDate,
        timeSlot: bookingTime,
        hours: bookingHours,
        hourlyRate: hourlyRate,
        totalPrice: subtotal,
        status: 'confirmed', // Confirmed immediately on payload payment authorization
        notes: bookingNotes,
        address: bookingAddress,
        invoiceId: newInvoiceId,
        createdAt: new Date().toISOString()
      };

      // 4. Create invoice DB entity matching foreign keys
      const newInvoice: Invoice = {
        id: newInvoiceId,
        bookingId: newBookingId,
        customerId: currentUser.id,
        customerName: currentUser.name,
        providerId: selectedProvider.id,
        providerName: selectedProvider.name,
        date: bookingDate,
        serviceCategory: selectedProvider.providerProfile!.categories[0],
        hours: bookingHours,
        hourlyRate: hourlyRate,
        subtotal: subtotal,
        tax: tax,
        finalTotal: finalTotal,
        status: 'paid' // Pre-authorized paid transaction
      };

      setBookings(prev => [newBooking, ...prev]);
      setInvoices(prev => [newInvoice, ...prev]);
      setPaymentSuccess(true);
      showNotification(`Booking ${newBookingId} verified, authorized, and invoice ${newInvoiceId} generated in secondary MySQL table.`, 'success');
      
      // Cleanup States
      setBookingNotes('');
      setTimeout(() => {
        setIsCheckoutOpen(false);
        setSelectedProvider(null);
        setActiveTab('my-bookings');
      }, 1500);

    }, 800);
  };

  // Customer: Pay Outstanding Invoice AFTER delivery
  const handlePayInvoice = (invoiceId: string) => {
    setInvoices(prev => prev.map(inv => inv.id === invoiceId ? { ...inv, status: 'paid' } : inv));
    showNotification(`Invoice ${invoiceId} marked as PAID. Transaction ledger verified.`, 'success');
  };

  // Customer: Submit Review & Ratings to provider profile
  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewBookingId) return;

    // Find the booking
    const bookingToUpdate = bookings.find(b => b.id === reviewBookingId);
    if (!bookingToUpdate) return;

    // 1. Update Booking state to store rating feedback
    setBookings(prev => prev.map(b => b.id === reviewBookingId ? {
      ...b,
      rating: reviewRating,
      reviewText: reviewText
    } : b));

    // 2. Relational recalculation: update provider average rating and reviewCount in users profile
    setUsers(prev => prev.map(user => {
      if (user.id === bookingToUpdate.providerId && user.providerProfile) {
        const currentCount = user.providerProfile.reviewCount;
        const currentRating = user.providerProfile.rating;
        const newCount = currentCount + 1;
        // Recalculate incremental mean
        const newRating = Math.round(((currentRating * currentCount + reviewRating) / newCount) * 100) / 100;

        return {
          ...user,
          providerProfile: {
            ...user.providerProfile,
            rating: newRating,
            reviewCount: newCount
          }
        };
      }
      return user;
    }));

    showNotification('Thank you! Review and rating successfully calculated and synced with service provider metrics.', 'success');
    setReviewBookingId(null);
    setReviewText('');
    setReviewRating(5);
  };

  // Customer: Open Dispute
  const handleFileDispute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disputeBookingId) return;

    const booking = bookings.find(b => b.id === disputeBookingId);
    if (!booking) return;

    // 1. Create a new Dispute record
    const newDispute: Dispute = {
      id: `disp-${Date.now().toString().slice(-4)}`,
      bookingId: disputeBookingId,
      customerId: currentUser.id,
      customerName: currentUser.name,
      providerId: booking.providerId,
      providerName: booking.providerName,
      reason: disputeReason,
      description: disputeDescription,
      status: 'open',
      createdAt: new Date().toISOString()
    };

    // 2. Update booking status to 'disputed'
    setBookings(prev => prev.map(b => b.id === disputeBookingId ? { ...b, status: 'disputed' } : b));
    setDisputes(prev => [newDispute, ...prev]);

    showNotification(`Dispute opened for Booking ${disputeBookingId}. Admin arbitration pending review.`, 'success');
    setDisputeBookingId(null);
    setDisputeReason('');
    setDisputeDescription('');
  };

  // Provider: Accept/Confirm booking
  const handleConfirmBookingByProvider = (bookingId: string) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: 'confirmed' } : b));
    showNotification(`Booking ${bookingId} confirmed successfully. Ready for service delivery.`, 'success');
  };

  // Provider: Mark Job complete and release customer bill
  const handleCompleteJobByProvider = (bookingId: string) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: 'completed' } : b));
    showNotification(`Job ${bookingId} marked as COMPLETED. Final invoices are now finalized.`, 'success');
  };

  // Provider: Submit profile edit
  const handleSaveProviderProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser.providerProfile) return;

    const categoriesArray = currentUser.providerProfile.categories;
    const skillsArray = editSkills.split(',').map(s => s.trim()).filter(Boolean);

    setUsers(prev => prev.map(user => {
      if (user.id === currentUser.id && user.providerProfile) {
        return {
          ...user,
          phone: editPhone,
          providerProfile: {
            ...user.providerProfile,
            bio: editBio,
            hourlyRate: editRate,
            skills: skillsArray,
            businessAddress: editAddress
          }
        };
      }
      return user;
    }));

    setIsEditingProfile(false);
    showNotification('Provider portfolio successfully updated in backend schema!', 'success');
  };

  // Provider: Toggle Verification Request (Resubmit certification docs)
  const handleRequestVerification = () => {
    setUsers(prev => prev.map(user => {
      if (user.id === currentUser.id && user.providerProfile) {
        return {
          ...user,
          providerProfile: {
            ...user.providerProfile,
            isVerified: 'pending'
          }
        };
      }
      return user;
    }));
    showNotification('Credentials resubmitted. Admin review queue updated in real-time.', 'info');
  };

  // Admin: Approve / Verify Service Provider
  const handleVerifyProviderByAdmin = (providerId: string, status: 'verified' | 'unverified') => {
    setUsers(prev => prev.map(user => {
      if (user.id === providerId && user.providerProfile) {
        return {
          ...user,
          providerProfile: {
            ...user.providerProfile,
            isVerified: status
          }
        };
      }
      return user;
    }));
    showNotification(`Provider verification portfolio status updated to: ${status.toUpperCase()}`, 'success');
  };

  // Admin: Arbitrate Dispute (Refund or Settle)
  const handleResolveDisputeByAdmin = (disputeId: string, resolution: 'refund_full' | 'settle_provider') => {
    const dispute = disputes.find(d => d.id === disputeId);
    if (!dispute) return;

    // 1. Update dispute record
    setDisputes(prev => prev.map(d => d.id === disputeId ? {
      ...d,
      status: resolution === 'refund_full' ? 'resolved_refunded' : 'resolved_paid',
      resolutionNotes: resolutionActionNotes || `Arbitration completed. Action: ${resolution === 'refund_full' ? 'Refunded' : 'Settle payment'}`
    } : d));

    // 2. Adjust invoice status
    setInvoices(prev => prev.map(inv => {
      if (inv.bookingId === dispute.bookingId) {
        return {
          ...inv,
          status: resolution === 'refund_full' ? 'refunded' : 'paid'
        };
      }
      return inv;
    }));

    // 3. Mark booking resolved
    setBookings(prev => prev.map(b => {
      if (b.id === dispute.bookingId) {
        return {
          ...b,
          status: resolution === 'refund_full' ? 'cancelled' : 'completed'
        };
      }
      return b;
    }));

    showNotification(`Dispute ${disputeId} closed with resolution. Financial ledger adjusted.`, 'success');
    setResolvingDisputeId(null);
    setResolutionActionNotes('');
  };

  // --- Platform Analytics Calculations ---
  const stats = useMemo(() => {
    const totalTransactions = invoices
      .filter(i => i.status === 'paid')
      .reduce((sum, current) => sum + current.finalTotal, 0);

    const platformFee = totalTransactions * 0.15; // 15% booking brokerage fee
    
    const activeDisputesCount = disputes.filter(d => d.status === 'open').length;
    const pendingVerifications = users.filter(u => u.role === 'provider' && u.providerProfile?.isVerified === 'pending').length;

    return {
      totalTransactions,
      platformFee,
      activeDisputesCount,
      pendingVerifications,
      totalBookings: bookings.length
    };
  }, [bookings, invoices, disputes, users]);

  return (
    <div className="min-h-screen bg-vibrant-mesh text-slate-900 font-sans flex flex-col antialiased">
      
      {/* Dynamic Notification Bar */}
      {bannerMsg && (
        <div className={`p-4 text-sm font-semibold border-b transition-all flex justify-between items-center ${
          bannerMsg.type === 'success' 
            ? 'bg-emerald-50 text-emerald-900 border-emerald-200' 
            : bannerMsg.type === 'refusal'
            ? 'bg-rose-50 text-rose-900 border-rose-200'
            : 'bg-indigo-50 text-indigo-950 border-indigo-200'
        }`}>
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 shrink-0 text-indigo-600" />
            <span>{bannerMsg.text}</span>
          </div>
          <button 
            id="close-banner"
            onClick={() => setBannerMsg(null)} 
            className="p-1 hover:bg-black/5 rounded transition-all text-current"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* --- Global Header --- */}
      <header id="header" className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-vibrant-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-vibrant-primary rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-vibrant font-display">
              K
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 bg-clip-text text-transparent font-display">KaamConnect</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img 
                    src={currentUser.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'} 
                    alt={currentUser.name} 
                    className="h-8 w-8 rounded-full border border-slate-200" 
                  />
                  <div className="hidden md:flex flex-col text-left">
                    <span className="text-xs font-extrabold text-slate-800 leading-tight">{currentUser.name}</span>
                    <span className="text-[10px] text-slate-500 font-bold capitalize leading-none">{currentUser.role}</span>
                  </div>
                </div>
                <button
                  id="logout-btn"
                  onClick={() => {
                    setCurrentUser(null);
                    showNotification("Logged out successfully.", "info");
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all border border-slate-200 hover:border-rose-200 cursor-pointer shadow-sm"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Secure Portal
              </span>
            )}
          </div>
        </div>
      </header>

      {/* --- User Navigation Tabs --- */}
      {currentUser && (
        <div className="bg-white/95 border-b border-slate-200/80 sticky top-16 z-25 backdrop-blur-md shadow-vibrant-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* View indicators based on user role */}
              <nav id="nav-tabs" className="-mb-px flex space-x-8 overflow-x-auto text-sm font-semibold">
                {currentUser.role === 'customer' && (
                  <>
                    <button
                      id="tab-discover"
                      onClick={() => setActiveTab('discover')}
                      className={`py-4 px-1 border-b-2 whitespace-nowrap transition-all ${
                        activeTab === 'discover' 
                          ? 'border-indigo-600 text-indigo-600 font-extrabold' 
                          : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      Discover Maintenance Services
                    </button>
                    <button
                      id="tab-my-bookings"
                      onClick={() => setActiveTab('my-bookings')}
                      className={`py-4 px-1 border-b-2 whitespace-nowrap flex items-center gap-1.5 transition-all ${
                        activeTab === 'my-bookings' 
                          ? 'border-indigo-600 text-indigo-600 font-extrabold' 
                          : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>My Bookings & Invoices</span>
                      <span className="bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full px-2.5 py-0.5 border border-indigo-100">
                        {bookings.filter(b => b.customerId === currentUser.id).length}
                      </span>
                    </button>
                  </>
                )}

                {currentUser.role === 'provider' && (
                  <button
                    id="tab-provider-dash"
                    onClick={() => setActiveTab('provider-dashboard')}
                    className="py-4 px-1 border-b-2 border-indigo-600 text-indigo-600 font-extrabold whitespace-nowrap flex items-center gap-2"
                  >
                    <Wrench className="h-4 w-4 text-indigo-600" />
                    <span>My Provider Portal</span>
                  </button>
                )}

                {currentUser.role === 'admin' && (
                  <button
                    id="tab-admin-dash"
                    onClick={() => setActiveTab('admin-dashboard')}
                    className="py-4 px-1 border-b-2 border-indigo-600 text-indigo-600 font-extrabold whitespace-nowrap flex items-center gap-2"
                  >
                    <Users className="h-4 w-4 text-indigo-600" />
                    <span>Admin Oversight Panel</span>
                    {stats.pendingVerifications + stats.activeDisputesCount > 0 && (
                      <span className="bg-rose-100 text-rose-700 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full animate-pulse border border-rose-200">
                        {stats.pendingVerifications + stats.activeDisputesCount} Action Required
                      </span>
                    )}
                  </button>
                )}
              </nav>

              <div className="hidden md:flex items-center gap-2 py-2 text-xs text-slate-550">
                <span>Account Profile:</span>
                <span className="text-slate-800 font-bold">{currentUser.name}</span>
                <span className={`px-2 py-0.5 rounded-[4px] text-[10px] uppercase font-bold text-white tracking-wide ${
                  currentUser.role === 'admin' ? 'bg-red-600' : currentUser.role === 'provider' ? 'bg-amber-600' : 'bg-indigo-600'
                }`}>
                  {currentUser.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Main Workspace Content --- */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {currentUser ? (
          <>
            {/* --- CUSTOMER WORKSPACE: DISCOVER & BOOKING --- */}
            {currentUser.role === 'customer' && activeTab === 'discover' && (
          <div id="customer-discover-view" className="space-y-6 animate-fade-in">
            
            {/* Platform Hero Area */}
            <div className="bg-gradient-vibrant-primary rounded-3xl text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-vibrant-lg">
              <div className="max-w-xl space-y-4 z-10">
                <span className="text-xs bg-white/20 text-white font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full border border-white/10 backdrop-blur-xs">
                  Reliable Home Care & On-Demand Services
                </span>
                <h1 className="text-3.5xl md:text-4.5xl font-black tracking-tight text-white leading-tight">
                  Discover Licensed, Background-Checked Providers
                </h1>
                <p className="text-indigo-100 text-sm md:text-base font-medium opacity-90 leading-relaxed">
                  Book top-rated local professionals for plumbing, driving, electrical, cleaning, and more. Real-time smart scheduling ensures guaranteed, conflict-free bookings.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 max-w-xs w-full shrink-0 z-10 text-xs sm:mr-4 space-y-2.5 shadow-vibrant-sm">
                <div className="font-extrabold border-b border-white/20 pb-2 mb-2 flex items-center justify-between text-white">
                  <span className="tracking-widest uppercase font-black">⚡ CLIENT PROTECTION</span>
                  <span className="bg-emerald-500 text-white font-bold rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wider">verified</span>
                </div>
                <p className="text-indigo-50/90 leading-relaxed">Every booking is protected by our secure escrow system and built-in dispute resolution arbitration.</p>
                <div className="flex items-center gap-2 text-[11px] text-white font-bold pt-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Stripe Secure Credit Card Processing</span>
                </div>
              </div>
              {/* Abs decorative background glow */}
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-fuchsia-500/30 rounded-full blur-3xl"></div>
              <div className="absolute left-1/3 -bottom-16 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Filter controls and Search Bar */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-vibrant flex flex-col md:flex-row gap-4 justify-between items-stretch">
              
              <div className="flex-1 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Search className="h-4 w-4 text-slate-400" />
                </span>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search providers by name, specific skills (e.g., Leak Detection, EV Charger)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 hover:bg-slate-100/50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 transition-all font-medium"
                />
              </div>

              {/* Category Dropdown & verified toggle */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-indigo-950 font-extrabold px-1 uppercase tracking-wide">Category Fit:</span>
                <div className="flex flex-wrap gap-1">
                  {['All', ...SERVICE_CATEGORIES.map(c => c.name)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-xs px-3.5 py-2 rounded-full font-bold transition-all cursor-pointer ${
                        selectedCategory === cat 
                          ? 'bg-gradient-vibrant-primary text-white shadow-vibrant-sm font-extrabold scale-[1.02]' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200/90 hover:text-slate-900 hover:scale-[1.03]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Listings Header */}
            <div>
              <div className="flex justify-between items-center pb-3 border-b-2 border-indigo-100/60">
                <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                  <span className="text-gradient-vibrant">{selectedCategory === 'All' ? 'Available Specialists' : `${selectedCategory} Specialists`}</span>
                  <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-2   py-0.5 border border-indigo-100 rounded-full ml-1">({filteredProviders.length} matching)</span>
                </h3>
                <span className="text-xs text-slate-500 font-semibold hidden sm:inline-block">Hourly commissions calculated based on strict role specifications</span>
              </div>
            </div>

            {/* Provider Grid */}
            <div id="provider-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.length === 0 ? (
                <div className="col-span-full py-12 text-center bg-white border border-dashed border-slate-300 rounded-xl max-w-lg mx-auto w-full">
                  <Search className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-800 font-medium">No services match your search metrics</p>
                  <p className="text-xs text-slate-500 mt-2">Try adjusting your filters, selecting 'All' categories or searching broadly.</p>
                </div>
              ) : (
                filteredProviders.map((provider) => {
                  const profile = provider.providerProfile!;
                  return (
                    <div 
                      key={provider.id} 
                      id={`provider-card-${provider.id}`}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-vibrant-sm hover:shadow-vibrant transition-all flex flex-col justify-between overflow-hidden relative group vibrant-card-hover"
                    >
                      {/* Top bar with Verification status */}
                      <div className="p-5 flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={profile.avatar || provider.avatar} 
                            alt={provider.name} 
                            className="h-12 w-12 rounded-full object-cover border border-slate-100 shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{provider.name}</h4>
                              
                              {profile.isVerified === 'verified' && (
                                <span className="text-emerald-600 p-0.5 shrink-0" title="Admin Verified & Documented">
                                  <ShieldCheck className="h-4 w-4 fill-emerald-500 text-white" />
                                </span>
                              )}
                              
                              {profile.isVerified === 'pending' && (
                                <span className="bg-slate-100 text-slate-500 border border-slate-200 text-[10px] font-bold px-1.5 py-0.5 rounded-full tracking-wider uppercase">
                                  Pending Review
                                </span>
                              )}
                            </div>
                            
                            {/* Star Rating calculations */}
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="flex items-center gap-0.5">
                                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                <span className="text-xs font-bold text-slate-800">{profile.rating.toFixed(2)}</span>
                              </span>
                              <span className="text-slate-400 text-xs">({profile.reviewCount} customer reviews)</span>
                            </div>
                          </div>
                        </div>

                        {/* Hourly Rate tag */}
                        <div className="text-right shrink-0">
                          <span className="block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">${profile.hourlyRate}</span>
                          <span className="text-[10px] uppercase font-bold text-slate-400">per hour</span>
                        </div>
                      </div>

                      {/* Bio */}
                      <div className="px-5 pb-2 flex-grow">
                        <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed font-medium">
                          {profile.bio}
                        </p>
                      </div>

                      {/* Specialist categories & Specific skills list */}
                      <div className="px-5 pb-4 space-y-2.5">
                        <div className="flex flex-wrap gap-1">
                          {profile.categories.map((cat, idx) => (
                            <span key={idx} className="vibrant-badge-indigo text-[10px] px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wide">
                              {cat}
                            </span>
                          ))}
                        </div>

                        <div className="border-t border-slate-100 pt-3">
                          <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider block mb-1.5">Key Specialties:</span>
                          <div className="flex flex-wrap gap-1">
                            {profile.skills.slice(0, 4).map((skill, idx) => (
                              <span key={idx} className="bg-slate-50 text-slate-600 text-[10px] px-2 py-0.5 rounded-lg border border-slate-200/70 font-semibold shadow-3xs">
                                {skill}
                              </span>
                            ))}
                            {profile.skills.length > 4 && (
                              <span className="text-indigo-500 font-bold text-[10px] leading-4 pl-1">
                                +{profile.skills.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Booking Action */}
                      <div className="bg-slate-50/60 p-4 border-t border-slate-200/80 flex items-center justify-between gap-2 mt-auto">
                        <div className="text-[11px] text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap font-medium">
                          📍 {profile.businessAddress || 'Servicing General Area'}
                        </div>
                        <button
                          id={`book-provider-btn-${provider.id}`}
                          onClick={() => initiateBookingProcess(provider)}
                          className="px-4 py-2 text-xs font-extrabold text-white bg-gradient-vibrant-primary hover:bg-gradient-vibrant-hover rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-vibrant-sm hover:shadow-vibrant"
                        >
                          <span>Instantly Book</span>
                          <ChevronRight className="h-3 w-3 text-white" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

          </div>
        )}

        {/* --- CUSTOMER WORKSPACE: MY BOOKINGS & BILLS --- */}
        {currentUser.role === 'customer' && activeTab === 'my-bookings' && (
          <div id="customer-bookings-view" className="space-y-8">
            
            {/* Booking list */}
            <div>
              <div className="pb-3 border-b-2 border-indigo-100/60 mb-6 font-display">
                <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Calendar className="h-5.5 w-5.5 text-indigo-600" />
                  <span className="text-gradient-vibrant">My Scheduled Appointments</span>
                </h2>
                <p className="text-xs text-slate-500 font-semibold">Live booking database queries, immediate conflict index indicators, instant escrow triggers, and client review logs.</p>
              </div>

              {bookings.filter(b => b.customerId === currentUser.id).length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200/80 p-9 text-center max-w-md mx-auto shadow-vibrant">
                  <Calendar className="h-9 w-9 text-indigo-400 mx-auto mb-3" />
                  <h4 className="font-extrabold text-slate-900 text-base">You haven't scheduled any service jobs yet.</h4>
                  <p className="text-xs text-slate-500 mt-1 mb-5">Discover plumbing, heating, or sanitization specialists in your local network.</p>
                  <button 
                    onClick={() => setActiveTab('discover')} 
                    className="px-5 py-2.5 bg-gradient-vibrant-primary hover:bg-gradient-vibrant-hover text-xs font-bold text-white rounded-xl transition-all cursor-pointer shadow-vibrant-sm"
                  >
                    Browse Local Providers
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.filter(b => b.customerId === currentUser.id).map((booking) => {
                    const invoice = invoices.find(inv => inv.id === booking.invoiceId);
                    return (
                      <div 
                        key={booking.id} 
                        id={`booking-card-${booking.id}`}
                        className="bg-white rounded-2xl border border-slate-200/85 shadow-vibrant-sm hover:shadow-vibrant transition-all overflow-hidden"
                      >
                        <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          
                          <div className="space-y-1 bg-gradient-vibrant-card/10">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 uppercase tracking-widest">{booking.serviceCategory}</span>
                              <span className="text-slate-350 font-bold">•</span>
                              <span className="text-slate-500 text-xs font-black">ID: {booking.id}</span>
                              <span className="text-slate-350 font-bold">•</span>
                              <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                                booking.status === 'confirmed' 
                                  ? 'vibrant-badge-amber' 
                                  : booking.status === 'completed' 
                                  ? 'vibrant-badge-emerald' 
                                  : booking.status === 'disputed' 
                                  ? 'vibrant-badge-rose animate-pulse' 
                                  : 'bg-slate-105 text-slate-600 border border-slate-200'
                              }`}>
                                {booking.status}
                              </span>
                            </div>
                            
                            <h3 className="font-extrabold text-slate-900 text-base">{booking.providerName}</h3>
                            <p className="text-slate-500 text-xs flex items-center gap-1">
                              <span>📅 Date: <strong className="text-slate-700">{booking.date}</strong></span>
                              <span className="text-slate-300">|</span>
                              <span>⏱️ Scheduled hour: <strong className="text-slate-700">{booking.timeSlot}</strong></span>
                              <span className="text-slate-300">|</span>
                              <span>⏳ Standard delivery duration: <strong className="text-slate-700">{booking.hours} hours</strong></span>
                            </p>
                            <p className="text-slate-550 text-xs mt-1">
                              <strong>📍 Location Address:</strong> {booking.address}
                            </p>
                            {booking.notes && (
                              <p className="text-xs bg-slate-50/70 p-2.5 rounded-xl text-slate-600 italic mt-2 border-l-4 border-indigo-500">
                                "{booking.notes}"
                              </p>
                            )}
                          </div>

                          {/* Quick Actions ledger */}
                          <div className="flex flex-wrap md:flex-col items-start md:items-end justify-between md:justify-center gap-2 border-t border-indigo-50/50 md:border-t-0 pt-3 md:pt-0 shrink-0">
                            
                            <div className="text-left md:text-right">
                              <span className="text-xs text-slate-500 font-bold">Service Invoice Total</span>
                              <span className="block text-2.5xl font-black text-slate-900">${booking.totalPrice}</span>
                            </div>

                            <div className="flex items-center gap-2 flex-wrap">
                              {/* Invoice status / payment button */}
                              {invoice && invoice.status === 'unpaid' && (
                                <button
                                  id={`pay-booking-btn-${booking.id}`}
                                  onClick={() => handlePayInvoice(invoice.id)}
                                  className="px-3.5 py-1.5 bg-gradient-vibrant-warm text-white rounded-xl text-xs font-extrabold shadow-vibrant-sm flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-all"
                                  title="Unpaid Outstanding Invoice. Fulfill now."
                                >
                                  <CreditCard className="h-3.5 w-3.5" />
                                  <span>Pay Invoice (${invoice.finalTotal})</span>
                                </button>
                              )}

                              {invoice && invoice.status === 'paid' && (
                                <span className="vibrant-badge-emerald text-[11px] font-extrabold px-2.5 py-1 rounded-xl flex items-center gap-1 scale-95 uppercase tracking-wide">
                                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                                  <span>Paid Escrow</span>
                                </span>
                              )}

                              {invoice && invoice.status === 'refunded' && (
                                <span className="vibrant-badge-rose text-[11px] font-extrabold px-2.5 py-1 rounded-xl flex items-center gap-1 scale-95 uppercase tracking-wide animate-pulse">
                                  <AlertTriangle className="h-3.5 w-3.5 text-red-600" />
                                  <span>Refunded</span>
                                </span>
                              )}

                              {/* Simulate delivery progression */}
                              {booking.status === 'confirmed' && (
                                <button
                                  id={`complete-job-simulation-${booking.id}`}
                                  onClick={() => handleCompleteJobByProvider(booking.id)}
                                  className="px-2.5 py-1 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-xs font-bold transition-all cursor-pointer border border-indigo-200"
                                  title="Demonstrate the service completion cycle immediately"
                                >
                                  Simulate Complete
                                </button>
                              )}

                              {/* Write Reviews review trigger */}
                              {booking.status === 'completed' && !booking.rating && (
                                <button
                                  id={`rate-booking-${booking.id}`}
                                  onClick={() => {
                                    setReviewBookingId(booking.id);
                                    setReviewRating(5);
                                    setReviewText('');
                                  }}
                                  className="px-4 py-2 bg-gradient-vibrant-primary hover:bg-gradient-vibrant-hover text-white rounded-xl text-xs font-extrabold transition-all shadow-vibrant-sm hover:shadow-vibrant flex items-center gap-1.5 cursor-pointer"
                                >
                                  <Star className="h-4 w-4 fill-current" />
                                  <span>Rate & Review</span>
                                </button>
                              )}

                              {booking.status === 'completed' && booking.rating && (
                                <div className="text-amber-500 fill-amber-400 flex items-center gap-1 border border-amber-100 bg-amber-50/50 px-2.5 py-1 rounded-xl">
                                  {Array.from({ length: booking.rating }).map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                                  ))}
                                  <span className="text-[10px] text-amber-700 font-extrabold ml-1 uppercase tracking-wide">Submitted</span>
                                </div>
                              )}

                              {/* Open Dispute option */}
                              {booking.status !== 'cancelled' && booking.status !== 'disputed' && (
                                <button
                                  id={`file-dispute-btn-${booking.id}`}
                                  onClick={() => {
                                    setDisputeBookingId(booking.id);
                                    setDisputeReason('');
                                    setDisputeDescription('');
                                  }}
                                  className="px-3 py-1 text-xs text-rose-500 hover:text-rose-700 border border-transparent hover:border-rose-200 hover:bg-rose-50/70 rounded-lg transition-all cursor-pointer font-bold"
                                  title="File service dispute regarding job quality to Admin Board"
                                >
                                  File Dispute
                                </button>
                              )}

                              {/* Delete Booking option */}
                              {(booking.status === 'completed' || booking.status === 'cancelled') && (
                                <button
                                  id={`delete-booking-btn-${booking.id}`}
                                  onClick={() => handleDeleteBooking(booking.id)}
                                  className="px-3 py-1.5 text-xs text-rose-600 hover:text-rose-700 border border-transparent hover:border-rose-200 hover:bg-rose-50 rounded-lg transition-all cursor-pointer font-bold flex items-center gap-1"
                                  title="Delete completed or cancelled booking record from history"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                  <span>Delete Record</span>
                                </button>
                              )}
                            </div>

                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Invoices and Payments ledger */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-vibrant">
              <div className="pb-3 border-b-2 border-indigo-50 mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="h-5.5 w-5.5 text-indigo-600" />
                  <h3 className="font-extrabold text-slate-900 text-base">Invoices & Financial Audit Ledger</h3>
                </div>
                <span className="text-[10px] uppercase bg-indigo-50 px-2.5 py-0.5 rounded-full text-indigo-700 font-extrabold border border-indigo-100">Simulated DB: invoices</span>
              </div>
              
              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-indigo-100/60 text-slate-400 font-extrabold uppercase text-[10px] tracking-wider">
                      <th className="py-3 px-3">INVOICE ID</th>
                      <th className="py-3 px-3">PROVIDER</th>
                      <th className="py-3 px-3">CATEGORY</th>
                      <th className="py-3 px-3">HOURLY SPEC</th>
                      <th className="py-3 px-3">SUBTOTAL</th>
                      <th className="py-3 px-3 text-right">TOTAL (8% TAX INC)</th>
                      <th className="py-3 px-3 text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.filter(i => i.customerId === currentUser.id).length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-4 text-center text-slate-400 font-medium">No accounting records stored yet</td>
                      </tr>
                    ) : (
                      invoices.filter(i => i.customerId === currentUser.id).map((inv) => (
                        <tr key={inv.id} className="border-b border-indigo-50/50 hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-3 font-mono font-black text-indigo-600">{inv.id}</td>
                          <td className="py-3 px-3 font-bold text-slate-800">{inv.providerName}</td>
                          <td className="py-3 px-3 font-medium text-slate-600">{inv.serviceCategory}</td>
                          <td className="py-3 px-3 text-slate-500 font-medium">{inv.hours} hrs @ ${inv.hourlyRate}/hr</td>
                          <td className="py-3 px-3 text-slate-600 font-bold">${inv.subtotal.toFixed(2)}</td>
                          <td className="py-3 px-3 text-right font-black font-mono text-slate-900">${inv.finalTotal.toFixed(2)}</td>
                          <td className="py-3 px-3 text-right font-extrabold">
                            <span className={`inline-block px-2.5 py-0.5 rounded-xl font-extrabold text-[10px] uppercase tracking-wider ${
                              inv.status === 'paid' 
                                ? 'vibrant-badge-emerald' 
                                : inv.status === 'refunded'
                                ? 'vibrant-badge-rose'
                                : 'vibrant-badge-amber'
                            }`}>
                              {inv.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* --- SERVICE PROVIDER PANEL PORTAL --- */}
        {currentUser.role === 'provider' && activeTab === 'provider-dashboard' && (
          <div id="provider-dashboard-view" className="space-y-6 animate-fade-in">
            
            {/* Provider Portfolio Header with stats */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-vibrant flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              <div className="flex items-center gap-4">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name} 
                  className="h-16 w-16 rounded-full object-cover border-2 border-indigo-100 shadow-vibrant-sm shrink-0"
                />
                <div className="space-y-1 bg-gradient-vibrant-card/10">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl font-extrabold text-slate-900 leading-none">{currentUser.name}</h2>
                    
                    {currentUser.providerProfile?.isVerified === 'verified' && (
                      <span className="flex items-center gap-1 text-[11px] font-extrabold vibrant-badge-emerald px-2.5 py-1 rounded-full">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 fill-emerald-100 shrink-0" />
                        <span>Platform Verified</span>
                      </span>
                    )}

                    {currentUser.providerProfile?.isVerified === 'pending' && (
                      <span className="flex items-center gap-1 text-[11px] font-extrabold bg-slate-100 text-slate-655 border border-slate-200 px-2.5 py-1 rounded-full">
                        <Clock className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                        <span>Background Review Queue</span>
                      </span>
                    )}

                    {currentUser.providerProfile?.isVerified === 'unverified' && (
                      <span className="flex items-center gap-1 text-[11px] font-extrabold vibrant-badge-rose px-2.5 py-1 rounded-full">
                        <ShieldAlert className="h-3.5 w-3.5 text-rose-600 shrink-0" />
                        <span>Verification Suspended/Unsubmitted</span>
                      </span>
                    )}

                  </div>

                  <p className="text-slate-500 text-xs font-semibold">
                    🏢 Specialties: <strong className="text-slate-800">{currentUser.providerProfile?.categories.join(', ')}</strong> 
                    <span className="mx-2">|</span> 
                    📞 Business Phone: <strong className="text-slate-850">{currentUser.phone || 'None'}</strong>
                  </p>
                  <p className="text-slate-600 text-xs font-medium">
                    📍 Business HQ: {currentUser.providerProfile?.businessAddress}
                  </p>
                </div>
              </div>

              {/* Instant stats banner */}
              <div className="grid grid-cols-3 gap-6 text-center border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 pl-0 md:pl-6 w-full md:w-auto shrink-0">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Total Earnings</span>
                  <span className="block text-xl font-black text-slate-900">
                    ${bookings
                      .filter(b => b.providerId === currentUser.id && b.status === 'completed')
                      .reduce((sum, b) => sum + b.totalPrice, 0)}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Rating Metric</span>
                  <span className="block text-xl font-black text-amber-500 flex items-center justify-center gap-0.5">
                    <Star className="h-4 w-4 fill-current shrink-0" />
                    <span>{currentUser.providerProfile?.rating.toFixed(2)}</span>
                  </span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Active Jobs</span>
                  <span className="block text-xl font-black text-indigo-600">
                    {bookings.filter(b => b.providerId === currentUser.id && b.status === 'confirmed').length}
                  </span>
                </div>
              </div>

            </div>

            {/* Provider actions: verification resubmission & profile customizer */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column: settings portfolio */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Background Audit Status */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-vibrant-sm space-y-3">
                  <h3 className="font-extrabold text-slate-900 text-sm tracking-tight border-b-2 border-indigo-50 pb-2">Trust & Safety Auditing</h3>
                  
                  {currentUser.providerProfile?.isVerified === 'verified' ? (
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-xs text-emerald-800 space-y-2">
                      <p className="font-bold">✓ License & Liability Insurance Verified</p>
                      <p className="font-normal text-[11px] text-emerald-700/90 leading-relaxed">Your professional certification documents, public listings records, and identification check out. You are visible on the customer services discovery feed.</p>
                    </div>
                  ) : currentUser.providerProfile?.isVerified === 'pending' ? (
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-2">
                      <p className="font-bold text-slate-800">⏳ Manual Background Check Active</p>
                      <p className="font-normal text-[11px] text-slate-500 leading-relaxed">Admin oversight evaluates your submissions in real-time. Verify you have filled out your business address properly.</p>
                    </div>
                  ) : (
                    <div className="p-3 bg-rose-50 rounded-lg border border-rose-100 text-xs text-rose-800 space-y-3">
                      <p className="font-bold">⚠️ Profile Unverified or Incomplete</p>
                      <p className="font-normal text-[11px] text-rose-700/90 leading-relaxed">To list in categories, you must submit proof of trade licensure and insurance callback files.</p>
                      <button   
                        id="resubmit-credentials"
                        onClick={handleRequestVerification}
                        className="w-full py-2 bg-rose-600 hover:bg-rose-700 rounded-xl text-white font-extrabold text-[11px] text-center transition-all cursor-pointer shadow-vibrant-sm"
                      >
                        Resubmit Licensure Documents
                      </button>
                    </div>
                  )}

                  <div className="text-[11px] text-slate-400 space-y-1.5 pt-2 border-t border-slate-100 font-semibold">
                    <p className="text-slate-500">📃 Requirements tracker:</p>
                    <ul className="list-disc list-inside space-y-0.5">
                      <li>Minimum $1M general liability policy</li>
                      <li>Trade specific state license</li>
                      <li>Government issued identification</li>
                    </ul>
                  </div>
                </div>

                {/* Edit Public Profile Portfolio */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-vibrant-sm space-y-4">
                  <div className="flex justify-between items-center border-b-2 border-indigo-50 pb-2">
                    <h3 className="font-extrabold text-slate-900 text-sm tracking-tight">Portfolio Settings</h3>
                    <button
                      id="edit-profile-toggle"
                      onClick={() => setIsEditingProfile(!isEditingProfile)}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-extrabold"
                    >
                      {isEditingProfile ? 'Cancel' : 'Edit portfolio'}
                    </button>
                  </div>

                  {isEditingProfile ? (
                    <form onSubmit={handleSaveProviderProfile} className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-500 font-bold mb-1">Hourly Service Rate ($)</label>
                        <input 
                          type="number"
                          value={editRate}
                          onChange={(e) => setEditRate(Number(e.target.value))}
                          className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-hidden focus:ring-2 focus:ring-indigo-500 font-semibold"
                          required
                          min={20}
                          max={250}
                        />
                      </div>

                      <div>
                        <label className="block text-slate-500 font-bold mb-1">Public Display Phone</label>
                        <input 
                          type="text"
                          value={editPhone}
                          onChange={(e) => setEditPhone(e.target.value)}
                          className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-hidden focus:ring-2 focus:ring-indigo-500 font-semibold"
                          placeholder="+1 (555) 0123"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-500 font-bold mb-1">Business HQ Address</label>
                        <input 
                          type="text"
                          value={editAddress}
                          onChange={(e) => setEditAddress(e.target.value)}
                          className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-hidden focus:ring-2 focus:ring-indigo-500 font-semibold"
                          placeholder="Store address"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-500 font-bold mb-1">Specialist Skills (comma separated)</label>
                        <textarea 
                          value={editSkills}
                          onChange={(e) => setEditSkills(e.target.value)}
                          className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-hidden focus:ring-2 focus:ring-indigo-500 min-h-16 font-semibold"
                          placeholder="Leak Detection, Water Heaters, Drain Cleaning..."
                        />
                      </div>

                      <div>
                        <label className="block text-slate-500 font-bold mb-1">Professional Bio</label>
                        <textarea 
                          value={editBio}
                          onChange={(e) => setEditBio(e.target.value)}
                          className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-hidden focus:ring-2 focus:ring-indigo-500 min-h-24 font-semibold text-slate-700"
                          placeholder="Describe your credentials and commitment quality..."
                          maxLength={350}
                        />
                      </div>

                      <button
                        id="save-profile-btn"
                        type="submit"
                        className="w-full py-2.5 bg-gradient-vibrant-primary hover:bg-gradient-vibrant-hover text-white font-extrabold text-center rounded-xl transition-all cursor-pointer shadow-vibrant-sm"
                      >
                        Commit Relational Changes
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-4 text-xs">
                      <div>
                        <span className="text-slate-400 block font-bold mb-1 uppercase tracking-wider">HOURLY SPEC:</span>
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">${currentUser.providerProfile?.hourlyRate} per hour</span>
                      </div>

                      <div>
                        <span className="text-slate-400 block font-bold mb-1 uppercase tracking-wider">PORTFOLIO BIO DETAILS:</span>
                        <p className="text-slate-600 leading-relaxed font-semibold">{currentUser.providerProfile?.bio}</p>
                      </div>

                      <div>
                        <span className="text-slate-400 block font-bold mb-1 uppercase tracking-wider">REGISTERED SKILL TAGS:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {currentUser.providerProfile?.skills.map((s, idx) => (
                            <span key={idx} className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-lg text-[10px] font-bold border border-indigo-100">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Right Column: Bookings scheduler tracker */}
              <div className="lg:col-span-2 space-y-6">
                
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-vibrant space-y-4">
                  <div className="pb-3 border-b-2 border-indigo-50 flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-900 text-sm">Customer Bookings & Active Jobs Ledger</h3>
                    <span className="text-[11px] bg-indigo-50 text-indigo-700 font-black px-2.5 py-0.5 rounded-full border border-indigo-100">{bookings.filter(b => b.providerId === currentUser.id).length} Orders Found</span>
                  </div>

                  {bookings.filter(b => b.providerId === currentUser.id).length === 0 ? (
                    <div className="py-12 text-center text-slate-400 text-xs font-semibold">
                      No jobs scheduled on your active roster calendar.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {bookings.filter(b => b.providerId === currentUser.id).map((b) => {
                        const inv = invoices.find(invoice => invoice.bookingId === b.id);
                        return (
                          <div key={b.id} className="p-4 rounded-xl bg-slate-50 border border-slate-205 text-xs space-y-3 shadow-3xs">
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                              <div>
                                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-indigo-50 px-2 py-0.5 rounded text-[10px] mr-1.5 uppercase tracking-wide">
                                  {b.serviceCategory}
                                </span>
                                <span className="font-mono text-slate-500 font-extrabold">ID: {b.id}</span>
                              </div>
                              <span className={`px-2.5 py-0.5 rounded-full font-extrabold tracking-wider text-[10px] uppercase border ${
                                b.status === 'confirmed' 
                                  ? 'vibrant-badge-amber' 
                                  : b.status === 'completed'
                                  ? 'vibrant-badge-emerald'
                                  : b.status === 'disputed'
                                  ? 'vibrant-badge-rose animate-pulse'
                                  : 'bg-slate-100 text-slate-700 border-slate-200'
                              }`}>
                                {b.status}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-600 font-semibold">
                              <div>
                                <p className="font-black text-slate-900 text-sm mb-1">{b.customerName}</p>
                                <p>📱 {b.customerPhone}</p>
                                <p>✉ {b.customerEmail}</p>
                                <p className="mt-1">📍 Delivery: <strong className="text-slate-800">{b.address}</strong></p>
                              </div>
                              <div className="md:text-right">
                                <p>Scheduled Slot: <strong className="text-slate-900">{b.date} @ {b.timeSlot}</strong></p>
                                <p>Service hours duration: <strong className="text-slate-900">{b.hours} hrs</strong></p>
                                <p className="text-sm font-black text-indigo-600 mt-1">Book Value: ${b.totalPrice}</p>
                              </div>
                            </div>

                            {b.notes && (
                              <p className="bg-white p-2.5 border border-slate-200 rounded-xl italic text-slate-600">
                                "{b.notes}"
                              </p>
                            )}

                            {/* Job actions by Provider */}
                            <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between gap-3">
                              <span className="text-[11px] text-slate-500 font-mono font-bold">
                                Invoice: <strong className="text-slate-800 font-black">{b.invoiceId}</strong> ({inv ? inv.status.toUpperCase() : 'NO_BILL'})
                              </span>

                              <div className="flex gap-2">
                                {b.status === 'pending' && (
                                  <button
                                    id={`confirm-booking-btn-${b.id}`}
                                    onClick={() => handleConfirmBookingByProvider(b.id)}
                                    className="px-3.5 py-1.5 bg-gradient-vibrant-primary hover:bg-gradient-vibrant-hover text-white text-[11px] font-extrabold rounded-xl shadow-vibrant-sm cursor-pointer transition-all"
                                  >
                                    Accept Guest Slot
                                  </button>
                                )}

                                {b.status === 'confirmed' && (
                                  <button
                                    id={`complete-job-btn-${b.id}`}
                                    onClick={() => handleCompleteJobByProvider(b.id)}
                                    className="px-3.5 py-1.5 bg-gradient-vibrant-emerald hover:bg-gradient-vibrant-emerald-hover text-white text-[11px] font-extrabold rounded-xl shadow-vibrant-sm cursor-pointer transition-all"
                                  >
                                    Mark Job Complete
                                  </button>
                                )}

                                {b.status === 'completed' && b.rating && (
                                  <div className="text-amber-500 flex items-center gap-0.5 font-bold">
                                    <span className="font-extrabold text-[10px] mr-1 text-slate-500 uppercase">Feedback Score:</span>
                                    {Array.from({ length: b.rating }).map((_, i) => (
                                      <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>

              </div>

            </div>

          </div>
        )}

        {/* --- SYSTEM ADMIN INTERFACE dashboard OVERVIEW --- */}
        {currentUser.role === 'admin' && activeTab === 'admin-dashboard' && (
          <div id="admin-dashboard-view" className="space-y-6">
            
            {/* 4-KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-vibrant flex items-center justify-between transition-all hover:-translate-y-0.5">
                <div>
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Total Transactions value</span>
                  <span className="block text-2.5xl font-black text-slate-900 mt-1">${stats.totalTransactions.toFixed(2)}</span>
                  <span className="text-[10px] text-emerald-600 font-bold">● Simulated paid invoices</span>
                </div>
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-3xs shrink-0">
                  <TrendingUp className="h-5 w-5" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-vibrant flex items-center justify-between transition-all hover:-translate-y-0.5">
                <div>
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Brokerage Fee Collection</span>
                  <span className="block text-2.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 mt-1">${stats.platformFee.toFixed(2)}</span>
                  <span className="text-[10px] text-indigo-500 font-bold">15% platform fee deduction</span>
                </div>
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-3xs shrink-0">
                  <Award className="h-5 w-5" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-vibrant flex items-center justify-between transition-all hover:-translate-y-0.5">
                <div>
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Unverified Providers</span>
                  <span className="block text-2.5xl font-black text-rose-600 mt-1">{stats.pendingVerifications} Pending</span>
                  <span className="text-[10px] text-slate-500 font-bold">Manual document review</span>
                </div>
                <div className="h-10 w-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shadow-3xs shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-vibrant flex items-center justify-between transition-all hover:-translate-y-0.5">
                <div>
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Open Disputes</span>
                  <span className="block text-2.5xl font-black text-amber-500 mt-1">{stats.activeDisputesCount} Open</span>
                  <span className="text-[10px] text-amber-600 font-bold">Customer escrows locked</span>
                </div>
                <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-3xs shrink-0">
                  <AlertTriangle className="h-5 w-5" />
                </div>
              </div>

            </div>

            {/* Core split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left card: background verification review queue */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-vibrant space-y-4">
                <div className="pb-3 border-b-2 border-indigo-50">
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2 py-0.5">
                    <ShieldCheck className="h-4.5 w-4.5 text-indigo-600" />
                    <span>Provider Compliance & Verification Pipeline</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 font-semibold">Verify certifications, business licenses, and liability insurance files before placing listing active live feed.</p>
                </div>

                {users.filter(u => u.role === 'provider' && u.providerProfile?.isVerified === 'pending').length === 0 && (
                  <div className="py-8 text-center text-slate-400 text-xs font-semibold">
                    All service provider accounts are verified or processed!
                  </div>
                )}

                <div className="space-y-4">
                  {users.filter(u => u.role === 'provider' && u.providerProfile?.isVerified === 'pending').map((prov) => {
                    const profile = prov.providerProfile!;
                    return (
                      <div key={prov.id} id={`verification-card-${prov.id}`} className="p-4 rounded-xl bg-slate-50 border border-slate-205 text-xs space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <img src={prov.avatar} alt={prov.name} className="h-9 w-9 rounded-full object-cover border border-slate-200 shrink-0" />
                            <div>
                              <p className="font-black text-slate-900">{prov.name}</p>
                              <p className="text-slate-400 font-mono text-[10px]">provider_id: {prov.id}</p>
                            </div>
                          </div>
                          <span className="vibrant-badge-amber text-[10px] px-2.5 py-0.5 rounded-full font-extrabold uppercase tracking-wide">
                            Pending Review
                          </span>
                        </div>

                        <div className="text-slate-600 space-y-1 bg-white p-3 rounded-lg border border-slate-200 font-semibold">
                          <p><strong>Proposed Categories:</strong> {profile.categories.join(', ')}</p>
                          <p><strong>Hourly Requested rate:</strong> ${profile.hourlyRate}/hour</p>
                          <p><strong>Business HQ location:</strong> {profile.businessAddress}</p>
                          <p className="italic text-slate-550 pt-1 mt-1 border-t border-slate-100">"Submitted for verification approval. Licensed plumbing, heating, and garden trade logs attached."</p>
                        </div>

                        <div className="flex gap-2 justify-end">
                          <button
                            id={`reject-prov-btn-${prov.id}`}
                            onClick={() => handleVerifyProviderByAdmin(prov.id, 'unverified')}
                            className="px-3.5 py-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl transition-all cursor-pointer font-extrabold text-[11px]"
                          >
                            Reject & Suspend
                          </button>
                          <button
                            id={`approve-prov-btn-${prov.id}`}
                            onClick={() => handleVerifyProviderByAdmin(prov.id, 'verified')}
                            className="px-3.5 py-1.5 bg-gradient-vibrant-primary hover:bg-gradient-vibrant-hover text-white rounded-xl transition-all cursor-pointer font-extrabold text-[11px] shadow-vibrant-sm hover:shadow-vibrant"
                          >
                            Approve & Certify Live
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t-2 border-indigo-50 pt-3">
                  <span className="text-[11px] font-black text-slate-400 uppercase block mb-2 tracking-wide font-display">Registered Providers Ledger index:</span>
                  <div className="space-y-1.5 text-xs">
                    {users.filter(u => u.role === 'provider').map(u => (
                      <div key={u.id} className="flex justify-between items-center bg-slate-50/60 p-2.5 rounded-xl border border-slate-200 font-semibold">
                        <span className="font-extrabold text-slate-800">{u.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400 font-mono text-[10px]">{u.id}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                            u.providerProfile?.isVerified === 'verified' ? 'vibrant-badge-emerald' : 'vibrant-badge-rose'
                          }`}>
                            {u.providerProfile?.isVerified}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right card: dispute resolution arbitrage board */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-vibrant space-y-4">
                <div className="pb-3 border-b-2 border-indigo-50">
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2 py-0.5">
                    <AlertTriangle className="h-4.5 w-4.5 text-amber-500" />
                    <span>Dispute Resolution Arbitrations</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 font-semibold">Lock, refund, or resolve customer disputes when satisfaction criteria fail to match contract agreement specifications.</p>
                </div>

                {disputes.length === 0 ? (
                  <div className="py-8 text-center text-slate-400 text-xs text-slate-400">
                     Excellent! No pending active customer service disputes.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {disputes.map((disp) => {
                      const isSelected = resolvingDisputeId === disp.id;
                      return (
                        <div key={disp.id} id={`dispute-card-${disp.id}`} className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-3">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] mr-1.5">
                                DISPUTE: {disp.reason}
                              </span>
                              <span className="font-mono text-slate-400 text-[10px] font-bold">{disp.id}</span>
                            </div>
                            <span className={`px-2 py-0.5 rounded font-bold text-[10px] uppercase border ${
                              disp.status === 'open' 
                                ? 'bg-rose-50 text-rose-800 border-rose-200 animate-pulse'
                                : disp.status === 'resolved_refunded'
                                ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            }`}>
                              {disp.status.replace('_', ' ')}
                            </span>
                          </div>

                          <div className="space-y-1 text-slate-600 bg-white p-3 rounded border border-slate-200">
                            <p><strong>Customer:</strong> {disp.customerName} (ID: {disp.customerId})</p>
                            <p><strong>Provider:</strong> {disp.providerName} (ID: {disp.providerId})</p>
                            <p className="text-slate-400 border-t border-slate-100 pt-1 mt-1 font-mono text-[10px]">FOREIGN_KEY BOOKING ID: {disp.bookingId}</p>
                            <p className="italic text-slate-600 mt-2 p-1.5 bg-slate-50 border-l border-indigo-500">"{disp.description}"</p>
                            
                            {disp.resolutionNotes && (
                              <p className="mt-2 text-emerald-800 bg-emerald-50 p-2 rounded text-[11px] font-medium border-l border-emerald-500">
                                <strong>Admin resolution statement:</strong> "{disp.resolutionNotes}"
                              </p>
                            )}
                          </div>

                          {disp.status === 'open' && (
                            <div className="space-y-2">
                              {!isSelected ? (
                                <div className="text-right">
                                  <button
                                    id={`resolve-btn-${disp.id}`}
                                    onClick={() => setResolvingDisputeId(disp.id)}
                                    className="px-3 py-1 bg-amber-500 text-white font-bold rounded cursor-pointer text-[11px] hover:bg-amber-600 shadow-xs"
                                  >
                                    Arbitrate Dispute
                                  </button>
                                </div>
                              ) : (
                                <div className="space-y-2 pt-2 border-t border-slate-200 bg-amber-50/20 p-2 rounded">
                                  <label className="block font-bold text-[11px] text-slate-600">Dispute resolution decision notes:</label>
                                  <input 
                                    type="text"
                                    value={resolutionActionNotes}
                                    onChange={(e) => setResolutionActionNotes(e.target.value)}
                                    className="w-full p-2 bg-white border border-slate-200 rounded text-xs outline-hidden"
                                    placeholder="Enter administrative resolution statement..."
                                  />
                                  <div className="flex gap-2 justify-end pt-1">
                                    <button
                                      id={`cancel-arbitrate-${disp.id}`}
                                      onClick={() => setResolvingDisputeId(null)}
                                      className="px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded font-semibold text-[11px] cursor-pointer"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      id={`settle-payout-${disp.id}`}
                                      onClick={() => handleResolveDisputeByAdmin(disp.id, 'settle_provider')}
                                      className="px-3 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded font-bold text-[11px] cursor-pointer"
                                    >
                                      Settle & Release Funds to Provider
                                    </button>
                                    <button
                                      id={`refund-cust-${disp.id}`}
                                      onClick={() => handleResolveDisputeByAdmin(disp.id, 'refund_full')}
                                      className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded font-bold text-[11px] cursor-pointer"
                                    >
                                      Cancel Booking & Issue Full Refund
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>
                )}

              </div>

            </div>

            {/* Admin Bookings Ledger (Full Width) */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-vibrant space-y-4 mt-6">
              <div className="pb-3 border-b-2 border-indigo-50 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                    <Calendar className="h-4.5 w-4.5 text-indigo-600" />
                    <span>Global Bookings & Operations Ledger</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 font-semibold">Administrative overrides to inspect, manage, or delete booking records and clear invoices.</p>
                </div>
                <span className="text-[10px] uppercase bg-indigo-50 px-2.5 py-0.5 rounded-full text-indigo-700 font-extrabold border border-indigo-100">
                  {bookings.length} Total Bookings
                </span>
              </div>

              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-indigo-100/60 text-slate-400 font-extrabold uppercase text-[10px] tracking-wider">
                      <th className="py-3 px-2">ID</th>
                      <th className="py-3 px-2">Customer</th>
                      <th className="py-3 px-2">Provider</th>
                      <th className="py-3 px-2">Category</th>
                      <th className="py-3 px-2">Date/Slot</th>
                      <th className="py-3 px-2">Price</th>
                      <th className="py-3 px-2">Status</th>
                      <th className="py-3 px-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-4 text-center text-slate-400 font-semibold">No booking records found in database</td>
                      </tr>
                    ) : (
                      bookings.map((b) => (
                        <tr key={b.id} className="border-b border-indigo-50/50 hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-2 font-mono font-black text-indigo-600">{b.id}</td>
                          <td className="py-3 px-2 font-bold text-slate-800">{b.customerName}</td>
                          <td className="py-3 px-2 font-bold text-slate-800">{b.providerName}</td>
                          <td className="py-3 px-2 text-slate-600">{b.serviceCategory}</td>
                          <td className="py-3 px-2 text-slate-500 font-mono">{b.date} @ {b.timeSlot}</td>
                          <td className="py-3 px-2 font-black text-slate-900">${b.totalPrice}</td>
                          <td className="py-3 px-2">
                            <span className={`inline-block px-2 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wide ${
                              b.status === 'completed'
                                ? 'vibrant-badge-emerald'
                                : b.status === 'confirmed'
                                ? 'vibrant-badge-amber'
                                : b.status === 'disputed'
                                ? 'vibrant-badge-rose animate-pulse'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }`}>
                              {b.status}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <button
                              id={`delete-booking-admin-${b.id}`}
                              onClick={() => handleDeleteBooking(b.id)}
                              className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg border border-transparent hover:border-rose-200 cursor-pointer transition-all inline-flex items-center gap-1 font-bold text-[10px]"
                              title="Administrative override: delete booking record permanently"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}
          </>
        ) : (
          <LoginSignup
            users={users}
            setUsers={setUsers}
            onLogin={(user) => {
              setCurrentUser(user);
              if (user.role === 'customer') {
                setActiveTab('discover');
              } else if (user.role === 'provider') {
                setActiveTab('provider-dashboard');
              } else if (user.role === 'admin') {
                setActiveTab('admin-dashboard');
              }
              showNotification(`Welcome back, ${user.name}!`, 'success');
            }}
          />
        )}
      </main>

      {/* --- Visual MySQL database Inspector popup modal --- */}
      {isInspectorOpen && (
        <div id="inspector-modal" className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-vibrant-primary p-5 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2.5">
                <Database className="h-5.5 w-5.5 text-white fill-white/10 shrink-0" />
                <div>
                  <h3 className="font-extrabold text-base tracking-tight text-white font-display">Normalized Relational SQL Database Schema</h3>
                  <p className="text-xs text-white/90">Demonstrating 3NF MySQL constraints keeping absolute record integrity.</p>
                </div>
              </div>
              <button 
                id="close-inspector"
                onClick={() => setIsInspectorOpen(false)} 
                className="p-1 hover:bg-white/20 rounded-xl text-white transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="bg-slate-50 border-b border-slate-200 px-5 flex justify-between items-center shrink-0">
              <div className="flex space-x-5">
                <button
                  id="inspect-tab-visual"
                  onClick={() => setInspectorTab('visual')}
                  className={`py-3.5 px-1 text-xs font-extrabold border-b-2.5 whitespace-nowrap cursor-pointer transition-all ${
                    inspectorTab === 'visual' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Virtual MySQL Table Explorer
                </button>
                <button
                  id="inspect-tab-ddl"
                  onClick={() => setInspectorTab('ddl')}
                  className={`py-3.5 px-1 text-xs font-extrabold border-b-2.5 whitespace-nowrap cursor-pointer transition-all ${
                    inspectorTab === 'ddl' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Download / View MySQL DDL Script
                </button>
              </div>

              <span className="text-[10px] text-indigo-805 font-mono font-bold uppercase bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">RDBMS ENGINE v8.0</span>
            </div>

            {/* Modal Content */}
            <div className="p-6 flex-1 overflow-y-auto bg-slate-50">
              {inspectorTab === 'visual' ? (
                <div className="space-y-6">
                  
                  {/* Explanatory notes */}
                  <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl text-xs text-indigo-905 flex items-start gap-2">
                    <Info className="h-4 w-4 shrink-0 text-indigo-500 mt-0.5" />
                    <div>
                      <p className="font-bold mb-0.5">Automated Referential Constraints Verified</p>
                      <p className="text-[11px] text-indigo-800/90 leading-relaxed">
                        Every scheduling update, prepayment authorized, or dispute resolution action modifies structured arrays mimicking dynamic SQL queries. Look how our virtual tables align foreign key relationships safely:
                      </p>
                    </div>
                  </div>

                  {/* Users schema representation */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">📁 TABLE: `users` ({users.length} Records)</h4>
                    <div className="bg-white border rounded-lg overflow-hidden border-slate-200 shadow-3xs max-h-40 overflow-y-auto">
                      <table className="w-full text-left text-[11px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b text-slate-500 font-semibold font-mono">
                            <th className="p-2">id (PK)</th>
                            <th className="p-2">name</th>
                            <th className="p-2">email</th>
                            <th className="p-2">role</th>
                            <th className="p-2">phone</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((u) => (
                            <tr key={u.id} className="border-b font-mono text-slate-600 hover:bg-slate-50">
                              <td className="p-2 font-bold text-slate-900">{u.id}</td>
                              <td className="p-2 font-sans text-slate-800">{u.name}</td>
                              <td className="p-2">{u.email}</td>
                              <td className="p-2 text-indigo-600 font-bold">{u.role}</td>
                              <td className="p-2">{u.phone || 'NULL'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Bookings schema representation */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">📁 TABLE: `bookings` ({bookings.length} Records)</h4>
                    <div className="bg-white border rounded-lg overflow-hidden border-slate-200 shadow-3xs max-h-40 overflow-y-auto">
                      <table className="w-full text-left text-[11px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b text-slate-500 font-semibold font-mono">
                            <th className="p-2">id (PK)</th>
                            <th className="p-2">customer_id (FK)</th>
                            <th className="p-2">provider_id (FK)</th>
                            <th className="p-2">category</th>
                            <th className="p-2">booking_date</th>
                            <th className="p-2">time_slot</th>
                            <th className="p-2">hours</th>
                            <th className="p-2">status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bookings.map((b) => (
                            <tr key={b.id} className="border-b font-mono text-slate-600 hover:bg-slate-50">
                              <td className="p-2 font-bold text-slate-900">{b.id}</td>
                              <td className="p-2 text-indigo-600 font-bold">{b.customerId}</td>
                              <td className="p-2 text-indigo-600 font-bold">{b.providerId}</td>
                              <td className="p-2 font-sans text-slate-800">{b.serviceCategory}</td>
                              <td className="p-2">{b.date}</td>
                              <td className="p-2">{b.timeSlot}</td>
                              <td className="p-2">{b.hours} hrs</td>
                              <td className="p-2 font-bold text-slate-900">{b.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Invoices schema representation */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">📁 TABLE: `invoices` ({invoices.length} Records)</h4>
                    <div className="bg-white border rounded-lg overflow-hidden border-slate-200 shadow-3xs max-h-40 overflow-y-auto">
                      <table className="w-full text-left text-[11px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b text-slate-500 font-semibold font-mono">
                            <th className="p-2">id (PK)</th>
                            <th className="p-2">booking_id (FK)</th>
                            <th className="p-2">customer_id (FK)</th>
                            <th className="p-2">provider_id (FK)</th>
                            <th className="p-2">subtotal</th>
                            <th className="p-2">final_total (TAX INC)</th>
                            <th className="p-2">status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoices.map((inv) => (
                            <tr key={inv.id} className="border-b font-mono text-slate-600 hover:bg-slate-50">
                              <td className="p-2 font-bold text-slate-900">{inv.id}</td>
                              <td className="p-2">{inv.bookingId}</td>
                              <td className="p-2">{inv.customerId}</td>
                              <td className="p-2">{inv.providerId}</td>
                              <td className="p-2">${inv.subtotal.toFixed(2)}</td>
                              <td className="p-2 font-bold text-slate-900">${inv.finalTotal.toFixed(2)}</td>
                              <td className="p-2 text-indigo-600 font-bold uppercase">{inv.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Disputes schema representation */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">📁 TABLE: `disputes` ({disputes.length} Records)</h4>
                    <div className="bg-white border rounded-lg overflow-hidden border-slate-200 shadow-3xs max-h-40 overflow-y-auto">
                      <table className="w-full text-left text-[11px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b text-slate-500 font-semibold font-mono">
                            <th className="p-2">id (PK)</th>
                            <th className="p-2">booking_id (FK)</th>
                            <th className="p-2">customer_id (FK)</th>
                            <th className="p-2">reason</th>
                            <th className="p-2">status</th>
                            <th className="p-2">notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {disputes.map((disp) => (
                            <tr key={disp.id} className="border-b font-mono text-slate-600 hover:bg-slate-50">
                              <td className="p-2 font-bold text-slate-900">{disp.id}</td>
                              <td className="p-2">{disp.bookingId}</td>
                              <td className="p-2">{disp.customerId}</td>
                              <td className="p-2 font-sans text-slate-800 font-semibold">{disp.reason}</td>
                              <td className="p-2 uppercase text-rose-600 font-bold">{disp.status}</td>
                              <td className="p-2 font-sans text-slate-400 truncate max-w-40" title={disp.resolutionNotes}>{disp.resolutionNotes || 'NULL'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-550">Copy the below script to bootstrap a local MySQL or relational database instance of this app:</span>
                    <button
                      id="copy-sql-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(MYSQL_DDL);
                        showNotification('MySQL DDL statement cloned to clipboard! Paste directly into PhpMyAdmin/WorkBench.', 'success');
                      }}
                      className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-semibold cursor-pointer"
                    >
                      Copy SQL Script
                    </button>
                  </div>
                  <pre id="sql-pre" className="bg-slate-900 text-slate-100 p-4 rounded-xl text-[10px] sm:text-xs font-mono overflow-x-auto leading-relaxed max-h-[50vh]">
                    {MYSQL_DDL}
                  </pre>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-100 p-4 border-t border-slate-205/60 text-right shrink-0">
              <button
                id="close-inspector-footer"
                onClick={() => setIsInspectorOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-xs font-bold text-white rounded-lg cursor-pointer transition-all"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- INTEGRATED PRE-AUTHORIZED PAYMENT CHECKOUT DIALOG --- */}
      {isCheckoutOpen && selectedProvider && selectedProvider.providerProfile && (
        <div id="checkout-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200">
            
            <div className="bg-gradient-vibrant-primary p-5 text-white flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <CreditCard className="h-5.5 w-5.5 text-white shrink-0" />
                <h3 className="font-extrabold text-base tracking-tight text-white font-display">Secure Prepay Escrow Checkout</h3>
              </div>
              <button 
                id="close-checkout"
                onClick={() => setIsCheckoutOpen(false)} 
                className="p-1 hover:bg-white/20 rounded-xl text-white transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {paymentSuccess ? (
              <div id="checkout-success" className="p-8 text-center space-y-3">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-base">Payment Authorized Successfully!</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your funds are secured in local escrow. A verified conflict-free slot has been inserted into the RDBMS.
                </p>
                <p className="text-[11px] text-indigo-600 font-mono">TRANSACTION ID: txn_{(Math.random()*1e9).toFixed(0)}</p>
              </div>
            ) : (
              <form onSubmit={handleCompletePaymentAndBook} id="checkout-form" className="p-6 space-y-4 text-xs">
                
                {/* Summary calculation parameters */}
                <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/50 space-y-2">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block">ORDER MEMO EXCERPT</span>
                  <div className="flex justify-between text-slate-700">
                    <span>Specialist:</span>
                    <strong className="text-slate-900">{selectedProvider.name}</strong>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Hourly standard rate:</span>
                    <strong className="text-slate-900">${selectedProvider.providerProfile.hourlyRate}/hour</strong>
                  </div>
                  
                  {/* Hours Duration Slider */}
                  <div className="pt-2 border-t border-slate-200">
                    <div className="flex justify-between text-slate-705 items-center mb-1">
                      <span>Service Duration:</span>
                      <strong className="text-indigo-600 text-sm font-black">{bookingHours} hours</strong>
                    </div>
                    <input 
                      id="checkout-hours-slider"
                      type="range"
                      min={1}
                      max={8}
                      step={1}
                      value={bookingHours}
                      onChange={(e) => setBookingHours(Number(e.target.value))}
                      className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Summary calculation breakdown */}
                  <div className="pt-2 border-t border-indigo-100 flex justify-between items-center text-slate-800 font-semibold font-mono">
                    <span>Subtotal:</span>
                    <span>${selectedProvider.providerProfile.hourlyRate * bookingHours}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500 font-mono text-[11px]">
                    <span>Local Service Tax (8%):</span>
                    <span>${Math.round(selectedProvider.providerProfile.hourlyRate * bookingHours * 0.08 * 100) / 100}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-300 flex justify-between items-center text-slate-900 text-sm font-extrabold font-mono">
                    <span>Total Bill:</span>
                    <span className="text-indigo-600 text-base">${Math.round(selectedProvider.providerProfile.hourlyRate * bookingHours * 1.08 * 100) / 100}</span>
                  </div>
                </div>

                {/* Scheduling conflict errors if active */}
                {checkoutConflictError && (
                  <div id="checkout-error" className="p-3 bg-rose-50 border border-rose-100 rounded-lg text-[11px] text-rose-800 flex items-start gap-1.5 leading-relaxed">
                    <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{checkoutConflictError}</span>
                  </div>
                )}

                {/* Date & Slot Inputs */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-500 font-bold mb-1">Appointment Date</label>
                    <input 
                      id="checkout-date-input"
                      type="date"
                      value={bookingDate}
                      onChange={(e) => {
                        setBookingDate(e.target.value);
                        setCheckoutConflictError(null);
                      }}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs"
                      required
                      min="2026-06-22"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 font-bold mb-1">Select Time Hour</label>
                    <select
                      id="checkout-time-slot"
                      value={bookingTime}
                      onChange={(e) => {
                        setBookingTime(e.target.value);
                        setCheckoutConflictError(null);
                      }}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs"
                    >
                      <option value="08:00">08:00 AM</option>
                      <option value="09:00">09:00 AM (Rivera Plumbing Lock)</option>
                      <option value="10:00">10:00 AM (Vance Clean Lock)</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:05">01:00 PM</option>
                      <option value="14:00">02:00 PM (Sparky Electric Lock)</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Location Delivery coordinates inputs */}
                <div>
                  <label className="block text-slate-500 font-bold mb-1">Full Service Address</label>
                  <input 
                    id="checkout-address-input"
                    type="text"
                    value={bookingAddress}
                    onChange={(e) => setBookingAddress(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs"
                    placeholder="E.g., 128 Birchwood Avenue, Hillsdale"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-500 font-bold mb-1">Notes / Instructions (Optional)</label>
                  <textarea 
                    id="checkout-notes-input"
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs min-h-12"
                    placeholder="Mention leaks location, pet directions, or custom entry codes..."
                  />
                </div>

                {/* Simulated payment inputs */}
                <div className="border-t border-slate-100 pt-4 space-y-2.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wide">SECURE STRIPE CREDIT CARD PROCESSING</span>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="block text-slate-400 font-bold mb-1">Card Number (Simulated Checkout Mode)</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <CreditCard className="h-4 w-4 text-slate-400" />
                        </span>
                        <input 
                          id="checkout-card-number"
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full pl-9 p-2 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs"
                          placeholder="Card layout"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-400 font-bold mb-1">Expiration</label>
                      <input 
                        id="checkout-card-expiry"
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs text-center"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 font-bold mb-1">CVV</label>
                      <input 
                        id="checkout-card-cvv"
                        type="text"
                        value={cardCVV}
                        onChange={(e) => setCardCVV(e.target.value)}
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs text-center"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  <button
                    id="checkout-submit-btn"
                    type="submit"
                    className="w-full py-2.5 bg-gradient-vibrant-primary hover:bg-gradient-vibrant-hover text-white font-extrabold text-center rounded-xl transition-all cursor-pointer shadow-vibrant-sm hover:shadow-vibrant mt-2 flex items-center justify-center gap-1.5 duration-200"
                  >
                    <ShieldCheck className="h-4.5 w-4.5 text-white" />
                    <span>Authorize Prepayment & Secure Booking</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

      {/* --- ADD REVIEW FEEDBACK MODAL --- */}
      {reviewBookingId && (
        <div id="review-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200">
            
            <div className="bg-gradient-vibrant-primary p-5 text-white flex justify-between items-center">
              <h3 className="font-extrabold text-base tracking-tight text-white flex items-center gap-1 font-display">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span>Submit Performance Review</span>
              </h3>
              <button 
                id="close-review"
                onClick={() => setReviewBookingId(null)} 
                className="p-1 hover:bg-white/20 rounded-xl text-white transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={submitReview} id="review-form" className="p-6 space-y-4 text-xs">
              <div>
                <span className="text-slate-400 block font-bold text-center uppercase tracking-widest text-[10px] mb-2 font-mono">FOREIGN_KEY REFERENCE: {reviewBookingId}</span>
                <p className="text-slate-600 text-center text-[11px] mb-4 leading-relaxed">
                  Rate your satisfaction. This metrics modifies the provider's overall score dynamically using SQL aggregate emulation on the users profile.
                </p>
                
                {/* 5-Star Selection */}
                <div id="star-selector" className="flex justify-center gap-1.5 mb-1 bg-slate-50 py-3 rounded-lg border border-slate-200">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewRating(star)}
                      className="p-1 shrink-0 cursor-pointer"
                    >
                      <Star className={`h-8 w-8 transition-all ${
                        star <= reviewRating ? 'fill-amber-400 text-amber-400 scale-110' : 'text-slate-300'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-550 font-bold mb-1">Your Detailed Review Message</label>
                <textarea 
                  id="review-message-input"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs min-h-24"
                  placeholder="Describe promptness, precision, cleanliness, and response behavior..."
                  maxLength={300}
                  required
                />
              </div>

              <div className="flex gap-2 justify-end pt-3 border-t border-slate-100">
                <button
                  id="cancel-review-btn"
                  type="button"
                  onClick={() => setReviewBookingId(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 cursor-pointer font-extrabold"
                >
                  Cancel
                </button>
                <button
                  id="submit-review-btn"
                  type="submit"
                  className="px-4 py-2 bg-gradient-vibrant-primary hover:bg-gradient-vibrant-hover text-white font-extrabold rounded-xl cursor-pointer shadow-vibrant-sm hover:shadow-vibrant transition-all"
                >
                  Post Review
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* --- FILE DISPUTE MODAL --- */}
      {disputeBookingId && (
        <div id="dispute-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200">
            
            <div className="bg-gradient-vibrant-warm p-5 text-white flex justify-between items-center">
              <h3 className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5 font-display">
                <AlertTriangle className="h-5 w-5 text-amber-300 fill-white/10 shrink-0" />
                <span>File Dispute regarding Job Integrity</span>
              </h3>
              <button 
                id="close-dispute"
                onClick={() => setDisputeBookingId(null)} 
                className="p-1 hover:bg-white/20 rounded-xl text-white transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleFileDispute} id="dispute-form" className="p-6 space-y-4 text-xs">
              <span className="text-slate-400 block font-bold text-center uppercase tracking-widest text-[10px] mb-2 font-mono">FOREIGN_KEY REFERENCE: {disputeBookingId}</span>
              <p className="text-slate-600 text-xs bg-slate-50 p-2.5 rounded leading-relaxed border-l-2 border-red-500">
                We will hold escrow payments for this booking in suspense. A platform administrator will arbitrate based on descriptions and provide appropriate adjustments.
              </p>

              <div>
                <label className="block text-slate-550 font-bold mb-1">Dispute Reason Title</label>
                <input 
                  id="dispute-reason-input"
                  type="text"
                  value={disputeReason}
                  onChange={(e) => setDisputeReason(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs"
                  placeholder="E.g., Incomplete Service, Damage concerns, Provider no-show"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-550 font-bold mb-1">Dispute Explanation Description</label>
                <textarea 
                  id="dispute-description-input"
                  value={disputeDescription}
                  onChange={(e) => setDisputeDescription(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-hidden text-xs min-h-24"
                  placeholder="List specific tasks not accomplished according to custom checklist schedule..."
                  maxLength={500}
                  required
                />
              </div>

              <div className="flex gap-2 justify-end pt-3 border-t border-slate-100">
                <button
                  id="cancel-dispute-btn"
                  type="button"
                  onClick={() => setDisputeBookingId(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 cursor-pointer font-extrabold"
                >
                  Cancel
                </button>
                <button
                  id="submit-dispute-btn"
                  type="submit"
                  className="px-4 py-2 bg-gradient-vibrant-warm hover:bg-gradient-vibrant-hover text-white font-extrabold rounded-xl transition-all cursor-pointer shadow-vibrant-sm hover:scale-105"
                >
                  Submit Dispute to Admin Queue
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* --- Footer bar --- */}
      <footer id="footer" className="bg-indigo-950 text-white py-12 mt-auto border-t border-indigo-900/60 shrink-0 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-extrabold tracking-wide text-indigo-200">KaamConnect On-Demand Services</p>
            <p className="text-slate-400 max-w-xl mx-auto leading-normal">
              KaamConnect connects homeowners with background-checked local professionals for plumbing, electrical, cleaning, driving, and home repair services. 
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 font-bold">
            <a href="#" className="hover:text-indigo-350 transition-colors">Trust & Safety</a>
            <a href="#" className="hover:text-indigo-350 transition-colors">Help Center</a>
            <a href="#" className="hover:text-indigo-350 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-350 transition-colors">Privacy Policy</a>
          </div>
          <div className="text-[10px] text-slate-500 flex flex-wrap justify-center gap-4 pt-4 border-t border-slate-900">
            <span>© 2026 KaamConnect Inc. All rights reserved.</span>
            <span>•</span>
            <button onClick={() => setIsInspectorOpen(true)} className="hover:text-indigo-300 transition-colors cursor-pointer font-bold font-mono">Dev Schema Inspector</button>
            <span>•</span>
            <button onClick={handleResetData} className="hover:text-indigo-300 transition-colors cursor-pointer font-bold font-mono">Reset Demo Data</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

interface LoginSignupProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  onLogin: (user: User) => void;
}

function LoginSignup({ users, setUsers, onLogin }: LoginSignupProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Signup fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState<UserRole>('customer');
  
  // Provider profile fields
  const [bio, setBio] = useState('');
  const [hourlyRate, setHourlyRate] = useState<number>(45);
  const [skills, setSkills] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const user = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (user) {
      onLogin(user);
    } else {
      setError('Invalid email address. Please check your credentials or use the Quick Demo Login.');
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError('Please fill in name and email.');
      return;
    }

    if (users.some(u => u.email.toLowerCase() === email.trim().toLowerCase())) {
      setError('This email is already registered. Please login.');
      return;
    }

    const newUserId = `${role === 'customer' ? 'cust' : 'prov'}-${Date.now()}`;
    const newUser: User = {
      id: newUserId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role,
      phone: phone.trim() || undefined,
      avatar: `https://images.unsplash.com/photo-${role === 'customer' ? '1494790108377-be9c29b29330' : '1534528741775-53994a69daeb'}?w=150`,
    };

    if (role === 'provider') {
      newUser.providerProfile = {
        bio: bio.trim() || 'Professional service provider.',
        categories: selectedCategories.length > 0 ? selectedCategories : ['Handyman Services'],
        hourlyRate: Number(hourlyRate) || 45,
        rating: 5.0,
        reviewCount: 0,
        isVerified: 'pending',
        skills: skills.split(',').map(s => s.trim()).filter(Boolean),
        avatar: newUser.avatar,
        phone: phone.trim() || '+1 (555) 0000',
        businessAddress: businessAddress.trim() || address.trim() || 'Local area',
      };
    }

    setUsers(prev => [...prev, newUser]);
    onLogin(newUser);
  };

  const toggleCategory = (catName: string) => {
    setSelectedCategories(prev => 
      prev.includes(catName) ? prev.filter(c => c !== catName) : [...prev, catName]
    );
  };

  const customerDemo = users.filter(u => u.role === 'customer').slice(0, 1);
  const providerDemo = users.filter(u => u.role === 'provider').slice(0, 1);
  const adminDemo = users.filter(u => u.role === 'admin').slice(0, 1);

  return (
    <div className="max-w-4xl mx-auto my-6 p-4 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main Card (Login/Signup Form) */}
        <div className="lg:col-span-7 bg-white/85 border border-slate-200/80 rounded-3xl p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex border-b border-slate-100 pb-4 mb-6 gap-6">
              <button
                onClick={() => { setIsLogin(true); setError(null); }}
                className={`text-lg font-extrabold pb-2 transition-all relative cursor-pointer ${
                  isLogin ? 'text-indigo-700 font-black' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Sign In
                {isLogin && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />}
              </button>
              <button
                onClick={() => { setIsLogin(false); setError(null); }}
                className={`text-lg font-extrabold pb-2 transition-all relative cursor-pointer ${
                  !isLogin ? 'text-indigo-700 font-black' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Register
                {!isLogin && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />}
              </button>
            </div>

            {error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-900 px-4 py-3 rounded-xl text-xs font-semibold mb-6 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {isLogin ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah.j@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 transition-all outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 transition-all outline-hidden"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <LogIn className="h-4 w-4" />
                  Sign In to Account
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignupSubmit} className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 transition-all outline-hidden"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.doe@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 transition-all outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Phone Number</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 0123"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 transition-all outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Home Address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="123 Main St, City"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 transition-all outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Account Role</label>
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer">
                      <input
                        type="radio"
                        name="signup-role"
                        value="customer"
                        checked={role === 'customer'}
                        onChange={() => setRole('customer')}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      Customer (I want to hire services)
                    </label>
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer">
                      <input
                        type="radio"
                        name="signup-role"
                        value="provider"
                        checked={role === 'provider'}
                        onChange={() => setRole('provider')}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      Service Provider (I want to offer services)
                    </label>
                  </div>
                </div>

                {role === 'provider' && (
                  <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl space-y-4 animate-slide-down">
                    <h4 className="text-xs font-black text-indigo-950 uppercase tracking-widest border-b border-indigo-100 pb-1.5">Provider Professional Details</h4>
                    
                    <div>
                      <label className="block text-[11px] font-bold text-indigo-900 mb-1.5">Offered Services Categories (Select all that apply)</label>
                      <div className="flex flex-wrap gap-1.5">
                        {SERVICE_CATEGORIES.map(cat => (
                          <button
                            key={cat.name}
                            type="button"
                            onClick={() => toggleCategory(cat.name)}
                            className={`text-[10px] px-2.5 py-1.5 rounded-full font-bold transition-all border ${
                              selectedCategories.includes(cat.name)
                                ? 'bg-indigo-600 border-indigo-600 text-white font-extrabold shadow-sm'
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer'
                            }`}
                          >
                            {cat.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-indigo-900 mb-1.5">Hourly Rate ($)</label>
                        <input
                          type="number"
                          value={hourlyRate}
                          onChange={(e) => setHourlyRate(Number(e.target.value))}
                          placeholder="e.g. 50"
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 text-slate-800 outline-hidden"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-indigo-900 mb-1.5">Specialized Skills (Comma-separated)</label>
                        <input
                          type="text"
                          value={skills}
                          onChange={(e) => setSkills(e.target.value)}
                          placeholder="e.g. Leak repair, Valve replacement"
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 text-slate-800 outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-indigo-900 mb-1.5">Business Address</label>
                      <input
                        type="text"
                        value={businessAddress}
                        onChange={(e) => setBusinessAddress(e.target.value)}
                        placeholder="e.g. 742 Evergreen Terrace, Springfield"
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 text-slate-800 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-indigo-900 mb-1.5">Bio & Experience</label>
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Describe your credentials, work style, and professional experience..."
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 text-slate-800 outline-hidden min-h-16 max-h-32"
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <UserPlus className="h-4 w-4" />
                  {role === 'provider' ? 'Create Provider Account' : 'Create Customer Account'}
                </button>
              </form>
            )}
          </div>

          <div className="border-t border-slate-100 pt-4 mt-6 text-center">
            <p className="text-[10px] text-slate-400 font-medium">
              By continuing, you agree to KaamConnect's Terms of Service and Trust & Safety standards.
            </p>
          </div>
        </div>

        {/* Demo Accounts Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black tracking-widest uppercase text-indigo-300 mb-2">⚡ QUICK DEMO LOGINS</h3>
              <p className="text-xs text-indigo-200/90 leading-relaxed mb-4">
                Click any profile below to access the platform immediately as that user.
              </p>

              <div className="space-y-3.5 max-h-[42vh] overflow-y-auto pr-1">
                {/* Customers */}
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold tracking-wider text-indigo-200/50 uppercase">Customers</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {customerDemo.map(u => (
                      <button
                        key={u.id}
                        onClick={() => onLogin(u)}
                        className="flex items-center gap-2.5 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-left cursor-pointer group"
                      >
                        <img src={u.avatar} alt={u.name} className="h-7 w-7 rounded-full border border-white/10" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate text-white leading-tight group-hover:text-indigo-300">{u.name}</p>
                          <p className="text-[9px] text-indigo-200/70 truncate">{u.email}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Providers */}
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold tracking-wider text-indigo-200/50 uppercase">Service Providers</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {providerDemo.slice(0, 5).map(u => (
                      <button
                        key={u.id}
                        onClick={() => onLogin(u)}
                        className="flex items-center gap-2.5 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-left cursor-pointer group"
                      >
                        <img src={u.avatar} alt={u.name} className="h-7 w-7 rounded-full border border-white/10" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate text-white leading-tight group-hover:text-amber-300">{u.name}</p>
                          <p className="text-[9px] text-amber-200/70 truncate">{u.providerProfile?.categories.join(', ')}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Admins */}
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold tracking-wider text-indigo-200/50 uppercase">Platform Admins</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {adminDemo.map(u => (
                      <button
                        key={u.id}
                        onClick={() => onLogin(u)}
                        className="flex items-center gap-2.5 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-left cursor-pointer group"
                      >
                        <img src={u.avatar} alt={u.name} className="h-7 w-7 rounded-full border border-white/10" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate text-white leading-tight group-hover:text-rose-350">{u.name}</p>
                          <p className="text-[9px] text-rose-200/70 truncate">Platform Administrator</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-3 mt-4 text-[10px] text-indigo-300 font-semibold text-center">
              🔒 Mock validation database session adapter
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
