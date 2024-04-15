export const getFilesData = async () => {
    const response = await fetch('http://127.0.0.1:3000/files/data');
    const data = await response.json();
    return data;
  };

export const getOneFileData = async () => {
const response = await fetch('localhost:3000/files/data');
const data = await response.json();
return data;
};

  export const getFilesList = async (fileName) => {
    const response = await fetch(`localhost:3000/files/data?fileName=${fileName}`);
    const data = await response.json();
    return data;
  };