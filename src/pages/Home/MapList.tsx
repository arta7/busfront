// // // import React from 'react';
// // // import './MapList.css'; // فایل CSS جداگانه برای استایل‌دهی

// // // const MapList = () => {
// // //   const branches = [
// // //     {
// // //       id: 'تایباد',
// // //       address: ' تایباد ترمینال غرفه ۱',
// // //       phoneNumber: '۰۵۱۵۴۵۳۹۴۳۲',
// // //       manager: ' اقای بهروز یزدانی',
// // //       staticMapUrl : 'https://api.neshan.org/v4/static?key=service.c8299aba7c6346768feb579c1f9a2962&type=neshan&width=500&height=500&zoom=12&center=32.657307%2C51.677579&markerToken=101139.nRmybq5'
// // //       // staticMapUrl: 'https://static.neshan.org/sdk/openlayers/2.1.4/static-map.php?center=34.74107360839844,60.79189682006836&zoom=15&size=600x300&marker=red&api-key=web.3ca0778c267c4abf97865a18374d8386'
// // //     },
// // //     {
// // //       id: 'زابل',
// // //       address: 'زابل فلکه رستم ترمینال غرفه ۱۳',
// // //       phoneNumber: '۰۵۴۳۲۲۹۵۱۵۳',
// // //       manager: 'رجب اکبری',
// // //       staticMapUrl: 'https://static.neshan.org/sdk/openlayers/2.1.4/static-map.php?center=31.001623153686523,61.47990036010742&zoom=15&size=600x300&marker=red&api-key=web.3ca0778c267c4abf97865a18374d8386'
// // //     },
// // //     {
// // //       id: 'قم',
// // //       address: ' قم ترمینال پایانه کوثر جنب انجمن صنفی',
// // //       phoneNumber: '۰۲۵۳۶۶۴۴۰۷۱',
// // //       manager: ' نزار ابولسان',
// // //       staticMapUrl: 'https://static.neshan.org/sdk/openlayers/2.1.4/static-map.php?center=34.64143753051758,50.88299560546875&zoom=15&size=600x300&marker=red&api-key=web.3ca0778c267c4abf97865a18374d8386'
// // //     },
// // //     {
// // //       id: 'ساری',
// // //       address: 'بلوار دفاع مقدس پایانه مسافربری دولت ',
// // //       phoneNumber: '۰۱۱۳۳۴۰۷۷۷۰',
// // //       manager: ' ناصر کلانتری',
// // //       staticMapUrl: 'https://static.neshan.org/sdk/openlayers/2.1.4/static-map.php?center=36.579219818115234,53.07212448120117&zoom=15&size=600x300&marker=red&api-key=web.3ca0778c267c4abf97865a18374d8386'
// // //     },
// // //     {
// // //       id: 'ایلام',
// // //       address: 'ایلام بلوار شهدای چالسرا پایانه مسافربری شهدای شهرداری ایلام',
// // //       phoneNumber: '',
// // //       manager: 'ماشاالله رحمتی ',
// // //       staticMapUrl: 'https://static.neshan.org/sdk/openlayers/2.1.4/static-map.php?center=33.6240119934082,46.4022331237793&zoom=15&size=600x300&marker=red&api-key=web.3ca0778c267c4abf97865a18374d8386'
// // //     },
// // //     {
// // //       id: 'اهواز',
// // //       address: 'اهواز ترمینال سیاحت طبقه ۲',
// // //       phoneNumber: '',
// // //       manager: 'حسین کلانتری',
// // //       staticMapUrl: 'https://static.neshan.org/sdk/openlayers/2.1.4/static-map.php?center=31.335302352905273,48.63270950317383&zoom=15&size=600x300&marker=red&api-key=web.3ca0778c267c4abf97865a18374d8386'
// // //     },
// // //     {
// // //       id: 'مشهد',
// // //       address: 'مشهد جنب پایانه امام رضا نبش امام رضا 69',
// // //       phoneNumber: '۰۵۱۳۸۵۸۴۹۱۵',
// // //       manager: '',
// // //       staticMapUrl: 'https://static.neshan.org/sdk/openlayers/2.1.4/static-map.php?center=36.26197052001953,59.593116760253906&zoom=15&size=600x300&marker=red&api-key=web.3ca0778c267c4abf97865a18374d8386'
// // //     },
// // //     {
// // //       id: 'چابهار',
// // //       address: 'چابهار بخش مرکزی پایانه مسافربری چابهار',
// // //       phoneNumber: '۰۹۱۵۴۵۴۰۵۳۶',
// // //       manager: 'بهناز یزدانی',
// // //       staticMapUrl: 'https://static.neshan.org/sdk/openlayers/2.1.4/static-map.php?center=25.29828643798828,60.69473648071289&zoom=15&size=600x300&marker=red&api-key=web.3ca0778c267c4abf97865a18374d8386'
// // //     }
// // //   ];

