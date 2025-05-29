// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // ترجمه‌های انگلیسی
// const enTranslations = {
//   home: 'Home',
//   about: 'About Us',
//   contact: 'Contact Us',
//   schedule: 'Bus Schedule',
//   login: 'Login',
//   logout: 'Logout',
//   profile: 'Profile',
//   // ... سایر ترجمه‌ها
// };

// // ترجمه‌های فارسی
// const faTranslations = {
//   home: 'خانه',
//   about: 'درباره ما',
//   contact: 'تماس با ما',
//   schedule: 'برنامه اتوبوس‌ها',
//   login: 'ورود',
//   logout: 'خروج',
//   profile: 'پروفایل',
//   // ... سایر ترجمه‌ها
// };

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         translation: enTranslations
//       },
//       fa: {
//         translation: faTranslations
//       }
//     },
//     fallbackLng: 'en',
//     debug: false,
//     interpolation: {
//       escapeValue: false,
//     }
//   });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: {
          storyTitle: "Our Story",
          storyContent: "Parto Sir Iranian International Company was established in 1997 with over 27 years of experience in international passenger transportation services. Under the leadership of CEO Mr. Naser Kalantari, we operate a modern fleet including 30 buses, 24 vans, and 54 intercity vehicles.",
          storyImageAlt: "Our company history",
          networkTitle: "Our Network",
          networkContent1: "With branches in Sari, Mashhad, Qom, Ahvaz, Zahedan, Taybad, Zabol, Chabahar, Rasht, Tehran, and Ilam, we serve key international routes including:",
          route1: "Mashhad-Herat / Taybad-Herat",
          route2: "Zabol-Kandahar / Zahedan-Nimroz",
          route3: "Zahedan-Quetta / Chabahar-Karachi",
          route4: "Ahvaz-Basra / Qom-Najaf",
          route5: "Sari-Najaf / Rasht-Najaf",
          networkImageAlt: "Our transportation network",
          achievementsTitle: "Our Achievements",
          achievementsContent1: "We have established strong transportation partnerships with Turkmenistan, Iraq, and Afghanistan. During Arbaeen, we're recognized as a top transportation provider for pilgrims, offering dedicated fleets and professional drivers.",
          achievementsContent2: "Building on domestic capabilities and regional relationships, we're committed to sustainable development in transportation, tourism, and passenger services, working toward Iran's Vision 2025 as a regional tourism hub.",
          achievementsImageAlt: "Our achievements"
        },
        busSchedule: {
          days: {
            saturday: "Saturday",
            sunday: "Sunday",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday"
          },
          noResults: "No bus schedules available",
          seatsLeft: "seats left",
          price: "Price",
          time: "Departure Time",
          bookNow: "Book Now"
        },
        navbar: {
          home: "Home",
          about: "About Us",
          stations: "Stations",
          loginWithGoogle: "Login with Google",
          greeting: "Hi ",
          profile: "Profile",
          logout: "Logout",
          login: "Login",
          user: "User",
          changeLanguage: "Change Language",
          logoutError: "Logout failed. Please try again"
        },
        mapList: {
          title: 'Branch Information',
          address: 'Address:',
          phone: 'Phone:',
          manager: 'Manager:',
          mapUnavailable: 'Map is currently unavailable',
          viewOnNeshan: '(View on Neshan)',
          branch: 'Branch',
          toggleLanguage: 'فارسی',
          branches: {
            Taybad: 'Taybad',
            Zabol: 'Zabol',
            Qom: 'Qom',
            Sari: 'Sari',
            Ilam: 'Ilam',
            Ahvaz: 'Ahvaz',
            Mashhad: 'Mashhad',
            Chabahar: 'Chabahar'
          },
          addresses: {
            Taybad: 'Taybad Terminal, Booth 1',
            Zabol: 'Zabol, Rostam Square, Terminal Booth 13',
            Qom: 'Qom Terminal, Kowsar Terminal, next to the Trade Union',
            Sari: 'Dolat Passenger Terminal, Defa Moghaddas Blvd',
            Ilam: 'Ilam, Chalsara Martyrs Blvd, Ilam Municipality Martyrs Passenger Terminal',
            Ahvaz: 'Ahvaz, Sayahat Terminal, 2nd Floor',
            Mashhad: 'Mashhad, next to Imam Reza Terminal, corner of Imam Reza 69',
            Chabahar: 'Chabahar Central District, Chabahar Passenger Terminal'
          },
          managers: {
            Taybad: 'Mr. Behrouz Yazdani',
            Zabol: 'Rajab Akbari',
            Qom: 'Nezar Abolsan',
            Sari: 'Nasser Kalantari',
            Ilam: 'Mashaallah Rahmati',
            Ahvaz: 'Hossein Kalantari',
            Mashhad: '',
            Chabahar: 'Behnaz Yazdani'
          }
        },
        search: {
          source: 'Source',
          destination: 'Destination',
          date: 'Date',
          searchButton: 'Search',
          alertMessage: 'Please select all items',
          transportType: 'Type',
          bus: 'Bus',
          taxi: 'Taxi',
          van: 'Van',
          cargo: 'Cargo'
        },
        contact: {
          title: 'Contact us',
          help: {
            title: 'Live chat & Help center',
            detail1: 'Want a quick answer to a Burning Question?',
            detail2: 'Visit our Help Center for FAQs or chat with a live agent.'
          },
          phone: {
            title: 'Mobile & WhatsApp',
            label: 'Phone'
          },
          email: {
            title: 'Email Us'
          }
        },
        login: {
          phoneLabel: 'Phone Number',
          submitButton: 'Submit',
          codeLabel: 'Verification Code',
          modalTitle: 'Please enter the code sent to your phone',
          verifying: 'Verifying...',
          resendButton: 'Resend Code',
          resendCountdown: 'Resend in {{count}}s',
          codeEmptyAlert: 'Verification code is required',
          title: 'Login'
        },
        buttons: {
          more: 'More',
          payment: 'Payment'
        },
        booking: {
          title: 'Booking Details'
        },
        labels: {
          company: 'Company',
          details: 'Details',
          busFront: 'Bus Front'
        },
        passenger: {
          title: 'Passenger',
          name: 'Name',
          family: 'Family',
          mobile: 'Mobile No',
          birthday: 'Birthday (yyyy/mm/dd)',
          nationalCode: 'National Code',
          male: 'Male',
          female: 'Female'
        },
        validation: {
          nameRequired: 'Name required',
          minName: 'Min Name 3 Characters',
          familyRequired: 'Family Required',
          minFamily: 'Min Family 3 Characters',
          mobileRequired: 'Cell Phone Required',
          minMobile: 'Min Mobile 11 Characters',
          birthdayRequired: 'BirthDay Required',
          nationalCodeRequired: 'NationalCode Required',
          minPassenger: 'At least one passenger is required'
        },
        seat: {
          male: 'Man',
          female: 'Woman'
        },
        busDetails: {
          source: "Source",
          destination: "Destination",
          dateTime: "Date & Time",
          type: "Type",
          sourceIconAlt: "Source Icon",
          destinationIconAlt: "Destination Icon",
          arrowIconAlt: "Arrow Icon",
          scheduleIconAlt: "Schedule Icon",
          facilitiesIconAlt: "Facilities Icon"
        },
        busTicket: {
          currency: "Rial",
          seatsLeft: "{{count}} seats left",
          busIconAlt: "Bus icon"
        },
        footer: {
          usefulLinks: "Useful Links",
          aboutUs: "About Us",
          privacyPolicy: "Privacy Policy",
          termsConditions: "Terms & Conditions",
          support: "Support",
          refundPolicy: "Refund Policy",
          contactUs: "Contact Us",
          copyright: " kalanholding.com - Website designed by",
          logoAlt: "College logo",
          frameAlt: "College frame"
        },
        home: {
          advertise: "Advertise",
          ad1Title: "Advertising 1",
          ad2Title: "Advertising 2",
          ad1Alt: "First advertisement image",
          ad2Alt: "Second advertisement image"
        },
        profile: {
          "profileDetails": "Profile Details",
          "name": "Name",
          "mobile": "Mobile",
          "email": "Email",
          "noName": "No Name Provided",
          "noMobile": "No Mobile Number",
          "noEmail": "No Email",
          "profileImageAlt": "Profile Picture",
          "upcoming": "Upcoming",
          "completed": "Completed",
          "filters": {
            "lastWeek": "Last Week",
            "lastMonth": "Last Month",
            "last3Months": "Last 3 Months",
            "last6Months": "Last 6 Months"
          }
        }


      }
    },
    fa: {
      translation: {
        about: {
          storyTitle: "داستان ما",
          storyContent: "شرکت بین المللی پرتوسیر ایرانیان با بیش از 27 سال تجربه (1376) با هدف ارائه خدمات حمل ونقل بین المللی مسافر تاسیس شد و مدیر عامل کنونی آقای ناصرکلانتری شرکت با ناوگانی متشکل از 30دستگاه اتوبوس ، 24 دستگاه ون و 54 دستگاه سواری های برون شهری ملکی و تحت پوشش و با بهره مندی از شعب فعال در شهرهای چون ساری ،مشهد ، قم ، اهواز ، زاهدان ، تایباد ، زابل ،چابهار، رشت ، تهران و ایلام فعالیت دارد.",
          storyImageAlt: "تاریخچه شرکت ما",
          networkTitle: "شبکه ما",
          networkContent1: "ما در مسیر های مهمی چون:",
          route1: "مشهد – هرات / تایباد – هرات",
          route2: "زابل – قندهار / زاهدان – نیمروز",
          route3: "زاهدان –کویته / چابهار- کراچی",
          route4: "اهواز – بصره / قم – نجف",
          route5: "ساری – نجف / رشت – نجف",
          networkImageAlt: "شبکه حمل و نقل ما",
          achievementsTitle: "دستاوردهای ما",
          achievementsContent1: "پرتوسیر ایرانیان سابقه ای درخشان در توسعه همکاری های حمل ونقل جاده ای با کشورهایی مانند ترکمنستان ، عراق و افغانستان دارد. در دهه اخیر، این شرکت با توسعه ناوگان و گسترش ارتباطات بین المللی ، جایگاه خود را به عنوان یکی از فعالترین شرکت های حمل ونقل برون مرزی ایران تثبیت نموده است.",
          achievementsContent2: "پرتوسیرایرانیان با تکیه برظرفیت های داخلی و روابط منطقه ای ، به دنبال توسعه پایدار در زمینه حمل ونقل ، گردشگری و خدمات مسافری است و در مسیر تحقق سند چشم انداز 1404 برای تبدیل ایران به قطب گردشگری منطقه ، گام برمی دارد.",
          achievementsImageAlt: "دستاوردهای ما"
        },
        busSchedule: {
          days: {
            saturday: "شنبه",
            sunday: "یکشنبه",
            monday: "دوشنبه",
            tuesday: "سه‌شنبه",
            wednesday: "چهارشنبه",
            thursday: "پنج‌شنبه",
            friday: "جمعه"
          },
          noResults: "هیچ برنامه زمانی اتوبوسی موجود نیست",
          seatsLeft: "صندلی باقی مانده",
          price: "قیمت",
          time: "زمان حرکت",
          bookNow: "رزرو کنید"
        },
        navbar: {
          home: "خانه",
          about: "درباره ما",
          stations: "ایستگاه‌ها",
          loginWithGoogle: "ورود با گوگل",
          greeting: "سلام ",
          profile: "پروفایل",
          logout: "خروج",
          login: "ورود",
          user: "کاربر",
          changeLanguage: "تغییر زبان",
          logoutError: "خروج ناموفق بود. لطفاً دوباره تلاش کنید"
        },
        mapList: {
          title: 'اطلاعات شعب',
          address: 'آدرس:',
          phone: 'تلفن:',
          manager: 'مدیر:',
          mapUnavailable: 'نقشه در حال حاضر در دسترس نیست',
          viewOnNeshan: '(مشاهده در نقشه نشان)',
          branch: 'شعبه',
          toggleLanguage: 'English',
          branches: {
            Taybad: 'تایباد',
            Zabol: 'زابل',
            Qom: 'قم',
            Sari: 'ساری',
            Ilam: 'ایلام',
            Ahvaz: 'اهواز',
            Mashhad: 'مشهد',
            Chabahar: 'چابهار'
          },
          addresses: {
            Taybad: 'پایانه تایباد، غرفه ۱',
            Zabol: 'زابل، میدان رستم، پایانه مسافربری غرفه ۱۳',
            Qom: 'پایانه قم، پایانه کوثر، جنب اتحادیه صنف',
            Sari: 'پایانه مسافربری دولت، بلوار دفاع مقدس',
            Ilam: 'ایلام، بلوار شهدای چال سارا، پایانه مسافربری شهدای شهرداری ایلام',
            Ahvaz: 'اهواز، پایانه سیاحت، طبقه دوم',
            Mashhad: 'مشهد، جنب پایانه امام رضا، نبش امام رضا ۶۹',
            Chabahar: 'بخش مرکزی چابهار، پایانه مسافربری چابهار'
          },
          managers: {
            Taybad: 'آقای بهروز یزدانی',
            Zabol: 'رجب اکبری',
            Qom: 'نظار ابوالسنان',
            Sari: 'ناصر کالانتری',
            Ilam: 'ماشاءالله رحمتی',
            Ahvaz: 'حسین کالانتری',
            Mashhad: '',
            Chabahar: 'بهناز یزدانی'
          }
        },
        search: {
          source: 'مبدا',
          destination: 'مقصد',
          date: 'تاریخ',
          searchButton: 'جستجو',
          alertMessage: 'لطفا تمام موارد را انتخاب کنید',
          transportType: 'نوع سفر',
          bus: 'اتوبوس',
          taxi: 'تاکسی',
          van: 'ون',
          cargo: 'باربری'
        },
        contact: {
          title: 'تماس با ما',
          help: {
            title: 'چت آنلاین و مرکز کمک',
            detail1: 'پاسخ سریع به سوالات خود می‌خواهید؟',
            detail2: 'برای سوالات متداول به مرکز کمک مراجعه کنید یا با کارشناسان ما چت کنید.'
          },
          phone: {
            title: 'تلفن و واتساپ',
            label: 'تلفن ثابت'
          },
          email: {
            title: 'ایمیل به ما'
          }
        },
        login: {
          phoneLabel: 'شماره تلفن',
          submitButton: 'ارسال',
          codeLabel: 'کد تأیید',
          modalTitle: 'لطفاً کد ارسال شده به تلفن خود را وارد کنید',
          verifying: 'در حال تأیید...',
          resendButton: 'ارسال مجدد کد',
          resendCountdown: 'ارسال مجدد پس از {{count}} ثانیه',
          codeEmptyAlert: 'لطفاً کد تأیید را وارد کنید',
          title: 'ورود'
        },
        buttons: {
          more: 'جزئیات',
          payment: 'پرداخت'
        },
        booking: {
          title: 'جزئیات رزرو'
        },
        labels: {
          company: 'شرکت',
          details: 'جزئیات',
          busFront: 'جلوی اتوبوس'
        },
        passenger: {
          title: 'مسافر',
          name: 'نام',
          family: 'نام خانوادگی',
          mobile: 'شماره موبایل',
          birthday: 'تاریخ تولد (yyyy/mm/dd)',
          nationalCode: 'کد ملی',
          male: 'مرد',
          female: 'زن'
        },
        validation: {
          nameRequired: 'نام الزامی است',
          minName: 'حداقل ۳ کاراکتر برای نام',
          familyRequired: 'نام خانوادگی الزامی است',
          minFamily: 'حداقل ۳ کاراکتر برای نام خانوادگی',
          mobileRequired: 'شماره موبایل الزامی است',
          minMobile: 'حداقل ۱۱ کاراکتر برای موبایل',
          birthdayRequired: 'تاریخ تولد الزامی است',
          nationalCodeRequired: 'کد ملی الزامی است',
          minPassenger: 'حداقل یک مسافر باید تعریف شود'
        },
        seat: {
          male: 'آقا',
          female: 'خانم'
        },
        busDetails: {
          source: "مبدأ",
          destination: "مقصد",
          dateTime: "تاریخ و ساعت",
          type: "نوع",
          sourceIconAlt: "آیکون مبدأ",
          destinationIconAlt: "آیکون مقصد",
          arrowIconAlt: "آیکون فلش",
          scheduleIconAlt: "آیکون برنامه زمانی",
          facilitiesIconAlt: "آیکون امکانات"
        },
        busTicket: {
          currency: "ریال",
          seatsLeft: "{{count}} صندلی باقی مانده",
          busIconAlt: "آیکون اتوبوس"
        },
        footer: {
          usefulLinks: "لینک‌های مفید",
          aboutUs: "درباره ما",
          privacyPolicy: "سیاست حفظ حریم خصوصی",
          termsConditions: "شرایط و ضوابط",
          support: "پشتیبانی",
          refundPolicy: "سیاست بازپرداخت",
          contactUs: "تماس با ما",
          copyright: "  kalanholding.com - Website designed by",
          logoAlt: "لوگوی دانشگاه",
          frameAlt: "قاب دانشگاه"
        },
        home: {
          advertise: "تبلیغات",
          ad1Title: "تبلیغ اول",
          ad2Title: "تبلیغ دوم",
          ad1Alt: "تصویر تبلیغ اول",
          ad2Alt: "تصویر تبلیغ دوم"
        },
        profile: {
          "profileDetails": "جزئیات پروفایل",
          "name": "نام",
          "mobile": "موبایل",
          "email": "ایمیل",
          "noName": "نامی وارد نشده",
          "noMobile": "شماره موبایل وجود ندارد",
          "noEmail": "ایمیلی وجود ندارد",
          "profileImageAlt": "تصویر پروفایل",
          "upcoming": "آینده",
          "completed": "تکمیل شده",
          "filters": {
            "lastWeek": "هفته گذشته",
            "lastMonth": "ماه گذشته",
            "last3Months": "۳ ماه گذشته",
            "last6Months": "۶ ماه گذشته"
          }
        }

      }
    }
  },
  lng: "en", // زبان پیش‌فرض
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;