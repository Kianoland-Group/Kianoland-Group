const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.kianolandgroup.com/green-jonggol-village/rumah-30-60#product",
    "name": "Rumah Tipe 30/60 Green Jonggol Village",
    "description": "Rumah minimalis modern dengan konsep green living di kawasan strategis Jonggol Bogor",
    "category": "Rumah Subsidi Tipe 30/60",
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/hero/background_3.jpg",
            "description": "Tampilan eksterior rumah tipe 30/60 dengan desain minimalis modern"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/green-jonggol-village/Denah Rumah Green Jonggol Village Rumah 30-60.jpg",
            "description": "Denah resmi rumah tipe 30/60 dengan layout ruang efisien"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/fasilitas/Club House.jpg",
            "description": "Club house eksklusif dengan fasilitas lengkap"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/fasilitas/Kolam Renang.jpg",
            "description": "Kolam renang ukuran olympic di area perumahan"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Fasilitas-Jogging-Track.jpg",
            "description": "Jogging track yang nyaman untuk aktivitas olahraga warga."
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-3/Fasilitas-Taman-Bermain.jpg",
            "description": "Area bermain anak dengan perlengkapan modern"
        }
    ],
    "brand": {
        "@type": "Brand",
        "name": "Kianoland Group",
        "logo": "https://www.kianolandgroup.com/assets/Green Jonggol Village.png"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales & Booking",
        "telephone": "+6282118378460",
        "whatsapp": "https://wa.me/6282118378460?text=Saya%20berminat%20booking%20di%20Green%20Jonggol%20Village",
        "availableLanguage": ["Bahasa Indonesia", "English"],
        "areaServed": ["Jawa Barat", "Jonggol"],
        "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "17:00"
        }
    },
    "sku": "GJV-3060",
    "floorSize": "60 m²",
    "numberOfRooms": "3",
    "numberOfBedrooms": "2",
    "numberOfBathroomsTotal": "1",
    "material": "Hebel Double Layer + Beton Bertulang",
    "offers": {
        "@type": "Offer",
        "url": "https://www.kianolandgroup.com/green-jonggol-village/rumah-30-60",
        "priceCurrency": "IDR",
        "price": "465000000",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "description": "Gratis DP | Angsuran Rp4.500.000/bulan",
        "downPayment": "0",
        "loanTerm": "180",
        "loanTermUnit": "Bulan",
        "monthlyPayment": "4500000",
        "inventoryLevel": {
            "@type": "QuantitativeValue",
            "value": "15"
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
                "description": "Proses sertifikasi SHM: 30-60 hari kerja"
            },
            "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "description": "Serah terima kunci dalam 7 hari kerja",
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
            "latitude": "-6.465025",
            "longitude": "107.063148"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Kp. Pojok Salak RT 004/RW 008",
            "addressLocality": "Jonggol",
            "addressRegion": "Jawa Barat",
            "postalCode": "16830"
        }
    },
    "additionalProperty": [
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
            "name": "Smart Door System",
            "value": "Fingerprint & PIN Code"
        },
        {
            "@type": "PropertyValue",
            "name": "Luas Tanah",
            "value": "60 m²"
        },
        {
            "@type": "PropertyValue",
            "name": "Material Atap",
            "value": "Genteng Beton"
        },
        {
            "@type": "PropertyValue",
            "name": "Carport",
            "value": "Untuk 1 Mobil"
        }
    ],
    "amenityFeature": [
        {
            "@type": "LocationFeatureSpecification",
            "name": "Fasilitas Pendidikan",
            "value": "SDN Jonggol 03 (800 m)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Rumah Sakit",
            "value": "RS Permata Jonggol (2.5 km)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Pusat Perbelanjaan",
            "value": "Pasar Nasional Jonggol (1.2 km)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Taman Kota",
            "value": "Alun-Alun Jonggol (800 m)"
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
                "name": "Dian Surya"
            },
            "datePublished": "2023-12-05",
            "reviewBody": "Lingkungan asri dan sistem keamanan 24 jam membuat keluarga merasa nyaman",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
            }
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Rudi Hermawan"
            },
            "datePublished": "2024-02-15",
            "reviewBody": "Proses KPR mudah dan transparan, lokasi strategis dekat fasilitas umum",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.7",
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
                "name": "Green Jonggol Village",
                "item": "https://www.kianolandgroup.com/green-jonggol-village"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Tipe 30/60"
            }
        ]
    },
    "containsPlace": {
        "@type": "HousingComplex",
        "name": "Green Jonggol Village",
        "url": "https://www.kianolandgroup.com/green-jonggol-village"
    }
};

// Sisipkan ke dalam HTML secara otomatis
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);