// // //   const chunkArray = (array, size) => {
// // //     const chunked_arr = [];
// // //     let index = 0;
// // //     while (index < array.length) {
// // //       chunked_arr.push(array.slice(index, size + index));
// // //       index += size;
// // //     }
// // //     return chunked_arr;
// // //   }

// // //   const chunkedBranches = chunkArray(branches, 2);

// // //   return (
// // //     <div className="branch-info-container">
// // //       <h1>اطلاعات شعب</h1>
// // //       {chunkedBranches.map((row, rowIndex) => (
// // //         <div key={rowIndex} className="row">
// // //           {row.map(branch => (
// // //             <div key={branch.id} className="branch-item">
// // //               <h3>شعبه {branch.id}</h3>
// // //               <p><b>آدرس:</b> {branch.address}</p>
// // //               <p><b>شماره تماس:</b> {branch.phoneNumber}</p>
// // //               <p><b>مدیر شعبه:</b> {branch.manager}</p>
// // //               {branch.staticMapUrl && (
// // //                 <div className="map-container">
// // //                   <img
// // //                     src={branch.staticMapUrl}
// // //                     alt={`نقشه شعبه ${branch.id}`}
// // //                     className="static-map"
// // //                   />
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default MapList;


// // import React , {useState} from 'react';
// // import './MapList.css';
// // import L from 'leaflet';

// // const MapList = () => {
// //    const [imageErrors, setImageErrors] = useState({});

// //    const defaultIcon = L.icon({
// //      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
// //      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
// //      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// //      iconSize: [25, 41],
// //      iconAnchor: [12, 41],
// //      popupAnchor: [1, -34],
// //      shadowSize: [41, 41]
// //    });

// //   const handleImageError = (branchId) => {
// //     setImageErrors(prev => ({ ...prev, [branchId]: true }));
// //   };
// //   // Function to generate secure Neshan static map URL
// //   const getNeshanMapUrl = (lat, lng) => {
// //     return `https://api.neshan.org/v4/static?key=service.c8299aba7c6346768feb579c1f9a2962&type=neshan&width=500&height=300&zoom=15&center=${lat},${lng}&markertoken=162341.urwAJgOr`;
// //   };

// //   const branches = [
// //     {
// //       id: 'تایباد',
// //       address: 'تایباد ترمینال غرفه ۱',
// //       phoneNumber: '۰۵۱۵۴۵۳۹۴۳۲',
// //       manager: 'اقای بهروز یزدانی',
// //       location: '34.741073,60.791896',
// //       staticMapUrl: getNeshanMapUrl('34.741073', '60.791896')
// //     },
// //     {
// //       id: 'زابل',
// //       address: 'زابل فلکه رستم ترمینال غرفه ۱۳',
// //       phoneNumber: '۰۵۴۳۲۲۹۵۱۵۳',
// //       manager: 'رجب اکبری',
// //       location: '31.001623,61.479900',
// //       staticMapUrl: getNeshanMapUrl('31.001623', '61.479900')
// //     },
// //     {
// //       id: 'قم',
// //       address: 'قم ترمینال پایانه کوثر جنب انجمن صنفی',
// //       phoneNumber: '۰۲۵۳۶۶۴۴۰۷۱',
// //       manager: 'نزار ابولسان',
// //       location: '34.641437,50.882995',
// //       staticMapUrl: getNeshanMapUrl('34.641437', '50.882995')
// //     },
// //     {
// //       id: 'ساری',
// //       address: 'بلوار دفاع مقدس پایانه مسافربری دولت',
// //       phoneNumber: '۰۱۱۳۳۴۰۷۷۷۰',
// //       manager: 'ناصر کلانتری',
// //       location: '36.579219,53.072124',
// //       staticMapUrl: getNeshanMapUrl('36.579219', '53.072124')
// //     },
// //     {
// //       id: 'ایلام',
// //       address: 'ایلام بلوار شهدای چالسرا پایانه مسافربری شهدای شهرداری ایلام',
// //       phoneNumber: '',
// //       manager: 'ماشاالله رحمتی',
// //       location: '33.624011,46.402233',
// //       staticMapUrl: getNeshanMapUrl('33.624011', '46.402233')
// //     },
// //     {
// //       id: 'اهواز',
// //       address: 'اهواز ترمینال سیاحت طبقه ۲',
// //       phoneNumber: '',
// //       manager: 'حسین کلانتری',
// //       location: '31.335302,48.632709',
// //       staticMapUrl: getNeshanMapUrl('31.335302', '48.632709')
// //     },
// //     {
// //       id: 'مشهد',
// //       address: 'مشهد جنب پایانه امام رضا نبش امام رضا 69',
// //       phoneNumber: '۰۵۱۳۸۵۸۴۹۱۵',
// //       manager: '',
// //       location: '36.261970,59.593116',
// //       staticMapUrl: getNeshanMapUrl('36.261970', '59.593116')
// //     },
// //     {
// //       id: 'چابهار',
// //       address: 'چابهار بخش مرکزی پایانه مسافربری چابهار',
// //       phoneNumber: '۰۹۱۵۴۵۴۰۵۳۶',
// //       manager: 'بهناز یزدانی',
// //       location: '25.298286,60.694736',
// //       staticMapUrl: getNeshanMapUrl('25.298286', '60.694736')
// //     }
// //   ];

