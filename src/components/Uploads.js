import { Box, Stack, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import excel from "../assets/icons8-excel-48.png";
import { FileUpload } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import BasicTable from "./Table";

function Uploads() {
  const [Loading, setLoading] = useState(false);
  const [Uploaded, setUploaded] = useState();

  const convertCSVToJson = (csvData) => {
    const rows = csvData.split("\n");

    // Extract headers from the first row
    const headers = rows[0].split(",");

    // Initialize an array to store JSON objects
    const jsonData = [];

    // Loop through each row starting from index 1 (after headers)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(",");

      // Create an object to store the row data
      const rowData = {};

      // Loop through each column and assign it to the corresponding header
      for (let j = 0; j < headers.length; j++) {
        // Trim the values to remove any leading/trailing whitespace
        rowData[headers[j].trim()] = row[j].trim();
      }

      // Push the row data object to the JSON array
      jsonData.push(rowData);
    }

    // Convert the array of JSON objects to a JSON string
    const jsonOutput = JSON.stringify(jsonData, null, 2);

    console.log(jsonOutput);
    setUploaded(jsonOutput);
  };
  const onDrop = useCallback((acceptedFiles) => {
    setLoading(true);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const arrayBuffer = reader.result;

        // Convert ArrayBuffer to string
        const decoder = new TextDecoder("utf-8");
        const text = decoder.decode(arrayBuffer);

        // Now you have the text content of the CSV file
        console.log(text);
        convertCSVToJson(text);

        // You can then proceed to parse the CSV content and convert it to JSON
        // For parsing CSV, you might use a library like 'papaparse' or implement your own parser.
      };

      reader.readAsArrayBuffer(file);
      setLoading(false);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        p: {sm:2,xs:0},
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        spacing={3}
        width={"100%"}
        height={"100%"}
      >
        <Stack width={"100%"} justifyContent={"left"}>
          <Typography variant="h4" fontWeight={600}>
            Upload CSV
          </Typography>
        </Stack>
        <Stack
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={3}
        >
          <Box
            sx={{
              width: {sm:"60%",xs:'80%'},
              height: {sm:"40vh",xs:'30vh'},
              border: "2px dotted #605BFF",
              borderRadius: "16px",
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Stack
                  alignItems={"center"}
                  justifyItems={"center"}
                  width={"100%"}
                >
                  <img src={excel} alt="excel" srcset="" />
                </Stack>
                <p>
                  Drag and drop your excel files here, or click to select files
                </p>
              </div>
            </Stack>
          </Box>
          <Stack width={"60%"} alignItems={"center"} justifyContent={"center"}>
            <LoadingButton
              loadingPosition="start"
              loading={Loading}
              startIcon={<FileUpload />}
              variant="contained"
              fullWidth
            >
              Uoload
            </LoadingButton>
          </Stack>
        </Stack>
        {Uploaded && <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Stack width={"100%"} justifyContent={"left"}>
            <Typography variant="h4" fontWeight={600}>
              Uploads
            </Typography>
          </Stack>
          <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} height={'60vh'}>
                <BasicTable data={JSON.parse(Uploaded)}/>
          </Stack>
        </Stack>}
      </Stack>
    </Box>
  );
}

export default Uploads;
