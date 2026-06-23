import { User, Booking, Invoice, Dispute } from '../types';

export const INITIAL_USERS: User[] = [
  {
    "id": "cust-1",
    "name": "Sarah Johnson",
    "email": "customer1@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 0110"
  },
  {
    "id": "cust-2",
    "name": "Michael Chen",
    "email": "customer2@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 0111"
  },
  {
    "id": "cust-3",
    "name": "Emily Rodriguez",
    "email": "customer3@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 0112"
  },
  {
    "id": "cust-4",
    "name": "David Kim",
    "email": "customer4@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 0113"
  },
  {
    "id": "cust-5",
    "name": "Jessica Taylor",
    "email": "customer5@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 0114"
  },
  {
    "id": "cust-6",
    "name": "James Wilson",
    "email": "customer6@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 0115"
  },
  {
    "id": "cust-7",
    "name": "Amanda Martinez",
    "email": "customer7@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 0116"
  },
  {
    "id": "cust-8",
    "name": "Robert Anderson",
    "email": "customer8@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 0117"
  },
  {
    "id": "cust-9",
    "name": "Ashley Thomas",
    "email": "customer9@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 0118"
  },
  {
    "id": "cust-10",
    "name": "William Jackson",
    "email": "customer10@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 0119"
  },
  {
    "id": "cust-11",
    "name": "Olivia White",
    "email": "customer11@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 0120"
  },
  {
    "id": "cust-12",
    "name": "Daniel Harris",
    "email": "customer12@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 0121"
  },
  {
    "id": "cust-13",
    "name": "Sophia Martin",
    "email": "customer13@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 0122"
  },
  {
    "id": "cust-14",
    "name": "Matthew Thompson",
    "email": "customer14@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 0123"
  },
  {
    "id": "cust-15",
    "name": "Isabella Garcia",
    "email": "customer15@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 0124"
  },
  {
    "id": "cust-16",
    "name": "Andrew Martinez",
    "email": "customer16@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 0125"
  },
  {
    "id": "cust-17",
    "name": "Mia Robinson",
    "email": "customer17@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 0126"
  },
  {
    "id": "cust-18",
    "name": "Joseph Clark",
    "email": "customer18@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 0127"
  },
  {
    "id": "cust-19",
    "name": "Charlotte Rodriguez",
    "email": "customer19@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 0128"
  },
  {
    "id": "cust-20",
    "name": "Joshua Lewis",
    "email": "customer20@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 0129"
  },
  {
    "id": "cust-21",
    "name": "Evelyn Lee",
    "email": "customer21@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 0130"
  },
  {
    "id": "cust-22",
    "name": "Christopher Walker",
    "email": "customer22@example.com",
    "role": "customer",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 0131"
  },
  {
    "id": "prov-1",
    "name": "Linda Miller (Plumbing Services)",
    "email": "linda.miller1@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08001",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 95,
      "rating": 4.5,
      "reviewCount": 9,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08001",
      "businessAddress": "103 Oak Ridge Ave, Suite 1"
    }
  },
  {
    "id": "prov-2",
    "name": "David Vance (Plumbing Services)",
    "email": "david.vance2@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08002",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 85,
      "rating": 4.8,
      "reviewCount": 13,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08002",
      "businessAddress": "106 Oak Ridge Ave, Suite 2"
    }
  },
  {
    "id": "prov-3",
    "name": "Elena Moore (Plumbing Services)",
    "email": "elena.moore3@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08003",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 75,
      "rating": 4.2,
      "reviewCount": 17,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08003",
      "businessAddress": "109 Oak Ridge Ave, Suite 3"
    }
  },
  {
    "id": "prov-4",
    "name": "Robert Miller (Plumbing Services)",
    "email": "robert.miller4@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08004",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 65,
      "rating": 4.5,
      "reviewCount": 21,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08004",
      "businessAddress": "112 Oak Ridge Ave, Suite 4"
    }
  },
  {
    "id": "prov-5",
    "name": "Maria Anderson (Plumbing Services)",
    "email": "maria.anderson5@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08005",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 55,
      "rating": 4.8,
      "reviewCount": 25,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08005",
      "businessAddress": "115 Oak Ridge Ave, Suite 5"
    }
  },
  {
    "id": "prov-6",
    "name": "Marcus Taylor (Plumbing Services)",
    "email": "marcus.taylor6@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08006",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 45,
      "rating": 4.2,
      "reviewCount": 29,
      "isVerified": "pending",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08006",
      "businessAddress": "118 Oak Ridge Ave, Suite 6"
    }
  },
  {
    "id": "prov-7",
    "name": "Patricia Jackson (Plumbing Services)",
    "email": "patricia.jackson7@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08007",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 35,
      "rating": 4.5,
      "reviewCount": 33,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08007",
      "businessAddress": "121 Oak Ridge Ave, Suite 7"
    }
  },
  {
    "id": "prov-8",
    "name": "Richard Jones (Plumbing Services)",
    "email": "richard.jones8@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08008",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 95,
      "rating": 4.8,
      "reviewCount": 37,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08008",
      "businessAddress": "124 Oak Ridge Ave, Suite 8"
    }
  },
  {
    "id": "prov-9",
    "name": "Carlos Harris (Plumbing Services)",
    "email": "carlos.harris9@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08009",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 85,
      "rating": 4.2,
      "reviewCount": 41,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08009",
      "businessAddress": "127 Oak Ridge Ave, Suite 9"
    }
  },
  {
    "id": "prov-10",
    "name": "Michael Davis (Plumbing Services)",
    "email": "michael.davis10@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08010",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 75,
      "rating": 4.5,
      "reviewCount": 45,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08010",
      "businessAddress": "130 Oak Ridge Ave, Suite 10"
    }
  },
  {
    "id": "prov-11",
    "name": "Susan Rostova (Plumbing Services)",
    "email": "susan.rostova11@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08011",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 65,
      "rating": 4.8,
      "reviewCount": 49,
      "isVerified": "verified",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08011",
      "businessAddress": "133 Oak Ridge Ave, Suite 11"
    }
  },
  {
    "id": "prov-12",
    "name": "David Wilson (Plumbing Services)",
    "email": "david.wilson12@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08012",
    "providerProfile": {
      "bio": "Professional plumbing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Plumbing"
      ],
      "hourlyRate": 55,
      "rating": 4.2,
      "reviewCount": 8,
      "isVerified": "pending",
      "skills": [
        "Certified Plumbing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08012",
      "businessAddress": "136 Oak Ridge Ave, Suite 12"
    }
  },
  {
    "id": "prov-13",
    "name": "Elizabeth Mendez (Electrical Services Services)",
    "email": "elizabeth.mendez13@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08013",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 45,
      "rating": 4.5,
      "reviewCount": 12,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08013",
      "businessAddress": "139 Oak Ridge Ave, Suite 13"
    }
  },
  {
    "id": "prov-14",
    "name": "Joseph Taylor (Electrical Services Services)",
    "email": "joseph.taylor14@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08014",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 35,
      "rating": 4.8,
      "reviewCount": 16,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08014",
      "businessAddress": "142 Oak Ridge Ave, Suite 14"
    }
  },
  {
    "id": "prov-15",
    "name": "Sofia Martinez (Electrical Services Services)",
    "email": "sofia.martinez15@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08015",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 95,
      "rating": 4.2,
      "reviewCount": 20,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08015",
      "businessAddress": "145 Oak Ridge Ave, Suite 15"
    }
  },
  {
    "id": "prov-16",
    "name": "William Thomas (Electrical Services Services)",
    "email": "william.thomas16@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08016",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 85,
      "rating": 4.5,
      "reviewCount": 24,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08016",
      "businessAddress": "148 Oak Ridge Ave, Suite 16"
    }
  },
  {
    "id": "prov-17",
    "name": "Margaret Smith (Electrical Services Services)",
    "email": "margaret.smith17@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08017",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 75,
      "rating": 4.8,
      "reviewCount": 28,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08017",
      "businessAddress": "151 Oak Ridge Ave, Suite 17"
    }
  },
  {
    "id": "prov-18",
    "name": "James White (Electrical Services Services)",
    "email": "james.white18@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08018",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 65,
      "rating": 4.2,
      "reviewCount": 32,
      "isVerified": "pending",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08018",
      "businessAddress": "154 Oak Ridge Ave, Suite 18"
    }
  },
  {
    "id": "prov-19",
    "name": "Jennifer Brown (Electrical Services Services)",
    "email": "jennifer.brown19@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08019",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 55,
      "rating": 4.5,
      "reviewCount": 36,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08019",
      "businessAddress": "157 Oak Ridge Ave, Suite 19"
    }
  },
  {
    "id": "prov-20",
    "name": "Alex Rivera (Electrical Services Services)",
    "email": "alex.rivera20@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08020",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 45,
      "rating": 4.8,
      "reviewCount": 40,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08020",
      "businessAddress": "160 Oak Ridge Ave, Suite 20"
    }
  },
  {
    "id": "prov-21",
    "name": "Linda Miller (Electrical Services Services)",
    "email": "linda.miller21@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08021",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 35,
      "rating": 4.2,
      "reviewCount": 44,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08021",
      "businessAddress": "163 Oak Ridge Ave, Suite 21"
    }
  },
  {
    "id": "prov-22",
    "name": "David Vance (Electrical Services Services)",
    "email": "david.vance22@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08022",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 95,
      "rating": 4.5,
      "reviewCount": 48,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08022",
      "businessAddress": "166 Oak Ridge Ave, Suite 22"
    }
  },
  {
    "id": "prov-23",
    "name": "Elena Moore (Electrical Services Services)",
    "email": "elena.moore23@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08023",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 85,
      "rating": 4.8,
      "reviewCount": 7,
      "isVerified": "verified",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08023",
      "businessAddress": "169 Oak Ridge Ave, Suite 23"
    }
  },
  {
    "id": "prov-24",
    "name": "Robert Miller (Electrical Services Services)",
    "email": "robert.miller24@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08024",
    "providerProfile": {
      "bio": "Professional electrical services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Electrical Services"
      ],
      "hourlyRate": 75,
      "rating": 4.2,
      "reviewCount": 11,
      "isVerified": "pending",
      "skills": [
        "Certified Electrical Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08024",
      "businessAddress": "172 Oak Ridge Ave, Suite 24"
    }
  },
  {
    "id": "prov-25",
    "name": "Maria Anderson (House Cleaning Services)",
    "email": "maria.anderson25@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08025",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 65,
      "rating": 4.5,
      "reviewCount": 15,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08025",
      "businessAddress": "175 Oak Ridge Ave, Suite 25"
    }
  },
  {
    "id": "prov-26",
    "name": "Marcus Taylor (House Cleaning Services)",
    "email": "marcus.taylor26@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08026",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 55,
      "rating": 4.8,
      "reviewCount": 19,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08026",
      "businessAddress": "178 Oak Ridge Ave, Suite 26"
    }
  },
  {
    "id": "prov-27",
    "name": "Patricia Jackson (House Cleaning Services)",
    "email": "patricia.jackson27@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08027",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 45,
      "rating": 4.2,
      "reviewCount": 23,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08027",
      "businessAddress": "181 Oak Ridge Ave, Suite 27"
    }
  },
  {
    "id": "prov-28",
    "name": "Richard Jones (House Cleaning Services)",
    "email": "richard.jones28@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08028",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 35,
      "rating": 4.5,
      "reviewCount": 27,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08028",
      "businessAddress": "184 Oak Ridge Ave, Suite 28"
    }
  },
  {
    "id": "prov-29",
    "name": "Carlos Harris (House Cleaning Services)",
    "email": "carlos.harris29@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08029",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 95,
      "rating": 4.8,
      "reviewCount": 31,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08029",
      "businessAddress": "187 Oak Ridge Ave, Suite 29"
    }
  },
  {
    "id": "prov-30",
    "name": "Michael Davis (House Cleaning Services)",
    "email": "michael.davis30@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08030",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 85,
      "rating": 4.2,
      "reviewCount": 35,
      "isVerified": "pending",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08030",
      "businessAddress": "190 Oak Ridge Ave, Suite 30"
    }
  },
  {
    "id": "prov-31",
    "name": "Susan Rostova (House Cleaning Services)",
    "email": "susan.rostova31@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08031",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 75,
      "rating": 4.5,
      "reviewCount": 39,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08031",
      "businessAddress": "193 Oak Ridge Ave, Suite 31"
    }
  },
  {
    "id": "prov-32",
    "name": "David Wilson (House Cleaning Services)",
    "email": "david.wilson32@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08032",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 65,
      "rating": 4.8,
      "reviewCount": 43,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08032",
      "businessAddress": "196 Oak Ridge Ave, Suite 32"
    }
  },
  {
    "id": "prov-33",
    "name": "Elizabeth Mendez (House Cleaning Services)",
    "email": "elizabeth.mendez33@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08033",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 55,
      "rating": 4.2,
      "reviewCount": 47,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08033",
      "businessAddress": "199 Oak Ridge Ave, Suite 33"
    }
  },
  {
    "id": "prov-34",
    "name": "Joseph Taylor (House Cleaning Services)",
    "email": "joseph.taylor34@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08034",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 45,
      "rating": 4.5,
      "reviewCount": 6,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08034",
      "businessAddress": "202 Oak Ridge Ave, Suite 34"
    }
  },
  {
    "id": "prov-35",
    "name": "Sofia Martinez (House Cleaning Services)",
    "email": "sofia.martinez35@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08035",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 35,
      "rating": 4.8,
      "reviewCount": 10,
      "isVerified": "verified",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08035",
      "businessAddress": "205 Oak Ridge Ave, Suite 35"
    }
  },
  {
    "id": "prov-36",
    "name": "William Thomas (House Cleaning Services)",
    "email": "william.thomas36@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08036",
    "providerProfile": {
      "bio": "Professional house cleaning expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "House Cleaning"
      ],
      "hourlyRate": 95,
      "rating": 4.2,
      "reviewCount": 14,
      "isVerified": "pending",
      "skills": [
        "Certified House Cleaning",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08036",
      "businessAddress": "208 Oak Ridge Ave, Suite 36"
    }
  },
  {
    "id": "prov-37",
    "name": "Margaret Smith (Gardening & Landscaping Services)",
    "email": "margaret.smith37@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08037",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 85,
      "rating": 4.5,
      "reviewCount": 18,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08037",
      "businessAddress": "211 Oak Ridge Ave, Suite 37"
    }
  },
  {
    "id": "prov-38",
    "name": "James White (Gardening & Landscaping Services)",
    "email": "james.white38@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08038",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 75,
      "rating": 4.8,
      "reviewCount": 22,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08038",
      "businessAddress": "214 Oak Ridge Ave, Suite 38"
    }
  },
  {
    "id": "prov-39",
    "name": "Jennifer Brown (Gardening & Landscaping Services)",
    "email": "jennifer.brown39@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08039",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 65,
      "rating": 4.2,
      "reviewCount": 26,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08039",
      "businessAddress": "217 Oak Ridge Ave, Suite 39"
    }
  },
  {
    "id": "prov-40",
    "name": "Alex Rivera (Gardening & Landscaping Services)",
    "email": "alex.rivera40@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08040",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 55,
      "rating": 4.5,
      "reviewCount": 30,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08040",
      "businessAddress": "220 Oak Ridge Ave, Suite 40"
    }
  },
  {
    "id": "prov-41",
    "name": "Linda Miller (Gardening & Landscaping Services)",
    "email": "linda.miller41@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08041",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 45,
      "rating": 4.8,
      "reviewCount": 34,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08041",
      "businessAddress": "223 Oak Ridge Ave, Suite 41"
    }
  },
  {
    "id": "prov-42",
    "name": "David Vance (Gardening & Landscaping Services)",
    "email": "david.vance42@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08042",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 35,
      "rating": 4.2,
      "reviewCount": 38,
      "isVerified": "pending",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08042",
      "businessAddress": "226 Oak Ridge Ave, Suite 42"
    }
  },
  {
    "id": "prov-43",
    "name": "Elena Moore (Gardening & Landscaping Services)",
    "email": "elena.moore43@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08043",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 95,
      "rating": 4.5,
      "reviewCount": 42,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08043",
      "businessAddress": "229 Oak Ridge Ave, Suite 43"
    }
  },
  {
    "id": "prov-44",
    "name": "Robert Miller (Gardening & Landscaping Services)",
    "email": "robert.miller44@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08044",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 85,
      "rating": 4.8,
      "reviewCount": 46,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08044",
      "businessAddress": "232 Oak Ridge Ave, Suite 44"
    }
  },
  {
    "id": "prov-45",
    "name": "Maria Anderson (Gardening & Landscaping Services)",
    "email": "maria.anderson45@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08045",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 75,
      "rating": 4.2,
      "reviewCount": 5,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08045",
      "businessAddress": "235 Oak Ridge Ave, Suite 45"
    }
  },
  {
    "id": "prov-46",
    "name": "Marcus Taylor (Gardening & Landscaping Services)",
    "email": "marcus.taylor46@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08046",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 65,
      "rating": 4.5,
      "reviewCount": 9,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08046",
      "businessAddress": "238 Oak Ridge Ave, Suite 46"
    }
  },
  {
    "id": "prov-47",
    "name": "Patricia Jackson (Gardening & Landscaping Services)",
    "email": "patricia.jackson47@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08047",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 55,
      "rating": 4.8,
      "reviewCount": 13,
      "isVerified": "verified",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08047",
      "businessAddress": "241 Oak Ridge Ave, Suite 47"
    }
  },
  {
    "id": "prov-48",
    "name": "Richard Jones (Gardening & Landscaping Services)",
    "email": "richard.jones48@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08048",
    "providerProfile": {
      "bio": "Professional gardening & landscaping expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Gardening & Landscaping"
      ],
      "hourlyRate": 45,
      "rating": 4.2,
      "reviewCount": 17,
      "isVerified": "pending",
      "skills": [
        "Certified Gardening & Landscaping",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08048",
      "businessAddress": "244 Oak Ridge Ave, Suite 48"
    }
  },
  {
    "id": "prov-49",
    "name": "Carlos Harris (Smart Home Setup Services)",
    "email": "carlos.harris49@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08049",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 35,
      "rating": 4.5,
      "reviewCount": 21,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08049",
      "businessAddress": "247 Oak Ridge Ave, Suite 49"
    }
  },
  {
    "id": "prov-50",
    "name": "Michael Davis (Smart Home Setup Services)",
    "email": "michael.davis50@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08050",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 95,
      "rating": 4.8,
      "reviewCount": 25,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08050",
      "businessAddress": "250 Oak Ridge Ave, Suite 50"
    }
  },
  {
    "id": "prov-51",
    "name": "Susan Rostova (Smart Home Setup Services)",
    "email": "susan.rostova51@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08051",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 85,
      "rating": 4.2,
      "reviewCount": 29,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08051",
      "businessAddress": "253 Oak Ridge Ave, Suite 51"
    }
  },
  {
    "id": "prov-52",
    "name": "David Wilson (Smart Home Setup Services)",
    "email": "david.wilson52@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08052",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 75,
      "rating": 4.5,
      "reviewCount": 33,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08052",
      "businessAddress": "256 Oak Ridge Ave, Suite 52"
    }
  },
  {
    "id": "prov-53",
    "name": "Elizabeth Mendez (Smart Home Setup Services)",
    "email": "elizabeth.mendez53@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08053",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 65,
      "rating": 4.8,
      "reviewCount": 37,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08053",
      "businessAddress": "259 Oak Ridge Ave, Suite 53"
    }
  },
  {
    "id": "prov-54",
    "name": "Joseph Taylor (Smart Home Setup Services)",
    "email": "joseph.taylor54@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08054",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 55,
      "rating": 4.2,
      "reviewCount": 41,
      "isVerified": "pending",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08054",
      "businessAddress": "262 Oak Ridge Ave, Suite 54"
    }
  },
  {
    "id": "prov-55",
    "name": "Sofia Martinez (Smart Home Setup Services)",
    "email": "sofia.martinez55@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08055",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 45,
      "rating": 4.5,
      "reviewCount": 45,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08055",
      "businessAddress": "265 Oak Ridge Ave, Suite 55"
    }
  },
  {
    "id": "prov-56",
    "name": "William Thomas (Smart Home Setup Services)",
    "email": "william.thomas56@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08056",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 35,
      "rating": 4.8,
      "reviewCount": 49,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08056",
      "businessAddress": "268 Oak Ridge Ave, Suite 56"
    }
  },
  {
    "id": "prov-57",
    "name": "Margaret Smith (Smart Home Setup Services)",
    "email": "margaret.smith57@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08057",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 95,
      "rating": 4.2,
      "reviewCount": 8,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08057",
      "businessAddress": "271 Oak Ridge Ave, Suite 57"
    }
  },
  {
    "id": "prov-58",
    "name": "James White (Smart Home Setup Services)",
    "email": "james.white58@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08058",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 85,
      "rating": 4.5,
      "reviewCount": 12,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08058",
      "businessAddress": "274 Oak Ridge Ave, Suite 58"
    }
  },
  {
    "id": "prov-59",
    "name": "Jennifer Brown (Smart Home Setup Services)",
    "email": "jennifer.brown59@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08059",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 75,
      "rating": 4.8,
      "reviewCount": 16,
      "isVerified": "verified",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08059",
      "businessAddress": "277 Oak Ridge Ave, Suite 59"
    }
  },
  {
    "id": "prov-60",
    "name": "Alex Rivera (Smart Home Setup Services)",
    "email": "alex.rivera60@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08060",
    "providerProfile": {
      "bio": "Professional smart home setup expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Smart Home Setup"
      ],
      "hourlyRate": 65,
      "rating": 4.2,
      "reviewCount": 20,
      "isVerified": "pending",
      "skills": [
        "Certified Smart Home Setup",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08060",
      "businessAddress": "280 Oak Ridge Ave, Suite 60"
    }
  },
  {
    "id": "prov-61",
    "name": "Linda Miller (Chauffeur & Driver Services)",
    "email": "linda.miller61@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08061",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 55,
      "rating": 4.5,
      "reviewCount": 24,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08061",
      "businessAddress": "283 Oak Ridge Ave, Suite 61"
    }
  },
  {
    "id": "prov-62",
    "name": "David Vance (Chauffeur & Driver Services)",
    "email": "david.vance62@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08062",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 45,
      "rating": 4.8,
      "reviewCount": 28,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08062",
      "businessAddress": "286 Oak Ridge Ave, Suite 62"
    }
  },
  {
    "id": "prov-63",
    "name": "Elena Moore (Chauffeur & Driver Services)",
    "email": "elena.moore63@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08063",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 35,
      "rating": 4.2,
      "reviewCount": 32,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08063",
      "businessAddress": "289 Oak Ridge Ave, Suite 63"
    }
  },
  {
    "id": "prov-64",
    "name": "Robert Miller (Chauffeur & Driver Services)",
    "email": "robert.miller64@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08064",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 95,
      "rating": 4.5,
      "reviewCount": 36,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08064",
      "businessAddress": "292 Oak Ridge Ave, Suite 64"
    }
  },
  {
    "id": "prov-65",
    "name": "Maria Anderson (Chauffeur & Driver Services)",
    "email": "maria.anderson65@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08065",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 85,
      "rating": 4.8,
      "reviewCount": 40,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08065",
      "businessAddress": "295 Oak Ridge Ave, Suite 65"
    }
  },
  {
    "id": "prov-66",
    "name": "Marcus Taylor (Chauffeur & Driver Services)",
    "email": "marcus.taylor66@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08066",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 75,
      "rating": 4.2,
      "reviewCount": 44,
      "isVerified": "pending",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08066",
      "businessAddress": "298 Oak Ridge Ave, Suite 66"
    }
  },
  {
    "id": "prov-67",
    "name": "Patricia Jackson (Chauffeur & Driver Services)",
    "email": "patricia.jackson67@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08067",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 65,
      "rating": 4.5,
      "reviewCount": 48,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08067",
      "businessAddress": "301 Oak Ridge Ave, Suite 67"
    }
  },
  {
    "id": "prov-68",
    "name": "Richard Jones (Chauffeur & Driver Services)",
    "email": "richard.jones68@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08068",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 55,
      "rating": 4.8,
      "reviewCount": 7,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08068",
      "businessAddress": "304 Oak Ridge Ave, Suite 68"
    }
  },
  {
    "id": "prov-69",
    "name": "Carlos Harris (Chauffeur & Driver Services)",
    "email": "carlos.harris69@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08069",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 45,
      "rating": 4.2,
      "reviewCount": 11,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08069",
      "businessAddress": "307 Oak Ridge Ave, Suite 69"
    }
  },
  {
    "id": "prov-70",
    "name": "Michael Davis (Chauffeur & Driver Services)",
    "email": "michael.davis70@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08070",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 35,
      "rating": 4.5,
      "reviewCount": 15,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08070",
      "businessAddress": "310 Oak Ridge Ave, Suite 70"
    }
  },
  {
    "id": "prov-71",
    "name": "Susan Rostova (Chauffeur & Driver Services)",
    "email": "susan.rostova71@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08071",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 95,
      "rating": 4.8,
      "reviewCount": 19,
      "isVerified": "verified",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08071",
      "businessAddress": "313 Oak Ridge Ave, Suite 71"
    }
  },
  {
    "id": "prov-72",
    "name": "David Wilson (Chauffeur & Driver Services)",
    "email": "david.wilson72@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08072",
    "providerProfile": {
      "bio": "Professional chauffeur & driver expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Chauffeur & Driver"
      ],
      "hourlyRate": 85,
      "rating": 4.2,
      "reviewCount": 23,
      "isVerified": "pending",
      "skills": [
        "Certified Chauffeur & Driver",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08072",
      "businessAddress": "316 Oak Ridge Ave, Suite 72"
    }
  },
  {
    "id": "prov-73",
    "name": "Elizabeth Mendez (Pest Control Services)",
    "email": "elizabeth.mendez73@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08073",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 75,
      "rating": 4.5,
      "reviewCount": 27,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08073",
      "businessAddress": "319 Oak Ridge Ave, Suite 73"
    }
  },
  {
    "id": "prov-74",
    "name": "Joseph Taylor (Pest Control Services)",
    "email": "joseph.taylor74@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08074",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 65,
      "rating": 4.8,
      "reviewCount": 31,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08074",
      "businessAddress": "322 Oak Ridge Ave, Suite 74"
    }
  },
  {
    "id": "prov-75",
    "name": "Sofia Martinez (Pest Control Services)",
    "email": "sofia.martinez75@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08075",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 55,
      "rating": 4.2,
      "reviewCount": 35,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08075",
      "businessAddress": "325 Oak Ridge Ave, Suite 75"
    }
  },
  {
    "id": "prov-76",
    "name": "William Thomas (Pest Control Services)",
    "email": "william.thomas76@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08076",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 45,
      "rating": 4.5,
      "reviewCount": 39,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08076",
      "businessAddress": "328 Oak Ridge Ave, Suite 76"
    }
  },
  {
    "id": "prov-77",
    "name": "Margaret Smith (Pest Control Services)",
    "email": "margaret.smith77@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08077",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 35,
      "rating": 4.8,
      "reviewCount": 43,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08077",
      "businessAddress": "331 Oak Ridge Ave, Suite 77"
    }
  },
  {
    "id": "prov-78",
    "name": "James White (Pest Control Services)",
    "email": "james.white78@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08078",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 95,
      "rating": 4.2,
      "reviewCount": 47,
      "isVerified": "pending",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08078",
      "businessAddress": "334 Oak Ridge Ave, Suite 78"
    }
  },
  {
    "id": "prov-79",
    "name": "Jennifer Brown (Pest Control Services)",
    "email": "jennifer.brown79@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08079",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 85,
      "rating": 4.5,
      "reviewCount": 6,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08079",
      "businessAddress": "337 Oak Ridge Ave, Suite 79"
    }
  },
  {
    "id": "prov-80",
    "name": "Alex Rivera (Pest Control Services)",
    "email": "alex.rivera80@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08080",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 75,
      "rating": 4.8,
      "reviewCount": 10,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08080",
      "businessAddress": "340 Oak Ridge Ave, Suite 80"
    }
  },
  {
    "id": "prov-81",
    "name": "Linda Miller (Pest Control Services)",
    "email": "linda.miller81@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08081",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 65,
      "rating": 4.2,
      "reviewCount": 14,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08081",
      "businessAddress": "343 Oak Ridge Ave, Suite 81"
    }
  },
  {
    "id": "prov-82",
    "name": "David Vance (Pest Control Services)",
    "email": "david.vance82@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08082",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 55,
      "rating": 4.5,
      "reviewCount": 18,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08082",
      "businessAddress": "346 Oak Ridge Ave, Suite 82"
    }
  },
  {
    "id": "prov-83",
    "name": "Elena Moore (Pest Control Services)",
    "email": "elena.moore83@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08083",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 45,
      "rating": 4.8,
      "reviewCount": 22,
      "isVerified": "verified",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08083",
      "businessAddress": "349 Oak Ridge Ave, Suite 83"
    }
  },
  {
    "id": "prov-84",
    "name": "Robert Miller (Pest Control Services)",
    "email": "robert.miller84@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08084",
    "providerProfile": {
      "bio": "Professional pest control expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Pest Control"
      ],
      "hourlyRate": 35,
      "rating": 4.2,
      "reviewCount": 26,
      "isVerified": "pending",
      "skills": [
        "Certified Pest Control",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08084",
      "businessAddress": "352 Oak Ridge Ave, Suite 84"
    }
  },
  {
    "id": "prov-85",
    "name": "Maria Anderson (Appliance Repair Services)",
    "email": "maria.anderson85@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08085",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 95,
      "rating": 4.5,
      "reviewCount": 30,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08085",
      "businessAddress": "355 Oak Ridge Ave, Suite 85"
    }
  },
  {
    "id": "prov-86",
    "name": "Marcus Taylor (Appliance Repair Services)",
    "email": "marcus.taylor86@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08086",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 85,
      "rating": 4.8,
      "reviewCount": 34,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08086",
      "businessAddress": "358 Oak Ridge Ave, Suite 86"
    }
  },
  {
    "id": "prov-87",
    "name": "Patricia Jackson (Appliance Repair Services)",
    "email": "patricia.jackson87@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08087",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 75,
      "rating": 4.2,
      "reviewCount": 38,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08087",
      "businessAddress": "361 Oak Ridge Ave, Suite 87"
    }
  },
  {
    "id": "prov-88",
    "name": "Richard Jones (Appliance Repair Services)",
    "email": "richard.jones88@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08088",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 65,
      "rating": 4.5,
      "reviewCount": 42,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08088",
      "businessAddress": "364 Oak Ridge Ave, Suite 88"
    }
  },
  {
    "id": "prov-89",
    "name": "Carlos Harris (Appliance Repair Services)",
    "email": "carlos.harris89@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08089",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 55,
      "rating": 4.8,
      "reviewCount": 46,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08089",
      "businessAddress": "367 Oak Ridge Ave, Suite 89"
    }
  },
  {
    "id": "prov-90",
    "name": "Michael Davis (Appliance Repair Services)",
    "email": "michael.davis90@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08090",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 45,
      "rating": 4.2,
      "reviewCount": 5,
      "isVerified": "pending",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08090",
      "businessAddress": "370 Oak Ridge Ave, Suite 90"
    }
  },
  {
    "id": "prov-91",
    "name": "Susan Rostova (Appliance Repair Services)",
    "email": "susan.rostova91@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08091",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 35,
      "rating": 4.5,
      "reviewCount": 9,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08091",
      "businessAddress": "373 Oak Ridge Ave, Suite 91"
    }
  },
  {
    "id": "prov-92",
    "name": "David Wilson (Appliance Repair Services)",
    "email": "david.wilson92@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08092",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 95,
      "rating": 4.8,
      "reviewCount": 13,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08092",
      "businessAddress": "376 Oak Ridge Ave, Suite 92"
    }
  },
  {
    "id": "prov-93",
    "name": "Elizabeth Mendez (Appliance Repair Services)",
    "email": "elizabeth.mendez93@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08093",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 85,
      "rating": 4.2,
      "reviewCount": 17,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08093",
      "businessAddress": "379 Oak Ridge Ave, Suite 93"
    }
  },
  {
    "id": "prov-94",
    "name": "Joseph Taylor (Appliance Repair Services)",
    "email": "joseph.taylor94@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08094",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 75,
      "rating": 4.5,
      "reviewCount": 21,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08094",
      "businessAddress": "382 Oak Ridge Ave, Suite 94"
    }
  },
  {
    "id": "prov-95",
    "name": "Sofia Martinez (Appliance Repair Services)",
    "email": "sofia.martinez95@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08095",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 65,
      "rating": 4.8,
      "reviewCount": 25,
      "isVerified": "verified",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08095",
      "businessAddress": "385 Oak Ridge Ave, Suite 95"
    }
  },
  {
    "id": "prov-96",
    "name": "William Thomas (Appliance Repair Services)",
    "email": "william.thomas96@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08096",
    "providerProfile": {
      "bio": "Professional appliance repair expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Appliance Repair"
      ],
      "hourlyRate": 55,
      "rating": 4.2,
      "reviewCount": 29,
      "isVerified": "pending",
      "skills": [
        "Certified Appliance Repair",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08096",
      "businessAddress": "388 Oak Ridge Ave, Suite 96"
    }
  },
  {
    "id": "prov-97",
    "name": "Margaret Smith (Handyman Services Services)",
    "email": "margaret.smith97@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08097",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 45,
      "rating": 4.5,
      "reviewCount": 33,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08097",
      "businessAddress": "391 Oak Ridge Ave, Suite 97"
    }
  },
  {
    "id": "prov-98",
    "name": "James White (Handyman Services Services)",
    "email": "james.white98@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08098",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 35,
      "rating": 4.8,
      "reviewCount": 37,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08098",
      "businessAddress": "394 Oak Ridge Ave, Suite 98"
    }
  },
  {
    "id": "prov-99",
    "name": "Jennifer Brown (Handyman Services Services)",
    "email": "jennifer.brown99@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08099",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 95,
      "rating": 4.2,
      "reviewCount": 41,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08099",
      "businessAddress": "397 Oak Ridge Ave, Suite 99"
    }
  },
  {
    "id": "prov-100",
    "name": "Alex Rivera (Handyman Services Services)",
    "email": "alex.rivera100@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08100",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 85,
      "rating": 4.5,
      "reviewCount": 45,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08100",
      "businessAddress": "400 Oak Ridge Ave, Suite 100"
    }
  },
  {
    "id": "prov-101",
    "name": "Linda Miller (Handyman Services Services)",
    "email": "linda.miller101@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08101",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 75,
      "rating": 4.8,
      "reviewCount": 49,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08101",
      "businessAddress": "403 Oak Ridge Ave, Suite 101"
    }
  },
  {
    "id": "prov-102",
    "name": "David Vance (Handyman Services Services)",
    "email": "david.vance102@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08102",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 65,
      "rating": 4.2,
      "reviewCount": 8,
      "isVerified": "pending",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08102",
      "businessAddress": "406 Oak Ridge Ave, Suite 102"
    }
  },
  {
    "id": "prov-103",
    "name": "Elena Moore (Handyman Services Services)",
    "email": "elena.moore103@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08103",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 55,
      "rating": 4.5,
      "reviewCount": 12,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08103",
      "businessAddress": "409 Oak Ridge Ave, Suite 103"
    }
  },
  {
    "id": "prov-104",
    "name": "Robert Miller (Handyman Services Services)",
    "email": "robert.miller104@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08104",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 45,
      "rating": 4.8,
      "reviewCount": 16,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08104",
      "businessAddress": "412 Oak Ridge Ave, Suite 104"
    }
  },
  {
    "id": "prov-105",
    "name": "Maria Anderson (Handyman Services Services)",
    "email": "maria.anderson105@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08105",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 35,
      "rating": 4.2,
      "reviewCount": 20,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08105",
      "businessAddress": "415 Oak Ridge Ave, Suite 105"
    }
  },
  {
    "id": "prov-106",
    "name": "Marcus Taylor (Handyman Services Services)",
    "email": "marcus.taylor106@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08106",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 95,
      "rating": 4.5,
      "reviewCount": 24,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08106",
      "businessAddress": "418 Oak Ridge Ave, Suite 106"
    }
  },
  {
    "id": "prov-107",
    "name": "Patricia Jackson (Handyman Services Services)",
    "email": "patricia.jackson107@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08107",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 85,
      "rating": 4.8,
      "reviewCount": 28,
      "isVerified": "verified",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08107",
      "businessAddress": "421 Oak Ridge Ave, Suite 107"
    }
  },
  {
    "id": "prov-108",
    "name": "Richard Jones (Handyman Services Services)",
    "email": "richard.jones108@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08108",
    "providerProfile": {
      "bio": "Professional handyman services expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Handyman Services"
      ],
      "hourlyRate": 75,
      "rating": 4.2,
      "reviewCount": 32,
      "isVerified": "pending",
      "skills": [
        "Certified Handyman Services",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08108",
      "businessAddress": "424 Oak Ridge Ave, Suite 108"
    }
  },
  {
    "id": "prov-109",
    "name": "Carlos Harris (AC & HVAC Maintenance Services)",
    "email": "carlos.harris109@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08109",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 65,
      "rating": 4.5,
      "reviewCount": 36,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08109",
      "businessAddress": "427 Oak Ridge Ave, Suite 109"
    }
  },
  {
    "id": "prov-110",
    "name": "Michael Davis (AC & HVAC Maintenance Services)",
    "email": "michael.davis110@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08110",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 55,
      "rating": 4.8,
      "reviewCount": 40,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08110",
      "businessAddress": "430 Oak Ridge Ave, Suite 110"
    }
  },
  {
    "id": "prov-111",
    "name": "Susan Rostova (AC & HVAC Maintenance Services)",
    "email": "susan.rostova111@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08111",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 45,
      "rating": 4.2,
      "reviewCount": 44,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08111",
      "businessAddress": "433 Oak Ridge Ave, Suite 111"
    }
  },
  {
    "id": "prov-112",
    "name": "David Wilson (AC & HVAC Maintenance Services)",
    "email": "david.wilson112@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08112",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 35,
      "rating": 4.5,
      "reviewCount": 48,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08112",
      "businessAddress": "436 Oak Ridge Ave, Suite 112"
    }
  },
  {
    "id": "prov-113",
    "name": "Elizabeth Mendez (AC & HVAC Maintenance Services)",
    "email": "elizabeth.mendez113@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08113",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 95,
      "rating": 4.8,
      "reviewCount": 7,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08113",
      "businessAddress": "439 Oak Ridge Ave, Suite 113"
    }
  },
  {
    "id": "prov-114",
    "name": "Joseph Taylor (AC & HVAC Maintenance Services)",
    "email": "joseph.taylor114@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08114",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 85,
      "rating": 4.2,
      "reviewCount": 11,
      "isVerified": "pending",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08114",
      "businessAddress": "442 Oak Ridge Ave, Suite 114"
    }
  },
  {
    "id": "prov-115",
    "name": "Sofia Martinez (AC & HVAC Maintenance Services)",
    "email": "sofia.martinez115@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08115",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 75,
      "rating": 4.5,
      "reviewCount": 15,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08115",
      "businessAddress": "445 Oak Ridge Ave, Suite 115"
    }
  },
  {
    "id": "prov-116",
    "name": "William Thomas (AC & HVAC Maintenance Services)",
    "email": "william.thomas116@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08116",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 65,
      "rating": 4.8,
      "reviewCount": 19,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08116",
      "businessAddress": "448 Oak Ridge Ave, Suite 116"
    }
  },
  {
    "id": "prov-117",
    "name": "Margaret Smith (AC & HVAC Maintenance Services)",
    "email": "margaret.smith117@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08117",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 55,
      "rating": 4.2,
      "reviewCount": 23,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08117",
      "businessAddress": "451 Oak Ridge Ave, Suite 117"
    }
  },
  {
    "id": "prov-118",
    "name": "James White (AC & HVAC Maintenance Services)",
    "email": "james.white118@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08118",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 45,
      "rating": 4.5,
      "reviewCount": 27,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08118",
      "businessAddress": "454 Oak Ridge Ave, Suite 118"
    }
  },
  {
    "id": "prov-119",
    "name": "Jennifer Brown (AC & HVAC Maintenance Services)",
    "email": "jennifer.brown119@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08119",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 35,
      "rating": 4.8,
      "reviewCount": 31,
      "isVerified": "verified",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08119",
      "businessAddress": "457 Oak Ridge Ave, Suite 119"
    }
  },
  {
    "id": "prov-120",
    "name": "Alex Rivera (AC & HVAC Maintenance Services)",
    "email": "alex.rivera120@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08120",
    "providerProfile": {
      "bio": "Professional ac & hvac maintenance expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "AC & HVAC Maintenance"
      ],
      "hourlyRate": 95,
      "rating": 4.2,
      "reviewCount": 35,
      "isVerified": "pending",
      "skills": [
        "Certified AC & HVAC Maintenance",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08120",
      "businessAddress": "460 Oak Ridge Ave, Suite 120"
    }
  },
  {
    "id": "prov-121",
    "name": "Linda Miller (Moving & Packing Services)",
    "email": "linda.miller121@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "phone": "+1 (555) 08121",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 85,
      "rating": 4.5,
      "reviewCount": 39,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      "phone": "+1 (555) 08121",
      "businessAddress": "463 Oak Ridge Ave, Suite 121"
    }
  },
  {
    "id": "prov-122",
    "name": "David Vance (Moving & Packing Services)",
    "email": "david.vance122@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "phone": "+1 (555) 08122",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 75,
      "rating": 4.8,
      "reviewCount": 43,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      "phone": "+1 (555) 08122",
      "businessAddress": "466 Oak Ridge Ave, Suite 122"
    }
  },
  {
    "id": "prov-123",
    "name": "Elena Moore (Moving & Packing Services)",
    "email": "elena.moore123@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    "phone": "+1 (555) 08123",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 65,
      "rating": 4.2,
      "reviewCount": 47,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      "phone": "+1 (555) 08123",
      "businessAddress": "469 Oak Ridge Ave, Suite 123"
    }
  },
  {
    "id": "prov-124",
    "name": "Robert Miller (Moving & Packing Services)",
    "email": "robert.miller124@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "phone": "+1 (555) 08124",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 55,
      "rating": 4.5,
      "reviewCount": 6,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      "phone": "+1 (555) 08124",
      "businessAddress": "472 Oak Ridge Ave, Suite 124"
    }
  },
  {
    "id": "prov-125",
    "name": "Maria Anderson (Moving & Packing Services)",
    "email": "maria.anderson125@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    "phone": "+1 (555) 08125",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 45,
      "rating": 4.8,
      "reviewCount": 10,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      "phone": "+1 (555) 08125",
      "businessAddress": "475 Oak Ridge Ave, Suite 125"
    }
  },
  {
    "id": "prov-126",
    "name": "Marcus Taylor (Moving & Packing Services)",
    "email": "marcus.taylor126@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "phone": "+1 (555) 08126",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 35,
      "rating": 4.2,
      "reviewCount": 14,
      "isVerified": "pending",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "phone": "+1 (555) 08126",
      "businessAddress": "478 Oak Ridge Ave, Suite 126"
    }
  },
  {
    "id": "prov-127",
    "name": "Patricia Jackson (Moving & Packing Services)",
    "email": "patricia.jackson127@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    "phone": "+1 (555) 08127",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 95,
      "rating": 4.5,
      "reviewCount": 18,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      "phone": "+1 (555) 08127",
      "businessAddress": "481 Oak Ridge Ave, Suite 127"
    }
  },
  {
    "id": "prov-128",
    "name": "Richard Jones (Moving & Packing Services)",
    "email": "richard.jones128@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 08128",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 85,
      "rating": 4.8,
      "reviewCount": 22,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      "phone": "+1 (555) 08128",
      "businessAddress": "484 Oak Ridge Ave, Suite 128"
    }
  },
  {
    "id": "prov-129",
    "name": "Carlos Harris (Moving & Packing Services)",
    "email": "carlos.harris129@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
    "phone": "+1 (555) 08129",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 75,
      "rating": 4.2,
      "reviewCount": 26,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150",
      "phone": "+1 (555) 08129",
      "businessAddress": "487 Oak Ridge Ave, Suite 129"
    }
  },
  {
    "id": "prov-130",
    "name": "Michael Davis (Moving & Packing Services)",
    "email": "michael.davis130@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
    "phone": "+1 (555) 08130",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 65,
      "rating": 4.5,
      "reviewCount": 30,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150",
      "phone": "+1 (555) 08130",
      "businessAddress": "490 Oak Ridge Ave, Suite 130"
    }
  },
  {
    "id": "prov-131",
    "name": "Susan Rostova (Moving & Packing Services)",
    "email": "susan.rostova131@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
    "phone": "+1 (555) 08131",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 55,
      "rating": 4.8,
      "reviewCount": 34,
      "isVerified": "verified",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1534751516642-a131fed10495?w=150",
      "phone": "+1 (555) 08131",
      "businessAddress": "493 Oak Ridge Ave, Suite 131"
    }
  },
  {
    "id": "prov-132",
    "name": "David Wilson (Moving & Packing Services)",
    "email": "david.wilson132@example.com",
    "role": "provider",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "phone": "+1 (555) 08132",
    "providerProfile": {
      "bio": "Professional moving & packing expert with years of industry-certified experience. Committed to transparent pricing, prompt scheduling, and highly reliable repairs.",
      "categories": [
        "Moving & Packing"
      ],
      "hourlyRate": 45,
      "rating": 4.2,
      "reviewCount": 38,
      "isVerified": "pending",
      "skills": [
        "Certified Moving & Packing",
        "Equipment Diagnostics",
        "Emergency Service",
        "Safety Inspected"
      ],
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      "phone": "+1 (555) 08132",
      "businessAddress": "496 Oak Ridge Ave, Suite 132"
    }
  },
  {
    "id": "admin-1",
    "name": "Chief Administrator",
    "email": "admin@homeneeds.com",
    "role": "admin",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    "phone": "+1 (555) 9999"
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    "id": "book-1",
    "customerId": "cust-1",
    "customerName": "Sarah Johnson",
    "customerEmail": "customer1@example.com",
    "customerPhone": "+1 (555) 0110",
    "providerId": "prov-1",
    "providerName": "Linda Miller (Plumbing Services)",
    "serviceCategory": "Plumbing",
    "date": "2026-06-10",
    "timeSlot": "09:00",
    "hours": 2,
    "hourlyRate": 95,
    "totalPrice": 205.2,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 1",
    "invoiceId": "inv-1",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-10T09:00:00.000Z"
  },
  {
    "id": "book-2",
    "customerId": "cust-1",
    "customerName": "Sarah Johnson",
    "customerEmail": "customer1@example.com",
    "customerPhone": "+1 (555) 0110",
    "providerId": "prov-14",
    "providerName": "Joseph Taylor (Electrical Services Services)",
    "serviceCategory": "Electrical Services",
    "date": "2026-06-12",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 35,
    "totalPrice": 37.8,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 1",
    "invoiceId": "inv-2",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-12T14:00:00.000Z"
  },
  {
    "id": "book-3",
    "customerId": "cust-1",
    "customerName": "Sarah Johnson",
    "customerEmail": "customer1@example.com",
    "customerPhone": "+1 (555) 0110",
    "providerId": "prov-27",
    "providerName": "Patricia Jackson (House Cleaning Services)",
    "serviceCategory": "House Cleaning",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 45,
    "totalPrice": 97.2,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 1",
    "invoiceId": "inv-3",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-4",
    "customerId": "cust-2",
    "customerName": "Michael Chen",
    "customerEmail": "customer2@example.com",
    "customerPhone": "+1 (555) 0111",
    "providerId": "prov-26",
    "providerName": "Marcus Taylor (House Cleaning Services)",
    "serviceCategory": "House Cleaning",
    "date": "2026-06-11",
    "timeSlot": "09:00",
    "hours": 3,
    "hourlyRate": 55,
    "totalPrice": 178.2,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 2",
    "invoiceId": "inv-4",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-11T09:00:00.000Z"
  },
  {
    "id": "book-5",
    "customerId": "cust-2",
    "customerName": "Michael Chen",
    "customerEmail": "customer2@example.com",
    "customerPhone": "+1 (555) 0111",
    "providerId": "prov-39",
    "providerName": "Jennifer Brown (Gardening & Landscaping Services)",
    "serviceCategory": "Gardening & Landscaping",
    "date": "2026-06-13",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 65,
    "totalPrice": 140.4,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 2",
    "invoiceId": "inv-5",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-13T14:00:00.000Z"
  },
  {
    "id": "book-6",
    "customerId": "cust-2",
    "customerName": "Michael Chen",
    "customerEmail": "customer2@example.com",
    "customerPhone": "+1 (555) 0111",
    "providerId": "prov-52",
    "providerName": "David Wilson (Smart Home Setup Services)",
    "serviceCategory": "Smart Home Setup",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 75,
    "totalPrice": 162,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 2",
    "invoiceId": "inv-6",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-7",
    "customerId": "cust-3",
    "customerName": "Emily Rodriguez",
    "customerEmail": "customer3@example.com",
    "customerPhone": "+1 (555) 0112",
    "providerId": "prov-51",
    "providerName": "Susan Rostova (Smart Home Setup Services)",
    "serviceCategory": "Smart Home Setup",
    "date": "2026-06-12",
    "timeSlot": "09:00",
    "hours": 4,
    "hourlyRate": 85,
    "totalPrice": 367.2,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 3",
    "invoiceId": "inv-7",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-12T09:00:00.000Z"
  },
  {
    "id": "book-8",
    "customerId": "cust-3",
    "customerName": "Emily Rodriguez",
    "customerEmail": "customer3@example.com",
    "customerPhone": "+1 (555) 0112",
    "providerId": "prov-64",
    "providerName": "Robert Miller (Chauffeur & Driver Services)",
    "serviceCategory": "Chauffeur & Driver",
    "date": "2026-06-14",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 95,
    "totalPrice": 102.6,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 3",
    "invoiceId": "inv-8",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-14T14:00:00.000Z"
  },
  {
    "id": "book-9",
    "customerId": "cust-3",
    "customerName": "Emily Rodriguez",
    "customerEmail": "customer3@example.com",
    "customerPhone": "+1 (555) 0112",
    "providerId": "prov-77",
    "providerName": "Margaret Smith (Pest Control Services)",
    "serviceCategory": "Pest Control",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 35,
    "totalPrice": 75.6,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 3",
    "invoiceId": "inv-9",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-10",
    "customerId": "cust-4",
    "customerName": "David Kim",
    "customerEmail": "customer4@example.com",
    "customerPhone": "+1 (555) 0113",
    "providerId": "prov-76",
    "providerName": "William Thomas (Pest Control Services)",
    "serviceCategory": "Pest Control",
    "date": "2026-06-13",
    "timeSlot": "09:00",
    "hours": 2,
    "hourlyRate": 45,
    "totalPrice": 97.2,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 4",
    "invoiceId": "inv-10",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-13T09:00:00.000Z"
  },
  {
    "id": "book-11",
    "customerId": "cust-4",
    "customerName": "David Kim",
    "customerEmail": "customer4@example.com",
    "customerPhone": "+1 (555) 0113",
    "providerId": "prov-89",
    "providerName": "Carlos Harris (Appliance Repair Services)",
    "serviceCategory": "Appliance Repair",
    "date": "2026-06-15",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 55,
    "totalPrice": 118.8,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 4",
    "invoiceId": "inv-11",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-15T14:00:00.000Z"
  },
  {
    "id": "book-12",
    "customerId": "cust-4",
    "customerName": "David Kim",
    "customerEmail": "customer4@example.com",
    "customerPhone": "+1 (555) 0113",
    "providerId": "prov-102",
    "providerName": "David Vance (Handyman Services Services)",
    "serviceCategory": "Handyman Services",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 65,
    "totalPrice": 140.4,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 4",
    "invoiceId": "inv-12",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-13",
    "customerId": "cust-5",
    "customerName": "Jessica Taylor",
    "customerEmail": "customer5@example.com",
    "customerPhone": "+1 (555) 0114",
    "providerId": "prov-101",
    "providerName": "Linda Miller (Handyman Services Services)",
    "serviceCategory": "Handyman Services",
    "date": "2026-06-14",
    "timeSlot": "09:00",
    "hours": 3,
    "hourlyRate": 75,
    "totalPrice": 243,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 5",
    "invoiceId": "inv-13",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-14T09:00:00.000Z"
  },
  {
    "id": "book-14",
    "customerId": "cust-5",
    "customerName": "Jessica Taylor",
    "customerEmail": "customer5@example.com",
    "customerPhone": "+1 (555) 0114",
    "providerId": "prov-114",
    "providerName": "Joseph Taylor (AC & HVAC Maintenance Services)",
    "serviceCategory": "AC & HVAC Maintenance",
    "date": "2026-06-16",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 85,
    "totalPrice": 91.8,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 5",
    "invoiceId": "inv-14",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-16T14:00:00.000Z"
  },
  {
    "id": "book-15",
    "customerId": "cust-5",
    "customerName": "Jessica Taylor",
    "customerEmail": "customer5@example.com",
    "customerPhone": "+1 (555) 0114",
    "providerId": "prov-127",
    "providerName": "Patricia Jackson (Moving & Packing Services)",
    "serviceCategory": "Moving & Packing",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 95,
    "totalPrice": 205.2,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 5",
    "invoiceId": "inv-15",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-16",
    "customerId": "cust-6",
    "customerName": "James Wilson",
    "customerEmail": "customer6@example.com",
    "customerPhone": "+1 (555) 0115",
    "providerId": "prov-126",
    "providerName": "Marcus Taylor (Moving & Packing Services)",
    "serviceCategory": "Moving & Packing",
    "date": "2026-06-15",
    "timeSlot": "09:00",
    "hours": 4,
    "hourlyRate": 35,
    "totalPrice": 151.2,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 6",
    "invoiceId": "inv-16",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-15T09:00:00.000Z"
  },
  {
    "id": "book-17",
    "customerId": "cust-6",
    "customerName": "James Wilson",
    "customerEmail": "customer6@example.com",
    "customerPhone": "+1 (555) 0115",
    "providerId": "prov-7",
    "providerName": "Patricia Jackson (Plumbing Services)",
    "serviceCategory": "Plumbing",
    "date": "2026-06-17",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 35,
    "totalPrice": 75.6,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 6",
    "invoiceId": "inv-17",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-17T14:00:00.000Z"
  },
  {
    "id": "book-18",
    "customerId": "cust-6",
    "customerName": "James Wilson",
    "customerEmail": "customer6@example.com",
    "customerPhone": "+1 (555) 0115",
    "providerId": "prov-20",
    "providerName": "Alex Rivera (Electrical Services Services)",
    "serviceCategory": "Electrical Services",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 45,
    "totalPrice": 97.2,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 6",
    "invoiceId": "inv-18",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-19",
    "customerId": "cust-7",
    "customerName": "Amanda Martinez",
    "customerEmail": "customer7@example.com",
    "customerPhone": "+1 (555) 0116",
    "providerId": "prov-19",
    "providerName": "Jennifer Brown (Electrical Services Services)",
    "serviceCategory": "Electrical Services",
    "date": "2026-06-16",
    "timeSlot": "09:00",
    "hours": 2,
    "hourlyRate": 55,
    "totalPrice": 118.8,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 7",
    "invoiceId": "inv-19",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-16T09:00:00.000Z"
  },
  {
    "id": "book-20",
    "customerId": "cust-7",
    "customerName": "Amanda Martinez",
    "customerEmail": "customer7@example.com",
    "customerPhone": "+1 (555) 0116",
    "providerId": "prov-32",
    "providerName": "David Wilson (House Cleaning Services)",
    "serviceCategory": "House Cleaning",
    "date": "2026-06-18",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 65,
    "totalPrice": 70.2,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 7",
    "invoiceId": "inv-20",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-18T14:00:00.000Z"
  },
  {
    "id": "book-21",
    "customerId": "cust-7",
    "customerName": "Amanda Martinez",
    "customerEmail": "customer7@example.com",
    "customerPhone": "+1 (555) 0116",
    "providerId": "prov-45",
    "providerName": "Maria Anderson (Gardening & Landscaping Services)",
    "serviceCategory": "Gardening & Landscaping",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 75,
    "totalPrice": 162,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 7",
    "invoiceId": "inv-21",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-22",
    "customerId": "cust-8",
    "customerName": "Robert Anderson",
    "customerEmail": "customer8@example.com",
    "customerPhone": "+1 (555) 0117",
    "providerId": "prov-44",
    "providerName": "Robert Miller (Gardening & Landscaping Services)",
    "serviceCategory": "Gardening & Landscaping",
    "date": "2026-06-17",
    "timeSlot": "09:00",
    "hours": 3,
    "hourlyRate": 85,
    "totalPrice": 275.4,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 8",
    "invoiceId": "inv-22",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-17T09:00:00.000Z"
  },
  {
    "id": "book-23",
    "customerId": "cust-8",
    "customerName": "Robert Anderson",
    "customerEmail": "customer8@example.com",
    "customerPhone": "+1 (555) 0117",
    "providerId": "prov-57",
    "providerName": "Margaret Smith (Smart Home Setup Services)",
    "serviceCategory": "Smart Home Setup",
    "date": "2026-06-19",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 95,
    "totalPrice": 205.2,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 8",
    "invoiceId": "inv-23",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-19T14:00:00.000Z"
  },
  {
    "id": "book-24",
    "customerId": "cust-8",
    "customerName": "Robert Anderson",
    "customerEmail": "customer8@example.com",
    "customerPhone": "+1 (555) 0117",
    "providerId": "prov-70",
    "providerName": "Michael Davis (Chauffeur & Driver Services)",
    "serviceCategory": "Chauffeur & Driver",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 35,
    "totalPrice": 75.6,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 8",
    "invoiceId": "inv-24",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-25",
    "customerId": "cust-9",
    "customerName": "Ashley Thomas",
    "customerEmail": "customer9@example.com",
    "customerPhone": "+1 (555) 0118",
    "providerId": "prov-69",
    "providerName": "Carlos Harris (Chauffeur & Driver Services)",
    "serviceCategory": "Chauffeur & Driver",
    "date": "2026-06-18",
    "timeSlot": "09:00",
    "hours": 4,
    "hourlyRate": 45,
    "totalPrice": 194.4,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 9",
    "invoiceId": "inv-25",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-18T09:00:00.000Z"
  },
  {
    "id": "book-26",
    "customerId": "cust-9",
    "customerName": "Ashley Thomas",
    "customerEmail": "customer9@example.com",
    "customerPhone": "+1 (555) 0118",
    "providerId": "prov-82",
    "providerName": "David Vance (Pest Control Services)",
    "serviceCategory": "Pest Control",
    "date": "2026-06-20",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 55,
    "totalPrice": 59.4,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 9",
    "invoiceId": "inv-26",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-20T14:00:00.000Z"
  },
  {
    "id": "book-27",
    "customerId": "cust-9",
    "customerName": "Ashley Thomas",
    "customerEmail": "customer9@example.com",
    "customerPhone": "+1 (555) 0118",
    "providerId": "prov-95",
    "providerName": "Sofia Martinez (Appliance Repair Services)",
    "serviceCategory": "Appliance Repair",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 65,
    "totalPrice": 140.4,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 9",
    "invoiceId": "inv-27",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-28",
    "customerId": "cust-10",
    "customerName": "William Jackson",
    "customerEmail": "customer10@example.com",
    "customerPhone": "+1 (555) 0119",
    "providerId": "prov-94",
    "providerName": "Joseph Taylor (Appliance Repair Services)",
    "serviceCategory": "Appliance Repair",
    "date": "2026-06-19",
    "timeSlot": "09:00",
    "hours": 2,
    "hourlyRate": 75,
    "totalPrice": 162,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 10",
    "invoiceId": "inv-28",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-19T09:00:00.000Z"
  },
  {
    "id": "book-29",
    "customerId": "cust-10",
    "customerName": "William Jackson",
    "customerEmail": "customer10@example.com",
    "customerPhone": "+1 (555) 0119",
    "providerId": "prov-107",
    "providerName": "Patricia Jackson (Handyman Services Services)",
    "serviceCategory": "Handyman Services",
    "date": "2026-06-21",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 85,
    "totalPrice": 183.6,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 10",
    "invoiceId": "inv-29",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-21T14:00:00.000Z"
  },
  {
    "id": "book-30",
    "customerId": "cust-10",
    "customerName": "William Jackson",
    "customerEmail": "customer10@example.com",
    "customerPhone": "+1 (555) 0119",
    "providerId": "prov-120",
    "providerName": "Alex Rivera (AC & HVAC Maintenance Services)",
    "serviceCategory": "AC & HVAC Maintenance",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 95,
    "totalPrice": 205.2,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 10",
    "invoiceId": "inv-30",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-31",
    "customerId": "cust-11",
    "customerName": "Olivia White",
    "customerEmail": "customer11@example.com",
    "customerPhone": "+1 (555) 0120",
    "providerId": "prov-119",
    "providerName": "Jennifer Brown (AC & HVAC Maintenance Services)",
    "serviceCategory": "AC & HVAC Maintenance",
    "date": "2026-06-10",
    "timeSlot": "09:00",
    "hours": 3,
    "hourlyRate": 35,
    "totalPrice": 113.4,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 11",
    "invoiceId": "inv-31",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-10T09:00:00.000Z"
  },
  {
    "id": "book-32",
    "customerId": "cust-11",
    "customerName": "Olivia White",
    "customerEmail": "customer11@example.com",
    "customerPhone": "+1 (555) 0120",
    "providerId": "prov-132",
    "providerName": "David Wilson (Moving & Packing Services)",
    "serviceCategory": "Moving & Packing",
    "date": "2026-06-12",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 45,
    "totalPrice": 48.6,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 11",
    "invoiceId": "inv-32",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-12T14:00:00.000Z"
  },
  {
    "id": "book-33",
    "customerId": "cust-11",
    "customerName": "Olivia White",
    "customerEmail": "customer11@example.com",
    "customerPhone": "+1 (555) 0120",
    "providerId": "prov-1",
    "providerName": "Linda Miller (Plumbing Services)",
    "serviceCategory": "Plumbing",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 95,
    "totalPrice": 205.2,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 11",
    "invoiceId": "inv-33",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-34",
    "customerId": "cust-12",
    "customerName": "Daniel Harris",
    "customerEmail": "customer12@example.com",
    "customerPhone": "+1 (555) 0121",
    "providerId": "prov-12",
    "providerName": "David Wilson (Plumbing Services)",
    "serviceCategory": "Plumbing",
    "date": "2026-06-11",
    "timeSlot": "09:00",
    "hours": 4,
    "hourlyRate": 55,
    "totalPrice": 237.6,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 12",
    "invoiceId": "inv-34",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-11T09:00:00.000Z"
  },
  {
    "id": "book-35",
    "customerId": "cust-12",
    "customerName": "Daniel Harris",
    "customerEmail": "customer12@example.com",
    "customerPhone": "+1 (555) 0121",
    "providerId": "prov-13",
    "providerName": "Elizabeth Mendez (Electrical Services Services)",
    "serviceCategory": "Electrical Services",
    "date": "2026-06-13",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 45,
    "totalPrice": 97.2,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 12",
    "invoiceId": "inv-35",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-13T14:00:00.000Z"
  },
  {
    "id": "book-36",
    "customerId": "cust-12",
    "customerName": "Daniel Harris",
    "customerEmail": "customer12@example.com",
    "customerPhone": "+1 (555) 0121",
    "providerId": "prov-26",
    "providerName": "Marcus Taylor (House Cleaning Services)",
    "serviceCategory": "House Cleaning",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 55,
    "totalPrice": 118.8,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 12",
    "invoiceId": "inv-36",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-37",
    "customerId": "cust-13",
    "customerName": "Sophia Martin",
    "customerEmail": "customer13@example.com",
    "customerPhone": "+1 (555) 0122",
    "providerId": "prov-25",
    "providerName": "Maria Anderson (House Cleaning Services)",
    "serviceCategory": "House Cleaning",
    "date": "2026-06-12",
    "timeSlot": "09:00",
    "hours": 2,
    "hourlyRate": 65,
    "totalPrice": 140.4,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 13",
    "invoiceId": "inv-37",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-12T09:00:00.000Z"
  },
  {
    "id": "book-38",
    "customerId": "cust-13",
    "customerName": "Sophia Martin",
    "customerEmail": "customer13@example.com",
    "customerPhone": "+1 (555) 0122",
    "providerId": "prov-38",
    "providerName": "James White (Gardening & Landscaping Services)",
    "serviceCategory": "Gardening & Landscaping",
    "date": "2026-06-14",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 75,
    "totalPrice": 81,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 13",
    "invoiceId": "inv-38",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-14T14:00:00.000Z"
  },
  {
    "id": "book-39",
    "customerId": "cust-13",
    "customerName": "Sophia Martin",
    "customerEmail": "customer13@example.com",
    "customerPhone": "+1 (555) 0122",
    "providerId": "prov-51",
    "providerName": "Susan Rostova (Smart Home Setup Services)",
    "serviceCategory": "Smart Home Setup",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 85,
    "totalPrice": 183.6,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 13",
    "invoiceId": "inv-39",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-40",
    "customerId": "cust-14",
    "customerName": "Matthew Thompson",
    "customerEmail": "customer14@example.com",
    "customerPhone": "+1 (555) 0123",
    "providerId": "prov-50",
    "providerName": "Michael Davis (Smart Home Setup Services)",
    "serviceCategory": "Smart Home Setup",
    "date": "2026-06-13",
    "timeSlot": "09:00",
    "hours": 3,
    "hourlyRate": 95,
    "totalPrice": 307.8,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 14",
    "invoiceId": "inv-40",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-13T09:00:00.000Z"
  },
  {
    "id": "book-41",
    "customerId": "cust-14",
    "customerName": "Matthew Thompson",
    "customerEmail": "customer14@example.com",
    "customerPhone": "+1 (555) 0123",
    "providerId": "prov-63",
    "providerName": "Elena Moore (Chauffeur & Driver Services)",
    "serviceCategory": "Chauffeur & Driver",
    "date": "2026-06-15",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 35,
    "totalPrice": 75.6,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 14",
    "invoiceId": "inv-41",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-15T14:00:00.000Z"
  },
  {
    "id": "book-42",
    "customerId": "cust-14",
    "customerName": "Matthew Thompson",
    "customerEmail": "customer14@example.com",
    "customerPhone": "+1 (555) 0123",
    "providerId": "prov-76",
    "providerName": "William Thomas (Pest Control Services)",
    "serviceCategory": "Pest Control",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 45,
    "totalPrice": 97.2,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 14",
    "invoiceId": "inv-42",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-43",
    "customerId": "cust-15",
    "customerName": "Isabella Garcia",
    "customerEmail": "customer15@example.com",
    "customerPhone": "+1 (555) 0124",
    "providerId": "prov-75",
    "providerName": "Sofia Martinez (Pest Control Services)",
    "serviceCategory": "Pest Control",
    "date": "2026-06-14",
    "timeSlot": "09:00",
    "hours": 4,
    "hourlyRate": 55,
    "totalPrice": 237.6,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 15",
    "invoiceId": "inv-43",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-14T09:00:00.000Z"
  },
  {
    "id": "book-44",
    "customerId": "cust-15",
    "customerName": "Isabella Garcia",
    "customerEmail": "customer15@example.com",
    "customerPhone": "+1 (555) 0124",
    "providerId": "prov-88",
    "providerName": "Richard Jones (Appliance Repair Services)",
    "serviceCategory": "Appliance Repair",
    "date": "2026-06-16",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 65,
    "totalPrice": 70.2,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 15",
    "invoiceId": "inv-44",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-16T14:00:00.000Z"
  },
  {
    "id": "book-45",
    "customerId": "cust-15",
    "customerName": "Isabella Garcia",
    "customerEmail": "customer15@example.com",
    "customerPhone": "+1 (555) 0124",
    "providerId": "prov-101",
    "providerName": "Linda Miller (Handyman Services Services)",
    "serviceCategory": "Handyman Services",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 75,
    "totalPrice": 162,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 15",
    "invoiceId": "inv-45",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-46",
    "customerId": "cust-16",
    "customerName": "Andrew Martinez",
    "customerEmail": "customer16@example.com",
    "customerPhone": "+1 (555) 0125",
    "providerId": "prov-100",
    "providerName": "Alex Rivera (Handyman Services Services)",
    "serviceCategory": "Handyman Services",
    "date": "2026-06-15",
    "timeSlot": "09:00",
    "hours": 2,
    "hourlyRate": 85,
    "totalPrice": 183.6,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 16",
    "invoiceId": "inv-46",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-15T09:00:00.000Z"
  },
  {
    "id": "book-47",
    "customerId": "cust-16",
    "customerName": "Andrew Martinez",
    "customerEmail": "customer16@example.com",
    "customerPhone": "+1 (555) 0125",
    "providerId": "prov-113",
    "providerName": "Elizabeth Mendez (AC & HVAC Maintenance Services)",
    "serviceCategory": "AC & HVAC Maintenance",
    "date": "2026-06-17",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 95,
    "totalPrice": 205.2,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 16",
    "invoiceId": "inv-47",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-17T14:00:00.000Z"
  },
  {
    "id": "book-48",
    "customerId": "cust-16",
    "customerName": "Andrew Martinez",
    "customerEmail": "customer16@example.com",
    "customerPhone": "+1 (555) 0125",
    "providerId": "prov-126",
    "providerName": "Marcus Taylor (Moving & Packing Services)",
    "serviceCategory": "Moving & Packing",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 35,
    "totalPrice": 75.6,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 16",
    "invoiceId": "inv-48",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-49",
    "customerId": "cust-17",
    "customerName": "Mia Robinson",
    "customerEmail": "customer17@example.com",
    "customerPhone": "+1 (555) 0126",
    "providerId": "prov-125",
    "providerName": "Maria Anderson (Moving & Packing Services)",
    "serviceCategory": "Moving & Packing",
    "date": "2026-06-16",
    "timeSlot": "09:00",
    "hours": 3,
    "hourlyRate": 45,
    "totalPrice": 145.8,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 17",
    "invoiceId": "inv-49",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-16T09:00:00.000Z"
  },
  {
    "id": "book-50",
    "customerId": "cust-17",
    "customerName": "Mia Robinson",
    "customerEmail": "customer17@example.com",
    "customerPhone": "+1 (555) 0126",
    "providerId": "prov-6",
    "providerName": "Marcus Taylor (Plumbing Services)",
    "serviceCategory": "Plumbing",
    "date": "2026-06-18",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 45,
    "totalPrice": 48.6,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 17",
    "invoiceId": "inv-50",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-18T14:00:00.000Z"
  },
  {
    "id": "book-51",
    "customerId": "cust-17",
    "customerName": "Mia Robinson",
    "customerEmail": "customer17@example.com",
    "customerPhone": "+1 (555) 0126",
    "providerId": "prov-19",
    "providerName": "Jennifer Brown (Electrical Services Services)",
    "serviceCategory": "Electrical Services",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 55,
    "totalPrice": 118.8,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 17",
    "invoiceId": "inv-51",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-52",
    "customerId": "cust-18",
    "customerName": "Joseph Clark",
    "customerEmail": "customer18@example.com",
    "customerPhone": "+1 (555) 0127",
    "providerId": "prov-18",
    "providerName": "James White (Electrical Services Services)",
    "serviceCategory": "Electrical Services",
    "date": "2026-06-17",
    "timeSlot": "09:00",
    "hours": 4,
    "hourlyRate": 65,
    "totalPrice": 280.8,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 18",
    "invoiceId": "inv-52",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-17T09:00:00.000Z"
  },
  {
    "id": "book-53",
    "customerId": "cust-18",
    "customerName": "Joseph Clark",
    "customerEmail": "customer18@example.com",
    "customerPhone": "+1 (555) 0127",
    "providerId": "prov-31",
    "providerName": "Susan Rostova (House Cleaning Services)",
    "serviceCategory": "House Cleaning",
    "date": "2026-06-19",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 75,
    "totalPrice": 162,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 18",
    "invoiceId": "inv-53",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-19T14:00:00.000Z"
  },
  {
    "id": "book-54",
    "customerId": "cust-18",
    "customerName": "Joseph Clark",
    "customerEmail": "customer18@example.com",
    "customerPhone": "+1 (555) 0127",
    "providerId": "prov-44",
    "providerName": "Robert Miller (Gardening & Landscaping Services)",
    "serviceCategory": "Gardening & Landscaping",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 85,
    "totalPrice": 183.6,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 18",
    "invoiceId": "inv-54",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-55",
    "customerId": "cust-19",
    "customerName": "Charlotte Rodriguez",
    "customerEmail": "customer19@example.com",
    "customerPhone": "+1 (555) 0128",
    "providerId": "prov-43",
    "providerName": "Elena Moore (Gardening & Landscaping Services)",
    "serviceCategory": "Gardening & Landscaping",
    "date": "2026-06-18",
    "timeSlot": "09:00",
    "hours": 2,
    "hourlyRate": 95,
    "totalPrice": 205.2,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 19",
    "invoiceId": "inv-55",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-18T09:00:00.000Z"
  },
  {
    "id": "book-56",
    "customerId": "cust-19",
    "customerName": "Charlotte Rodriguez",
    "customerEmail": "customer19@example.com",
    "customerPhone": "+1 (555) 0128",
    "providerId": "prov-56",
    "providerName": "William Thomas (Smart Home Setup Services)",
    "serviceCategory": "Smart Home Setup",
    "date": "2026-06-20",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 35,
    "totalPrice": 37.8,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 19",
    "invoiceId": "inv-56",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-20T14:00:00.000Z"
  },
  {
    "id": "book-57",
    "customerId": "cust-19",
    "customerName": "Charlotte Rodriguez",
    "customerEmail": "customer19@example.com",
    "customerPhone": "+1 (555) 0128",
    "providerId": "prov-69",
    "providerName": "Carlos Harris (Chauffeur & Driver Services)",
    "serviceCategory": "Chauffeur & Driver",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 45,
    "totalPrice": 97.2,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 19",
    "invoiceId": "inv-57",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-58",
    "customerId": "cust-20",
    "customerName": "Joshua Lewis",
    "customerEmail": "customer20@example.com",
    "customerPhone": "+1 (555) 0129",
    "providerId": "prov-68",
    "providerName": "Richard Jones (Chauffeur & Driver Services)",
    "serviceCategory": "Chauffeur & Driver",
    "date": "2026-06-19",
    "timeSlot": "09:00",
    "hours": 3,
    "hourlyRate": 55,
    "totalPrice": 178.2,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 20",
    "invoiceId": "inv-58",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-19T09:00:00.000Z"
  },
  {
    "id": "book-59",
    "customerId": "cust-20",
    "customerName": "Joshua Lewis",
    "customerEmail": "customer20@example.com",
    "customerPhone": "+1 (555) 0129",
    "providerId": "prov-81",
    "providerName": "Linda Miller (Pest Control Services)",
    "serviceCategory": "Pest Control",
    "date": "2026-06-21",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 65,
    "totalPrice": 140.4,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 20",
    "invoiceId": "inv-59",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-21T14:00:00.000Z"
  },
  {
    "id": "book-60",
    "customerId": "cust-20",
    "customerName": "Joshua Lewis",
    "customerEmail": "customer20@example.com",
    "customerPhone": "+1 (555) 0129",
    "providerId": "prov-94",
    "providerName": "Joseph Taylor (Appliance Repair Services)",
    "serviceCategory": "Appliance Repair",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 75,
    "totalPrice": 162,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 20",
    "invoiceId": "inv-60",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-61",
    "customerId": "cust-21",
    "customerName": "Evelyn Lee",
    "customerEmail": "customer21@example.com",
    "customerPhone": "+1 (555) 0130",
    "providerId": "prov-93",
    "providerName": "Elizabeth Mendez (Appliance Repair Services)",
    "serviceCategory": "Appliance Repair",
    "date": "2026-06-10",
    "timeSlot": "09:00",
    "hours": 4,
    "hourlyRate": 85,
    "totalPrice": 367.2,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 21",
    "invoiceId": "inv-61",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-10T09:00:00.000Z"
  },
  {
    "id": "book-62",
    "customerId": "cust-21",
    "customerName": "Evelyn Lee",
    "customerEmail": "customer21@example.com",
    "customerPhone": "+1 (555) 0130",
    "providerId": "prov-106",
    "providerName": "Marcus Taylor (Handyman Services Services)",
    "serviceCategory": "Handyman Services",
    "date": "2026-06-12",
    "timeSlot": "14:00",
    "hours": 1,
    "hourlyRate": 95,
    "totalPrice": 102.6,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 21",
    "invoiceId": "inv-62",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-12T14:00:00.000Z"
  },
  {
    "id": "book-63",
    "customerId": "cust-21",
    "customerName": "Evelyn Lee",
    "customerEmail": "customer21@example.com",
    "customerPhone": "+1 (555) 0130",
    "providerId": "prov-119",
    "providerName": "Jennifer Brown (AC & HVAC Maintenance Services)",
    "serviceCategory": "AC & HVAC Maintenance",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 35,
    "totalPrice": 75.6,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 21",
    "invoiceId": "inv-63",
    "createdAt": "2026-06-22T10:00:00.000Z"
  },
  {
    "id": "book-64",
    "customerId": "cust-22",
    "customerName": "Christopher Walker",
    "customerEmail": "customer22@example.com",
    "customerPhone": "+1 (555) 0131",
    "providerId": "prov-118",
    "providerName": "James White (AC & HVAC Maintenance Services)",
    "serviceCategory": "AC & HVAC Maintenance",
    "date": "2026-06-11",
    "timeSlot": "09:00",
    "hours": 2,
    "hourlyRate": 45,
    "totalPrice": 97.2,
    "status": "completed",
    "notes": "Standard maintenance and full inspection check on system structures.",
    "address": "Customer Address Location 22",
    "invoiceId": "inv-64",
    "rating": 5,
    "reviewText": "Great service! Prompt, professional, and very thorough.",
    "createdAt": "2026-06-11T09:00:00.000Z"
  },
  {
    "id": "book-65",
    "customerId": "cust-22",
    "customerName": "Christopher Walker",
    "customerEmail": "customer22@example.com",
    "customerPhone": "+1 (555) 0131",
    "providerId": "prov-131",
    "providerName": "Susan Rostova (Moving & Packing Services)",
    "serviceCategory": "Moving & Packing",
    "date": "2026-06-13",
    "timeSlot": "14:00",
    "hours": 2,
    "hourlyRate": 55,
    "totalPrice": 118.8,
    "status": "completed",
    "notes": "Periodic upkeep request and standard configuration setup.",
    "address": "Customer Address Location 22",
    "invoiceId": "inv-65",
    "rating": 4,
    "reviewText": "Job done well. Resolved all issues as expected.",
    "createdAt": "2026-06-13T14:00:00.000Z"
  },
  {
    "id": "book-66",
    "customerId": "cust-22",
    "customerName": "Christopher Walker",
    "customerEmail": "customer22@example.com",
    "customerPhone": "+1 (555) 0131",
    "providerId": "prov-12",
    "providerName": "David Wilson (Plumbing Services)",
    "serviceCategory": "Plumbing",
    "date": "2026-06-26",
    "timeSlot": "11:00",
    "hours": 2,
    "hourlyRate": 55,
    "totalPrice": 118.8,
    "status": "pending",
    "notes": "Standard diagnostic appointment setup.",
    "address": "Customer Address Location 22",
    "invoiceId": "inv-66",
    "createdAt": "2026-06-22T10:00:00.000Z"
  }
];

