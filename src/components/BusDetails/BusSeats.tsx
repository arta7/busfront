// // // // // import React, { useState, useMemo } from "react";

// // // // // import LikeUnlike from "./LikeUnlike";
// // // // // import { MarginOutlined } from "@mui/icons-material";


// // // // // const SEAT_STATUS = {
// // // // //   AVAILABLE: 1,
// // // // //   BOOKED: 2,
// // // // // };

// // // // // const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress }) => {
// // // // //   const getStatusColor = () => {
// // // // //     switch (status) {
// // // // //       case 0:
// // // // //         return 'rgba(161, 162, 162, 0.5)';
// // // // //       case 2:
// // // // //         return '#1c38bb';
// // // // //       case 3:
// // // // //         return '#1c38bb';
// // // // //       case 1:
// // // // //         return '#1c38bb';
// // // // //       default:
// // // // //         return 'rgb(2, 146, 129)';
// // // // //     }
// // // // //   };



// // // // //   //console.log({index})
// // // // //   //console.log({RowSeats})

// // // // //   let marginLeft = index === RowSeats ? '5%' : '1%';

// // // // //   return (
// // // // //     <div style={{ ...styles.seat ,marginLeft: marginLeft,}}>
// // // // //       <LikeUnlike
// // // // //         text={status == 2 ? 'آقا' : status == 3 ? 'خانم' : chairNumber}
// // // // //         LikeColour={getStatusColor()}
// // // // //         UnlikeColour={getStatusColor()}
// // // // //         index={status}
// // // // //         data={data}
// // // // //         DefaultStyle={{ height: '35px', width: '25px', }}
// // // // //         ViewStyle={{ height: '3px', }}
// // // // //         //  onPress={onPress}
// // // // //         setData={setData}
// // // // //         BusPerson={BusPerson}
// // // // //         setBusPerson={setBusPerson}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
// // // // //   const [selectedSeats, setSelectedSeats] = useState([]);

// // // // //   const handleSeatPress = (chairNumber) => {
// // // // //     const isSelected = selectedSeats.includes(chairNumber);
// // // // //     setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
// // // // //   };

