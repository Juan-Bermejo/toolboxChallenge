export const getFilesData = async () => {
    const response = await fetch('http://localhost:5000/files/data');
    const data = await response.json();
    return data;
  };

export const getOneFileData = async (fileName) => {
const response = await fetch(`http://localhost:5000/files/data?fileName=${fileName}`);
const data = await response.json();
return data;
};

export const getFilesList = async () => {
const response = await fetch(`http://localhost:5000/files/list`);
const data = await response.json();
return data;
};