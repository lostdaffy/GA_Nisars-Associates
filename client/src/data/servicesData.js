// ─── servicesData.js ────────────────────────────────────────────────────────
// Central data file for all service categories.
// Each service has: slug, category, emoji, image, tagline, desc,
//                   items (with sub-details), process steps, faqs, cta.
// ─────────────────────────────────────────────────────────────────────────────

export const servicesData = [
  {
    slug: "company-registration",
    category: "Company Registration",
    emoji: "🏢",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    tagline: "Start Your Business the Right Way",
    desc:
      "We help entrepreneurs, startups, and professionals register their business legally and efficiently. From Pvt Ltd to NGOs, we handle all paperwork, government filings, and compliance so you can focus on growing.",
    items: [
      {
        name: "Private Limited Company (Pvt Ltd)",
        detail:
          "Most preferred structure for startups. Limited liability, separate legal entity, easy fundraising. Requires min. 2 directors & 2 shareholders.",
      },
      {
        name: "Limited Liability Partnership (LLP)",
        detail:
          "Combines benefits of partnership and company. Ideal for professionals and small businesses. Min. 2 designated partners required.",
      },
      {
        name: "One Person Company (OPC)",
        detail:
          "Perfect for solo entrepreneurs wanting limited liability. Only 1 director and 1 shareholder needed.",
      },
      {
        name: "Partnership Firm",
        detail:
          "Simple structure for 2+ partners. Governed by a Partnership Deed. Easy to form with minimal compliance.",
      },
      {
        name: "Micro Finance Company",
        detail:
          "For lending small amounts to low-income groups. Requires RBI registration and specific capital requirements.",
      },
      {
        name: "Nidhi Company",
        detail:
          "Mutual benefit finance company. Encourages savings among members. Min. 200 members required within 1 year.",
      },
    ],
    process: [
      { step: "01", title: "Consultation", desc: "Understand your business needs and suggest the best structure." },
      { step: "02", title: "Document Collection", desc: "Collect all required KYC and business documents." },
      { step: "03", title: "Name Approval", desc: "Apply for unique company name with MCA / ROC." },
      { step: "04", title: "Filing & Registration", desc: "File SPICe+, MOA, AOA and all government forms." },
      { step: "05", title: "Certificate Issued", desc: "Receive Certificate of Incorporation from MCA." },
    ],
    faqs: [
      { q: "How long does Pvt Ltd registration take?", a: "Typically 7–10 working days after all documents are submitted." },
      { q: "What is the minimum capital required?", a: "There is no minimum paid-up capital requirement for Pvt Ltd companies." },
      { q: "Can NRIs register a company in India?", a: "Yes, NRIs and foreign nationals can be directors/shareholders with proper documentation." },
      { q: "Do I need a physical office address?", a: "Yes, a registered office address in India is mandatory for all company registrations." },
    ],
    cta: "Register Your Company Today",
  },

  {
    slug: "gst-compliance",
    category: "GST & Compliance",
    emoji: "📋",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
    tagline: "Stay Compliant, Stay Ahead",
    desc:
      "GST registration, MSME certification, GEM portal, FSSAI, and more — we make sure your business ticks every compliance checkbox. Avoid penalties with our expert-guided services.",
    items: [
      {
        name: "GST Registration",
        detail:
          "Mandatory for businesses with turnover above ₹20 lakhs (₹10 lakhs for NE states). We handle end-to-end GST registration.",
      },
      {
        name: "MSME Registration",
        detail:
          "Get your Udyam Registration Certificate. Unlock government benefits, subsidies, and priority lending.",
      },
      {
        name: "GEM Registration (Gem Certn.)",
        detail:
          "Register on Government e-Marketplace to sell products/services directly to government departments.",
      },
      {
        name: "Logo Design",
        detail:
          "Professional logo creation aligned with your brand identity.",
      },
      {
        name: "Unique Name Registration",
        detail:
          "Reserve your business/brand name officially with the concerned authority.",
      },
      {
        name: "FSSAI Certification",
        detail:
          "Mandatory food safety licence for all food businesses. We handle basic, state, and central licences.",
      },
    ],
    process: [
      { step: "01", title: "Eligibility Check", desc: "Verify turnover, business type, and applicable GST category." },
      { step: "02", title: "Document Prep", desc: "PAN, Aadhaar, bank details, address proof, photos." },
      { step: "03", title: "GST Portal Filing", desc: "File application on GST portal with all details." },
      { step: "04", title: "ARN Generated", desc: "Application Reference Number issued immediately." },
      { step: "05", title: "GSTIN Issued", desc: "15-digit GST Identification Number issued within 3–7 days." },
    ],
    faqs: [
      { q: "Is GST registration mandatory?", a: "Yes, if your annual turnover exceeds ₹20 lakhs (goods) or ₹20 lakhs (services). Composition scheme available for small businesses." },
      { q: "What is the penalty for not registering?", a: "10% of the tax amount or ₹10,000, whichever is higher. For fraud: 100% penalty." },
      { q: "What is MSME / Udyam registration?", a: "A government registration for small businesses. Provides access to loans, subsidies, tenders, and priority sector benefits." },
      { q: "How long does GST registration take?", a: "Usually 3–7 working days after document submission." },
    ],
    cta: "Get GST Registered Now",
  },

  {
    slug: "ip-india-trademark",
    category: "IP India & Trademark",
    emoji: "™️",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
    tagline: "Protect Your Brand Identity",
    desc:
      "Your brand is your most valuable asset. We help you register trademarks, logos, copyrights, and patents with the IP India office, ensuring your intellectual property is legally protected.",
    items: [
      {
        name: "Trade Mark Registration",
        detail:
          "Protect your brand name and logo under the Trade Marks Act. Get the ™ symbol legally.",
      },
      {
        name: "Logo Registration",
        detail:
          "Register your logo as a trademark to prevent unauthorized use by competitors.",
      },
      {
        name: "Copyright Registration",
        detail:
          "Protect creative works — books, music, software, artwork — under the Copyright Act, 1957.",
      },
      {
        name: "Logo Artist / Work of Patent",
        detail:
          "Patent your innovative product or process. Protect your invention for 20 years.",
      },
      {
        name: "Trademark Objection Reply",
        detail:
          "Expert response to trademark examination reports and objections.",
      },
      {
        name: "Trademark Renewal",
        detail:
          "Renew your trademark registration every 10 years to maintain protection.",
      },
    ],
    process: [
      { step: "01", title: "Trademark Search", desc: "Search existing marks to ensure your name/logo is unique." },
      { step: "02", title: "Class Selection", desc: "Identify the right class (1–45) for your goods/services." },
      { step: "03", title: "Application Filing", desc: "File TM-A application with IP India office." },
      { step: "04", title: "Examination", desc: "IP India examines and may raise objections." },
      { step: "05", title: "Publication & Registration", desc: "Published in Trademark Journal. Registration certificate issued after 4 months." },
    ],
    faqs: [
      { q: "How long does trademark registration take?", a: "Initial filing is immediate. Full registration takes 18–24 months. You get TM symbol right after filing." },
      { q: "What is the difference between TM and ®?", a: "TM indicates pending registration. ® can only be used after full registration is complete." },
      { q: "How long is a trademark valid?", a: "10 years from the date of filing, renewable indefinitely every 10 years." },
      { q: "Can I trademark a slogan?", a: "Yes, slogans can be trademarked if they are distinctive and not generic." },
    ],
    cta: "Protect Your Brand Now",
  },

  {
    slug: "digital-signature",
    category: "Digital Signature",
    emoji: "✍️",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=900&q=80",
    tagline: "Sign Digitally, Work Faster",
    desc:
      "Digital Signatures (DSC) are legally valid electronic signatures required for MCA filings, GST, income tax, tenders, and more. We provide all classes of DSC quickly and affordably.",
    items: [
      {
        name: "Digital Signature Certificate (DSC)",
        detail:
          "Legally valid electronic signature for government portals, company filings, and secure document signing.",
      },
      {
        name: "All Class Registration",
        detail:
          "We process all DSC classes — individual, organization, and document signer certificates.",
      },
      {
        name: "GST Registration",
        detail:
          "GST registration bundled with DSC for seamless compliance setup.",
      },
      {
        name: "MSME Registration",
        detail:
          "Udyam registration for small businesses to avail government benefits.",
      },
      {
        name: "EPFO Registration",
        detail:
          "Provident Fund registration for establishments with 20+ employees.",
      },
      {
        name: "ESI Registration",
        detail:
          "Employees' State Insurance registration for establishments with 10+ employees.",
      },
      {
        name: "Shop & Establishment",
        detail:
          "Mandatory registration for all shops and commercial establishments under the local municipal authority.",
      },
    ],
    process: [
      { step: "01", title: "Choose Class", desc: "Select DSC class based on your intended use." },
      { step: "02", title: "Submit Documents", desc: "PAN, Aadhaar, photo, and mobile/email for OTP verification." },
      { step: "03", title: "Video KYC", desc: "Quick video verification for Class 3 DSC." },
      { step: "04", title: "DSC Issued", desc: "Receive DSC on secure USB token within 1–2 days." },
    ],
    faqs: [
      { q: "What is a Digital Signature Certificate?", a: "A DSC is an electronic equivalent of a physical signature, issued by a Certifying Authority (CA) licensed by the Government of India." },
      { q: "Which DSC class do I need?", a: "Class 3 is required for most government portals including MCA, GST, Income Tax, and e-Tendering." },
      { q: "How long is a DSC valid?", a: "DSCs are typically valid for 1 or 2 years and can be renewed before expiry." },
      { q: "Can I use one DSC for multiple portals?", a: "Yes, a single Class 3 DSC can be used across most government portals." },
    ],
    cta: "Get Your Digital Signature",
  },

  {
    slug: "labour-licence",
    category: "Labour & Licence",
    emoji: "👷",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    tagline: "Full Labour Law Compliance",
    desc:
      "Stay legally compliant with all labour laws. We handle Shop & Establishment registration, ESI, EPFO, and labour licences for businesses of all sizes.",
    items: [
      {
        name: "Shop & Establishment Registration",
        detail:
          "Mandatory for all shops, commercial establishments, hotels, restaurants, and offices. Issued by local municipal authority.",
      },
      {
        name: "ESI Registration (ESIC)",
        detail:
          "Employees' State Insurance registration mandatory for establishments with 10+ employees. Provides medical benefits.",
      },
      {
        name: "EPFO Registration",
        detail:
          "Employee Provident Fund registration mandatory for 20+ employees. Ensures retirement benefits.",
      },
      {
        name: "Labour Licence",
        detail:
          "Required for contractors and construction firms employing 20+ workmen.",
      },
      {
        name: "GST Registration",
        detail:
          "GST compliance for your business as applicable.",
      },
      {
        name: "MSME Registration",
        detail:
          "Udyam registration for small businesses to avail government benefits.",
      },
    ],
    process: [
      { step: "01", title: "Business Assessment", desc: "Review employee count, business type, and applicable laws." },
      { step: "02", title: "Document Collection", desc: "Business registration, employee list, address proof, PAN." },
      { step: "03", title: "Portal Filing", desc: "File applications on respective government portals." },
      { step: "04", title: "Inspection (if any)", desc: "Facilitate any required government inspection." },
      { step: "05", title: "Licence Issued", desc: "Receive all licences and registration certificates." },
    ],
    faqs: [
      { q: "Is Shop & Establishment registration mandatory?", a: "Yes, it is mandatory for all commercial establishments within 30 days of starting operations." },
      { q: "When is ESIC registration required?", a: "When your establishment has 10 or more employees (in most states)." },
      { q: "When is EPFO registration mandatory?", a: "When you have 20 or more employees. Voluntary registration is allowed for smaller businesses." },
      { q: "What is the penalty for non-compliance?", a: "Penalties range from fines to imprisonment depending on the specific labour law violated." },
    ],
    cta: "Get Labour Compliance Done",
  },

  {
    slug: "legal-tax",
    category: "Legal & Tax",
    emoji: "⚖️",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=900&q=80",
    tagline: "Expert Legal & Tax Solutions",
    desc:
      "Comprehensive legal and tax services including drug licences, income tax notices, land mutation, property registry, legal metrology, and export/import compliance — all under one roof.",
    items: [
      {
        name: "Drug Licence",
        detail:
          "Wholesale and retail drug licence for pharmacies and pharmaceutical distributors.",
      },
      {
        name: "Legal Metrology",
        detail:
          "Registration for businesses dealing in weights, measures, and packaged goods under the Legal Metrology Act.",
      },
      {
        name: "Income Tax Notice (Section 143)",
        detail:
          "Expert assistance in handling Income Tax notices under Section 143(1) and 143(3).",
      },
      {
        name: "Land Mutation",
        detail:
          "Land/property mutation in government records after purchase or inheritance.",
      },
      {
        name: "Property Registry",
        detail:
          "Property registry and deed registration assistance.",
      },
      {
        name: "Land Permission",
        detail:
          "Land use change, conversion, and related permissions from competent authorities.",
      },
      {
        name: "Agriculture Land",
        detail:
          "Legal assistance for agricultural land transactions and conversions.",
      },
      {
        name: "Commercial Land",
        detail:
          "Commercial land purchase, sale, and legal compliance.",
      },
      {
        name: "Export / Import (IEC)",
        detail:
          "Import Export Code registration, export documentation, and trade compliance via DGFT.",
      },
      {
        name: "GST Registration",
        detail:
          "GST registration and compliance for businesses.",
      },
      {
        name: "MSME Registration",
        detail:
          "Udyam registration for small businesses.",
      },
      {
        name: "Logo Design",
        detail:
          "Professional logo design for your business brand.",
      },
    ],
    process: [
      { step: "01", title: "Case Assessment", desc: "Understand your specific legal or tax requirement." },
      { step: "02", title: "Document Review", desc: "Review all existing documents and identify gaps." },
      { step: "03", title: "Filing & Application", desc: "File applications with the concerned authority." },
      { step: "04", title: "Follow-up", desc: "Regular follow-ups with government departments." },
      { step: "05", title: "Resolution", desc: "Complete the process and hand over final documents." },
    ],
    faqs: [
      { q: "What is IEC code?", a: "Import Export Code is a 10-digit code issued by DGFT. Mandatory for all import/export businesses." },
      { q: "What is Drug Licence?", a: "A mandatory licence for anyone dealing in sale, storage, or distribution of drugs and pharmaceuticals." },
      { q: "What is Land Mutation?", a: "Transfer of property ownership in municipal/revenue records after a sale or inheritance." },
      { q: "How to respond to Income Tax notice u/s 143?", a: "Our tax experts will analyze the notice and file an appropriate response within the given deadline." },
    ],
    cta: "Get Expert Legal Help",
  },

  {
    slug: "security-agency",
    category: "Security Agency",
    emoji: "🛡️",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=900&q=80",
    tagline: "Complete Security Agency Setup",
    desc:
      "Start and run a legally compliant security agency with PSARA licence, MOA drafting, labour registrations, and all related compliance services.",
    items: [
      {
        name: "PSARA Licence",
        detail:
          "Private Security Agencies Regulation Act licence — mandatory to run a security agency in India.",
      },
      {
        name: "MOA Drafting",
        detail:
          "Memorandum of Association drafting for the security agency company.",
      },
      {
        name: "MSME Registration",
        detail:
          "MSME registration to access government schemes and benefits.",
      },
      {
        name: "GST Registration",
        detail:
          "GST compliance for security services.",
      },
      {
        name: "Logo Design",
        detail:
          "Professional logo for your security agency brand identity.",
      },
      {
        name: "ESI Registration",
        detail:
          "Employees' State Insurance for security personnel.",
      },
      {
        name: "EPFO Registration",
        detail:
          "Provident Fund registration for security staff.",
      },
    ],
    process: [
      { step: "01", title: "Eligibility Check", desc: "Verify promoter background check requirements for PSARA." },
      { step: "02", title: "Company Setup", desc: "Register security agency as Pvt Ltd / LLP / Proprietorship." },
      { step: "03", title: "PSARA Application", desc: "File PSARA application with state controlling authority." },
      { step: "04", title: "Training Affiliation", desc: "Arrange affiliation with a PSARA-approved training institute." },
      { step: "05", title: "Licence Granted", desc: "Receive PSARA licence valid for 5 years." },
    ],
    faqs: [
      { q: "What is PSARA licence?", a: "PSARA stands for Private Security Agencies Regulation Act, 2005. Any security agency in India must have this licence." },
      { q: "Is PSARA a central or state licence?", a: "PSARA is a state-level licence. You need a separate licence for each state you operate in." },
      { q: "What is the validity of PSARA licence?", a: "5 years. Renewal must be done before expiry." },
      { q: "Is background check mandatory?", a: "Yes, all promoters and security personnel must undergo police verification." },
    ],
    cta: "Start Your Security Agency",
  },

  {
    slug: "fire-services",
    category: "Fire Services",
    emoji: "🔥",
    image: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?w=900&q=80",
    tagline: "Fire Safety & NOC Compliance",
    desc:
      "Obtain Fire NOC, fire service registration, and all fire safety licences required for your commercial establishment, factory, or residential society.",
    items: [
      {
        name: "Fire Services Registration",
        detail:
          "Registration of fire safety service providers with the fire department.",
      },
      {
        name: "Fire NOC",
        detail:
          "No Objection Certificate from the fire department — mandatory for malls, hospitals, hotels, factories, and high-rise buildings.",
      },
      {
        name: "Fire Licence",
        detail:
          "Licence for businesses dealing in fire safety equipment and services.",
      },
      {
        name: "Fire NOC Renewal",
        detail:
          "Timely renewal of expiring Fire NOC to avoid penalties and shutdown notices.",
      },
      {
        name: "Removal of Fire NOC Issues",
        detail:
          "Assistance in resolving objections and rectifying non-compliances raised by fire department.",
      },
      {
        name: "GST Registration",
        detail:
          "GST registration for fire safety businesses.",
      },
      {
        name: "MSME Registration",
        detail:
          "Udyam registration for fire safety SMEs.",
      },
    ],
    process: [
      { step: "01", title: "Site Assessment", desc: "Assess building layout and fire safety requirements." },
      { step: "02", title: "Document Preparation", desc: "Building plan, occupancy certificate, fire equipment details." },
      { step: "03", title: "Application Filing", desc: "Submit Fire NOC application to local fire department." },
      { step: "04", title: "Inspection", desc: "Fire department conducts site inspection." },
      { step: "05", title: "NOC Issued", desc: "Fire NOC granted after successful inspection." },
    ],
    faqs: [
      { q: "Who needs a Fire NOC?", a: "All commercial buildings, malls, hotels, hospitals, factories, high-rises, and educational institutes." },
      { q: "How long is a Fire NOC valid?", a: "Typically 1 year. Renewal is required annually." },
      { q: "What happens without a Fire NOC?", a: "Authorities can seal the premises, impose heavy fines, or even pursue criminal action." },
      { q: "What documents are needed?", a: "Building plan approval, completion certificate, fire equipment installation certificate, and ownership proof." },
    ],
    cta: "Get Fire NOC Now",
  },

  {
    slug: "ngo-society",
    category: "NGO & Society",
    emoji: "🤝",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80",
    tagline: "Empowering Social Impact Organizations",
    desc:
      "Register your NGO, Trust, or Society and unlock tax exemptions, government grants, CSR funding, and NITI Aayog empanelment. We handle everything from registration to compliance.",
    items: [
      {
        name: "NGO Registration (Trust / Society)",
        detail:
          "Register your NGO as a Trust under Indian Trusts Act or Society under Societies Registration Act, 1860.",
      },
      {
        name: "NGO Profile Creation",
        detail:
          "Prepare a professional NGO profile for donor outreach and grant applications.",
      },
      {
        name: "Website & Audit Report",
        detail:
          "NGO website creation and annual audit report preparation.",
      },
      {
        name: "12A & 80G Registration",
        detail:
          "12A gives income tax exemption to NGO. 80G allows donors to claim tax deduction. Essential for fundraising.",
      },
      {
        name: "Section-8 Company",
        detail:
          "Non-profit company structure with company benefits. Ideal for large-scale social organizations.",
      },
      {
        name: "NITI Aayog / Darpan Registration (ESK 2)",
        detail:
          "Mandatory for NGOs seeking government grants and CSR funds.",
      },
      {
        name: "E-Anudan Registration",
        detail:
          "Registration on E-Anudan portal for central government grant applications.",
      },
      {
        name: "MSME & GST Registration",
        detail:
          "MSME and GST registration for NGO's commercial and fund-related activities.",
      },
    ],
    process: [
      { step: "01", title: "Objective Clarity", desc: "Define NGO objectives, activities, and target beneficiaries." },
      { step: "02", title: "Structure Selection", desc: "Choose between Trust, Society, or Section-8 Company." },
      { step: "03", title: "Document Drafting", desc: "Trust Deed / MOA / AOA drafting with objectives and rules." },
      { step: "04", title: "Registration", desc: "Register with Sub-Registrar (Trust) or Registrar of Societies." },
      { step: "05", title: "Tax & Grant Setup", desc: "Apply for 12A, 80G, PAN, FCRA, Darpan, and bank account." },
    ],
    faqs: [
      { q: "What is the difference between Trust, Society, and Section-8?", a: "Trust is simplest to form. Society requires 7+ members. Section-8 is a non-profit company with more credibility." },
      { q: "What is 12A and 80G?", a: "12A exempts NGO income from tax. 80G allows donors to deduct donations from their taxable income — makes fundraising easier." },
      { q: "What is NITI Aayog Darpan?", a: "A government portal for NGO registration. Mandatory for receiving government grants and CSR funds." },
      { q: "Can an NGO earn revenue?", a: "Yes, NGOs can earn revenue through services, but surplus must be used for stated objectives only." },
    ],
    cta: "Register Your NGO Today",
  },

  {
    slug: "real-estate-rera",
    category: "Real Estate & RERA",
    emoji: "🏠",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
    tagline: "Property & Real Estate Compliance",
    desc:
      "RERA registration, trade licences, property mutation, registry, and all real estate legal compliance for builders, agents, and property buyers in Uttarakhand and nearby regions.",
    items: [
      {
        name: "RERA Registration",
        detail:
          "Mandatory registration for real estate projects and agents under Real Estate (Regulation & Development) Act, 2016.",
      },
      {
        name: "GST for Real Estate",
        detail:
          "GST compliance for under-construction property sales and real estate businesses.",
      },
      {
        name: "MSME Registration",
        detail:
          "MSME for real estate and construction SMEs.",
      },
      {
        name: "Trade Licence",
        detail:
          "Municipal trade licence for real estate offices and agencies.",
      },
      {
        name: "NOC Services",
        detail:
          "Various NOCs required for construction and real estate projects.",
      },
      {
        name: "Logo Design",
        detail:
          "Brand identity for real estate companies and projects.",
      },
      {
        name: "Website",
        detail:
          "Real estate website with property listings and inquiry forms.",
      },
    ],
    process: [
      { step: "01", title: "Project Review", desc: "Review project details, area, and applicable RERA state rules." },
      { step: "02", title: "Document Preparation", desc: "Land title, approvals, layout plan, financials." },
      { step: "03", title: "RERA Filing", desc: "File application on state RERA portal." },
      { step: "04", title: "Scrutiny", desc: "RERA authority reviews application and may raise queries." },
      { step: "05", title: "Registration Number", desc: "Receive RERA registration number for project/agent." },
    ],
    faqs: [
      { q: "Who needs RERA registration?", a: "All residential and commercial projects above 500 sq mt or 8 apartments. All real estate agents also need RERA registration." },
      { q: "What is the penalty for non-RERA compliance?", a: "Up to 10% of project cost for builders. Up to 5% for agents." },
      { q: "Is RERA applicable in Uttarakhand?", a: "Yes, Uttarakhand RERA (UKRERA) is fully operational." },
      { q: "Can a buyer file complaint against builder?", a: "Yes, buyers can file complaints against unregistered or non-compliant builders on the RERA portal." },
    ],
    cta: "Get RERA Registered",
  },

  {
    slug: "advisor-consultancy",
    category: "Advisor / Consultancy",
    emoji: "💼",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80",
    tagline: "Strategic Business Guidance",
    desc:
      "Expert business advisory and consultancy services for startups, MSMEs, and established enterprises — especially in Uttarakhand. We provide end-to-end guidance on legal, tax, property, and business strategy.",
    items: [
      {
        name: "Business Advisory",
        detail:
          "Strategic guidance on business setup, growth, diversification, and restructuring.",
      },
      {
        name: "Income Tax Consultancy (Section 143)",
        detail:
          "Income Tax advisory, notice handling (Section 143), returns, and tax planning.",
      },
      {
        name: "Land Mutation Assistance",
        detail:
          "Expert guidance on land/property mutation in revenue records.",
      },
      {
        name: "Property Registry Support",
        detail:
          "Property registration guidance and documentation support.",
      },
      {
        name: "Land Permission",
        detail:
          "Assistance in obtaining land-use permissions from competent authorities.",
      },
      {
        name: "Agriculture Land Advisory",
        detail:
          "Legal guidance on buying, selling, and converting agricultural land.",
      },
      {
        name: "Commercial Land Advisory",
        detail:
          "Advisory for commercial land acquisition and compliance in Uttarakhand.",
      },
      {
        name: "Export / Import Consultancy",
        detail:
          "IEC, export documentation, DGFT matters, and international trade advisory.",
      },
    ],
    process: [
      { step: "01", title: "Initial Meeting", desc: "Understand your business goals, challenges, and requirements." },
      { step: "02", title: "Analysis", desc: "Deep dive into your legal, tax, and business situation." },
      { step: "03", title: "Strategy Plan", desc: "Prepare a customized action plan and roadmap." },
      { step: "04", title: "Execution", desc: "Implement the plan with filings, applications, and negotiations." },
      { step: "05", title: "Ongoing Support", desc: "Continuous advisory and compliance monitoring." },
    ],
    faqs: [
      { q: "Do you provide services across Uttarakhand?", a: "Yes, we provide services across all districts of Uttarakhand including Dehradun, Haridwar, Nainital, and more." },
      { q: "Can you help with business expansion?", a: "Absolutely. We advise on new branch registration, compliance, and growth strategies." },
      { q: "Do you handle Income Tax disputes?", a: "Yes, we handle IT notices, assessments, appeals, and represent clients before tax authorities." },
      { q: "What industries do you serve?", a: "We serve all industries — manufacturing, trading, services, real estate, healthcare, hospitality, and more." },
    ],
    cta: "Book a Free Consultation",
  },

  {
    slug: "website-ecommerce",
    category: "Website & E-Commerce",
    emoji: "🌐",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    tagline: "Your Digital Presence, Built Right",
    desc:
      "Professional website development, e-commerce stores, and mobile app development. Whether you are a startup or an established business, we build your online presence from scratch.",
    items: [
      {
        name: "Basic Website",
        detail:
          "Informational website for businesses — up to 5 pages. Clean design, mobile responsive, fast loading.",
      },
      {
        name: "E-Commerce Website",
        detail:
          "Full online store with product catalog, cart, payment gateway, and order management.",
      },
      {
        name: "Professional Website",
        detail:
          "Advanced multi-page website with custom features, CMS, and SEO optimization.",
      },
      {
        name: "App Development",
        detail:
          "Android and iOS mobile app development for business operations and customer engagement.",
      },
      {
        name: "Business Emails",
        detail:
          "Professional email IDs on your domain (yourname@yourcompany.com).",
      },
    ],
    process: [
      { step: "01", title: "Requirement Gathering", desc: "Understand your business, target audience, and website goals." },
      { step: "02", title: "Design Mockup", desc: "Create wireframes and visual design prototypes for approval." },
      { step: "03", title: "Development", desc: "Build the website with all features and content integration." },
      { step: "04", title: "Testing", desc: "Test on all devices and browsers. Fix bugs and optimize speed." },
      { step: "05", title: "Launch & Handover", desc: "Deploy live website and hand over admin access with training." },
    ],
    faqs: [
      { q: "How long does website development take?", a: "Basic websites: 5–7 days. E-commerce: 15–30 days. Custom apps: 30–60 days." },
      { q: "Will my website be mobile friendly?", a: "Yes, all our websites are fully responsive and mobile-optimized." },
      { q: "Do you provide website maintenance?", a: "Yes, we offer annual maintenance packages including updates, security, and backups." },
      { q: "Can you redesign my existing website?", a: "Absolutely. We assess your current website and redesign it with modern standards." },
    ],
    cta: "Start Your Website Project",
  },

  {
    slug: "design-marketing",
    category: "Design & Marketing",
    emoji: "🎨",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
    tagline: "Creative Design That Converts",
    desc:
      "From logo design to social media management and promotional videos — our creative team helps your brand stand out and attract customers across all platforms.",
    items: [
      {
        name: "Graphic Design",
        detail:
          "Professional graphic design for all your marketing materials — banners, brochures, flex, standees.",
      },
      {
        name: "Logo Design",
        detail:
          "Unique, memorable logo that represents your brand identity. Multiple concepts, unlimited revisions.",
      },
      {
        name: "Catalogue Design",
        detail:
          "Product and service catalogues designed for print and digital distribution.",
      },
      {
        name: "Social Media Management",
        detail:
          "Regular posts, reels, and stories for Instagram, Facebook, and LinkedIn.",
      },
      {
        name: "Promotional Video",
        detail:
          "Short promotional videos for products, services, and brand awareness.",
      },
      {
        name: "Poster / Video Design",
        detail:
          "Event posters, offer posters, and video graphics for digital marketing.",
      },
    ],
    process: [
      { step: "01", title: "Brand Brief", desc: "Understand your brand, target audience, and design preferences." },
      { step: "02", title: "Concept Development", desc: "Create initial design concepts and ideas for review." },
      { step: "03", title: "Design Presentation", desc: "Present designs with rationale. Gather your feedback." },
      { step: "04", title: "Revisions", desc: "Refine designs based on feedback until you are fully satisfied." },
      { step: "05", title: "Final Delivery", desc: "Deliver final files in all required formats (PNG, PDF, AI, MP4)." },
    ],
    faqs: [
      { q: "How many logo concepts will I get?", a: "We provide 3 initial concepts. Further revisions are done on your preferred concept." },
      { q: "What files will I receive for my logo?", a: "PNG, JPG, PDF, SVG, and AI files in high resolution for both print and digital use." },
      { q: "Do you manage social media accounts?", a: "Yes, we offer monthly social media management packages with content creation and posting." },
      { q: "How long does logo design take?", a: "Initial concepts in 3–5 days. Final delivery within 7–10 days depending on revisions." },
    ],
    cta: "Start Your Design Project",
  },
];

export default servicesData;