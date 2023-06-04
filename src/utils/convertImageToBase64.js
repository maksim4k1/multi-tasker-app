function convertImageToBase64(image){
  if(image){
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);

      fileReader.onload = () => {
        res(fileReader.result);
      }

      fileReader.onerror = (error) => {
        rej(error);
      }
    });
  }
}

export default convertImageToBase64;