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
          branch: '',
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
            Zabol: 'Mr. Rajab Akbari',
            Qom: 'Mr. Nizar Abolsan',
            Sari: 'Mr. Naser Kalantari',
            Ilam: 'Mr. Mashallah Rahmati',
            Ahvaz: 'Mr. Hossein Kalantari',
            Mashhad: 'Mr. Naser Kalantari',
            Chabahar: 'Ms. Behnaz Yazdani'
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
          copyright: " kalanholding.com - Website designed by ",
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
        },
        navbar2: {

          "travelServices": "Travel Services",
          "busTicket": "Bus Ticket",
          "TaxiTicket": "Taxi Ticket",
          "VanTicket": "Van Ticket",
          "Cargo": "Cargo"

        },
        "terms": {
          "title": "Terms and Conditions",
          "introduction": "These Terms and Conditions govern your use of the passenger transportation service system. Please read the following terms carefully before using the system. Using the system means full acceptance of these terms.",
          "registration": {
            "title": "User Registration and Information",
            "1_1": "Users must enter their complete and accurate identity information during registration. Users are responsible for the accuracy of the entered information.",
            "1_2": "Any use of another person's information or documents without legal permission is prohibited and considered a violation."
          },
          "booking": {
            "title": "Ticket Reservation and Purchase",
            "2_1": "Ticket reservation and purchase is only possible through the company's official system and authorized representatives.",
            "2_2": "Trip changes or cancellations are subject to the company's cancellation policy as stated in the 'Refund Policy' section of the system.",
            "2_3": "Ticket prices vary based on vehicle type, route, date, and capacity, and are determined according to company regulations."
          },
          "responsibilities": {
            "title": "User (Passenger) Responsibilities",
            "3_1": "Passengers must arrive at the departure point at the scheduled time; otherwise, the company will not be responsible for delays or trip cancellations.",
            "3_2": "Carrying any prohibited, dangerous, or illegal items is forbidden, and passengers will be solely responsible for any violations.",
            "3_3": "Maintaining order, social etiquette, personal hygiene, and respect for other passengers and drivers during the trip is mandatory."
          },
          "acceptance": "Entering the system and using its services means the user has read, understood, and accepted all the above terms.",
          "images": {
            "about": "About Us",
            "story": "Our Story",
            "mission": "Our Mission"
          }
        },
        cancelpage: {
          paymentResult: 'Payment Result',
          paymentFailed: 'Payment Failed',
          paymentFailedMessage: 'Unfortunately, your payment encountered a problem.',
          homePage: 'Home Page'
        },
        success: {
          paymentResult: 'Payment Result',
          paymentSuccess: 'Payment Successful!',
          orderRegistered: 'Your order has been successfully registered.',
          trackingCode: 'Tracking Code'
        },
        "fareBreakdown": {
          "ticketPrice": "Ticket Price",
          "ticketCounts": "Ticket Counts",
          "endPrice": "End Price",
          "rial": "Rial"
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
          branch: '',
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
            Zabol: 'آقای رجب اکبری',
            Qom: 'آقای نزار ابولسان',
            Sari: 'آقای ناصر کلانتری',
            Ilam: 'آقای ماشاءالله رحمتی',
            Ahvaz: 'آقای حسین کلانتری',
            Mashhad: 'آقای ناصر کلانتری',
            Chabahar: 'خانم بهناز یزدانی'
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
          copyright: "  kalanholding.com - Website designed by ",
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
        },
        navbar2: {
          "travelServices": "خدمات سفر",
          "busTicket": "بلیط اتوبوس",
          "TaxiTicket": "بلیط تاکسی",
          "VanTicket": "بلیط ون",
          "Cargo": "باربری"

        },
        "terms": {
          "title": "قوانین و مقررات",
          "introduction": "قوانین و مقررات استفاده از سامانه خدمات حمل‌ونقل مسافری لطفاً پیش از ورود به سامانه و بهره‌مندی از خدمات، مفاد ذیل را با دقت مطالعه فرمایید. استفاده از این سامانه به منزله پذیرش کامل شرایط و ضوابط آن تلقی خواهد شد.",
          "registration": {
            "title": "ثبت‌نام و اطلاعات کاربران",
            "1_1": "کاربران موظف‌اند در زمان ثبت‌نام، اطلاعات هویتی خود را به‌صورت کامل و صحیح وارد نمایند. مسئولیت صحت و سقم اطلاعات واردشده بر عهده کاربر می‌باشد.",
            "1_2": "هرگونه استفاده از مشخصات و مدارک اشخاص دیگر، بدون کسب مجوز قانونی، ممنوع بوده و تخلف محسوب می‌شود."
          },
          "booking": {
            "title": "قوانین مربوط به رزرو و خرید بلیت",
            "2_1": "رزرو و خرید بلیت تنها از طریق سامانه رسمی شرکت کلان و نمایندگان مجاز امکان‌پذیر است.",
            "2_2": "تغییر یا لغو سفر، تابع شرایط کنسلی شرکت بوده که در بخش «سیاست‌های بازپرداخت» سامانه اعلام گردیده است.",
            "2_3": "نرخ بلیت‌ها بر اساس وسیله نقلیه، مسیر، تاریخ و ظرفیت، متغیر و طبق مصوبات شرکت تعیین می‌گردد."
          },
          "responsibilities": {
            "title": "تعهدات کاربران (مسافران)",
            "3_1": "مسافر موظف است در زمان مقرر در محل حرکت حضور یابد؛ در غیر این‌صورت شرکت مسئولیتی در قبال تاخیر یا عدم امکان انجام سفر نخواهد داشت.",
            "3_2": "حمل هرگونه محموله غیرمجاز، خطرناک، یا مغایر با قوانین کشور ممنوع بوده و در صورت تخلف، مسئولیت آن مستقیماً متوجه مسافر خواهد بود.",
            "3_3": "رعایت نظم، شئونات اجتماعی، بهداشت فردی و احترام به دیگر مسافران و رانندگان در طول سفر الزامی است."
          },
          "acceptance": "✅ ورود به سامانه و استفاده از خدمات آن به منزله مطالعه، آگاهی و پذیرش کلیه مفاد فوق از سوی کاربر تلقی می‌گردد.",
          "images": {
            "about": "درباره ما",
            "story": "داستان ما",
            "mission": "ماموریت ما"
          }
        },
        cancelpage: {
          paymentResult: 'نتیجه پرداخت',
          paymentFailed: 'پرداخت ناموفق بود',
          paymentFailedMessage: 'متأسفانه پرداخت شما با مشکل مواجه شد.',
          homePage: 'صفحه اصلی'
        },
        success: {
          paymentResult: 'نتیجه پرداخت',
          paymentSuccess: 'پرداخت با موفقیت انجام شد!',
          orderRegistered: 'سفارش شما با موفقیت ثبت گردید.',
          trackingCode: 'کد رهگیری'
        },
        "fareBreakdown": {
          "ticketPrice": "قیمت بلیت",
          "ticketCounts": "تعداد بلیت",
          "endPrice": "قیمت نهایی",
          "rial": "ریال"
        }



      }
    },
    ru: {
      translation: {
        about: {
          storyTitle: "Наша история",
          storyContent: "Компания Parto Sir Iranian International была основана в 1997 году и имеет более чем 27-летний опыт оказания услуг международных пассажирских перевозок. Под руководством генерального директора г-на Насера Калантари мы управляем современным парком, включающим 30 автобусов, 24 микроавтобуса и 54 междугородних транспортных средства.",
          storyImageAlt: "История нашей компании",
          networkTitle: "Наша сеть",
          networkContent1: "Имея филиалы в Сари, Мешхеде, Куме, Ахвазе, Захедане, Тайбаде, Заболе, Чабахаре, Реште, Тегеране и Иламе, мы обслуживаем ключевые международные маршруты, включая:",
          route1: "Мешхед-Герат / Тайбад-Герат",
          route2: "Заболь-Кандагар / Захедан-Нимроз",
          route3: "Захедан-Кветта / Чабахар-Карачи",
          route4: "Ахваз-Басра / Кум-Эн-Наджаф",
          route5: "Сари-Эн-Наджаф / Решт-Эн-Наджаф",
          networkImageAlt: "Наша транспортная сеть",
          achievementsTitle: "Наши достижения",
          achievementsContent1: "Мы установили прочные партнерские отношения в сфере транспорта с Туркменистаном, Ираком и Афганистаном. Во время Арбаина мы признаны ведущим транспортным поставщиком для паломников, предлагая специальные автопарки и профессиональных водителей.",
          achievementsContent2: "Опираясь на внутренние возможности и региональные отношения, мы стремимся к устойчивому развитию в сфере транспорта, туризма и пассажирских перевозок, работая над реализацией иранского видения 2025 года как регионального туристического центра.",
          achievementsImageAlt: "Наши достижения"
        },
        busSchedule: {
          days: {
            saturday: "Суббота",
            sunday: "Воскресенье",
            monday: "Понедельник",
            tuesday: "Вторник",
            wednesday: "Среда",
            thursday: "Четверг",
            friday: "Пятница"
          },
          noResults: "Расписание автобусов недоступно",
          seatsLeft: "осталось мест",
          price: "Цена",
          time: "Время отправления",
          bookNow: "Забронировать сейчас"
        },
        navbar: {
          home: "Главная",
          about: "О нас",
          stations: "Станции",
          loginWithGoogle: "Войти через Google",
          greeting: "Привет ",
          profile: "Профиль",
          logout: "Выйти",
          login: "Войти",
          user: "Пользователь",
          changeLanguage: "Изменить язык",
          logoutError: "Не удалось выйти. Пожалуйста, попробуйте снова"
        },
        mapList: {
          title: 'Информация о филиалах',
          address: 'Адрес:',
          phone: 'Телефон:',
          manager: 'Менеджер:',
          mapUnavailable: 'Карта временно недоступна',
          viewOnNeshan: '(Посмотреть на Neshan)',
          branch: '',
          toggleLanguage: 'فارسی',
          branches: {
            Taybad: 'Тайбад',
            Zabol: 'Заболь',
            Qom: 'Кум',
            Sari: 'Сари',
            Ilam: 'Илам',
            Ahvaz: 'Ахваз',
            Mashhad: 'Мешхед',
            Chabahar: 'Чабахар'
          },
          addresses: {
            Taybad: 'Тайбадский терминал, Стойка 1',
            Zabol: 'Заболь, площадь Ростама, Стойка терминала 13',
            Qom: 'Кумский терминал, терминал Ковсар, рядом с Торговым союзом',
            Sari: 'Пассажирский терминал Долат, бульвар Дефа Могаддас',
            Ilam: 'Илам, бульвар Шахидов Чалсара, Пассажирский терминал Шахидов муниципалитета Илама',
            Ahvaz: 'Ахваз, терминал Саяхат, 2 этаж',
            Mashhad: 'Мешхед, рядом с терминалом Имама Резы, угол Имама Резы 69',
            Chabahar: 'Центральный район Чабахар, Чабахарский пассажирский терминал'
          },
          managers: {
            Taybad: 'Г-н Бехруз Яздани',
            Zabol: 'Г-н Раджаб Акбари',
            Qom: 'Г-н Низар Аболсан',
            Sari: 'Г-н Насер Калантари',
            Ilam: 'Г-н Машаллах Рахмати',
            Ahvaz: 'Г-н Хоссейн Калантари',
            Mashhad: 'Г-н Насер Калантари',
            Chabahar: 'Г-жа Бехназ Яздани'
          }
        },
        search: {
          source: 'Откуда',
          destination: 'Куда',
          date: 'Дата',
          searchButton: 'Поиск',
          alertMessage: 'Пожалуйста, выберите все пункты',
          transportType: 'Тип транспорта',
          bus: 'Автобус',
          taxi: 'Такси',
          van: 'Микроавтобус',
          cargo: 'Грузоперевозки'
        },
        contact: {
          title: 'Свяжитесь с нами',
          help: {
            title: 'Чат и центр поддержки',
            detail1: 'Нужен быстрый ответ на срочный вопрос?',
            detail2: 'Посетите наш Центр поддержки для FAQ или пообщайтесь с живым агентом.'
          },
          phone: {
            title: 'Мобильный и WhatsApp',
            label: 'Телефон'
          },
          email: {
            title: 'Напишите нам'
          }
        },
        login: {
          phoneLabel: 'Номер телефона',
          submitButton: 'Отправить',
          codeLabel: 'Код подтверждения',
          modalTitle: 'Пожалуйста, введите код, отправленный на ваш телефон',
          verifying: 'Проверка...',
          resendButton: 'Отправить код повторно',
          resendCountdown: 'Отправить повторно через {{count}}с',
          codeEmptyAlert: 'Требуется код подтверждения',
          title: 'Вход'
        },
        buttons: {
          more: 'Подробнее',
          payment: 'Оплата'
        },
        booking: {
          title: 'Детали бронирования'
        },
        labels: {
          company: 'Компания',
          details: 'Детали',
          busFront: 'Передняя часть автобуса'
        },
        passenger: {
          title: 'Пассажир',
          name: 'Имя',
          family: 'Фамилия',
          mobile: 'Мобильный номер',
          birthday: 'Дата рождения (гггг/мм/дд)',
          nationalCode: 'Национальный код',
          male: 'Мужской',
          female: 'Женский'
        },
        validation: {
          nameRequired: 'Требуется имя',
          minName: 'Минимум 3 символа',
          familyRequired: 'Требуется фамилия',
          minFamily: 'Минимум 3 символа',
          mobileRequired: 'Требуется номер телефона',
          minMobile: 'Минимум 11 символов',
          birthdayRequired: 'Требуется дата рождения',
          nationalCodeRequired: 'Требуется национальный код',
          minPassenger: 'Требуется хотя бы один пассажир'
        },
        seat: {
          male: 'Мужчина',
          female: 'Женщина'
        },
        busDetails: {
          source: "Откуда",
          destination: "Куда",
          dateTime: "Дата и время",
          type: "Тип",
          sourceIconAlt: "Иконка места отправления",
          destinationIconAlt: "Иконка места назначения",
          arrowIconAlt: "Иконка стрелки",
          scheduleIconAlt: "Иконка расписания",
          facilitiesIconAlt: "Иконка удобств"
        },
        busTicket: {
          currency: "Риал",
          seatsLeft: "Осталось {{count}} мест",
          busIconAlt: "Иконка автобуса"
        },
        footer: {
          usefulLinks: "Полезные ссылки",
          aboutUs: "О нас",
          privacyPolicy: "Политика конфиденциальности",
          termsConditions: "Условия и положения",
          support: "Поддержка",
          refundPolicy: "Политика возврата",
          contactUs: "Свяжитесь с нами",
          copyright: " kalanholding.com - Сайт разработан ",
          logoAlt: "Логотип компании",
          frameAlt: "Фрейм компании"
        },
        home: {
          advertise: "Реклама",
          ad1Title: "Реклама 1",
          ad2Title: "Реклама 2",
          ad1Alt: "Первое рекламное изображение",
          ad2Alt: "Второе рекламное изображение"
        },
        profile: {
          profileDetails: "Детали профиля",
          name: "Имя",
          mobile: "Мобильный",
          email: "Email",
          noName: "Имя не указано",
          noMobile: "Номер телефона не указан",
          noEmail: "Email не указан",
          profileImageAlt: "Фотография профиля",
          upcoming: "Предстоящие",
          completed: "Завершенные",
          filters: {
            lastWeek: "Последняя неделя",
            lastMonth: "Последний месяц",
            last3Months: "Последние 3 месяца",
            last6Months: "Последние 6 месяцев"
          }
        },
        navbar2: {
          "travelServices": "Туристические услуги",
          "busTicket": "Автобусный билет",
          "TaxiTicket": "Такси билет",
          "VanTicket": "Билет на микроавтобус",
          "Cargo": "Грузоперевозки"
        },

        "terms": {
          "title": "Условия и положения",
          "introduction": "Настоящие Условия и положения регулируют использование вами системы услуг пассажирских перевозок. Пожалуйста, внимательно прочитайте следующие условия перед использованием системы. Использование системы означает полное принятие этих условий.",
          "registration": {
            "title": "Регистрация и информация пользователей",
            "1_1": "Пользователи должны вводить полную и точную идентификационную информацию во время регистрации. Пользователи несут ответственность за точность введенной информации.",
            "1_2": "Любое использование информации или документов других лиц без юридического разрешения запрещено и считается нарушением."
          },
          "booking": {
            "title": "Бронирование и покупка билетов",
            "2_1": "Бронирование и покупка билетов возможны только через официальную систему компании и уполномоченных представителей.",
            "2_2": "Изменения или отмена поездки подчиняются политике отмены компании, как указано в разделе 'Политика возврата' системы.",
            "2_3": "Цены на билеты варьируются в зависимости от типа транспортного средства, маршрута, даты и вместимости и определяются в соответствии с правилами компании."
          },
          "responsibilities": {
            "title": "Обязанности пользователей (пассажиров)",
            "3_1": "Пассажиры должны прибыть в пункт отправления в назначенное время; в противном случае компания не несет ответственности за задержки или отмены поездок.",
            "3_2": "Запрещено перевозить любые запрещенные, опасные или незаконные предметы, и пассажиры несут полную ответственность за любые нарушения.",
            "3_3": "Соблюдение порядка, социальных норм, личной гигиены и уважения к другим пассажирам и водителям во время поездки обязательно."
          },
          "acceptance": "Вход в систему и использование ее услуг означает, что пользователь прочитал, понял и принял все вышеуказанные условия.",
          "images": {
            "about": "О нас",
            "story": "Наша история",
            "mission": "Наша миссия"
          }
        },
        cancelpage: {
          paymentResult: 'Результат платежа',
          paymentFailed: 'Платеж не прошел',
          paymentFailedMessage: 'К сожалению, при обработке вашего платежа возникла проблема.',
          homePage: 'Главная страница'
        },
        success: {
          paymentResult: 'Результат платежа',
          paymentSuccess: 'Платеж успешно выполнен!',
          orderRegistered: 'Ваш заказ успешно зарегистрирован.',
          trackingCode: 'Код отслеживания'
        },
        "fareBreakdown": {
          "ticketPrice": "Цена билета",
          "ticketCounts": "Количество билетов",
          "endPrice": "Итоговая цена",
          "rial": "Риал"
        }



      }
    },
    ar: {
      translation: {
        about: {
          storyTitle: "قصتنا",
          storyContent: "تأسست شركة بارتو سير الإيرانية الدولية عام 1997 ولديها أكثر من 27 عامًا من الخبرة في خدمات نقل الركاب الدولية. تحت قيادة الرئيس التنفيذي السيد ناصر كلانتاري، ندير أسطولًا حديثًا يشمل 30 حافلة و24 ميني باص و54 مركبة بين المدن.",
          storyImageAlt: "تاريخ شركتنا",
          networkTitle: "شبكتنا",
          networkContent1: "مع فروع في ساري ومشهد وقم وأهواز وزاهدان وتايباد وزابل وتشابهار ورشط وطهران وإيلام، نخدم طرقًا دولية رئيسية تشمل:",
          route1: "مشهد-هرات / تايباد-هرات",
          route2: "زابل-قندهار / زاهدان-نيمروز",
          route3: "زاهدان-كويتا / تشابهار-كراتشي",
          route4: "أهواز-البصرة / قم-النجف",
          route5: "ساري-النجف / رشت-النجف",
          networkImageAlt: "شبكة النقل الخاصة بنا",
          achievementsTitle: "إنجازاتنا",
          achievementsContent1: "لقد أنشأنا شراكات نقل قوية مع تركمانستان والعراق وأفغانستان. خلال الأربعين، نُعتبر من أفضل مقدمي خدمات النقل للحجاج، حيث نقدم أساطيل مخصصة وسائقين محترفين.",
          achievementsContent2: "بناءً على القدرات المحلية والعلاقات الإقليمية، نحن ملتزمون بالتنمية المستدامة في النقل والسياحة وخدمات الركاب، ونعمل نحو رؤية إيران 2025 كمركز سياحي إقليمي.",
          achievementsImageAlt: "إنجازاتنا"
        },
        busSchedule: {
          days: {
            saturday: "السبت",
            sunday: "الأحد",
            monday: "الاثنين",
            tuesday: "الثلاثاء",
            wednesday: "الأربعاء",
            thursday: "الخميس",
            friday: "الجمعة"
          },
          noResults: "لا توجد جداول حافلات متاحة",
          seatsLeft: "مقاعد متبقية",
          price: "السعر",
          time: "وقت المغادرة",
          bookNow: "احجز الآن"
        },
        navbar: {
          home: "الرئيسية",
          about: "من نحن",
          stations: "المحطات",
          loginWithGoogle: "تسجيل الدخول عبر جوجل",
          greeting: "مرحباً ",
          profile: "الملف الشخصي",
          logout: "تسجيل الخروج",
          login: "تسجيل الدخول",
          user: "المستخدم",
          changeLanguage: "تغيير اللغة",
          logoutError: "فشل تسجيل الخروج. يرجى المحاولة مرة أخرى"
        },
        mapList: {
          title: 'معلومات الفروع',
          address: 'العنوان:',
          phone: 'الهاتف:',
          manager: 'المدير:',
          mapUnavailable: 'الخريطة غير متاحة حالياً',
          viewOnNeshan: '(عرض على نشان)',
          branch: '',
          toggleLanguage: 'فارسی',
          branches: {
            Taybad: 'تايباد',
            Zabol: 'زابل',
            Qom: 'قم',
            Sari: 'ساري',
            Ilam: 'إيلام',
            Ahvaz: 'أهواز',
            Mashhad: 'مشهد',
            Chabahar: 'تشابهار'
          },
          addresses: {
            Taybad: 'محطة تايباد، كشك 1',
            Zabol: 'زابل، ميدان رستم، كشك المحطة 13',
            Qom: 'محطة قم، محطة كوثر، بجانب اتحاد التجارة',
            Sari: 'محطة الركاب دولت، شارع دفاع مقدس',
            Ilam: 'إيلام، شارع شهداء تشالسارا، محطة ركاب شهداء بلدية إيلام',
            Ahvaz: 'أهواز، محطة سياحت، الطابق الثاني',
            Mashhad: 'مشهد، بجانب محطة الإمام رضا، زاوية الإمام رضا 69',
            Chabahar: 'منطقة تشابهار المركزية، محطة ركاب تشابهار'
          },
          managers: {
            Taybad: 'السيد بهروز يزداني',
            Zabol: 'السيد رجب أكبري',
            Qom: 'السيد نزار أبولسان',
            Sari: 'السيد ناصر كلانتري',
            Ilam: 'السيد ما شاء الله رحمتي',
            Ahvaz: 'السيد حسين كلانتري',
            Mashhad: 'السيد ناصر كلانتري',
            Chabahar: 'السيدة بهناز يزداني'
          }
        },
        search: {
          source: 'من',
          destination: 'إلى',
          date: 'التاريخ',
          searchButton: 'بحث',
          alertMessage: 'الرجاء تحديد جميع العناصر',
          transportType: 'النوع',
          bus: 'حافلة',
          taxi: 'تاكسي',
          van: 'ميني باص',
          cargo: 'بضائع'
        },
        contact: {
          title: 'اتصل بنا',
          help: {
            title: 'الدردشة الحية ومركز المساعدة',
            detail1: 'هل تريد إجابة سريعة لسؤال ملح؟',
            detail2: 'قم بزيارة مركز المساعدة لدينا للأسئلة الشائعة أو دردش مع وكيل مباشر.'
          },
          phone: {
            title: 'الجوال وواتساب',
            label: 'الهاتف'
          },
          email: {
            title: 'راسلنا عبر البريد'
          }
        },
        login: {
          phoneLabel: 'رقم الهاتف',
          submitButton: 'إرسال',
          codeLabel: 'رمز التحقق',
          modalTitle: 'الرجاء إدخال الرمز المرسل إلى هاتفك',
          verifying: 'جاري التحقق...',
          resendButton: 'إعادة إرسال الرمز',
          resendCountdown: 'إعادة الإرسال خلال {{count}}ث',
          codeEmptyAlert: 'رمز التحقق مطلوب',
          title: 'تسجيل الدخول'
        },
        buttons: {
          more: 'المزيد',
          payment: 'الدفع'
        },
        booking: {
          title: 'تفاصيل الحجز'
        },
        labels: {
          company: 'الشركة',
          details: 'التفاصيل',
          busFront: 'مقدمة الحافلة'
        },
        passenger: {
          title: 'الراكب',
          name: 'الاسم',
          family: 'العائلة',
          mobile: 'رقم الجوال',
          birthday: 'تاريخ الميلاد (سنة/شهر/يوم)',
          nationalCode: 'الرمز الوطني',
          male: 'ذكر',
          female: 'أنثى'
        },
        validation: {
          nameRequired: 'الاسم مطلوب',
          minName: 'الحد الأدنى للاسم 3 أحرف',
          familyRequired: 'العائلة مطلوبة',
          minFamily: 'الحد الأدنى للعائلة 3 أحرف',
          mobileRequired: 'رقم الجوال مطلوب',
          minMobile: 'الحد الأدنى للجوال 11 رقمًا',
          birthdayRequired: 'تاريخ الميلاد مطلوب',
          nationalCodeRequired: 'الرمز الوطني مطلوب',
          minPassenger: 'مطلوب راكب واحد على الأقل'
        },
        seat: {
          male: 'رجل',
          female: 'امرأة'
        },
        busDetails: {
          source: "من",
          destination: "إلى",
          dateTime: "التاريخ والوقت",
          type: "النوع",
          sourceIconAlt: "أيقونة المصدر",
          destinationIconAlt: "أيقونة الوجهة",
          arrowIconAlt: "أيقونة السهم",
          scheduleIconAlt: "أيقونة الجدول",
          facilitiesIconAlt: "أيقونة المرافق"
        },
        busTicket: {
          currency: "ريال",
          seatsLeft: "باقي {{count}} مقاعد",
          busIconAlt: "أيقونة الحافلة"
        },
        footer: {
          usefulLinks: "روابط مفيدة",
          aboutUs: "من نحن",
          privacyPolicy: "سياسة الخصوصية",
          termsConditions: "الشروط والأحكام",
          support: "الدعم",
          refundPolicy: "سياسة الاسترجاع",
          contactUs: "اتصل بنا",
          copyright: " kalanholding.com - تم تصميم الموقع بواسطة ",
          logoAlt: "شعار الشركة",
          frameAlt: "إطار الشركة"
        },
        home: {
          advertise: "إعلان",
          ad1Title: "الإعلان 1",
          ad2Title: "الإعلان 2",
          ad1Alt: "صورة الإعلان الأولى",
          ad2Alt: "صورة الإعلان الثانية"
        },
        profile: {
          profileDetails: "تفاصيل الملف الشخصي",
          name: "الاسم",
          mobile: "الجوال",
          email: "البريد الإلكتروني",
          noName: "لا يوجد اسم مقدم",
          noMobile: "لا يوجد رقم جوال",
          noEmail: "لا يوجد بريد إلكتروني",
          profileImageAlt: "صورة الملف الشخصي",
          upcoming: "القادمة",
          completed: "المكتملة",
          filters: {
            lastWeek: "الأسبوع الماضي",
            lastMonth: "الشهر الماضي",
            last3Months: "آخر 3 أشهر",
            last6Months: "آخر 6 أشهر"
          }
        },
        navbar2: {
          "travelServices": "خدمات السفر",
          "busTicket": "تذكرة حافلة",
          "TaxiTicket": "تذكرة تاكسي",
          "VanTicket": "تذكرة فان",
          "Cargo": "شحن"
        },

        "terms": {
          "title": "الشروط والأحكام",
          "introduction": "تحكم هذه الشروط والأحكام استخدامك لنظام خدمات النقل للركاب. يرجى قراءة الشروط التالية بعناية قبل استخدام النظام. استخدام النظام يعني القبول الكامل لهذه الشروط.",
          "registration": {
            "title": "تسجيل المستخدم والمعلومات",
            "1_1": "يجب على المستخدمين إدخال معلومات هويتهم الكاملة والدقيقة أثناء التسجيل. المستخدمون مسؤولون عن دقة المعلومات المدخلة.",
            "1_2": "أي استخدام لمعلومات أو وثائق أشخاص آخرين دون إذن قانوني ممنوع ويعتبر مخالفة."
          },
          "booking": {
            "title": "حجز وتذاكر السفر",
            "2_1": "حجز وتذاكر السفر ممكن فقط من خلال النظام الرسمي للشركة والممثلين المعتمدين.",
            "2_2": "تغيير أو إلغاء الرحلة يخضع لسياسة الإلغاء الخاصة بالشركة كما هو مذكور في قسم 'سياسة الاسترداد' في النظام.",
            "2_3": "تختلف أسعار التذاكر حسب نوع المركبة، المسار، التاريخ والسعة، وتحدد وفقًا للوائح الشركة."
          },
          "responsibilities": {
            "title": "مسؤوليات المستخدمين (الركاب)",
            "3_1": "يجب على الركاب الحضور إلى نقطة المغادرة في الوقت المحدد؛ وإلا فإن الشركة لن تتحمل مسؤولية التأخيرات أو إلغاء الرحلة.",
            "3_2": "يحظر حمل أي مواد محظورة أو خطيرة أو غير قانونية، وسيكون الركاب مسؤولين بشكل كامل عن أي مخالفات.",
            "3_3": "الحفاظ على النظام، الآداب الاجتماعية، النظافة الشخصية واحترام الركاب الآخرين والسائقين أثناء الرحلة إلزامي."
          },
          "acceptance": "الدخول إلى النظام واستخدام خدماته يعني أن المستخدم قد قرأ وفهم وقبل جميع الشروط المذكورة أعلاه.",
          "images": {
            "about": "معلومات عنا",
            "story": "قصتنا",
            "mission": "مهمتنا"
          }
        },
        cancelpage: {
          paymentResult: 'نتيجة الدفع',
          paymentFailed: 'فشل في الدفع',
          paymentFailedMessage: 'للأسف، واجهت عملية الدفع مشكلة.',
          homePage: 'الصفحة الرئيسية'
        },
        success: {
          paymentResult: 'نتيجة الدفع',
          paymentSuccess: 'تم الدفع بنجاح!',
          orderRegistered: 'تم تسجيل طلبك بنجاح.',
          trackingCode: 'كود التتبع'
        },
        "fareBreakdown": {
          "ticketPrice": "سعر التذكرة",
          "ticketCounts": "عدد التذاكر",
          "endPrice": "السعر النهائي",
          "rial": "ريال"
        }

      }
    },
    pa: {
      translation: {
        about: {
          storyTitle: "زموږ کیسه",
          storyContent: "د پارتو سیر ایرانی نړیواله شرکت په ۱۹۹۷ کې تاسیس شوی او د نړیوال مسافر لیږد خدماتو کې له ۲۷ کلونو څخه زیات تجربه لري. د مدیر عامل ناصر کلانتاري په مشرۍ، موږ یو نوی پارک لرو چې ۳۰ بسونه، ۲۴ وینونه او ۵۴ ښاري موټرونه پکې شامل دي.",
          storyImageAlt: "زموږ د شرکت تاریخ",
          networkTitle: "زموږ شبکه",
          networkContent1: "په ساري، مشهد، قم، اهواز، زاهدان، تایباد، زابل، چابهار، رشت، تهران او ایلام کې د څانګو سره، موږ لاندې مهم نړیوال لارې خدمت کوو:",
          route1: "مشهد-هرات / تایباد-هرات",
          route2: "زابل-کندهار / زاهدان-نیمروز",
          route3: "زاهدان-کویټه / چابهار-کراچي",
          route4: "اهواز-بصره / قم-نجف",
          route5: "ساري-نجف / رشت-نجف",
          networkImageAlt: "زموږ د لیږد شبکه",
          achievementsTitle: "زموږ لاسته راوړنې",
          achievementsContent1: "موږ د ترکمنستان، عراق او افغانستان سره قوي د لیږد شراکتونه جوړ کړي دي. په اربعین کې، موږ د حاجیانو لپاره د غوره لیږد خدماتو وړاندې کوونکی بلل شوي یو، چې ځانګړي پارکونه او مسلکي چلوونکي وړاندې کوو.",
          achievementsContent2: "د کورني وړتیاو او سیمه ایزو اړیکو پر بنسټ، موږ په لیږد، سیاحت او مسافر خدماتو کې د پایدار پراختیا لپاره ژمن یو، د ایران د ۲۰۲۵ لیدلوري په لور کار کوو چې یو سیمه ایز سیاحتي مرکز وي.",
          achievementsImageAlt: "زموږ لاسته راوړنې"
        },
        busSchedule: {
          days: {
            saturday: "شنبه",
            sunday: "یکشنبه",
            monday: "دوشنبه",
            tuesday: "سه‌شنبه",
            wednesday: "چهارشنبه",
            thursday: "پنجشنبه",
            friday: "جمعه"
          },
          noResults: "د بس جدول شتون نلري",
          seatsLeft: "پاتې څوکي",
          price: "قیمت",
          time: "د تګ وخت",
          bookNow: "اوس رزرو کړئ"
        },
        navbar: {
          home: "کور",
          about: "زموږ په اړه",
          stations: "سټیشنونه",
          loginWithGoogle: "د ګوګل په واسطه ننوتل",
          greeting: "سلام ",
          profile: "پروفایل",
          logout: "وتل",
          login: "ننوتل",
          user: "کارن",
          changeLanguage: "ژبه بدلول",
          logoutError: "وتل کې ناکام شو. بیا هڅه وکړئ"
        },
        mapList: {
          title: 'د څانګو معلومات',
          address: 'پته:',
          phone: 'تلیفون:',
          manager: 'مدیر:',
          mapUnavailable: 'نقشه اوس مهال شتون نلري',
          viewOnNeshan: '(په نشان کې وګورئ)',
          branch: '',
          toggleLanguage: 'فارسی',
          branches: {
            Taybad: 'تایباد',
            Zabol: 'زابل',
            Qom: 'قم',
            Sari: 'ساري',
            Ilam: 'ایلام',
            Ahvaz: 'اهواز',
            Mashhad: 'مشهد',
            Chabahar: 'چابهار'
          },
          addresses: {
            Taybad: 'د تایباد ټرمینل، بوټ ۱',
            Zabol: 'زابل، د رستم میدان، د ټرمینل بوټ ۱۳',
            Qom: 'د قم ټرمینل، د کوثر ټرمینل، د سوداګریز اتحادیې تر څنګ',
            Sari: 'د دولت مسافر ټرمینل، د دفاع مقدس بولوار',
            Ilam: 'ایلام، د چالسرا شهدا بولوار، د ایلام د ښاروالۍ د شهدا مسافر ټرمینل',
            Ahvaz: 'اهواز، د سیاحت ټرمینل، دوهم پوړ',
            Mashhad: 'مشهد، د امام رضا ټرمینل تر څنګ، د امام رضا ۶۹ کونج',
            Chabahar: 'د چابهار مرکزي ولسوالۍ، د چابهار مسافر ټرمینل'
          },
          managers: {
            Taybad: 'ښاغلی بهروز یزداني',
            Zabol: 'ښاغلی رجب اکبري',
            Qom: 'ښاغلی نزار ابولسان',
            Sari: 'ښاغلی ناصر کلانتري',
            Ilam: 'ښاغلی ماشاءالله رحمتي',
            Ahvaz: 'ښاغلی حسین کلانتري',
            Mashhad: 'ښاغلی ناصر کلانتري',
            Chabahar: 'ښځه بهناز یزداني'
          }
        },
        search: {
          source: 'سرچینه',
          destination: 'منزل',
          date: 'نېټه',
          searchButton: 'لټون',
          alertMessage: 'مهرباني وکړئ ټول توکي وټاکئ',
          transportType: 'ډول',
          bus: 'بس',
          taxi: 'ټکسي',
          van: 'وین',
          cargo: 'بار'
        },
        contact: {
          title: 'موږ سره اړیکه',
          help: {
            title: 'ژوندۍ خبرې اترې او مرستې مرکز',
            detail1: 'د یوې اوریدونکې پوښتنې لپاره ګړۍ ځواب غواړئ؟',
            detail2: 'زموږ د مرستې مرکز ته د FAQs لپاره مراجعه وکړئ یا د ژوندي استازي سره ورسره خبرې وکړئ.'
          },
          phone: {
            title: 'موبایل او وٹساپ',
            label: 'تلیفون'
          },
          email: {
            title: 'موږ ته بریښنالیک واستوئ'
          }
        },
        login: {
          phoneLabel: 'د تلیفون شمېره',
          submitButton: 'سپارل',
          codeLabel: 'د تایید کوډ',
          modalTitle: 'مهرباني وکړئ ستاسو تلیفون ته لیږل شوی کوډ دننه کړئ',
          verifying: 'د تایید کولو...',
          resendButton: 'کوډ بیا واستوئ',
          resendCountdown: 'په {{count}} ثانیو کې بیا واستوئ',
          codeEmptyAlert: 'د تایید کوډ اړین دی',
          title: 'ننوتل'
        },
        buttons: {
          more: 'نور',
          payment: 'تادیه'
        },
        booking: {
          title: 'د رزرو تفصیلات'
        },
        labels: {
          company: 'شرکت',
          details: 'تفصیلات',
          busFront: 'د بس مخ'
        },
        passenger: {
          title: 'مسافر',
          name: 'نوم',
          family: 'تخلص',
          mobile: 'د موبایل شمېره',
          birthday: 'د زیږون نېټه (کال/میاشت/ورځ)',
          nationalCode: 'ملي کوډ',
          male: 'نارینه',
          female: 'ښځینه'
        },
        validation: {
          nameRequired: 'نوم اړین دی',
          minName: 'د نوم لږترلږه 3 توري',
          familyRequired: 'تخلص اړین دی',
          minFamily: 'د تخلص لږترلږه 3 توري',
          mobileRequired: 'د موبایل شمېره اړینه ده',
          minMobile: 'د موبایل لږترلږه 11 شمېرې',
          birthdayRequired: 'د زیږون نېټه اړینه ده',
          nationalCodeRequired: 'ملي کوډ اړین دی',
          minPassenger: 'لږترلږه یو مسافر اړین دی'
        },
        seat: {
          male: 'سړی',
          female: 'ښځه'
        },
        busDetails: {
          source: "سرچینه",
          destination: "منزل",
          dateTime: "نېټه او وخت",
          type: "ډول",
          sourceIconAlt: "د سرچینې نښه",
          destinationIconAlt: "د منزل نښه",
          arrowIconAlt: "د غشي نښه",
          scheduleIconAlt: "د جدول نښه",
          facilitiesIconAlt: "د اسانتیاو نښه"
        },
        busTicket: {
          currency: "ریال",
          seatsLeft: "{{count}} پاتې څوکي",
          busIconAlt: "د بس نښه"
        },
        footer: {
          usefulLinks: "مفید لینکونه",
          aboutUs: "زموږ په اړه",
          privacyPolicy: "د محرمیت تګلاره",
          termsConditions: "شرایط او ضوابط",
          support: "ملاتړ",
          refundPolicy: "د بیرته ورکولو تګلاره",
          contactUs: "موږ سره اړیکه",
          copyright: " kalanholding.com - ویب پاڼه د لخوا ډیزاین شوی ",
          logoAlt: "د شرکت نښه",
          frameAlt: "د شرکت فریم"
        },
        home: {
          advertise: "اعلان",
          ad1Title: "اعلان ۱",
          ad2Title: "اعلان ۲",
          ad1Alt: "د لومړي اعلان انځور",
          ad2Alt: "د دوهم اعلان انځور"
        },
        profile: {
          profileDetails: "د پروفایل تفصیلات",
          name: "نوم",
          mobile: "موبایل",
          email: "بریښنالیک",
          noName: "هیڅ نوم نه دی ورکړ شوی",
          noMobile: "هیڅ د موبایل شمېره نشته",
          noEmail: "هیڅ بریښنالیک نشته",
          profileImageAlt: "د پروفایل انځور",
          upcoming: "راتلونکي",
          completed: "بشپړ شوي",
          filters: {
            lastWeek: "تیره اونۍ",
            lastMonth: "تیره میاشت",
            last3Months: "وروستي ۳ میاشتې",
            last6Months: "وروستي ۶ میاشتې"
          }
        },
        navbar2: {
          "travelServices": "د سفر خدمات",
          "busTicket": "د بس تکت",
          "TaxiTicket": "د ټاکسي تکت",
          "VanTicket": "د وین تکت",
          "Cargo": "بار وړل"
        },

        "terms": {
          "title": "شرایط او ضوابط",
          "introduction": "دا شرایط او ضوابط د مسافر حمل و نقل د خدمت سیسټم د کارولو لپاره دي. مهرباني وکړئ د سیسټم د کارولو دمخه لاندې شرایط په دقت سره ولولئ. د سیسټم کارول د دې شرایطو د بشپړ منلو په معنی دي.",
          "registration": {
            "title": "د کارونکي ثبت او معلومات",
            "1_1": "کارونکي اړ دي چې د ثبت په وخت کې خپل بشپړ او دقیق هویتي معلومات داخل کړي. د داخل شوي معلوماتو د صحت مسؤلیت د کارونکي پر غاړه دی.",
            "1_2": "د بل چا د معلوماتو یا اسنادو هر ډول کارول د قانوني اجازې پرته منع دي او د تخلف په توګه ګڼل کیږي."
          },
          "booking": {
            "title": "د ټکټ رزرو او پیرود",
            "2_1": "د ټکټ رزرو او پیرود یوازې د شرکت د رسمي سیسټم او مجاز استازو له لارې ممکن دی.",
            "2_2": "د سفر بدلون یا لغوه کول د شرکت د لغوه کولو پالیسي تابع دي چې د سیسټم د 'د بیرته ورکړې پالیسي' برخه کې اعلان شوي دي.",
            "2_3": "د ټکټ نرخونه د موټر ډول، لار، نیټه او ظرفیت په اساس توپیر لري او د شرکت د مقرراتو مطابق ټاکل کیږي."
          },
          "responsibilities": {
            "title": "د کارونکو (مسافرو) مسؤلیتونه",
            "3_1": "مسافر اړ دي چې په ټاکل شوي وخت کې د حرکت په ځای کې حاضر شي؛ که نه نو شرکت به د وروستي یا د سفر د نه ترسره کیدو مسؤلیت ونه لري.",
            "3_2": "د هر ډول منع شوي، خطرناک یا غیرقانوني توکو لیږد منع دی او په دې صورت کې مسؤلیت مستقیم د مسافر پر غاړه دی.",
            "3_3": "د سفر په جریان کې د نظم، ټولنیزو اصولو، شخصي صفایي او د نورو مسافرو او چلوونکو درناوي ساتل اړین دي."
          },
          "acceptance": "د سیسټم ته ننوتل او د هغه د خدمتونو کارول په دې معنی دي چې کارونکي ټول پورتنۍ شرایط لوستلي، پوه شوي او منلي دي.",
          "images": {
            "about": "زموږ په اړه",
            "story": "زموږ کیسه",
            "mission": "زموږ ماموریت"
          }
        },
        cancelpage: {
          paymentResult: 'د پیسو د ورکړې پایله',
          paymentFailed: 'پیسې ورکړه ناکامه شوه',
          paymentFailedMessage: 'له بده مرغه، ستاسو د پیسو د ورکړې په بهیر کې یوه ستونزه رامنځته شوه.',
          homePage: 'اصلی پاڼه'
        },
        success: {
          paymentResult: 'د پیسو د ورکړې پایله',
          paymentSuccess: 'پیسې په بریالیتوب سره ورکړل شوې!',
          orderRegistered: 'ستاسو امر په بریالیتوب سره ثبت شو.',
          trackingCode: 'د تعقیب کوډ'
        },
        "fareBreakdown": {
          "ticketPrice": "د تکت بیه",
          "ticketCounts": "د تکت شمېر",
          "endPrice": "ختم بیه",
          "rial": "ریال"
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