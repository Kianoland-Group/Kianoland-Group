const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.kianolandgroup.com/natureland-kiano-2/rumah-40-60#product",
    "name": "Rumah Tipe 40/60 Natureland Kiano 2",
    "description": "Rumah minimalis modern dengan konsep hunian nyaman di kawasan strategis Bekasi Timur",
    "category": "Rumah Subsidi Tipe 40/60",
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Rumah-40-65.jpg",
            "description": "Tampilan eksterior rumah tipe 40/60 dengan desain minimalis modern."
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Denah-40-65.jpg",
            "description": "Denah rumah tipe 40/60 dengan tata ruang yang efisien."
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Interior-40-65.jpg",
            "description": "Interior rumah tipe 40/60 dengan desain modern dan nyaman."
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Fasilitas-Kolam-Renang.jpg",
            "description": "Fasilitas kolam renang di perumahan Natureland Kiano 2."
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Fasilitas-Clubhouse.jpg",
            "description": "Clubhouse dengan fasilitas lengkap untuk kegiatan sosial dan rekreasi."
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Fasilitas-Jogging-Track.jpg",
            "description": "Jogging track yang nyaman untuk aktivitas olahraga warga."
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Fasilitas-Taman-Bermain.jpg",
            "description": "Taman bermain anak-anak di lingkungan perumahan."
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
        "telephone": "+6285282592945",
        "whatsapp": "https://wa.me/6285282592945?text=Saya%20berminat%20booking%20di%20Natureland%20Kiano%202",
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
    "numberOfRooms": "2",
    "numberOfBedrooms": "2",
    "numberOfBathroomsTotal": "1",
    "material": "Hebel Double Layer + Beton Bertulang",
    "offers": {
        "@type": "Offer",
        "url": "https://www.kianolandgroup.com/natureland-kiano-2/rumah-40-60",
        "priceCurrency": "IDR",
        "price": "465000000",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/LimitedAvailability",
        "itemCondition": "https://schema.org/NewCondition",
        "description": "Booking Fee Rp1.000.000 | Angsuran Rp4.200.000/bulan",
        "downPayment": "1000000",
        "loanTerm": "180",
        "loanTermUnit": "Bulan",
        "monthlyPayment": "4200000",
        "inventoryLevel": {
            "@type": "QuantitativeValue",
            "value": "5"
        },
        "eligibleRegion": {
            "@type": "AdministrativeArea",
            "name": "Bekasi"
        },
        "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "IDR"
            },
            "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": "P30D",
                "maxValue": "P60D",
                "description": "Proses persiapan dokumen legal dan sertifikasi: 30-60 hari setelah akad kredit disetujui"
            },
            "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "description": "Serah terima kunci dilakukan dalam 7 hari kerja setelah proses transit selesai",
                "businessDays": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
                },
                "transitTime": {
                    "@type": "QuantitativeValue",
                    "value": 7,
                    "unitCode": "DAY",
                    "minValue": 7,
                    "maxValue": 7
                },
                "handlingTime": {
                    "@type": "QuantitativeValue",
                    "value": 3,
                    "unitCode": "DAY",
                    "minValue": 3,
                    "maxValue": 3
                }
            },
            "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "ID",
                "description": "Properti siap huni di lokasi yang telah ditentukan (tidak ada pengiriman fisik)"
            }
        },
        "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "ID",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn",
            "description": "Pembatalan booking dengan pengembalian dana 100% jika gagal verifikasi KPR. Berlaku 14 hari setelah booking."
        }
    },
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
            "name": "Kolam Renang",
            "value": "Tersedia"
        },
        {
            "@type": "PropertyValue",
            "name": "Jogging Track",
            "value": "Tersedia"
        },
        {
            "@type": "PropertyValue",
            "name": "Club House",
            "value": "Tersedia"
        },
        {
            "@type": "PropertyValue",
            "name": "Luas Tanah",
            "value": "60 m²"
        },
        {
            "@type": "PropertyValue",
            "name": "Luas Bangunan",
            "value": "40 m²"
        },
        {
            "@type": "PropertyValue",
            "name": "Material Bangunan",
            "value": "Bata Merah + Beton Bertulang"
        },
        {
            "@type": "PropertyValue",
            "name": "Garasi",
            "value": "Carport untuk 1 Mobil"
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
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "45",
        "bestRating": "5",
        "worstRating": "1"
    },
    "review": [
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Budi Santoso"
            },
            "datePublished": "2023-05-15",
            "reviewBody": "Proses pengajuan KPR mudah dan cepat, lokasi strategis dekat tol",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            }
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Ani Wijaya"
            },
            "datePublished": "2023-06-20",
            "reviewBody": "Kualitas bangunan bagus untuk harga segini, recommended!",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.5",
                "bestRating": "5"
            }
        }
    ],
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://www.kianolandgroup.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Natureland Kiano 2",
                "item": "https://www.kianolandgroup.com/natureland-kiano-2"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Tipe 40/60"
            }
        ]
    },
    "containsPlace": {
        "@type": "HousingComplex",
        "name": "Natureland Kiano 2",
        "url": "https://www.kianolandgroup.com/natureland-kiano-2"
    }
};

// Sisipkan ke dalam HTML secara otomatis
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);