// // // // //   const renderRow = (row) => {
// // // // //     const seats = data?.seates?.filter((seat) => seat.row === row).filter(s => s.chairNumber != -1);
// // // // //     const isTwoColumns = seats.length === 2;
// // // // //     var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2
// // // // //     return (
// // // // //       <div style={styles.row}>
// // // // //         {seats?.map((seat, index) => (
// // // // //           <BusSeat
// // // // //             key={seat.chairNumber}
// // // // //             chairNumber={seat.chairNumber}
// // // // //             status={seat.status}
// // // // //             onPress={() => handleSeatPress(seat.chairNumber)}
// // // // //             style={isTwoColumns ? styles.seatTwoColumns : styles.seatFourColumns}
// // // // //             index={seat.column}
// // // // //             RowSeats={RowSeats}
// // // // //             data={data}
// // // // //             setData={setData}
// // // // //             BusPerson={BusPerson}
// // // // //             setBusPerson={setBusPerson}
// // // // //           />
// // // // //         ))}
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       {data?.seates?.reduce((acc, seat) => {
// // // // //         if (!acc.currentRow || acc.currentRow !== seat.row) {
// // // // //           acc.currentRow = seat.row;
// // // // //           acc.rows.push(renderRow(seat.row));
// // // // //         }
// // // // //         return acc;
// // // // //       }, { rows: [], currentRow: null }).rows}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const styles = {
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     flexDirection: 'column',
// // // // //   },
// // // // //   row: {
// // // // //     flexDirection: 'row',
// // // // //     // justifyContent: 'center',
// // // // //     // marginBottom: '10px',
// // // // //     width: '97%'
// // // // //     // ,marginLeft: '10px',marginRight:'1%'
// // // // //     ,display:'flex',
// // // // //   },
// // // // //   seat: {
// // // // //     padding: '10px',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //   },
// // // // //   seatText: {
// // // // //     fontSize: '8px',
// // // // //   },
// // // // //   seatTwoColumns: {
// // // // //     flex: 0.25, 
// // // // //   },
// // // // //   seatFourColumns: {
// // // // //     flex: 0.2,display:'flex',
// // // // //   },
// // // // // };

// // // // // export default BusSeats;


// // // // import React, { useState, useMemo } from "react";
// // // // import LikeUnlike from "./LikeUnlike";

// // // // const SEAT_STATUS = {
// // // //   AVAILABLE: 1,
// // // //   BOOKED: 2,
// // // // };

// // // // const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress, isSpacer }) => {
// // // //   const getStatusColor = () => {
// // // //     switch (status) {
// // // //       case 0:
// // // //         return 'rgba(161, 162, 162, 0.5)';
// // // //       case 2:
// // // //         return '#1c38bb';
// // // //       case 3:
// // // //         return '#1c38bb';
// // // //       case 1:
// // // //         return '#1c38bb';
// // // //       default:
// // // //         return 'rgb(2, 146, 129)';
// // // //     }
// // // //   };

// // // //   let marginLeft = index === RowSeats ? '1%' : '1%';

// // // //   if (isSpacer) {
// // // //     return <div style={{ width: '5%', height: '35px' }} />; // Adjust height to match seat height
// // // //   }

// // // //   return (
// // // //     <div style={{ ...styles.seat, marginLeft: marginLeft }}>
// // // //       <LikeUnlike
// // // //         text={status == 2 ? 'آقا' : status == 3 ? 'خانم' : chairNumber}
// // // //         LikeColour={getStatusColor()}
// // // //         UnlikeColour={getStatusColor()}
// // // //         index={status}
// // // //         data={data}
// // // //         DefaultStyle={{ height: '35px', width: '25px' }}
// // // //         ViewStyle={{ height: '3px' }}
// // // //         setData={setData}
// // // //         BusPerson={BusPerson}
// // // //         setBusPerson={setBusPerson}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
// // // //   const [selectedSeats, setSelectedSeats] = useState([]);

// // // //   const handleSeatPress = (chairNumber) => {
// // // //     const isSelected = selectedSeats.includes(chairNumber);
// // // //     setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
// // // //   };

// // // //   const renderRow = (row) => {
// // // //     const seats = data?.seates?.filter((seat) => seat.row === row).filter(s => s.chairNumber != -1);
// // // //     const isTwoColumns = seats.length === 2;
// // // //     var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2

// // // //     const seatElements = [];
// // // //     seats?.forEach((seat, index) => {
// // // //       seatElements.push(
// // // //         <BusSeat
// // // //           key={seat.chairNumber}
// // // //           chairNumber={seat.chairNumber}
// // // //           status={seat.status}
// // // //           onPress={() => handleSeatPress(seat.chairNumber)}
// // // //           style={isTwoColumns ? styles.seatTwoColumns : styles.seatFourColumns}
// // // //           index={seat.column}
// // // //           RowSeats={RowSeats}
// // // //           data={data}
// // // //           setData={setData}
// // // //           BusPerson={BusPerson}
// // // //           setBusPerson={setBusPerson}
// // // //         />
// // // //       );
// // // //       if (RowSeats === 1 && index === 0) {  //Insert after the first seat when there are 3 seats
// // // //           seatElements.push(<BusSeat key={`spacer-${row}`} isSpacer={true} />);
// // // //       }
// // // //     });

// // // //     return (
// // // //       <div style={styles.row}>
// // // //         {seatElements}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       {data?.seates?.reduce((acc, seat) => {
// // // //         if (!acc.currentRow || acc.currentRow !== seat.row) {
// // // //           acc.currentRow = seat.row;
// // // //           acc.rows.push(renderRow(seat.row));
// // // //         }
// // // //         return acc;
// // // //       }, { rows: [], currentRow: null }).rows}
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   container: {
// // // //     flex: 1,
// // // //     flexDirection: 'column',
// // // //   },
// // // //   row: {
// // // //     flexDirection: 'row',
// // // //     width: '97%',
// // // //     display: 'flex',
// // // //   },
// // // //   seat: {
// // // //     padding: '10px',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   seatText: {
// // // //     fontSize: '8px',
// // // //   },
// // // //   seatTwoColumns: {
// // // //   width: '45%', //Take up 45% of space.
// // // //         maxWidth: '45%', //Do not scale beyond 45%
// // // //         display: 'flex',
// // // //   },
// // // //   seatFourColumns: {
// // // //    width: '30%', //Take up 30% of space.
// // // //     maxWidth: '30%', //Do not scale beyond 30%
// // // //     display: 'flex',
// // // //   },
// // // // };

// // // // export default BusSeats;


// // // import React, { useState } from "react";
// // // import LikeUnlike from "./LikeUnlike";
// // // import {
// // //   useTheme,
// // //   Typography,
// // //   Drawer,
// // //   Button,
// // //   Box,
// // //   TextField,
// // //   IconButton,
// // //   CircularProgress,
// // //   useMediaQuery
// // // } from '@mui/material';


// // // const SEAT_STATUS = {
// // //   AVAILABLE: 1,
// // //   BOOKED: 2,
// // // };



// // // const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress, isSpacer }) => {
// // //     const theme = useTheme();
// // //    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// // //   const getStatusColor = () => {
// // //     switch (status) {
// // //       case 0:
// // //         return 'rgba(161, 162, 162, 0.5)';
// // //       case 2:
// // //         return '#1c38bb';
// // //       case 3:
// // //         return '#1c38bb';
// // //       case 1:
// // //         return '#1c38bb';
// // //       default:
// // //         return 'rgb(2, 146, 129)';
// // //     }
// // //   };

// // //   let marginLeft = index === RowSeats ? '1%' : '1%';

// // //   if (isSpacer) {
// // //     return <div style={{ width: '5%', height: '35px' }} />;
// // //   }

// // //   // Determine if text is Persian (contains Persian characters)
// // //   const isPersian = /[\u0600-\u06FF]/.test(chairNumber?.toString() || '');

// // //   return (
// // //     <div style={{ ...styles.seat, marginLeft: marginLeft }}>
// // //       <LikeUnlike
// // //         text={status == 2 ? 'آقا' : status == 3 ? 'خانم' : chairNumber}
// // //         LikeColour={getStatusColor()}
// // //         UnlikeColour={getStatusColor()}
// // //         index={status}
// // //         data={data}
// // //         DefaultStyle={{ 
// // //           height: '35px', 
// // //           width: '25px',
// // //           fontFamily: isPersian ? styles.persianFont.fontFamily : styles.englishFont.fontFamily,
// // //           fontSize: styles.fontSizes.small
// // //         }}
// // //         ViewStyle={{ height: '3px' }}
// // //         setData={setData}
// // //         BusPerson={BusPerson}
// // //         setBusPerson={setBusPerson}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
// // //   const [selectedSeats, setSelectedSeats] = useState([]);
// // //   const [isMobile] = useState(window.innerWidth < 768);

// // //   const handleSeatPress = (chairNumber) => {
// // //     const isSelected = selectedSeats.includes(chairNumber);
// // //     setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
// // //   };

// // //   const renderRow = (row) => {
// // //     const seats = data?.seates?.filter((seat) => seat.row === row).filter(s => s.chairNumber != -1);
// // //     const isTwoColumns = seats.length === 2;
// // //     var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2

// // //     const seatElements = [];
// // //     seats?.forEach((seat, index) => {
// // //       seatElements.push(
// // //         <BusSeat
// // //           key={seat.chairNumber}
// // //           chairNumber={seat.chairNumber}
// // //           status={seat.status}
// // //           onPress={() => handleSeatPress(seat.chairNumber)}
// // //           style={isTwoColumns ? styles.seatTwoColumns : styles.seatFourColumns}
// // //           index={seat.column}
// // //           RowSeats={RowSeats}
// // //           data={data}
// // //           setData={setData}
// // //           BusPerson={BusPerson}
// // //           setBusPerson={setBusPerson}
// // //         />
// // //       );
// // //       if (RowSeats === 1 && index === 0) {
// // //           seatElements.push(<BusSeat key={`spacer-${row}`} isSpacer={true} />);
// // //       }
// // //     });

// // //     return (
// // //       <div style={isMobile ? styles.mobileRow : styles.row}>
// // //         {seatElements}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div style={isMobile ? styles.mobileContainer : styles.container}>
// // //       {data?.seates?.reduce((acc, seat) => {
// // //         if (!acc.currentRow || acc.currentRow !== seat.row) {
// // //           acc.currentRow = seat.row;
// // //           acc.rows.push(renderRow(seat.row));
// // //         }
// // //         return acc;
// // //       }, { rows: [], currentRow: null }).rows}
// // //     </div>
// // //   );
// // // };

// // // const styles =  {
// // //   // Font configurations
// // //   englishFont: {
// // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
// // //   },
// // //   persianFont: {
// // //     fontFamily: '"Segoe UI", Tahoma, "DejaVu Sans", sans-serif'
// // //   },
// // //   fontSizes: {
// // //     small: '12px',
// // //     medium: '14px',
// // //     large: '16px'
// // //   },

// // //   // Container styles
// // //   container: {
// // //     flex: 1,
// // //     flexDirection: 'column',
// // //     width: '100%',
// // //     maxWidth: '800px',
// // //     margin: '0 auto'
// // //   },
// // //   mobileContainer: {
// // //     flex: 1,
// // //     flexDirection: 'column',
// // //     width: '100%',
// // //     padding: '0 10px'
// // //   },

// // //   // Row styles
// // //   row: {
// // //     flexDirection: 'row',
// // //     width: '97%',
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     marginBottom: '10px'
// // //   },
// // //   mobileRow: {
// // //     flexDirection: 'row',
// // //     width: '100%',
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     marginBottom: '8px',
// // //     flexWrap: 'wrap'
// // //   },

// // //   // Seat styles
// // //   seat: {
// // //     padding: isMobile ? '5px' : '10px',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },
// // //   seatText: {
// // //     fontSize: '8px',
// // //   },
// // //   seatTwoColumns: {
// // //     width: isMobile ? '48%' : '45%',
// // //     maxWidth: isMobile ? '48%' : '45%',
// // //     display: 'flex',
// // //   },
// // //   seatFourColumns: {
// // //     width: isMobile ? '30%' : '30%',
// // //     maxWidth: isMobile ? '30%' : '30%',
// // //     display: 'flex',
// // //   },
// // // };

// // // export default BusSeats;

// // import React, { useState } from "react";
// // import LikeUnlike from "./LikeUnlike";
// // import {
// //   useTheme,
// //   useMediaQuery
// // } from '@mui/material';

// // const SEAT_STATUS = {
// //   AVAILABLE: 1,
// //   BOOKED: 2,
// // };

// // const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress, isSpacer, isMobile }) => {
// //   const theme = useTheme();
// //   const getStatusColor = () => {
// //     switch (status) {
// //       case 0:
// //         return 'rgba(161, 162, 162, 0.5)';
// //       case 2:
// //         return '#1c38bb';
// //       case 3:
// //         return '#1c38bb';
// //       case 1:
// //         return '#1c38bb';
// //       default:
// //         return 'rgb(2, 146, 129)';
// //     }
// //   };

// //   let marginLeft = index === RowSeats ? '1%' : '1%';

// //   if (isSpacer) {
// //     return <div style={{ width: '5%', height: '35px' }} />;
// //   }

// //   const isPersian = /[\u0600-\u06FF]/.test(chairNumber?.toString() || '');

// //   return (
// //     <div style={{ 
// //       padding: isMobile ? '5px' : '10px',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       marginLeft: marginLeft 
// //     }}>
// //       <LikeUnlike
// //         text={status == 2 ? 'آقا' : status == 3 ? 'خانم' : chairNumber}
// //         LikeColour={getStatusColor()}
// //         UnlikeColour={getStatusColor()}
// //         index={status}
// //         data={data}
// //         DefaultStyle={{ 
// //           height: '35px', 
// //           width: '25px',
// //           fontFamily: isPersian ? '"Segoe UI", Tahoma, "DejaVu Sans", sans-serif' : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
// //           fontSize: '12px'
// //         }}
// //         ViewStyle={{ height: '3px' }}
// //         setData={setData}
// //         BusPerson={BusPerson}
// //         setBusPerson={setBusPerson}
// //       />
// //     </div>
// //   );
// // };

// // const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// //   const [selectedSeats, setSelectedSeats] = useState([]);

// //   const handleSeatPress = (chairNumber) => {
// //     const isSelected = selectedSeats.includes(chairNumber);
// //     setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
// //   };

// //   const renderRow = (row) => {
// //     const seats = data?.seates?.filter((seat) => seat.row === row).filter(s => s.chairNumber != -1);
// //     const isTwoColumns = seats.length === 2;
// //     var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2;

// //     const seatElements = [];
// //     seats?.forEach((seat, index) => {
// //       seatElements.push(
// //         <BusSeat
// //           key={seat.chairNumber}
// //           chairNumber={seat.chairNumber}
// //           status={seat.status}
// //           onPress={() => handleSeatPress(seat.chairNumber)}
// //           index={seat.column}
// //           RowSeats={RowSeats}
// //           data={data}
// //           setData={setData}
// //           BusPerson={BusPerson}
// //           setBusPerson={setBusPerson}
// //           isMobile={isMobile}
// //         />
// //       );
// //       if (RowSeats === 1 && index === 0) {
// //         seatElements.push(<BusSeat key={`spacer-${row}`} isSpacer={true} isMobile={isMobile} />);
// //       }
// //     });

// //     return (
// //       <div style={{
// //         flexDirection: 'row',
// //         width: isMobile ? '100%' : '97%',
// //         display: 'flex',
// //         justifyContent: isMobile ? 'space-between' : 'center',
// //         marginBottom: isMobile ? '8px' : '10px',
// //         flexWrap: 'wrap'
// //       }}>
// //         {seatElements}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div style={{
// //       flex: 1,
// //       flexDirection: 'column',
// //       width: '100%',
// //       maxWidth: isMobile ? '100%' : '800px',
// //       margin: '0 auto',
// //       padding: isMobile ? '0 10px' : '0'
// //     }}>
// //       {data?.seates?.reduce((acc, seat) => {
// //         if (!acc.currentRow || acc.currentRow !== seat.row) {
// //           acc.currentRow = seat.row;
// //           acc.rows.push(renderRow(seat.row));
// //         }
// //         return acc;
// //       }, { rows: [], currentRow: null }).rows}
// //     </div>
// //   );
// // };

// // export default BusSeats;

// import React, { useState } from "react";
// import LikeUnlike from "./LikeUnlike";
// import { useTheme, useMediaQuery } from '@mui/material';

// const SEAT_STATUS = {
//   AVAILABLE: 1,
//   BOOKED: 2,
// };

// const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress, isSpacer, isMobile, isSquare }) => {
//   const theme = useTheme();
//   const getStatusColor = () => {
//     switch (status) {
//       case 0:
//         return 'rgba(161, 162, 162, 0.5)';
//       case 2:
//         return 'rgba(28,56,187,0.5)';
//       case 3:
//         return 'rgba(28,56,187,0.5)';
//       case 1:
//         return 'rgba(28,56,187,0.5)';
//       default:
//         return 'rgba(2, 146, 129,1)';
//     }
//   };

//   let marginLeft = index === RowSeats ? '1%' : '1%';

//   if (isSpacer) {
//     return <div style={{ width: '5%', height: isSquare ? '50px' : '35px' }} />;
//   }

//   const isPersian = /[\u0600-\u06FF]/.test(chairNumber?.toString() || '');

//   return (
//     <div style={{
//       padding: isMobile ? '5px' : '1px',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginLeft: marginLeft,

//     }}>
//       <LikeUnlike
//         text={status == 2 ? 'Man' : status == 3 ? 'Women' : chairNumber}
//         LikeColour={getStatusColor()}
//         UnlikeColour={getStatusColor()}
//         index={status}
//         data={data}
//         DefaultStyle={{
//           height: isSquare ? '50px' : '35px',
//           width: isSquare ? '50px' : '35px',
//           fontFamily: isPersian ? '"sans-serif", Tahoma, "DejaVu Sans", sans-serif' : 'Inter, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
//           fontSize: isSquare ? '16px' : '12px',
//           borderRadius: isSquare ? '8px' : '4px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           flexDirection: 'column',

//         }}
//         ViewStyle={{ height: '3px' }}
//         setData={setData}
//         BusPerson={BusPerson}
//         setBusPerson={setBusPerson}
//       />
//     </div>
//   );
// };

// const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatPress = (chairNumber) => {
//     const isSelected = selectedSeats.includes(chairNumber);
//     setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
//   };

//   const renderRow = (row) => {
//     const seats = data?.seates?.filter((seat) => seat.row === row).filter(s => s.chairNumber != -1);

//     const isTwoColumns = seats.length === 2;
//     var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2;

//     const seatElements = [];
//     seats?.forEach((seat, index) => {
//       const isSquare = seat.isSquare; // Assuming your seat data has an isSquare property

//       seatElements.push(
//         <BusSeat
//           key={seat.chairNumber}
//           chairNumber={seat.chairNumber}
//           status={seat.status}
//           onPress={() => handleSeatPress(seat.chairNumber)}
//           index={seat.column}
//           RowSeats={RowSeats}
//           // style={{backgrounColor:'red'}}
//           data={data}
//           setData={setData}
//           BusPerson={BusPerson}
//           setBusPerson={setBusPerson}
//           isMobile={isMobile}
//           isSquare={isSquare}
//         />
//       );
//       if (RowSeats === 1 && index === 0) {
//         seatElements.push(<BusSeat key={`spacer-${row}`} isSpacer={true} isMobile={isMobile} />);
//       }
//     });

//     return (
//       <div style={{
//         flexDirection: 'row',
//         width: isMobile ? '100%' : '97%',
//         display: 'flex',
//         justifyContent: isMobile ? 'flex-start' : 'flex-start',
//         marginBottom: isMobile ? '8px' : '10px',
//         alignItems: 'center',
//         flexWrap: 'wrap',
       
//         marginLeft: isMobile ? 0 : '25%'
//       }}>

//         {seatElements}

//       </div>
//     );
//   };

//   return (
//     <div style={{
//       flex: 1,
//       flexDirection: 'column',
//       width: '100%',
//       maxWidth: isMobile ? '100%' : '800px',
//       margin: '0 auto',
//       // padding: isMobile ? '0 10px' : '0',
//       // backgrounColor:'red'
//     }}>
//       {data?.seates?.reduce((acc, seat) => {
//         if (!acc.currentRow || acc.currentRow !== seat.row) {
//           acc.currentRow = seat.row;
//           acc.rows.push(renderRow(seat.row));
//         }
//         return acc;
//       }, { rows: [], currentRow: null }).rows}
//     </div>
//   );
// };

// export default BusSeats;

import React, { useState } from "react";
import LikeUnlike from "./LikeUnlike";
import { useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import getTheme from '../../theme';
const SEAT_STATUS = {
  AVAILABLE: 1,
  BOOKED: 2,
};

const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress, isSpacer, isMobile, isSquare }) => {
  const { t ,i18n} = useTranslation();
  const theme = getTheme(i18n.language);
  
  const getStatusColor = () => {
    switch (status) {
      case 0:
        return 'rgba(161, 162, 162, 0.5)';
      case 2:
        return 'rgba(28,56,187,0.5)';
      case 3:
        return 'rgba(28,56,187,0.5)';
      case 1:
        return 'rgba(28,56,187,0.5)';
      default:
        return 'rgba(2, 146, 129,1)';
    }
  };

  let marginLeft = index === RowSeats ? '1%' : '1%';

  if (isSpacer) {
    return <div style={{ width: '5%', height: isSquare ? '50px' : '35px' }} />;
  }

  const getSeatLabel = () => {
    if (status === 2) return t('seat.male');
    if (status === 3) return t('seat.female');
    return chairNumber;
  };

  return (
    <div style={{
      padding: isMobile ? '5px' : '1px',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: marginLeft,
    }}>
      <LikeUnlike
        text={getSeatLabel()}
        LikeColour={getStatusColor()}
        UnlikeColour={getStatusColor()}
        index={status}
        data={data}
        DefaultStyle={{
          height: isSquare ? '50px' : '35px',
          width: isSquare ? '50px' : '35px',
          fontFamily: theme.typography.fontFamily,
          fontSize: isSquare ? '16px' : '12px',
          borderRadius: isSquare ? '8px' : '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        ViewStyle={{ height: '3px' }}
        setData={setData}
        BusPerson={BusPerson}
        setBusPerson={setBusPerson}
      />
    </div>
  );
};

const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
  const { t, i18n } = useTranslation();
  const theme = getTheme(i18n.language);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatPress = (chairNumber) => {
    const isSelected = selectedSeats.includes(chairNumber);
    setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
  };

  const renderRow = (row) => {
    const seats = data?.seates?.filter((seat) => seat.row === row).filter(s => s.chairNumber != -1);
    const isTwoColumns = seats.length === 2;
    var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2;

    const seatElements = [];
    seats?.forEach((seat, index) => {
      const isSquare = seat.isSquare;

      seatElements.push(
        <BusSeat
          key={seat.chairNumber}
          chairNumber={seat.chairNumber}
          status={seat.status}
          onPress={() => handleSeatPress(seat.chairNumber)}
          index={seat.column}
          RowSeats={RowSeats}
          data={data}
          setData={setData}
          BusPerson={BusPerson}
          setBusPerson={setBusPerson}
          isMobile={isMobile}
          isSquare={isSquare}
        />
      );
      if (RowSeats === 1 && index === 0) {
        seatElements.push(<BusSeat key={`spacer-${row}`} isSpacer={true} isMobile={isMobile} />);
      }
    });

    return (
      <div style={{
        flexDirection: 'row',
        width: isMobile ? '100%' : '97%',
        display: 'flex',
        justifyContent: isMobile ? 'flex-start' : 'flex-start',
        marginBottom: isMobile ? '8px' : '10px',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft: isMobile ? 0 : ['fa', 'ar','pa'].includes(i18n.language) ? '0' : '25%',
        direction: ['fa', 'ar','pa'].includes(i18n.language) ? 'rtl' : 'ltr'
      }}>
        {seatElements}
      </div>
    );
  };

  return (
    <div style={{
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      maxWidth: isMobile ? '100%' : '800px',
      margin: '0 auto',
      direction: ['fa', 'ar','pa'].includes(i18n.language) ? 'rtl' : 'ltr'
    }}>
      {data?.seates?.reduce((acc, seat) => {
        if (!acc.currentRow || acc.currentRow !== seat.row) {
          acc.currentRow = seat.row;
          acc.rows.push(renderRow(seat.row));
        }
        return acc;
      }, { rows: [], currentRow: null }).rows}
    </div>
  );
};

export default BusSeats;