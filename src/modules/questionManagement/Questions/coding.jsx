import React from 'react';
import { Box,TextField,Checkbox,Grid, Typography, FormControl,InputLabel,
        Select,MenuItem,Button, OutlinedInput, ListItemText, TableRow, TableCell, 
        TableBody, TableSortLabel,TableHead,TableContainer, Table, Stack, IconButton, styled,
         DialogTitle,DialogContent, Slide, DialogActions, Dialog } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import PropTypes from 'prop-types';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

export default function Coding() {

    const {t} = useTranslation();
    const languageList = [
        {
            id:1,
            title:'Java'
        },
        {
            id:2,
            title:'Javascript'
        },
        {
            id:3,
            title:'Python'
        },
        {
            id:4,
            title:'C++'
        },
    ]
    const [language, setLanguage] = React.useState([]);

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setLanguage(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
    const headCells = [
        {
            id: 'name',
            label: 'Test Case Name',
            sortable: true,
            align: 'left'
        },
        {
            id: 'input',
            label: 'Input',
            sortable: true,
            align: 'left'
        },
        {
            id: 'output',
            label: 'Output',
            sortable: true,
            align: 'left'
        },
        {
            id: 'memory',
            label: 'Maximum Memory Permitted',
            sortable: true,
            align: 'left'
        },
        {
            id: 'cpu',
            label: 'Maximum CPU Time',
            sortable: true,
            align: 'left'
        },
        {
            id: 'action',
            label: 'Action',
            sortable: false,
            align: 'center'
        },
    ];
    const testCasesList = [
        {
            id: 1,
            name: 'Test Case Name',
            input:'Input Value',
            output:'Output Value',
            memory:323,
            cpu:342
        },
        {
            id: 2,
            name: 'Test Case Name2',
            input:'Input Value',
            output:'Output Value',
            memory:123,
            cpu:342 
        },
        {
            id: 3,
            name: 'Test Case Name3',
            input:'Input Value',
            output:'Output Value',
            memory:113,
            cpu:352
        },
    ];
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    
    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
            return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }
    function EnhancedTableHead(props) {
        const {  order, orderBy , onRequestSort } =
            props;
        const createSortHandler = (property) => (event) => {
            onRequestSort(event, property);
        };
        
        return (
            <TableHead className='data-table-head'>
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            sortDirection={orderBy === headCell.id ? order : false}
                            sx={{textAlign: headCell.align}}
                        >
                            {headCell.sortable ? <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel> : headCell.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }
    EnhancedTableHead.propTypes = {
        onRequestSort: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
    };
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - testCasesList.length) : 0;
  
    const visibleRows = React.useMemo(
      () =>
        stableSort(testCasesList, getComparator(order, orderBy)).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        ),
      [order, orderBy, page, rowsPerPage],
    );
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />;
    });
    const [open, setOpen] = React.useState(false);
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const addTestCase = () =>{
        setOpen(false);
    }
  return (
    <>
        <Grid item xs={4}>
            <Box sx={{minHeight:'750px'}}>
                <Typography variant="h2">{t('createQuestion.selectProgrammingLanguage')}</Typography>
                <Box sx={{mt:2}}>
                    <Grid container rowGap={3}>
                        <Grid item xs={12} >
                            <FormControl fullWidth required>
                            <InputLabel >{t('createQuestion.selectProgrammingLanguage')}</InputLabel>
                            <Select
                            multiple
                            value={language}
                            onChange={handleChange}
                            input={<OutlinedInput label="{t('createQuestion.selectProgrammingLanguage)}" />}
                            renderValue={(selected) => selected.join(', ')}
                            >
                            {languageList.map((name) => (
                                <MenuItem key={name.id} value={name.title}>
                                <Checkbox checked={language.indexOf(name.title) > -1} />
                                <ListItemText primary={name.title} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        </Grid>
                        { language.map ((name) => (
                            <Grid item xs={12} key={name.id}>
                                <TextField
                                    label={name}
                                    multiline
                                    rows={4}
                                    placeholder={name + " Code Snippet"}
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h2" sx={{mt:4}}>{t('createQuestion.addTestCase')}</Typography>
            <TableContainer >
                <Table>
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={testCasesList.length}
                    />
                    <TableBody className='data-table-body'>
                        {visibleRows.map((testCase, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`;
            
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={testCase.id}
                                >
    
                                    <TableCell
                                        id={labelId}
                                        scope="row"
                                    >
                                        <Typography variant='body2'>{testCase.name}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant='body2'>{testCase.input}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant='body2'>{testCase.output}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant='body2'>{testCase.memory}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant='body2'>{testCase.cpu}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Stack direction="row" spacing={1} justifyContent={'center'}>
                                            <IconButton aria-label="delete">
                                                <EditOutlinedIcon /> 
                                            </IconButton>
                                            <IconButton aria-label="delete" color="error">
                                                <DeleteForeverOutlinedIcon />
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                        <TableRow>
                            <TableCell colSpan={6} />
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box className="d-flex justify-space-between" sx={{mt:2}}>
                <Button variant='outlined' onClick={handleClickOpen}> {t('createQuestion.addTestCase')}</Button>
                <Box className="d-flex justify-end">
                    <Button variant="contained" color='secondary' sx={{mr:3}}>{t('common.cancel')}</Button>
                    <Button variant="contained" >{t('common.create')}</Button>
                </Box>
            </Box>
            
        </Grid>
        <BootstrapDialog
        onClose={handleClose}
        open={open}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle sx={{ m: 0, p: 2 }} >
            <Typography fontSize='18px' fontWeight='500' color='primary'>{t('createQuestion.addTestCase')}</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          color='primary'
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{minWidth: 500}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField  label={t('createQuestion.testCaseName')} variant="outlined" fullWidth required/>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label={t('createQuestion.input')}
                    multiline
                    rows={4}
                    defaultValue="Input Value"
                    variant="outlined"
                    fullWidth
                    required
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label={t('createQuestion.output')}
                    multiline
                    rows={4}
                    defaultValue="Output Value"
                    variant="outlined"
                    fullWidth
                    required
                />
            </Grid>
            <Grid item xs={6}>
                <TextField  label={t('createQuestion.maximumMemoryPermitted')} variant="outlined" fullWidth required/>
            </Grid>
            <Grid item xs={6}>
                <TextField  label={t('createQuestion.maximumCPUTime')} variant="outlined" fullWidth required/>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
        <Button variant='contained' color="secondary" onClick={handleClose}>{t('common.cancel')}</Button>
        <Button variant='contained' color="primary" onClick={addTestCase}>{t('createQuestion.addTestCase')}</Button>
        </DialogActions>
      </BootstrapDialog>

        
    </>
  )
}
