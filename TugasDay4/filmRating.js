const filmRating = (umur) => {
  if (umur >= 21) {
    return "DEWASA";
  } else if (umur >= 13) {
    return "REMAJA";
  } else if (umur >= 9) {
    return "BIMBINGAN ORANG TUA";
  } else {
    return "SEMUA USIA";
  }
};
console.log(filmRating(32));
console.log(filmRating(15));
