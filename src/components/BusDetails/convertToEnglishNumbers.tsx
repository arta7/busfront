export const convertToEnglishNumbers = (input) => {
  if (!input) return input;
  
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  
  return input.toString().split('').map(char => {
    // Check if character is a Persian number
    const persianIndex = persianNumbers.indexOf(char);
    if (persianIndex > -1) return persianIndex;
    
    // Check if character is an Arabic number
    const arabicIndex = arabicNumbers.indexOf(char);
    if (arabicIndex > -1) return arabicIndex;
    
    // Return the character if it's not a number
    return char;
  }).join('');
};