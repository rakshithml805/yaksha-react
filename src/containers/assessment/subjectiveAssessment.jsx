import React, {useState} from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FileUploader } from "react-drag-drop-files";
import ReactQuill from "react-quill";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "../../../node_modules/react-quill/dist/quill.snow.css";
import "./commonAssessment.scss";

const SubjectiveAssessment = () => {
    const {t} = useTranslation();
    const question = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const fileTypes = ["pdf"];
    const [uploadFile, setUploadFile] = useState(null);
    const uploadFileHandleChange = (file) => {
        setUploadFile(file);
    };
    const removeFile = () => {
        setUploadFile(null)
    }

    const [rteValue, setRteValue] = useState('');

    return (
        <Box>
            <Typography variant="body2" sx={{color: "#7c7c7c", fontWeight: "400", lineHeight: "2", fontSize: "14px"}}>
                {question}
            </Typography>

            <Typography variant="h6" sx={{color: "#676767", fontSize: "18px !important", fontWeight: "500", mt: 3, mb: 1}}>
                {t('testTracker.subjective')}
            </Typography>

            <Grid container spacing={3} sx={{mb: 0}}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box className="file-upload-container">
                        <FileUploader handleChange={uploadFileHandleChange} name="file" types={fileTypes} classes="file-upload-field" label="Upload File" />
                        <FileUploadOutlinedIcon className='upload-icon'/>
                        <Box className="d-flex justify-space-between file-details">
                            <Typography variant='caption' color='#666666' sx={{fontSize: "11px", lineHeight: "1.2"}}>File size: less than 5MB, Support: pdf</Typography>
                            {uploadFile ? <Chip icon={<CloseOutlinedIcon onClick={removeFile} />}  label={`${uploadFile.name}`}/> : ""}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <ReactQuill theme="snow" value={rteValue} onChange={setRteValue} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SubjectiveAssessment;