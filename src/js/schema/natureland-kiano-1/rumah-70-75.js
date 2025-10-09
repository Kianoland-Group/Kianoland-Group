const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.kianolandgroup.com/natureland-kiano-1/rumah-70-75#product",
    "name": "Rumah Tipe 70/75 Natureland Kiano 1",
    "description": "Rumah subsidi dengan konsep hunian modern di kawasan strategis Bogor Timur",
    "category": "Rumah Subsidi Tipe 70/75",
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/Cibarusah.jpeg",
            "description": "Tampilan eksterior rumah tipe 70/75 dengan desain modern minimalis"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/Denah-70-75.jpg",
            "description": "Denah rumah tipe 70/75 dengan tata ruang optimal"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/Interior-70-75.jpg",
            "description": "Interior rumah tipe 70/75 dengan finishing premium"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Fasilitas-Kolam-Renang.jpg",
            "description": "Fasilitas kolam renang di perumahan Natureland Kiano 1."
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
        "whatsapp": "https://wa.me/6285282592945?text=Saya%20berminat%20booking%20di%20Natureland%20Kiano%201",
        "availableLanguage": ["Bahasa Indonesia", "English"],
        "areaServed": ["Jawa Barat", "Cileungsi", "Bogor"],
        "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "17:00"
        }
    },
    "sku": "NLK1-7075",
    "floorSize": "70 m²",
    "numberOfRooms": "3",
    "numberOfBedrooms": "2",
    "numberOfBathroomsTotal": "1",
    "material": "Bata Merah + Beton Bertulang",
    "offers": {
        "@type": "Offer",
        "url": "https://www.kianolandgroup.com/natureland-kiano-1/rumah-70-75",
        "priceCurrency": "IDR",
        "price": "465000000",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/LimitedAvailability",
        "itemCondition": "https://schema.org/NewCondition",
        "description": "Booking Fee Rp1.000.000 | Angsuran Rp1.800.000/bulan",
        "downPayment": "1000000",
        "loanTerm": "240",
        "loanTermUnit": "Bulan",
        "monthlyPayment": "1800000",
        "inventoryLevel": {
            "@type": "QuantitativeValue",
            "value": "3"
        },
        "eligibleRegion": {
            "@type": "AdministrativeArea",
            "name": "Bogor"
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
            "latitude": "-6.428022",
            "longitude": "106.971624"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Kp. Tegal No. 03, RT 002/RW 01",
            "addressLocality": "Jatisari",
            "addressRegion": "Jawa Barat",
            "postalCode": "16820"
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
            "value": "1.2 km"
        },
        {
            "@type": "PropertyValue",
            "name": "Club House",
            "value": "Tersedia"
        },
        {
            "@type": "PropertyValue",
            "name": "Taman Bermain",
            "value": "Tersedia"
        },
        {
            "@type": "PropertyValue",
            "name": "Luas Tanah",
            "value": "75 m²"
        },
        {
            "@type": "PropertyValue",
            "name": "Luas Bangunan",
            "value": "70 m²"
        },
        {
            "@type": "PropertyValue",
            "name": "Garasi",
            "value": "Carport untuk 2 Mobil"
        }
    ],
    "amenityFeature": [
        {
            "@type": "LocationFeatureSpecification",
            "name": "Akses Tol Cileungsi",
            "value": "5 Menit via Jalan Lingkar Luar"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Rumah Sakit",
            "value": "RSUD Cileungsi (3 km)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Pasar",
            "value": "Pasar Gandoang (2 km)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Sekolah",
            "value": "SDN Jatisari 1 (500 m)"
        }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "32",
        "bestRating": "5",
        "worstRating": "1"
    },
    "review": [
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Dewi Kusuma"
            },
            "datePublished": "2023-07-10",
            "reviewBody": "Proses transaksi mudah dan transparan, lokasi sangat strategis",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
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
                "name": "Natureland Kiano 1",
                "item": "https://www.kianolandgroup.com/natureland-kiano-1"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Tipe 70/75"
            }
        ]
    },
    "containsPlace": {
        "@type": "HousingComplex",
        "name": "Natureland Kiano 1",
        "url": "https://www.kianolandgroup.com/natureland-kiano-1"
    }
};
  
// Sisipkan ke dalam HTML secara otomatis
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);
