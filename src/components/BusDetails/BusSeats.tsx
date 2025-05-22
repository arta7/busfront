// import React, { useState, useMemo } from "react";

// import LikeUnlike from "./LikeUnlike";
// import { MarginOutlined } from "@mui/icons-material";


// const SEAT_STATUS = {
//   AVAILABLE: 1,
//   BOOKED: 2,
// };

// const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress }) => {
//   const getStatusColor = () => {
//     switch (status) {
//       case 0:
//         return 'rgba(161, 162, 162, 0.5)';
//       case 2:
//         return '#1c38bb';
//       case 3:
//         return '#1c38bb';
//       case 1:
//         return '#1c38bb';
//       default:
//         return 'rgb(2, 146, 129)';
//     }
//   };

  

//   //console.log({index})
//   //console.log({RowSeats})

//   let marginLeft = index === RowSeats ? '5%' : '1%';

//   return (
//     <div style={{ ...styles.seat ,marginLeft: marginLeft,}}>
//       <LikeUnlike
//         text={status == 2 ? 'آقا' : status == 3 ? 'خانم' : chairNumber}
//         LikeColour={getStatusColor()}
//         UnlikeColour={getStatusColor()}
//         index={status}
//         data={data}
//         DefaultStyle={{ height: '35px', width: '25px', }}
//         ViewStyle={{ height: '3px', }}
//         //  onPress={onPress}
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
//     const isSelected = selectedSeats.includes(chairNumber);
//     setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
//   };

//   const renderRow = (row) => {
//     const seats = data?.seates?.filter((seat) => seat.row === row).filter(s => s.chairNumber != -1);
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
//     flexDirection: 'column',
//   },
//   row: {
//     flexDirection: 'row',
//     // justifyContent: 'center',
//     // marginBottom: '10px',
//     width: '97%'
//     // ,marginLeft: '10px',marginRight:'1%'
//     ,display:'flex',
//   },
//   seat: {
//     padding: '10px',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   seatText: {
//     fontSize: '8px',
//   },
//   seatTwoColumns: {
//     flex: 0.25, 
//   },
//   seatFourColumns: {
//     flex: 0.2,display:'flex',
//   },
// };

// export default BusSeats;


import React, { useState, useMemo } from "react";
import LikeUnlike from "./LikeUnlike";

const SEAT_STATUS = {
  AVAILABLE: 1,
  BOOKED: 2,
};

const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress, isSpacer }) => {
  const getStatusColor = () => {
    switch (status) {
      case 0:
        return 'rgba(161, 162, 162, 0.5)';
      case 2:
        return '#1c38bb';
      case 3:
        return '#1c38bb';
      case 1:
        return '#1c38bb';
      default:
        return 'rgb(2, 146, 129)';
    }
  };

  let marginLeft = index === RowSeats ? '1%' : '1%';

  if (isSpacer) {
    return <div style={{ width: '5%', height: '35px' }} />; // Adjust height to match seat height
  }

  return (
    <div style={{ ...styles.seat, marginLeft: marginLeft }}>
      <LikeUnlike
        text={status == 2 ? 'آقا' : status == 3 ? 'خانم' : chairNumber}
        LikeColour={getStatusColor()}
        UnlikeColour={getStatusColor()}
        index={status}
        data={data}
        DefaultStyle={{ height: '35px', width: '25px' }}
        ViewStyle={{ height: '3px' }}
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

    const seatElements = [];
    seats?.forEach((seat, index) => {
      seatElements.push(
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
      );
      if (RowSeats === 1 && index === 0) {  //Insert after the first seat when there are 3 seats
          seatElements.push(<BusSeat key={`spacer-${row}`} isSpacer={true} />);
      }
    });

    return (
      <div style={styles.row}>
        {seatElements}
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
    width: '97%',
    display: 'flex',
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
  width: '45%', //Take up 45% of space.
        maxWidth: '45%', //Do not scale beyond 45%
        display: 'flex',
  },
  seatFourColumns: {
   width: '30%', //Take up 30% of space.
    maxWidth: '30%', //Do not scale beyond 30%
    display: 'flex',
  },
};

export default BusSeats;
