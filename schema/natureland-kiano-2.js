const schemaData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.kianolandgroup.com/natureland-kiano-2#product",
  "name": "Natureland Kiano 2",
  "description": "Perumahan modern dengan sistem booking fee 1 juta di Bekasi",
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://www.kianolandgroup.com/assets/hero/background_2.jpg",
      "description": "Tampilan utama perumahan Natureland Kiano 2 dengan suasana asri dan modern."
    },
    {
      "@type": "ImageObject",
      "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Rumah-40-60.jpg",
      "description": "Rumah tipe 40/60 dengan desain minimalis dan ruang yang efisien."
    },
    {
      "@type": "ImageObject",
      "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Jalan Tol.jpg",
      "description": "Akses tol Jatiwarna yang hanya berjarak 5 menit dari perumahan."
    },
    {
      "@type": "ImageObject",
      "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Sekolah.jpg",
      "description": "Fasilitas pendidikan terdekat, termasuk SD, SMP, dan SMA Jatisampurna."
    },
    {
      "@type": "ImageObject",
      "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Mall.jpg",
      "description": "Akses Mall Transmart Cibubur yang mudah dijangkau dari perumahan."
    },
    {
      "@type": "ImageObject",
      "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Rumah Sakit.jpg",
      "description": "Akses Rumah Sakit Mitra Keluarga Cibubur untuk kebutuhan kesehatan."
    }
  ],
  "offers": {
    "@type": "AggregateOffer",
    "highPrice": "660000000",
    "lowPrice": "660000000",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/SoldOut",
    "offerCount": "0",
    "offers": [
      {
        "@type": "Offer",
        "url": "https://www.kianolandgroup.com/natureland-kiano-2/rumah-40-60",
        "name": "Rumah Tipe 40/60",
        "price": "660000000",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/SoldOut"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Budi Santoso" },
      "datePublished": "2023-05-15",
      "reviewBody": "Proses pengajuan KPR mudah dan cepat, lokasi strategis dekat tol",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "itemReviewed": {
        "@type": "Product",
        "@id": "https://www.kianolandgroup.com/natureland-kiano-2#product"
      }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ani Wijaya" },
      "datePublished": "2023-06-20",
      "reviewBody": "Kualitas bangunan bagus untuk harga segini, recommended!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5"
      },
      "itemReviewed": {
        "@type": "Product",
        "@id": "https://www.kianolandgroup.com/natureland-kiano-2#product"
      }
    }
  ],
  "brand": {
    "@type": "Brand",
    "name": "Kianoland Group",
    "logo": "https://www.kianolandgroup.com/assets/Kianoland%20Group.png"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales & Booking",
    "telephone": "+628111611724",
    "whatsapp": "https://wa.me/628111611724?text=Saya%20berminat%20booking%20di%20Natureland%20Kiano%202",
    "availableLanguage": ["Bahasa Indonesia", "English"],
    "areaServed": ["Jawa Barat", "Jatisampurna", "Bekasi"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  },
  "sku": "NLK2-4060",
  "floorSize": "40 m²",
  "numberOfRooms": "3",
  "numberOfBedrooms": "2",
  "numberOfBathroomsTotal": "1",
  "material": "Hebel Double Layer + Beton Bertulang",
  "location": {
    "@type": "Place",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.374375",
      "longitude": "106.887859"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Kp. Pondok Ranggon RT 003/RW 004",
      "addressLocality": "Jatiranggon",
      "addressRegion": "Jawa Barat",
      "postalCode": "17432"
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Bangunan",
      "value": "Dinding Double Hebel + Beton Bertulang"
    },
    {
      "@type": "PropertyValue",
      "name": "Garasi",
      "value": "Carport Luas"
    }
  ],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Akses Tol Jatiwarna",
      "value": "5 Menit via Jalan Lingkar Luar"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Pusat Kesehatan",
      "value": "RS Mitra Keluarga Cibubur (3.2 km)"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Pusat Perbelanjaan",
      "value": "Transmart Cibubur (4.5 km)"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Fasilitas Pendidikan",
      "value": "SD-SMA Jatisampurna (800 m)"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Keamanan",
      "value": "One Gate System + CCTV 24 Jam"
    }
  ],
  "containsPlace": [
    {
      "@type": "SingleFamilyResidence",
      "name": "Rumah Tipe 40/60",
      "url": "https://www.kianolandgroup.com/natureland-kiano-2/rumah-40-60",
      "availability": "https://schema.org/SoldOut",
      "inventoryLevel": {
        "@type": "QuantitativeValue",
        "value": "0"
      }
    }
  ],
  "aggregateOffer": {
    "@type": "AggregateOffer",
    "highPrice": "660000000",
    "lowPrice": "660000000",
    "priceCurrency": "IDR",
    "offers": [
      {
        "@type": "Offer",
        "url": "https://www.kianolandgroup.com/natureland-kiano-2/rumah-40-60",
        "itemOffered": {
          "@type": "SingleFamilyResidence",
          "name": "Rumah Tipe 40/60"
        },
        "priceCurrency": "IDR",
        "price": "660000000",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/SoldOut",
        "downPayment": "1000000",
        "loanTerm": "180",
        "loanTermUnit": "Bulan",
        "monthlyPayment": "4200000"
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.kianolandgroup.com/natureland-kiano-2"
  }
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);
