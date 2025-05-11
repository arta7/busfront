// import React, { useState, useMemo } from "react";

// import  LikeUnlike  from "./LikeUnlike";
// // import { BusSeatScreenStyle } from '../../styles';
// // import { useTheme } from '@react-navigation/native';
// // import { SH, SF, SW, Colors,Fonts } from "../../utils";

// const SEAT_STATUS = {
//   AVAILABLE: 1,
//   BOOKED: 2,
// };

// const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress,props }) => {
// //   const { Colors } = useTheme();
//   var datarow = RowSeats;
//   // const BusSeatScreenStyles = useMemo(() => BusSeatScreenStyle(Colors), [Colors]);

//   const getStatusColor = () => {
//     switch (status) {
//       case 0:
//         return '#c4c4c4';
//       case 2:
//         return '#53eff5'; // Available (adjust based on your preference)
//       case 3:
//         return 'pink'; // Occupied (adjust based on your preference)
//         case 1:
//           return 'yellow';
//         default:
//         return  'red' //Colors.theme_background; // Unknown (adjust based on your preference)
//     }
//   };
//   return (

//     <div style={{ ...styles.seat, index == datarow ? { marginLeft: '10%' } : { marginHorizontal: '1%' }}>
//       <LikeUnlike
//         text={status == 2 ? 'آقا' : status == 3 ? 'خانم' : chairNumber}
//         LikeColour={getStatusColor()}
//         UnlikeColour={getStatusColor()}
//         index={status}
//         data={data}
//         DefaultStyle={
//           // [BusSeatScreenStyles.BusSeatBox, 
//           { height: '50px',  width:'35px', }
//         // ]
//         }
//         ViewStyle={
//           //[BusSeatScreenStyles.BuscusionStyle
//           { height: '3px'}
//         //]
//         }
//         onPress={onPress}
//         setData={setData}
//         BusPerson={BusPerson}
//         setBusPerson={setBusPerson}
//       />
//     </div>
//   );
// };

// const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatPress = (chairNumber) => {
//     console.log('chairnumber')
//     const isSelected = selectedSeats.includes(chairNumber);
//     setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
//   };

//   const renderRow = (row) => {
//     const seats = data?.seates?.filter((seat) => seat.row === row).filter(s=>s.chairNumber !=-1);
//     const isTwoColumns = seats.length === 2;
//     var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2
//     return (
//       <div style={styles.row}>
//         {seats?.map((seat, index) => (
//           <BusSeat
//             key={seat.chairNumber}
//             chairNumber={seat.chairNumber}
//             status={seat.status}
//             onPress={() => handleSeatPress(seat.chairNumber)}
//             style={isTwoColumns ? styles.seatTwoColumns : styles.seatFourColumns}
//             index={seat.column}
//             RowSeats={RowSeats}
//             data={data}
//             setData={setData}
//             BusPerson={BusPerson}
//             setBusPerson={setBusPerson}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>

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

// const styles = {
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//     //,borderWidth:1,marginBottom:5,borderTopWidth:0,borderBottomWidth:0,borderColor:'transparent'
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginBottom: 10, width: '87%',marginHorizontal:'1%'
//   },
//   seat: {
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center'
//     //, marginHorizontal: '2%'
//   },
//   seatText: {
//     fontSize: '12px',
//     // fontFamily:Fonts.Poppins_Italic
//   },
//   seatTwoColumns: {
//     flex: 0.5,
//   },
//   seatFourColumns: {
//     flex: 0.25,
//   },
// };

// export default BusSeats;


import React, { useState, useMemo } from "react";

import LikeUnlike from "./LikeUnlike";
import { MarginOutlined } from "@mui/icons-material";


const SEAT_STATUS = {
  AVAILABLE: 1,
  BOOKED: 2,
};

const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress }) => {
  const getStatusColor = () => {
    switch (status) {
      case 0:
        return '#c4c4c4';
      case 2:
        return '#53eff5';
      case 3:
        return 'pink';
      case 1:
        return 'yellow';
      default:
        return 'red';
    }
  };

  

  //console.log({index})
  //console.log({RowSeats})

  let marginLeft = index === RowSeats ? '5%' : '1%';

  return (
    <div style={{ ...styles.seat ,marginLeft: marginLeft,}}>
      <LikeUnlike
        text={status == 2 ? 'آقا' : status == 3 ? 'خانم' : chairNumber}
        LikeColour={getStatusColor()}
        UnlikeColour={getStatusColor()}
        index={status}
        data={data}
        DefaultStyle={{ height: '35px', width: '25px', }}
        ViewStyle={{ height: '3px', }}
         onPress={onPress}
        setData={setData}
        BusPerson={BusPerson}
        setBusPerson={setBusPerson}
      />
    </div>
  );
};

const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatPress = (chairNumber) => {
    const isSelected = selectedSeats.includes(chairNumber);
    setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
  };

  const renderRow = (row) => {
    const seats = data?.seates?.filter((seat) => seat.row === row).filter(s => s.chairNumber != -1);
    const isTwoColumns = seats.length === 2;
    var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2
    return (
      <div style={styles.row}>
        {seats?.map((seat, index) => (
          <BusSeat
            key={seat.chairNumber}
            chairNumber={seat.chairNumber}
            status={seat.status}
            onPress={() => handleSeatPress(seat.chairNumber)}
            style={isTwoColumns ? styles.seatTwoColumns : styles.seatFourColumns}
            index={seat.column}
            RowSeats={RowSeats}
            data={data}
            setData={setData}
            BusPerson={BusPerson}
            setBusPerson={setBusPerson}
          />
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
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

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // marginBottom: '10px',
    width: '97%'
    // ,marginLeft: '10px',marginRight:'1%'
    ,display:'flex',
  },
  seat: {
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seatText: {
    fontSize: '8px',
  },
  seatTwoColumns: {
    flex: 0.75, 
  },
  seatFourColumns: {
    flex: 0.85,display:'flex',
  },
};

export default BusSeats;