// //   // Responsive layout - 2 columns on desktop, 1 on mobile
// //   const chunkArray = (array, size) => {
// //     return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
// //       array.slice(i * size, i * size + size)
// //     );
// //   };

// //   const chunkedBranches = chunkArray(branches, 2);

// //   return (
// //     <div className="branch-info-container">
// //       <h1 className="page-title">اطلاعات شعب</h1>
      
// //       {chunkedBranches.map((row, rowIndex) => (
// //         <div key={rowIndex} className="branch-row">
// //           {row.map(branch => (
// //             <div key={branch.id} className="branch-card">
// //               <div className="branch-header">
// //                 <h3 className="branch-name">شعبه {branch.id}</h3>
// //               </div>
              
// //               <div className="branch-details">
// //                 <div className="detail-item">
// //                   <span className="detail-label">آدرس:</span>
// //                   <span className="detail-value">{branch.address}</span>
// //                 </div>
                
// //                 {branch.phoneNumber && (
// //                   <div className="detail-item">
// //                     <span className="detail-label">شماره تماس:</span>
// //                     <span className="detail-value">{branch.phoneNumber}</span>
// //                   </div>
// //                 )}
                
// //                 {branch.manager && (
// //                   <div className="detail-item">
// //                     <span className="detail-label">مدیر شعبه:</span>
// //                     <span className="detail-value">{branch.manager}</span>
// //                   </div>
// //                 )}
// //               </div>
              
// //                {branch.staticMapUrl ? (
// //                 <a 
// //                    href={`https://neshan.org/maps/@${branch.location},15z`} 
// //                   target="_blank" 
// //                   rel="noopener noreferrer"
// //                 >
// //               <img 
// //                 src={branch.staticMapUrl} 
// //                 alt={`نقشه شعبه ${branch.id}`}
// //                 className="static-map"
// //                 onError={() => handleImageError(branch.id)}
// //               />
// //               </a>
// //             ) : (
// //               <div className="map-error">
// //                 نقشه در حال حاضر قابل نمایش نیست
// //                 <a 
// //                   href={`https://neshan.org/maps/@${branch.location},15z`} 
// //                   target="_blank" 
// //                   rel="noopener noreferrer"
// //                 >
// //                   (مشاهده در سایت نشان)
// //                 </a>
// //               </div>
// //             )}
// //             </div>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MapList;


// import React, { useState } from 'react';
// import './MapList.css';
// import L from 'leaflet';

// const MapList = () => {
//   const [imageErrors, setImageErrors] = useState({});

//   const defaultIcon = L.icon({
//     iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//     iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//     shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41]
//   });

//   const handleImageError = (branchId) => {
//     setImageErrors(prev => ({ ...prev, [branchId]: true }));
//   };

//   const getNeshanMapUrl = (lat, lng) => {
//     return `https://api.neshan.org/v4/static?key=service.c8299aba7c6346768feb579c1f9a2962&type=neshan&width=500&height=300&zoom=15&center=${lat},${lng}&markertoken=162341.urwAJgOr`;
//   };

