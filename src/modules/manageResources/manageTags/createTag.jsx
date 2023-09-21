import React, { useRef } from 'react';
import {
    Container,
    Box,
    Typography,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    Select,
    Divider,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    MenuItem,
    Checkbox,
    ListItemText,
    } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Banner from '../../../components/banner/banner';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 70 * 4.5,
            width: 350,
        },
    },
};
const categoriesList = ['Web Development', 'Software Development', 'Artificial Intelligence', 'Application Development Programing', 'AR VR', 'Machine Learning', 'Security & Meta'];
const skillsList = ['HTML 5.0', 'CSS 3.0', 'JavaScript', 'TypeScript', 'Angular', 'ReactJs', 'NextJs', 'dotNet', 'Java', 'C++', 'C#', 'Python', 'Node'];

const breadcrumbs = [
    {
        name: "Dashboard",
        url: "/dashboard"
    },
    {
        name: "Manage Tags",
        url: "/tags"
    },
    {
        name: "Create Tags",
        url: ""
    }
];


const button = ['Create Tags', "/create-tags"];

const createTags = () => {
    const imgUpload = useRef(null);
    const tagsImg = event => {
        imgUpload.current.click();
    };
    const uploadFiles = event => {
        const fileUploaded = event.target.files[0];
        tagsImg(fileUploaded);
    };

    const [tagValue, setTagValue] = React.useState('category');
    const [selectedCate, setSelectedCate] = React.useState([]);
    const [selectedSkill, setSelectedSkill] = React.useState([]);

    const selectSkill = (event) => {
        const { target: {value} } = event;
        setSelectedSkill(typeof value === 'string' ? value.split(',') : value);
    }
    const selectCategory = (event) => {
        const { target: {value} } = event;
        setSelectedCate(typeof value === 'string' ? value.split(',') : value);
    }
    const selectTag = (event) => {
        setTagValue(event.target.value);
    }

    return (
        <Box>
            <Banner title="Create Tags" crumbs={breadcrumbs} />
            <Container maxWidth="xl">
                <Box className="d-flex align-center" sx={{my: 3}}>
                    <Typography variant='h1' sx={{mr: 5}}>Create</Typography>
                    <FormControl>
                        <RadioGroup row name="tags" defaultValue="Category" className='d-flex align-center' value={tagValue} onChange={selectTag}>
                            <FormControlLabel  control={<Radio />} value="category" label="Category" sx={{mr:5}} />                               
                            <FormControlLabel value="skill" control={<Radio />} label="Skill" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                {(tagValue === 'category') && (
                    <Box className="d-flex">
                        <Box sx={{mr:3, py: 3, width: 350}} className="upload-img d-flex flex-column align-center justify-center">
                            <Button variant='text' color="secondary" onClick={tagsImg}>
                                <FileUploadOutlinedIcon color='error'/>
                                <Typography variant="subtitle1" color='primary'>Upload Category Image</Typography>
                            </Button>
                            <Box sx={{mt:2}} className="d-flex flex-column align-center justify-center">
                                <Typography variant="caption" color='grey'>File size less than 1MB</Typography>
                                <Typography variant="caption" color="grey">Supported Format: png, jepg, jpg</Typography>
                                <Typography variant="caption" color='grey'>Max Resolution 120px width 90px height</Typography>
                            </Box>
                            <input type="file" accept='.jpg , .png , .jpeg' onChange={uploadFiles} ref={imgUpload} hidden></input>
                        </Box>
                        <Box className="d-flex flex-column justify-space-between" sx={{width: 380}}>
                            <TextField label="Category Name" variant="outlined" fullWidth />
                            <FormControl fullWidth>
                                <InputLabel>Assign Skills</InputLabel>
                                <Select
                                    multiple
                                    value={selectedSkill}
                                    onChange={selectSkill}
                                    input={<OutlinedInput label="Assign Skills" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {skillsList.map((skill, index) => (
                                        <MenuItem key={index} value={skill}>
                                            <Checkbox checked={selectedSkill.indexOf(skill) > -1} />
                                            <ListItemText primary={skill} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                )}

                {(tagValue === 'skill') && (
                    <Box className="d-flex">
                        <Box sx={{mr:3, py: 3, width: 350}} className="upload-img d-flex flex-column align-center justify-center">
                            <Button variant='text' color="secondary" onClick={tagsImg}>
                                <FileUploadOutlinedIcon color='error'/>
                                <Typography variant="subtitle1" color='primary'>Upload Skill Image</Typography>
                            </Button>
                            <Box sx={{mt:2}} className="d-flex flex-column align-center justify-center">
                                <Typography variant="caption" color='grey'>File size less than 1MB</Typography>
                                <Typography variant="caption" color="grey">Supported Format: png, jepg, jpg</Typography>
                                <Typography variant="caption" color='grey'>Max Resolution 120px width 90px height</Typography>
                            </Box>
                            <input type="file" accept='.jpg , .png , .jpeg' onChange={uploadFiles} ref={imgUpload} hidden></input>
                        </Box>
                        <Box className="d-flex flex-column justify-space-between" sx={{width: 'calc(100% - 400px)'}}>
                            <Box className="d-flex">
                                <TextField label="Skill Name" variant="outlined" sx={{width: 380, mr: 2}} />
                                <TextField label="Sub Skill Name" variant="outlined" sx={{width: 380, mr: 2}} />
                                <TextField label="Sub Skill Name" variant="outlined" sx={{width: 380}} />
                            </Box>
                            <FormControl sx={{width: 360}}>
                                <InputLabel>Assign Categories</InputLabel>
                                <Select
                                    multiple
                                    value={selectedCate}
                                    onChange={selectCategory}
                                    input={<OutlinedInput label="Assign Categories" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {categoriesList.map((skill, index) => (
                                        <MenuItem key={index} value={skill}>
                                            <Checkbox checked={selectedCate.indexOf(skill) > -1} />
                                            <ListItemText primary={skill} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                )}
                <Divider sx={{mt: 4, mb: 2}} />
                <Box className='d-flex justify-end'>
                    <Button variant='contained' color='secondary' sx={{mr:3}}>Cancel</Button>
                    <Button variant='contained' color='primary'>Create</Button>
                </Box>
            </Container>
        </Box>
    )
}
export default createTags;