let result = (val) => {
  if (val >= 90) {
    return "Grade A";
  } else if (val >= 80 && val <= 89) {
    return "Grade B";
  } else if (val >= 70 && val <= 79) {
    return "Grade C";
  } else if (val >= 60 && val <= 69) {
    return "Grade D";
  } else {
    return "Grade E";
  }
};

console.log(result(100));