//   const branches = [
//     {
//       id: 'Taybad',
//       address: 'Taybad Terminal, Booth 1',
//       phoneNumber: '05154539432',
//       manager: 'Mr. Behrouz Yazdani',
//       location: '34.741073,60.791896',
//       staticMapUrl: getNeshanMapUrl('34.741073', '60.791896')
//     },
//     {
//       id: 'Zabol',
//       address: 'Zabol, Rostam Square, Terminal Booth 13',
//       phoneNumber: '05432295153',
//       manager: 'Rajab Akbari',
//       location: '31.001623,61.479900',
//       staticMapUrl: getNeshanMapUrl('31.001623', '61.479900')
//     },
//     {
//       id: 'Qom',
//       address: 'Qom Terminal, Kowsar Terminal, next to the Trade Union',
//       phoneNumber: '02536644071',
//       manager: 'Nezar Abolsan',
//       location: '34.641437,50.882995',
//       staticMapUrl: getNeshanMapUrl('34.641437', '50.882995')
//     },
//     {
//       id: 'Sari',
//       address: 'Dolat Passenger Terminal, Defa Moghaddas Blvd',
//       phoneNumber: '01133407770',
//       manager: 'Nasser Kalantari',
//       location: '36.579219,53.072124',
//       staticMapUrl: getNeshanMapUrl('36.579219', '53.072124')
//     },
//     {
//       id: 'Ilam',
//       address: 'Ilam, Chalsara Martyrs Blvd, Ilam Municipality Martyrs Passenger Terminal',
//       phoneNumber: '',
//       manager: 'Mashaallah Rahmati',
//       location: '33.624011,46.402233',
//       staticMapUrl: getNeshanMapUrl('33.624011', '46.402233')
//     },
//     {
//       id: 'Ahvaz',
//       address: 'Ahvaz, Sayahat Terminal, 2nd Floor',
//       phoneNumber: '',
//       manager: 'Hossein Kalantari',
//       location: '31.335302,48.632709',
//       staticMapUrl: getNeshanMapUrl('31.335302', '48.632709')
//     },
//     {
//       id: 'Mashhad',
//       address: 'Mashhad, next to Imam Reza Terminal, corner of Imam Reza 69',
//       phoneNumber: '05138584915',
//       manager: '',
//       location: '36.261970,59.593116',
//       staticMapUrl: getNeshanMapUrl('36.261970', '59.593116')
//     },
//     {
//       id: 'Chabahar',
//       address: 'Chabahar Central District, Chabahar Passenger Terminal',
//       phoneNumber: '09154540536',
//       manager: 'Behnaz Yazdani',
//       location: '25.298286,60.694736',
//       staticMapUrl: getNeshanMapUrl('25.298286', '60.694736')
//     }
//   ];

//   const chunkArray = (array, size) => {
//     return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
//       array.slice(i * size, i * size + size)
//     );
//   };

//   const chunkedBranches = chunkArray(branches, 2);

//   return (
//     <div className="branch-info-container">
//       <h1 className="page-title">Branch Information</h1>
      
//       {chunkedBranches.map((row, rowIndex) => (
//         <div key={rowIndex} className="branch-row">
//           {row.map(branch => (
//             <div key={branch.id} className="branch-card">
//               <div className="branch-header">
//                 <h3 className="branch-name">{branch.id} Branch</h3>
//               </div>
              
//               <div className="branch-details">
//                 <div className="detail-item">
//                   <span className="detail-label">Address:</span>
//                   <span className="detail-value">{branch.address}</span>
//                 </div>
                
//                 {branch.phoneNumber && (
//                   <div className="detail-item">
//                     <span className="detail-label">Phone:</span>
//                     <span className="detail-value">{branch.phoneNumber}</span>
//                   </div>
//                 )}
                
//                 {branch.manager && (
//                   <div className="detail-item">
//                     <span className="detail-label">Manager:</span>
//                     <span className="detail-value">{branch.manager}</span>
//                   </div>
//                 )}
//               </div>
              
//               {branch.staticMapUrl ? (
//                 <a 
//                   href={`https://neshan.org/maps/@${branch.location},15z`} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <img 
//                     src={branch.staticMapUrl} 
//                     alt={`${branch.id} Branch Map`}
//                     className="static-map"
//                     onError={() => handleImageError(branch.id)}
//                   />
//                 </a>
//               ) : (
//                 <div className="map-error">
//                   Map is currently unavailable
//                   <a 
//                     href={`https://neshan.org/maps/@${branch.location},15z`} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                   >
//                     (View on Neshan)
//                   </a>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MapList;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MapList.css';
import L from 'leaflet';

