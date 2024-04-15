import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './DataTable.css'
import { getFilesData, getFilesList, getOneFileData } from '../services/dataFiles';

export const DataTable = () => {
  const [files, setFiles] = useState([]);
  const [filesList, setFilesList] = useState([]);

  const fetchFilesData = async () => {
    try {
      const data = await getFilesData();
      setFiles(data);
    } catch (error) {
      console.error('Error fetching files:', error);
      return error;
    }
  };

  const fetchOneFile = async (fileName) => {
    try {
      const data = await getOneFileData(fileName);
      setFiles(data);
    } catch (error) {
      console.error('Error fetching one file:', error);
      return error;
    }
  };

  const fetchFilesList = async () => {
    try {
      const data = await getFilesList();
      setFilesList(data);
    } catch (error) {
      console.error('Error fetching list:', error);
      return error;
    }
  }

  const handleFilterChange = (newFilter) => {
    if(newFilter !== 'All'){
      fetchOneFile(newFilter)
    } else {
      fetchFilesData();
    }
  };

  useEffect(() => {
    fetchFilesData();
    fetchFilesList();
  }, []);

  return (
    <>
    <div className='dropdownContainer'>
      <Dropdown onSelect={handleFilterChange} size="lf">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter by Name
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          {filesList.map((item) => (
            <Dropdown.Item key={item} eventKey={item}>{item}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className='tableContainer'>
      <Container style={{ height: '700px',width: '1200px', overflowY: 'auto' }}>
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
            {files.map((file, index) => (
              <tr key={index}>
              <td>{file.file}</td>
              <td>{file.lines[0]['text']}</td>
              <td>{file.lines[0]['number']}</td>
              <td>{file.lines[0]['hex']}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
    </>
  );
};