export const INITIAL_INVOICES: Invoice[] = [
  {
    "id": "inv-1",
    "bookingId": "book-1",
    "customerId": "cust-1",
    "customerName": "Sarah Johnson",
    "providerId": "prov-1",
    "providerName": "Linda Miller (Plumbing Services)",
    "date": "2026-06-10",
    "serviceCategory": "Plumbing",
    "hours": 2,
    "hourlyRate": 95,
    "subtotal": 190,
    "tax": 15.2,
    "finalTotal": 205.2,
    "status": "paid"
  },
  {
    "id": "inv-2",
    "bookingId": "book-2",
    "customerId": "cust-1",
    "customerName": "Sarah Johnson",
    "providerId": "prov-14",
    "providerName": "Joseph Taylor (Electrical Services Services)",
    "date": "2026-06-12",
    "serviceCategory": "Electrical Services",
    "hours": 1,
    "hourlyRate": 35,
    "subtotal": 35,
    "tax": 2.8,
    "finalTotal": 37.8,
    "status": "paid"
  },
  {
    "id": "inv-3",
    "bookingId": "book-3",
    "customerId": "cust-1",
    "customerName": "Sarah Johnson",
    "providerId": "prov-27",
    "providerName": "Patricia Jackson (House Cleaning Services)",
    "date": "2026-06-26",
    "serviceCategory": "House Cleaning",
    "hours": 2,
    "hourlyRate": 45,
    "subtotal": 90,
    "tax": 7.2,
    "finalTotal": 97.2,
    "status": "unpaid"
  },
  {
    "id": "inv-4",
    "bookingId": "book-4",
    "customerId": "cust-2",
    "customerName": "Michael Chen",
    "providerId": "prov-26",
    "providerName": "Marcus Taylor (House Cleaning Services)",
    "date": "2026-06-11",
    "serviceCategory": "House Cleaning",
    "hours": 3,
    "hourlyRate": 55,
    "subtotal": 165,
    "tax": 13.2,
    "finalTotal": 178.2,
    "status": "paid"
  },
  {
    "id": "inv-5",
    "bookingId": "book-5",
    "customerId": "cust-2",
    "customerName": "Michael Chen",
    "providerId": "prov-39",
    "providerName": "Jennifer Brown (Gardening & Landscaping Services)",
    "date": "2026-06-13",
    "serviceCategory": "Gardening & Landscaping",
    "hours": 2,
    "hourlyRate": 65,
    "subtotal": 130,
    "tax": 10.4,
    "finalTotal": 140.4,
    "status": "paid"
  },
  {
    "id": "inv-6",
    "bookingId": "book-6",
    "customerId": "cust-2",
    "customerName": "Michael Chen",
    "providerId": "prov-52",
    "providerName": "David Wilson (Smart Home Setup Services)",
    "date": "2026-06-26",
    "serviceCategory": "Smart Home Setup",
    "hours": 2,
    "hourlyRate": 75,
    "subtotal": 150,
    "tax": 12,
    "finalTotal": 162,
    "status": "unpaid"
  },
  {
    "id": "inv-7",
    "bookingId": "book-7",
    "customerId": "cust-3",
    "customerName": "Emily Rodriguez",
    "providerId": "prov-51",
    "providerName": "Susan Rostova (Smart Home Setup Services)",
    "date": "2026-06-12",
    "serviceCategory": "Smart Home Setup",
    "hours": 4,
    "hourlyRate": 85,
    "subtotal": 340,
    "tax": 27.2,
    "finalTotal": 367.2,
    "status": "paid"
  },
  {
    "id": "inv-8",
    "bookingId": "book-8",
    "customerId": "cust-3",
    "customerName": "Emily Rodriguez",
    "providerId": "prov-64",
    "providerName": "Robert Miller (Chauffeur & Driver Services)",
    "date": "2026-06-14",
    "serviceCategory": "Chauffeur & Driver",
    "hours": 1,
    "hourlyRate": 95,
    "subtotal": 95,
    "tax": 7.6,
    "finalTotal": 102.6,
    "status": "paid"
  },
  {
    "id": "inv-9",
    "bookingId": "book-9",
    "customerId": "cust-3",
    "customerName": "Emily Rodriguez",
    "providerId": "prov-77",
    "providerName": "Margaret Smith (Pest Control Services)",
    "date": "2026-06-26",
    "serviceCategory": "Pest Control",
    "hours": 2,
    "hourlyRate": 35,
    "subtotal": 70,
    "tax": 5.6,
    "finalTotal": 75.6,
    "status": "unpaid"
  },
  {
    "id": "inv-10",
    "bookingId": "book-10",
    "customerId": "cust-4",
    "customerName": "David Kim",
    "providerId": "prov-76",
    "providerName": "William Thomas (Pest Control Services)",
    "date": "2026-06-13",
    "serviceCategory": "Pest Control",
    "hours": 2,
    "hourlyRate": 45,
    "subtotal": 90,
    "tax": 7.2,
    "finalTotal": 97.2,
    "status": "paid"
  },
  {
    "id": "inv-11",
    "bookingId": "book-11",
    "customerId": "cust-4",
    "customerName": "David Kim",
    "providerId": "prov-89",
    "providerName": "Carlos Harris (Appliance Repair Services)",
    "date": "2026-06-15",
    "serviceCategory": "Appliance Repair",
    "hours": 2,
    "hourlyRate": 55,
    "subtotal": 110,
    "tax": 8.8,
    "finalTotal": 118.8,
    "status": "paid"
  },
  {
    "id": "inv-12",
    "bookingId": "book-12",
    "customerId": "cust-4",
    "customerName": "David Kim",
    "providerId": "prov-102",
    "providerName": "David Vance (Handyman Services Services)",
    "date": "2026-06-26",
    "serviceCategory": "Handyman Services",
    "hours": 2,
    "hourlyRate": 65,
    "subtotal": 130,
    "tax": 10.4,
    "finalTotal": 140.4,
    "status": "unpaid"
  },
  {
    "id": "inv-13",
    "bookingId": "book-13",
    "customerId": "cust-5",
    "customerName": "Jessica Taylor",
    "providerId": "prov-101",
    "providerName": "Linda Miller (Handyman Services Services)",
    "date": "2026-06-14",
    "serviceCategory": "Handyman Services",
    "hours": 3,
    "hourlyRate": 75,
    "subtotal": 225,
    "tax": 18,
    "finalTotal": 243,
    "status": "paid"
  },
  {
    "id": "inv-14",
    "bookingId": "book-14",
    "customerId": "cust-5",
    "customerName": "Jessica Taylor",
    "providerId": "prov-114",
    "providerName": "Joseph Taylor (AC & HVAC Maintenance Services)",
    "date": "2026-06-16",
    "serviceCategory": "AC & HVAC Maintenance",
    "hours": 1,
    "hourlyRate": 85,
    "subtotal": 85,
    "tax": 6.8,
    "finalTotal": 91.8,
    "status": "paid"
  },
  {
    "id": "inv-15",
    "bookingId": "book-15",
    "customerId": "cust-5",
    "customerName": "Jessica Taylor",
    "providerId": "prov-127",
    "providerName": "Patricia Jackson (Moving & Packing Services)",
    "date": "2026-06-26",
    "serviceCategory": "Moving & Packing",
    "hours": 2,
    "hourlyRate": 95,
    "subtotal": 190,
    "tax": 15.2,
    "finalTotal": 205.2,
    "status": "unpaid"
  },
  {
    "id": "inv-16",
    "bookingId": "book-16",
    "customerId": "cust-6",
    "customerName": "James Wilson",
    "providerId": "prov-126",
    "providerName": "Marcus Taylor (Moving & Packing Services)",
    "date": "2026-06-15",
    "serviceCategory": "Moving & Packing",
    "hours": 4,
    "hourlyRate": 35,
    "subtotal": 140,
    "tax": 11.2,
    "finalTotal": 151.2,
    "status": "paid"
  },
  {
    "id": "inv-17",
    "bookingId": "book-17",
    "customerId": "cust-6",
    "customerName": "James Wilson",
    "providerId": "prov-7",
    "providerName": "Patricia Jackson (Plumbing Services)",
    "date": "2026-06-17",
    "serviceCategory": "Plumbing",
    "hours": 2,
    "hourlyRate": 35,
    "subtotal": 70,
    "tax": 5.6,
    "finalTotal": 75.6,
    "status": "paid"
  },
  {
    "id": "inv-18",
    "bookingId": "book-18",
    "customerId": "cust-6",
    "customerName": "James Wilson",
    "providerId": "prov-20",
    "providerName": "Alex Rivera (Electrical Services Services)",
    "date": "2026-06-26",
    "serviceCategory": "Electrical Services",
    "hours": 2,
    "hourlyRate": 45,
    "subtotal": 90,
    "tax": 7.2,
    "finalTotal": 97.2,
    "status": "unpaid"
  },
  {
    "id": "inv-19",
    "bookingId": "book-19",
    "customerId": "cust-7",
    "customerName": "Amanda Martinez",
    "providerId": "prov-19",
    "providerName": "Jennifer Brown (Electrical Services Services)",
    "date": "2026-06-16",
    "serviceCategory": "Electrical Services",
    "hours": 2,
    "hourlyRate": 55,
    "subtotal": 110,
    "tax": 8.8,
    "finalTotal": 118.8,
    "status": "paid"
  },
  {
    "id": "inv-20",
    "bookingId": "book-20",
    "customerId": "cust-7",
    "customerName": "Amanda Martinez",
    "providerId": "prov-32",
    "providerName": "David Wilson (House Cleaning Services)",
    "date": "2026-06-18",
    "serviceCategory": "House Cleaning",
    "hours": 1,
    "hourlyRate": 65,
    "subtotal": 65,
    "tax": 5.2,
    "finalTotal": 70.2,
    "status": "paid"
  },
  {
    "id": "inv-21",
    "bookingId": "book-21",
    "customerId": "cust-7",
    "customerName": "Amanda Martinez",
    "providerId": "prov-45",
    "providerName": "Maria Anderson (Gardening & Landscaping Services)",
    "date": "2026-06-26",
    "serviceCategory": "Gardening & Landscaping",
    "hours": 2,
    "hourlyRate": 75,
    "subtotal": 150,
    "tax": 12,
    "finalTotal": 162,
    "status": "unpaid"
  },
  {
    "id": "inv-22",
    "bookingId": "book-22",
    "customerId": "cust-8",
    "customerName": "Robert Anderson",
    "providerId": "prov-44",
    "providerName": "Robert Miller (Gardening & Landscaping Services)",
    "date": "2026-06-17",
    "serviceCategory": "Gardening & Landscaping",
    "hours": 3,
    "hourlyRate": 85,
    "subtotal": 255,
    "tax": 20.4,
    "finalTotal": 275.4,
    "status": "paid"
  },
  {
    "id": "inv-23",
    "bookingId": "book-23",
    "customerId": "cust-8",
    "customerName": "Robert Anderson",
    "providerId": "prov-57",
    "providerName": "Margaret Smith (Smart Home Setup Services)",
    "date": "2026-06-19",
    "serviceCategory": "Smart Home Setup",
    "hours": 2,
    "hourlyRate": 95,
    "subtotal": 190,
    "tax": 15.2,
    "finalTotal": 205.2,
    "status": "paid"
  },
  {
    "id": "inv-24",
    "bookingId": "book-24",
    "customerId": "cust-8",
    "customerName": "Robert Anderson",
    "providerId": "prov-70",
    "providerName": "Michael Davis (Chauffeur & Driver Services)",
    "date": "2026-06-26",
    "serviceCategory": "Chauffeur & Driver",
    "hours": 2,
    "hourlyRate": 35,
    "subtotal": 70,
    "tax": 5.6,
    "finalTotal": 75.6,
    "status": "unpaid"
  },
  {
    "id": "inv-25",
    "bookingId": "book-25",
    "customerId": "cust-9",
    "customerName": "Ashley Thomas",
    "providerId": "prov-69",
    "providerName": "Carlos Harris (Chauffeur & Driver Services)",
    "date": "2026-06-18",
    "serviceCategory": "Chauffeur & Driver",
    "hours": 4,
    "hourlyRate": 45,
    "subtotal": 180,
    "tax": 14.4,
    "finalTotal": 194.4,
    "status": "paid"
  },
  {
    "id": "inv-26",
    "bookingId": "book-26",
    "customerId": "cust-9",
    "customerName": "Ashley Thomas",
    "providerId": "prov-82",
    "providerName": "David Vance (Pest Control Services)",
    "date": "2026-06-20",
    "serviceCategory": "Pest Control",
    "hours": 1,
    "hourlyRate": 55,
    "subtotal": 55,
    "tax": 4.4,
    "finalTotal": 59.4,
    "status": "paid"
  },
  {
    "id": "inv-27",
    "bookingId": "book-27",
    "customerId": "cust-9",
    "customerName": "Ashley Thomas",
    "providerId": "prov-95",
    "providerName": "Sofia Martinez (Appliance Repair Services)",
    "date": "2026-06-26",
    "serviceCategory": "Appliance Repair",
    "hours": 2,
    "hourlyRate": 65,
    "subtotal": 130,
    "tax": 10.4,
    "finalTotal": 140.4,
    "status": "unpaid"
  },
  {
    "id": "inv-28",
    "bookingId": "book-28",
    "customerId": "cust-10",
    "customerName": "William Jackson",
    "providerId": "prov-94",
    "providerName": "Joseph Taylor (Appliance Repair Services)",
    "date": "2026-06-19",
    "serviceCategory": "Appliance Repair",
    "hours": 2,
    "hourlyRate": 75,
    "subtotal": 150,
    "tax": 12,
    "finalTotal": 162,
    "status": "paid"
  },
  {
    "id": "inv-29",
    "bookingId": "book-29",
    "customerId": "cust-10",
    "customerName": "William Jackson",
    "providerId": "prov-107",
    "providerName": "Patricia Jackson (Handyman Services Services)",
    "date": "2026-06-21",
    "serviceCategory": "Handyman Services",
    "hours": 2,
    "hourlyRate": 85,
    "subtotal": 170,
    "tax": 13.6,
    "finalTotal": 183.6,
    "status": "paid"
  },
  {
    "id": "inv-30",
    "bookingId": "book-30",
    "customerId": "cust-10",
    "customerName": "William Jackson",
    "providerId": "prov-120",
    "providerName": "Alex Rivera (AC & HVAC Maintenance Services)",
    "date": "2026-06-26",
    "serviceCategory": "AC & HVAC Maintenance",
    "hours": 2,
    "hourlyRate": 95,
    "subtotal": 190,
    "tax": 15.2,
    "finalTotal": 205.2,
    "status": "unpaid"
  },
  {
    "id": "inv-31",
    "bookingId": "book-31",
    "customerId": "cust-11",
    "customerName": "Olivia White",
    "providerId": "prov-119",
    "providerName": "Jennifer Brown (AC & HVAC Maintenance Services)",
    "date": "2026-06-10",
    "serviceCategory": "AC & HVAC Maintenance",
    "hours": 3,
    "hourlyRate": 35,
    "subtotal": 105,
    "tax": 8.4,
    "finalTotal": 113.4,
    "status": "paid"
  },
  {
    "id": "inv-32",
    "bookingId": "book-32",
    "customerId": "cust-11",
    "customerName": "Olivia White",
    "providerId": "prov-132",
    "providerName": "David Wilson (Moving & Packing Services)",
    "date": "2026-06-12",
    "serviceCategory": "Moving & Packing",
    "hours": 1,
    "hourlyRate": 45,
    "subtotal": 45,
    "tax": 3.6,
    "finalTotal": 48.6,
    "status": "paid"
  },
  {
    "id": "inv-33",
    "bookingId": "book-33",
    "customerId": "cust-11",
    "customerName": "Olivia White",
    "providerId": "prov-1",
    "providerName": "Linda Miller (Plumbing Services)",
    "date": "2026-06-26",
    "serviceCategory": "Plumbing",
    "hours": 2,
    "hourlyRate": 95,
    "subtotal": 190,
    "tax": 15.2,
    "finalTotal": 205.2,
    "status": "unpaid"
  },
  {
    "id": "inv-34",
    "bookingId": "book-34",
    "customerId": "cust-12",
    "customerName": "Daniel Harris",
    "providerId": "prov-12",
    "providerName": "David Wilson (Plumbing Services)",
    "date": "2026-06-11",
    "serviceCategory": "Plumbing",
    "hours": 4,
    "hourlyRate": 55,
    "subtotal": 220,
    "tax": 17.6,
    "finalTotal": 237.6,
    "status": "paid"
  },
  {
    "id": "inv-35",
    "bookingId": "book-35",
    "customerId": "cust-12",
    "customerName": "Daniel Harris",
    "providerId": "prov-13",
    "providerName": "Elizabeth Mendez (Electrical Services Services)",
    "date": "2026-06-13",
    "serviceCategory": "Electrical Services",
    "hours": 2,
    "hourlyRate": 45,
    "subtotal": 90,
    "tax": 7.2,
    "finalTotal": 97.2,
    "status": "paid"
  },
  {
    "id": "inv-36",
    "bookingId": "book-36",
    "customerId": "cust-12",
    "customerName": "Daniel Harris",
    "providerId": "prov-26",
    "providerName": "Marcus Taylor (House Cleaning Services)",
    "date": "2026-06-26",
    "serviceCategory": "House Cleaning",
    "hours": 2,
    "hourlyRate": 55,
    "subtotal": 110,
    "tax": 8.8,
    "finalTotal": 118.8,
    "status": "unpaid"
  },
  {
    "id": "inv-37",
    "bookingId": "book-37",
    "customerId": "cust-13",
    "customerName": "Sophia Martin",
    "providerId": "prov-25",
    "providerName": "Maria Anderson (House Cleaning Services)",
    "date": "2026-06-12",
    "serviceCategory": "House Cleaning",
    "hours": 2,
    "hourlyRate": 65,
    "subtotal": 130,
    "tax": 10.4,
    "finalTotal": 140.4,
    "status": "paid"
  },
  {
    "id": "inv-38",
    "bookingId": "book-38",
    "customerId": "cust-13",
    "customerName": "Sophia Martin",
    "providerId": "prov-38",
    "providerName": "James White (Gardening & Landscaping Services)",
    "date": "2026-06-14",
    "serviceCategory": "Gardening & Landscaping",
    "hours": 1,
    "hourlyRate": 75,
    "subtotal": 75,
    "tax": 6,
    "finalTotal": 81,
    "status": "paid"
  },
  {
    "id": "inv-39",
    "bookingId": "book-39",
    "customerId": "cust-13",
    "customerName": "Sophia Martin",
    "providerId": "prov-51",
    "providerName": "Susan Rostova (Smart Home Setup Services)",
    "date": "2026-06-26",
    "serviceCategory": "Smart Home Setup",
    "hours": 2,
    "hourlyRate": 85,
    "subtotal": 170,
    "tax": 13.6,
    "finalTotal": 183.6,
    "status": "unpaid"
  },
  {
    "id": "inv-40",
    "bookingId": "book-40",
    "customerId": "cust-14",
    "customerName": "Matthew Thompson",
    "providerId": "prov-50",
    "providerName": "Michael Davis (Smart Home Setup Services)",
    "date": "2026-06-13",
    "serviceCategory": "Smart Home Setup",
    "hours": 3,
    "hourlyRate": 95,
    "subtotal": 285,
    "tax": 22.8,
    "finalTotal": 307.8,
    "status": "paid"
  },
  {
    "id": "inv-41",
    "bookingId": "book-41",
    "customerId": "cust-14",
    "customerName": "Matthew Thompson",
    "providerId": "prov-63",
    "providerName": "Elena Moore (Chauffeur & Driver Services)",
    "date": "2026-06-15",
    "serviceCategory": "Chauffeur & Driver",
    "hours": 2,
    "hourlyRate": 35,
    "subtotal": 70,
    "tax": 5.6,
    "finalTotal": 75.6,
    "status": "paid"
  },
  {
    "id": "inv-42",
    "bookingId": "book-42",
    "customerId": "cust-14",
    "customerName": "Matthew Thompson",
    "providerId": "prov-76",
    "providerName": "William Thomas (Pest Control Services)",
    "date": "2026-06-26",
    "serviceCategory": "Pest Control",
    "hours": 2,
    "hourlyRate": 45,
    "subtotal": 90,
    "tax": 7.2,
    "finalTotal": 97.2,
    "status": "unpaid"
  },
  {
    "id": "inv-43",
    "bookingId": "book-43",
    "customerId": "cust-15",
    "customerName": "Isabella Garcia",
    "providerId": "prov-75",
    "providerName": "Sofia Martinez (Pest Control Services)",
    "date": "2026-06-14",
    "serviceCategory": "Pest Control",
    "hours": 4,
    "hourlyRate": 55,
    "subtotal": 220,
    "tax": 17.6,
    "finalTotal": 237.6,
    "status": "paid"
  },
  {
    "id": "inv-44",
    "bookingId": "book-44",
    "customerId": "cust-15",
    "customerName": "Isabella Garcia",
    "providerId": "prov-88",
    "providerName": "Richard Jones (Appliance Repair Services)",
    "date": "2026-06-16",
    "serviceCategory": "Appliance Repair",
    "hours": 1,
    "hourlyRate": 65,
    "subtotal": 65,
    "tax": 5.2,
    "finalTotal": 70.2,
    "status": "paid"
  },
  {
    "id": "inv-45",
    "bookingId": "book-45",
    "customerId": "cust-15",
    "customerName": "Isabella Garcia",
    "providerId": "prov-101",
    "providerName": "Linda Miller (Handyman Services Services)",
    "date": "2026-06-26",
    "serviceCategory": "Handyman Services",
    "hours": 2,
    "hourlyRate": 75,
    "subtotal": 150,
    "tax": 12,
    "finalTotal": 162,
    "status": "unpaid"
  },
  {
    "id": "inv-46",
    "bookingId": "book-46",
    "customerId": "cust-16",
    "customerName": "Andrew Martinez",
    "providerId": "prov-100",
    "providerName": "Alex Rivera (Handyman Services Services)",
    "date": "2026-06-15",
    "serviceCategory": "Handyman Services",
    "hours": 2,
    "hourlyRate": 85,
    "subtotal": 170,
    "tax": 13.6,
    "finalTotal": 183.6,
    "status": "paid"
  },
  {
    "id": "inv-47",
    "bookingId": "book-47",
    "customerId": "cust-16",
    "customerName": "Andrew Martinez",
    "providerId": "prov-113",
    "providerName": "Elizabeth Mendez (AC & HVAC Maintenance Services)",
    "date": "2026-06-17",
    "serviceCategory": "AC & HVAC Maintenance",
    "hours": 2,
    "hourlyRate": 95,
    "subtotal": 190,
    "tax": 15.2,
    "finalTotal": 205.2,
    "status": "paid"
  },
  {
    "id": "inv-48",
    "bookingId": "book-48",
    "customerId": "cust-16",
    "customerName": "Andrew Martinez",
    "providerId": "prov-126",
    "providerName": "Marcus Taylor (Moving & Packing Services)",
    "date": "2026-06-26",
    "serviceCategory": "Moving & Packing",
    "hours": 2,
    "hourlyRate": 35,
    "subtotal": 70,
    "tax": 5.6,
    "finalTotal": 75.6,
    "status": "unpaid"
  },
  {
    "id": "inv-49",
    "bookingId": "book-49",
    "customerId": "cust-17",
    "customerName": "Mia Robinson",
    "providerId": "prov-125",
    "providerName": "Maria Anderson (Moving & Packing Services)",
    "date": "2026-06-16",
    "serviceCategory": "Moving & Packing",
    "hours": 3,
    "hourlyRate": 45,
    "subtotal": 135,
    "tax": 10.8,
    "finalTotal": 145.8,
    "status": "paid"
  },
  {
    "id": "inv-50",
    "bookingId": "book-50",
    "customerId": "cust-17",
    "customerName": "Mia Robinson",
    "providerId": "prov-6",
    "providerName": "Marcus Taylor (Plumbing Services)",
    "date": "2026-06-18",
    "serviceCategory": "Plumbing",
    "hours": 1,
    "hourlyRate": 45,
    "subtotal": 45,
    "tax": 3.6,
    "finalTotal": 48.6,
    "status": "paid"
  },
  {
    "id": "inv-51",
    "bookingId": "book-51",
    "customerId": "cust-17",
    "customerName": "Mia Robinson",
    "providerId": "prov-19",
    "providerName": "Jennifer Brown (Electrical Services Services)",
    "date": "2026-06-26",
    "serviceCategory": "Electrical Services",
    "hours": 2,
    "hourlyRate": 55,
    "subtotal": 110,
    "tax": 8.8,
    "finalTotal": 118.8,
    "status": "unpaid"
  },
  {
    "id": "inv-52",
    "bookingId": "book-52",
    "customerId": "cust-18",
    "customerName": "Joseph Clark",
    "providerId": "prov-18",
    "providerName": "James White (Electrical Services Services)",
    "date": "2026-06-17",
    "serviceCategory": "Electrical Services",
    "hours": 4,
    "hourlyRate": 65,
    "subtotal": 260,
    "tax": 20.8,
    "finalTotal": 280.8,
    "status": "paid"
  },
  {
    "id": "inv-53",
    "bookingId": "book-53",
    "customerId": "cust-18",
    "customerName": "Joseph Clark",
    "providerId": "prov-31",
    "providerName": "Susan Rostova (House Cleaning Services)",
    "date": "2026-06-19",
    "serviceCategory": "House Cleaning",
    "hours": 2,
    "hourlyRate": 75,
    "subtotal": 150,
    "tax": 12,
    "finalTotal": 162,
    "status": "paid"
  },
  {
    "id": "inv-54",
    "bookingId": "book-54",
    "customerId": "cust-18",
    "customerName": "Joseph Clark",
    "providerId": "prov-44",
    "providerName": "Robert Miller (Gardening & Landscaping Services)",
    "date": "2026-06-26",
    "serviceCategory": "Gardening & Landscaping",
    "hours": 2,
    "hourlyRate": 85,
    "subtotal": 170,
    "tax": 13.6,
    "finalTotal": 183.6,
    "status": "unpaid"
  },
  {
    "id": "inv-55",
    "bookingId": "book-55",
    "customerId": "cust-19",
    "customerName": "Charlotte Rodriguez",
    "providerId": "prov-43",
    "providerName": "Elena Moore (Gardening & Landscaping Services)",
    "date": "2026-06-18",
    "serviceCategory": "Gardening & Landscaping",
    "hours": 2,
    "hourlyRate": 95,
    "subtotal": 190,
    "tax": 15.2,
    "finalTotal": 205.2,
    "status": "paid"
  },
  {
    "id": "inv-56",
    "bookingId": "book-56",
    "customerId": "cust-19",
    "customerName": "Charlotte Rodriguez",
    "providerId": "prov-56",
    "providerName": "William Thomas (Smart Home Setup Services)",
    "date": "2026-06-20",
    "serviceCategory": "Smart Home Setup",
    "hours": 1,
    "hourlyRate": 35,
    "subtotal": 35,
    "tax": 2.8,
    "finalTotal": 37.8,
    "status": "paid"
  },
  {
    "id": "inv-57",
    "bookingId": "book-57",
    "customerId": "cust-19",
    "customerName": "Charlotte Rodriguez",
    "providerId": "prov-69",
    "providerName": "Carlos Harris (Chauffeur & Driver Services)",
    "date": "2026-06-26",
    "serviceCategory": "Chauffeur & Driver",
    "hours": 2,
    "hourlyRate": 45,
    "subtotal": 90,
    "tax": 7.2,
    "finalTotal": 97.2,
    "status": "unpaid"
  },
  {
    "id": "inv-58",
    "bookingId": "book-58",
    "customerId": "cust-20",
    "customerName": "Joshua Lewis",
    "providerId": "prov-68",
    "providerName": "Richard Jones (Chauffeur & Driver Services)",
    "date": "2026-06-19",
    "serviceCategory": "Chauffeur & Driver",
    "hours": 3,
    "hourlyRate": 55,
    "subtotal": 165,
    "tax": 13.2,
    "finalTotal": 178.2,
    "status": "paid"
  },
  {
    "id": "inv-59",
    "bookingId": "book-59",
    "customerId": "cust-20",
    "customerName": "Joshua Lewis",
    "providerId": "prov-81",
    "providerName": "Linda Miller (Pest Control Services)",
    "date": "2026-06-21",
    "serviceCategory": "Pest Control",
    "hours": 2,
    "hourlyRate": 65,
    "subtotal": 130,
    "tax": 10.4,
    "finalTotal": 140.4,
    "status": "paid"
  },
  {
    "id": "inv-60",
    "bookingId": "book-60",
    "customerId": "cust-20",
    "customerName": "Joshua Lewis",
    "providerId": "prov-94",
    "providerName": "Joseph Taylor (Appliance Repair Services)",
    "date": "2026-06-26",
    "serviceCategory": "Appliance Repair",
    "hours": 2,
    "hourlyRate": 75,
    "subtotal": 150,
    "tax": 12,
    "finalTotal": 162,
    "status": "unpaid"
  },
  {
    "id": "inv-61",
    "bookingId": "book-61",
    "customerId": "cust-21",
    "customerName": "Evelyn Lee",
    "providerId": "prov-93",
    "providerName": "Elizabeth Mendez (Appliance Repair Services)",
    "date": "2026-06-10",
    "serviceCategory": "Appliance Repair",
    "hours": 4,
    "hourlyRate": 85,
    "subtotal": 340,
    "tax": 27.2,
    "finalTotal": 367.2,
    "status": "paid"
  },
  {
    "id": "inv-62",
    "bookingId": "book-62",
    "customerId": "cust-21",
    "customerName": "Evelyn Lee",
    "providerId": "prov-106",
    "providerName": "Marcus Taylor (Handyman Services Services)",
    "date": "2026-06-12",
    "serviceCategory": "Handyman Services",
    "hours": 1,
    "hourlyRate": 95,
    "subtotal": 95,
    "tax": 7.6,
    "finalTotal": 102.6,
    "status": "paid"
  },
  {
    "id": "inv-63",
    "bookingId": "book-63",
    "customerId": "cust-21",
    "customerName": "Evelyn Lee",
    "providerId": "prov-119",
    "providerName": "Jennifer Brown (AC & HVAC Maintenance Services)",
    "date": "2026-06-26",
    "serviceCategory": "AC & HVAC Maintenance",
    "hours": 2,
    "hourlyRate": 35,
    "subtotal": 70,
    "tax": 5.6,
    "finalTotal": 75.6,
    "status": "unpaid"
  },
  {
    "id": "inv-64",
    "bookingId": "book-64",
    "customerId": "cust-22",
    "customerName": "Christopher Walker",
    "providerId": "prov-118",
    "providerName": "James White (AC & HVAC Maintenance Services)",
    "date": "2026-06-11",
    "serviceCategory": "AC & HVAC Maintenance",
    "hours": 2,
    "hourlyRate": 45,
    "subtotal": 90,
    "tax": 7.2,
    "finalTotal": 97.2,
    "status": "paid"
  },
  {
    "id": "inv-65",
    "bookingId": "book-65",
    "customerId": "cust-22",
    "customerName": "Christopher Walker",
    "providerId": "prov-131",
    "providerName": "Susan Rostova (Moving & Packing Services)",
    "date": "2026-06-13",
    "serviceCategory": "Moving & Packing",
    "hours": 2,
    "hourlyRate": 55,
    "subtotal": 110,
    "tax": 8.8,
    "finalTotal": 118.8,
    "status": "paid"
  },
  {
    "id": "inv-66",
    "bookingId": "book-66",
    "customerId": "cust-22",
    "customerName": "Christopher Walker",
    "providerId": "prov-12",
    "providerName": "David Wilson (Plumbing Services)",
    "date": "2026-06-26",
    "serviceCategory": "Plumbing",
    "hours": 2,
    "hourlyRate": 55,
    "subtotal": 110,
    "tax": 8.8,
    "finalTotal": 118.8,
    "status": "unpaid"
  }
];

