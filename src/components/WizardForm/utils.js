// create unique booking ID
export const uniqueDocumentCodeId = () => {
  const numberOfChars = 6
  const letters = "A1B2C3D4E5F6GH7J8K9MNPQRSTUXY";
  let result = "";
  while (result.length < numberOfChars) {
    const randInt = Math.floor((Math.random() * 19) + 1);
    const randChr= letters[randInt];
    if (result.substr(-1, 1)!== randChr) result += randChr;
  }
  return (result);
}
