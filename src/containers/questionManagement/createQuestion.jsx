import React from 'react'
import { Box,Container,Typography,Button,Grid,FormControl,InputLabel,Select,Divider,MenuItem, TextField } from '@mui/material';

import Banner from '../../_shared/components/banner/banner';
import MultipleChoiceQuesions from './Questions/multipleChoiceQuestions';
import SelectFromDropdown from './Questions/selectFromDropdown';
import FillIntheBlanks from './Questions/fillIntheBlanks';
import MatchTheFollowing from './Questions/matchTheFollowing';
import OrderTheSequence from './Questions/orderTheSequence';
import DragAndDrop from './Questions/dragAndDrop';
import TrueOrFalse from './Questions/trueOrFalse';
import Subjective from './Questions/subjective';
import Coding from './Questions/coding';
import Stack from './Questions/stack';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export default function CreateQuestion() {
    const { tenancyName } = useParams();
    const {t} = useTranslation();
    const proficencyList = ['Beginner','Intermediate','Advanced'];
    const categoriesList= ['All Categories','Machine Learning','Front End'];
    const skillsList = ['All Skills','HTML','CSS','Javascript'];
    const subskills1List = ['All Skills','HTML','CSS','Javascript','React'];
    const subskills2List = ['All Skills','HTML','CSS','Javascript','Python'];
    const questionByList = ['Yaksha','Techademy']

    const [questionType, setQuestionType] = React.useState('Multiple Choice Questions');
    const [proficencyLevel,setProficencyLevel] = React.useState('Beginner');
    const [category,setCategory] = React.useState('All Categories');
    const [skills,setSkills] = React.useState('All Skills');
    const [subSkill1,setSubSkill1] = React.useState('All Skills');
    const [subSkill2,setSubSkill2] = React.useState('All Skills');
    const [questionBy,setQuestionBy] = React.useState('Yaksha');
    const handleQuestionType = (e) =>{
        setQuestionType(e.target.value);
    }
    const handleProficencyChange = (e) => {
        setProficencyLevel(e.target.value)
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    const handleSubSkills1Change = (e) => {
        setSubSkill1(e.target.value)
    }
    const handleSubSkills2Change = (e) => {
        setSubSkill2(e.target.value)
    }
    const handleSkillsChange = (e) => {
        setSkills(e.target.value)
    }
    const handleQuestionByChange = (e) => {
        setQuestionBy(e.target.value)
    }
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: `/${tenancyName}/dashboard`
        },
        {
            name: "Create Questions",
            url: ""
        }
    ]
    const button = ['Bulk Upload', `/${tenancyName}/bulk-upload-questions`];
    var toolbarOptions = [ 
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        
    
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
    
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
    
        ['clean'],
        ['link', 'image']
        
    ];
    const module = {
        toolbar: toolbarOptions,
      }
    const [questionValue, setQuestionValue] = React.useState('');
    const [hintsValue, setHintsValue] = React.useState('');
  return (
    <Box>
        <Banner title={t('createQuestion.createQuestion')} crumbs={breadcrumbs} bannerButton={button} />
        <Container maxWidth="xl">
            <Box sx={{my:4}}>
                <Grid container columnGap={2}>
                    <Grid item xs={3}>
                        <Grid container rowGap={5} columnGap={2}>
                            <Grid item xs>
                                <FormControl fullWidth>
                                    <InputLabel>{t('commonForm.selectType')}</InputLabel>
                                    <Select native value={questionType} label={t('commonForm.selectType')} onChange={handleQuestionType}>
                                    <optgroup style={{color:'primary',fontWeight:"normal"}} label={t('createQuestion.objectiveQuestions')} >
                                        <option value="Multiple Choice Questions">{t('createQuestion.multipleChoiceQuestions')}</option>
                                        <option value="Select From Dropdown" >{t('createQuestion.selectFromDropdown')}</option>
                                        <option value="Fill in the Blanks">{t('createQuestion.fillInTheBlanks')}</option>
                                        <option value="Match the Following">{t('createQuestion.matchTheFollowing')}</option>
                                        <option value="Order The Sequence">{t('createQuestion.orderTheSequence')}</option>
                                        <option value="Crossword Puzzle">{t('createQuestion.crosswordPuzzle')}</option>
                                        <option value="Drag and Drop">{t('createQuestion.dragAndDrop')}</option>
                                        <option value="True or False">{t('createQuestion.trueOrFalse')}</option>
                                    </optgroup>
                                    <option value="Subjective Questions" style={{color:'#153776'}}>{t('createQuestion.subjectiveQuestions')}</option>
                                    <option value="Coding" style={{color:'#153776'}}>{t('createQuestion.coding')}</option>
                                    <option value="Stack" style={{color:'#153776'}}>{t('createQuestion.stack')}</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">{t('commonForm.selectProficency')}</InputLabel>
                                    <Select
                                        value={proficencyLevel}
                                        label={t('commonForm.selectProficency')}
                                        onChange={handleProficencyChange}>
                                        {proficencyList.map((level) => (<MenuItem value={level} key={level}>{level}</MenuItem>)
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>{t('commonForm.selectCategory')}</InputLabel>
                                    <Select
                                        value={category}
                                        label={t('commonForm.selectCategory')}
                                        onChange={handleCategoryChange}>
                                        {categoriesList.map((item) => (<MenuItem value={item} key={item}>{item}</MenuItem>)
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>{t('commonForm.selectSkills')}</InputLabel>
                                    <Select
                                        value={skills}
                                        label={t('commonForm.selectSkills')}
                                        onChange={handleSkillsChange}>
                                        {skillsList.map((item) => (<MenuItem value={item} key={item}>{item}</MenuItem>)
                                        )}
                                    </Select>
                                </FormControl> 
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>{t('commonForm.selectSubSkills')}</InputLabel>
                                    <Select
                                        value={subSkill1}
                                        label={t('commonForm.selectSubSkills')}
                                        onChange={handleSubSkills1Change}>
                                        {subskills1List.map((item) => (<MenuItem value={item} key={item}>{item}</MenuItem>)
                                        )}
                                    </Select>
                                </FormControl> 
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>{t('commonForm.selectSubSkills')}</InputLabel>
                                    <Select
                                        value={subSkill2}
                                        label={t('commonForm.selectSubSkills')}
                                        onChange={handleSubSkills2Change}>
                                        {subskills2List.map((item) => (<MenuItem value={item} key={item}>{item}</MenuItem>)
                                        )}
                                    </Select>
                                </FormControl> 
                            </Grid>
                            <Grid item xs>
                                <TextField label="Duration (mins)" variant="outlined" required fullWidth/> 
                            </Grid>
                            <Grid item xs>
                                <TextField label="Score" variant="outlined" required fullWidth/> 
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>{t('commonForm.questionBy')}</InputLabel>
                                    <Select
                                        value={questionBy}
                                        label={t('commonForm.questionBy')}
                                        onChange={handleQuestionByChange}>
                                        {questionByList.map((item) => (<MenuItem value={item} key={item}>{item}</MenuItem>)
                                        )}
                                    </Select>
                                </FormControl> 
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label={t('commonForm.courseName')} variant="outlined" required fullWidth/> 
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label={t('commonForm.moduleName')} variant="outlined" required fullWidth/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem>
                    </Divider>
                    <Grid item xs>
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={7} height="750px">
                                        <Box sx={{height:'50%'}}>
                                            <Typography variant="h2" sx={{mb:1}}>{t('createQuestion.questionDescription')}</Typography>
                                            <ReactQuill theme="snow" value={questionValue} onChange={setQuestionValue} modules={module} className='quill-text'/>
                                        </Box>
                                        <Box sx={{height:'50%'}}>
                                            <Typography variant="h2" sx={{mb:1}}>{t('createQuestion.hints')}</Typography>
                                            <ReactQuill theme="snow" value={hintsValue} onChange={setHintsValue} modules={module} className='quill-text'/>
                                        </Box>
                                        <Box>
                                            <Button variant="outlined">{t('createQuestion.addHints')}</Button>
                                        </Box>
                                    </Grid>
                                    {questionType === 'Multiple Choice Questions' && ( <MultipleChoiceQuesions/>) }
                                    {questionType === 'Select From Dropdown' && (<SelectFromDropdown/>) }
                                    {questionType === 'Fill in the Blanks' && <FillIntheBlanks/> }
                                    {questionType === 'Match the Following' && <MatchTheFollowing/> }
                                    {questionType === 'Order The Sequence' && <OrderTheSequence/> }
                                    {questionType === 'Crossword Puzzle' && (<Typography variant="h6">Crossword Puzzle</Typography>) }
                                    {questionType === 'Drag and Drop' && (<DragAndDrop/>) }
                                    {questionType === 'True or False' && (<TrueOrFalse/>) }
                                    {questionType === 'Subjective Questions' && (<Subjective/>) }
                                    {questionType === 'Stack' && (<Stack/>) }
                                    {questionType === 'Coding' && (<Coding/>) }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
  )
}