export const INITIAL_DISPUTES: Dispute[] = [
  {
    "id": "disp-1",
    "bookingId": "book-1",
    "customerId": "cust-1",
    "customerName": "Sarah Johnson",
    "providerId": "prov-1",
    "providerName": "Linda Miller (Plumbing Services)",
    "reason": "Unsatisfactory Service Detail",
    "description": "The technician did not complete the full diagnostics and left early. Requesting partial adjustment.",
    "status": "open",
    "createdAt": "2026-06-20T18:00:00.000Z"
  }
];

export const MYSQL_DDL = `
-- =======================================================
-- HOME SERVICES MANAGEMENT PLATFORM DB SCHEMA
-- RDBMS: MySQL 8.0+ (Normalized Structure)
-- =======================================================

CREATE DATABASE IF NOT EXISTS home_services_db;
USE home_services_db;

-- 1. Users Table
CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role ENUM('customer', 'provider', 'admin') NOT NULL,
    avatar_url VARCHAR(255),
    phone VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Providers Profiles (1:1 with Users role='provider')
CREATE TABLE provider_profiles (
    user_id VARCHAR(50) PRIMARY KEY,
    bio TEXT,
    hourly_rate DECIMAL(10, 2) NOT NULL,
    rating DECIMAL(3, 2) DEFAULT 5.0,
    review_count INT DEFAULT 0,
    is_verified ENUM('unverified', 'pending', 'verified') DEFAULT 'unverified',
    skills VARCHAR(512),
    business_address VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. Bookings Table
CREATE TABLE bookings (
    id VARCHAR(50) PRIMARY KEY,
    customer_id VARCHAR(50) NOT NULL,
    provider_id VARCHAR(50) NOT NULL,
    service_category VARCHAR(50) NOT NULL,
    booking_date DATE NOT NULL,
    time_slot VARCHAR(10) NOT NULL,
    hours DECIMAL(4, 2) NOT NULL,
    hourly_rate DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'confirmed', 'completed', 'cancelled', 'disputed') DEFAULT 'pending',
    notes TEXT,
    address VARCHAR(255) NOT NULL,
    invoice_id VARCHAR(50) UNIQUE,
    rating INT,
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES users(id),
    FOREIGN KEY (provider_id) REFERENCES users(id),
    UNIQUE KEY uq_schedule_slot (provider_id, booking_date, time_slot)
);

-- 4. Invoices Table
CREATE TABLE invoices (
    id VARCHAR(50) PRIMARY KEY,
    booking_id VARCHAR(50) NOT NULL,
    customer_id VARCHAR(50) NOT NULL,
    provider_id VARCHAR(50) NOT NULL,
    invoice_date DATE NOT NULL,
    service_category VARCHAR(50) NOT NULL,
    hours DECIMAL(4, 2) NOT NULL,
    hourly_rate DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    tax DECIMAL(10, 2) NOT NULL,
    final_total DECIMAL(10, 2) NOT NULL,
    status ENUM('unpaid', 'paid', 'refunded') DEFAULT 'unpaid',
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES users(id),
    FOREIGN KEY (provider_id) REFERENCES users(id)
);

-- 5. Disputes Table
CREATE TABLE disputes (
    id VARCHAR(50) PRIMARY KEY,
    booking_id VARCHAR(50) NOT NULL,
    customer_id VARCHAR(50) NOT NULL,
    provider_id VARCHAR(50) NOT NULL,
    reason VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    status ENUM('open', 'resolved_refunded', 'resolved_paid') DEFAULT 'open',
    resolution_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES users(id),
    FOREIGN KEY (provider_id) REFERENCES users(id)
);
`;