const MapList = () => {
  const { t, i18n } = useTranslation();
  const [imageErrors, setImageErrors] = useState({});

  const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const handleImageError = (branchId) => {
    setImageErrors(prev => ({ ...prev, [branchId]: true }));
  };

  const getNeshanMapUrl = (lat, lng) => {
    return `https://api.neshan.org/v4/static?key=service.c8299aba7c6346768feb579c1f9a2962&type=neshan&width=500&height=300&zoom=15&center=${lat},${lng}&markertoken=162341.urwAJgOr`;
  };

  const branches = [
    {
      id: 'Taybad',
      location: '34.741073,60.791896',
      staticMapUrl: getNeshanMapUrl('34.741073', '60.791896'),
      phoneNumber: '05154539432'
    },
    {
      id: 'Zabol',
      location: '31.001623,61.479900',
      staticMapUrl: getNeshanMapUrl('31.001623', '61.479900'),
      phoneNumber: '05432295153'
    },
    {
      id: 'Qom',
      location: '34.641437,50.882995',
      staticMapUrl: getNeshanMapUrl('34.641437', '50.882995'),
      phoneNumber: '02536644071'
    },
    {
      id: 'Sari',
      location: '36.579219,53.072124',
      staticMapUrl: getNeshanMapUrl('36.579219', '53.072124'),
      phoneNumber: '01133407770'
    },
    {
      id: 'Ilam',
      location: '33.624011,46.402233',
      staticMapUrl: getNeshanMapUrl('33.624011', '46.402233'),
      phoneNumber: ''
    },
    {
      id: 'Ahvaz',
      location: '31.335302,48.632709',
      staticMapUrl: getNeshanMapUrl('31.335302', '48.632709'),
      phoneNumber: ''
    },
    {
      id: 'Mashhad',
      location: '36.261970,59.593116',
      staticMapUrl: getNeshanMapUrl('36.261970', '59.593116'),
      phoneNumber: '05138584915'
    },
    {
      id: 'Chabahar',
      location: '25.298286,60.694736',
      staticMapUrl: getNeshanMapUrl('25.298286', '60.694736'),
      phoneNumber: '09154540536'
    }
  ];

  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  const chunkedBranches = chunkArray(branches, 2);

  // const toggleLanguage = () => {
  //   i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa');
  // };

  return (
    <div className={`branch-info-container ${['fa', 'ar','pa'].includes(i18n.language)?  'rtl' : 'ltr'}`}>
     
      
      <h1 className="page-title">{t('mapList.title')}</h1>
      
      {chunkedBranches.map((row, rowIndex) => (
        <div key={rowIndex} className="branch-row">
          {row.map(branch => (
            <div key={branch.id} className="branch-card">
              <div className="branch-header">
                <h3 className="branch-name">
                  {t(`mapList.branches.${branch.id}`)} {t('mapList.branch')}
                </h3>
              </div>
              
              <div className="branch-details">
                <div className="detail-item">
                  <span className="detail-label">{t('mapList.address')}</span>
                  <span className="detail-value">{t(`mapList.addresses.${branch.id}`)}</span>
                </div>
                
                {branch.phoneNumber && (
                  <div className="detail-item">
                    <span className="detail-label">{t('mapList.phone')}</span>
                    <span className="detail-value">{branch.phoneNumber}</span>
                  </div>
                )}
                
                {t(`mapList.managers.${branch.id}`) && (
                  <div className="detail-item">
                    <span className="detail-label">{t('mapList.manager')}</span>
                    <span className="detail-value">{t(`mapList.managers.${branch.id}`)}</span>
                  </div>
                )}
              </div>
              
              <div className="map-wrapper">
                {branch.staticMapUrl ? (
                  <a 
                    href={`https://neshan.org/maps/@${branch.location},15z`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    <img 
                      src={branch.staticMapUrl} 
                      alt={`${t(`mapList.branches.${branch.id}`)} ${t('mapList.branch')} Map`}
                      className="neshan-map"
                      onError={() => handleImageError(branch.id)}
                    />
                  </a>
                ) : (
                  <div className="map-error">
                    {t('mapList.mapUnavailable')}
                    <a 
                      href={`https://neshan.org/maps/@${branch.location},15z`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t('mapList.viewOnNeshan')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MapList;