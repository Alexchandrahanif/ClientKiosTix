function potongString(str, panjangMaksimal) {
  if (str.length <= panjangMaksimal) {
    return str;
  } else {
    return str.substring(0, panjangMaksimal) + "...";
  }
}

export default potongString;
