import { Button, Typography } from "@mui/material";
import React, { useState, useTransition } from "react";
// import theme from "../../theme";
import { useTheme } from "@emotion/react";
import getTheme from "../../theme";
import { useTranslation } from "react-i18next";

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
    
  const { t, i18n } = useTranslation();
    const [liked, setLiked] = useState([]);
    const theme = getTheme(i18n.language);
    

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
               <Typography variant="h8"  color={theme.palette.secondary.main}   fontFamily={theme.typography.fontFamily}>{text}</Typography>
                <div style={ViewStyle}>
                </div>
            </Button>
        </>
    );
}
