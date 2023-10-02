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
import { useTranslation } from 'react-i18next';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Banner from '../../../_shared/components/banner/banner';

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

const CreateTag = () => {
    const {t} = useTranslation();
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
                    <Typography variant='h1' sx={{mr: 5}}>{t('common.create')}</Typography>
                    <FormControl>
                        <RadioGroup row name="tags" defaultValue="Category" className='d-flex align-center' value={tagValue} onChange={selectTag}>
                            <FormControlLabel  control={<Radio />} value="category" label={t('common.category')} sx={{mr:5}} />                               
                            <FormControlLabel value="skill" control={<Radio />} label={t('common.skill')} />
                        </RadioGroup>
                    </FormControl>
                </Box>

                {(tagValue === 'category') && (
                    <Box className="d-flex">
                        <Box sx={{mr:3, py: 3, width: 350}} className="upload-img d-flex flex-column align-center justify-center">
                            <Button variant='text' color="secondary" onClick={tagsImg}>
                                <FileUploadOutlinedIcon color='error'/>
                                <Typography variant="subtitle1" color='primary'>{t('commonForm.uploadCategoryImage')}</Typography>
                            </Button>
                            <Box sx={{mt:2}} className="d-flex flex-column align-center justify-center">
                                <Typography variant="caption" color='grey'>{t('commonForm.imgFileSize')}</Typography>
                                <Typography variant="caption" color="grey">{t('commonForm.imgSupportFormat')}</Typography>
                                <Typography variant="caption" color='grey'>{t('commonForm.maxResolution')}</Typography>
                            </Box>
                            <input type="file" accept='.jpg , .png , .jpeg' onChange={uploadFiles} ref={imgUpload} hidden></input>
                        </Box>
                        <Box className="d-flex flex-column justify-space-between" sx={{width: 380}}>
                            <TextField label={t('commonForm.categoryName')} variant="outlined" fullWidth required/>
                            <FormControl fullWidth>
                                <InputLabel>{t('commonForm.assignSkills')}</InputLabel>
                                <Select
                                    multiple
                                    value={selectedSkill}
                                    onChange={selectSkill}
                                    input={<OutlinedInput label={t('commonForm.assignSkills')} />}
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
                                <Typography variant="subtitle1" color='primary'>{t('commonForm.uploadSkillImage')}</Typography>
                            </Button>
                            <Box sx={{mt:2}} className="d-flex flex-column align-center justify-center">
                                <Typography variant="caption" color='grey'>{t('commonForm.imgFileSize')}</Typography>
                                <Typography variant="caption" color="grey">{t('commonForm.imgSupportFormat')}</Typography>
                                <Typography variant="caption" color='grey'>{t('commonForm.maxResolution')}</Typography>
                            </Box>
                            <input type="file" accept='.jpg , .png , .jpeg' onChange={uploadFiles} ref={imgUpload} hidden></input>
                        </Box>
                        <Box className="d-flex flex-column justify-space-between" sx={{width: 'calc(100% - 400px)'}}>
                            <Box className="d-flex">
                                <TextField label={t('commonForm.skillName')} variant="outlined" required sx={{width: 380, mr: 2}} />
                                <TextField label={t('commonForm.subSkillName')} variant="outlined" sx={{width: 380, mr: 2}} />
                                <TextField label={t('commonForm.subSkillName')} variant="outlined" sx={{width: 380}} />
                            </Box>
                            <FormControl sx={{width: 360}}>
                                <InputLabel>{t('commonForm.assignCategories')}</InputLabel>
                                <Select
                                    multiple
                                    value={selectedCate}
                                    onChange={selectCategory}
                                    input={<OutlinedInput label={t('commonForm.assignCategories')} />}
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
                    <Button variant='contained' color='secondary' sx={{mr:3}}>{t('common.cancel')}</Button>
                    <Button variant='contained' color='primary'>{t('common.create')}</Button>
                </Box>
            </Container>
        </Box>
    )
}
export default CreateTag;