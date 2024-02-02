import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuItem,Select,FormControl,InputLabel } from '@mui/material';



export default function BasicTable({data}) {

    const initialRows = data.map(row => ({
        ...row,
        selectedTags: []
      }));
    const [tableRows, setTableRows] = useState(initialRows);


    const handleTagChange = (event, id) => {
        const { value } = event.target;
        setTableRows(prevRows =>
          prevRows.map(row =>
            row.id === id ? { ...row, selectedTags:  [...row.selectedTags, value] } : row
          )
        );
      };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Sl No</TableCell>
            <TableCell align="left">Links</TableCell>
            <TableCell align="left">Prefix</TableCell>
            <TableCell align="left">Add Tags</TableCell>
            <TableCell align="left">Selected Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows?.map((row,i) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="left">{row.links}</TableCell>
              <TableCell align="left">{row.prefix}</TableCell>
              <TableCell align='left'>
                <FormControl fullWidth>
                  <InputLabel id={`tags-label-${row.id}`}>Select Tags</InputLabel>
                  <Select
                    labelId={`tags-label-${row.id}`}
                    id={`tags-select-${row.id}`}
                    
                    value={''}
                    onChange={(event) => handleTagChange(event, row.id)}
                    
                  >
                    <MenuItem value="Technology">Technology</MenuItem>
                    <MenuItem value="Fashion">Fashion</MenuItem>
                    <MenuItem value="Food">Food</MenuItem>
                    <MenuItem value="Travel">Travel</MenuItem>
                    <MenuItem value="Sports">Sports</MenuItem>
                    <MenuItem value="Music">Music</MenuItem>
                    <MenuItem value="Art">Art</MenuItem>
                    <MenuItem value="Health">Health</MenuItem>
                    <MenuItem value="Eduaction">Education</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    {/* Add more tag options as needed */}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align='left'>{row.selectedTags?.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}