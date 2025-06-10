// import React, { useMemo } from 'react';
// import { Select, MenuItem, InputLabel, FormControl, Typography, Box ,TextField } from '@mui/material';
// import PlaceIcon from '@mui/icons-material/Place'; // Use Material-UI icons or any other icon library
// import Autocomplete from '@mui/material/Autocomplete';


// const DropdownComponent = ({
//     width = '100%',
//     data = [],
//     labelField = 'label',
//     valueField = 'value',
//     placeholder = 'Select an option',
//     onChange,
//     value,
//     labelStyle,
//     placeholderStyle,
//     selectedTextStyle,
//     customStyle,
//     ShowIcon = false,
//     IconName,
// }) => {
//     // Define styles using React inline styles or a styling approach of your choice
//     const styles = {
//         container: {
//             width,
//             display: 'flex',
//             alignItems: 'center',
//             border: '1px solid grey',
//             borderRadius: '8px',
//             overflow: 'hidden',
//             height: '50px',
//             ...customStyle,
//         },
//         dropdown: {
//             width: '100%',
//         },
//         placeholder: {
//             color: 'grey', // Set to your desired placeholder color
//             ...placeholderStyle,
//         },
//     };

//     return (
//         <Box style={styles.container}>
//             {ShowIcon && IconName && (
//                 <PlaceIcon style={{ marginRight: '5px', color: 'gray', fontSize: '25px' }} />
//             )}
//             <FormControl variant="outlined" style={styles.dropdown}>
//                 {labelField && (
//                     <InputLabel style={labelStyle}>{labelField}</InputLabel>
//                 )}
//                 <Select
//                     value={value}
//                     onChange={onChange}
//                     displayEmpty
//                     inputProps={{ 'aria-label': 'Without label' }}
//                     style={styles.dropdown}
//                     renderValue={(selected) => {
//                         if (!selected) return <Typography style={styles.placeholder}>{placeholder}</Typography>;
//                         return selected; // or format the display value here if needed
//                     }}
//                 >
//                     <MenuItem value="" disabled>
//                         <Typography style={styles.placeholder}>{placeholder}</Typography>
//                     </MenuItem>
//                     {data.map((item, index) => (
//                         <MenuItem key={index} value={item[valueField]}>
//                             {item[labelField]}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// };

// export default DropdownComponent;


import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place'; // Use Material-UI icons or any other icon library
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

const DropdownComponent = ({
    width = '100%',
    data = [],
    labelField = 'label',
    valueField = 'value',
    placeholder = '',
    onChange,
    value,
    labelStyle,
    placeholderStyle,
    selectedTextStyle,
    customStyle,
    ShowIcon = false,
    IconName,
    Loading

}) => {
    // Define styles using React inline styles or a styling approach of your choice
    const styles = {
        container: {
            width,
            display: 'flex',
            alignItems: 'center',
            border: '1px solid grey',
            borderRadius: '5px',
            overflow: 'hidden',
            height: '50px',
            ...customStyle,
        },
        dropdown: {
            width: '100%',
            
        },
        placeholder: {
            color: 'grey', // Set to your desired placeholder color
            ...placeholderStyle,
        },
    };

    return (
        <Box style={styles.container}>
            {ShowIcon && IconName && (
                <PlaceIcon style={{ marginRight: '5px', color: 'gray', fontSize: '25px' }} />
            )}
            <Autocomplete
                options={data}
                loading={Loading}
                getOptionLabel={(option) => option[labelField]}
                placeholder=''
                
                onChange={(event, newValue) => {
                        // Pass the entire selected item to the onChange function
                        if (onChange) {
                            onChange(newValue); // newValue is the entire selected item
                        }
                    }
            }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        // label={labelField}
                        placeholder={placeholder}
                        style={styles.dropdown}
                        InputLabelProps={{
                            style: labelStyle,
                        }}
                        InputProps={{
                            ...params.InputProps,
                            style: { ...params.InputProps.style, color: selectedTextStyle?.color || 'inherit' },
                            endAdornment: (
                                <React.Fragment>
                                    {Loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                        
                    />
                )}
                value={data.find(item => item[valueField] === value) || null}
                style={styles.dropdown}
                noOptionsText={placeholder}
            />
        </Box>
    );
};

export default DropdownComponent;