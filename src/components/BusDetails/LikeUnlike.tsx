import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

// import { SH, SF, SW, Colors,Fonts } from "../../utils";
export default function LikeUnlike({
    text,
    LikeColour,
    UnlikeColour,
    DefaultStyle,
    ViewStyle,
    index,
    chairNumber,
    data,
    setData,
    BusPerson,
    setBusPerson
}) {

    const [liked, setLiked] = useState([]);

    return (
        <>
            <Button
                onClick={() => {
                    {
                        console.log('Busperson')
                        const myNextList = Object.assign({}, data);
                        const DatesStep = myNextList;
                        const seatToUpdate = DatesStep.seates?.filter(a => a.chairNumber === text)[0];

                        if (seatToUpdate.status == 0) {
                            seatToUpdate.status = 6;
                            let PersonData = {
                                name: '', family: '', date: '1370-12-12', mobile: '', code: '', gender: '1', status: '', chairNumber: seatToUpdate.chairNumber
                            };
                            setBusPerson([...BusPerson, PersonData]);
                        } else {
                            seatToUpdate.status = 0;
                            let PersonData = BusPerson.filter((elem) => elem.chairNumber !== text);
                            setBusPerson(PersonData);
                        }
                        setData(myNextList);

                        console.log('myNextList',myNextList)
                    }
                }}
                style={{
                    backgroundColor: liked.includes(chairNumber) ? LikeColour : UnlikeColour,
                    ...DefaultStyle,
                }}
                disabled={index === 1 || index === 2 || index === 3}
            >
                <Typography style={{ fontSize: 12,color:'black' }}>{text}</Typography>
                <div style={ViewStyle}>
                </div>
            </Button>
        </>
    );
}
