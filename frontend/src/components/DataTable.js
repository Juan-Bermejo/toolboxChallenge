import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './DataTable.css'
import { getFilesData } from '../services/dataFiles';

export const DataTable = () => {
  const { files, setFiles} = useState([])

  useEffect(() => {
    const fetchFilesData = async () => {
      //const data = await getFilesData();
      const response = await fetch('http://127.0.0.1:3000/files/data');
      console.log(response)
      //setFiles(data);
    };
    fetchFilesData();
  }, []);

  return (
    <>
    <div className='tableContainer'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {files?.map((file, index) => (
            <tr key={index}>
            <td>file.fileName</td>
            <td>file.lines[0]</td>
            <td>file.lines[1]</td>
            <td>file.lines[2]</td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
};
