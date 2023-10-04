import React from 'react'
import { Box, TableContainer, Table,TableHead,TableRow,TableCell, TableBody, TableSortLabel, Container, Breadcrumbs, Typography,
        Grid, Autocomplete, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
import './bulkUploadHistory.scss';
import Banner from '../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';

export default function BulkUploadHistory() {

    const {t} = useTranslation();
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "Bulk Upload History",
            url: ""
        }
    ]
    const tenants = [
        {
            id: 101,
            name: 'Yaksha'
        },
        {
            id: 102,
            name: 'CA'
        },
        {
            id: 103,
            name: 'NSEIT'
        },
        {
            id: 104,
            name: 'Cognizant'
        }
    ];
    const headCells = [
        {
            id: 'filename',
            label: 'File Name',
            sortable: true,
            align: 'left'
        },
        {
            id: 'username',
            label: 'User Name',
            sortable: true,
            align: 'left'
        },
        {
            id: 'categories',
            label: 'Categories',
            sortable: true,
            align: 'center'
        },
        {
            id: 'skills',
            label: 'Skills',
            sortable: true,
            align: 'center'
        },
        {
            id: 'questions',
            label: 'Questions',
            sortable: true,
            align: 'center'
        },
        {
            id: 'type',
            label: 'Question Type',
            sortable: true,
            align: 'left'
        },
        {
            id: 'uploaded',
            label: 'Uploaded On',
            sortable: true,
            align: 'left'
        }
    ];
    const filesList = [
        {
            id:1,
            fileName:'fileName.xls',
            userName:'UserName1',
            userEmail:'UserName1@gmail.com',
            categories:123,
            skills:123,
            questions:123,
            type:'Objective',
            uploadedOn : '9-11-2320',
            uploadedTime : '3:53:46 AM'
        },
        {
            id:2,
            fileName:'fileName.xls',
            userName:'UserName2',
            userEmail:'UserName2@gmail.com',
            categories:133,
            skills:124,
            questions:223,
            type:'MCQ',
            uploadedOn : '9-11-2320',
            uploadedTime : '3:53:46 AM'
        },
        {
            id:3,
            fileName:'fileName.xls',
            userName:'UserName3',
            userEmail:'UserName3@gmail.com',
            categories:143,
            skills:23,
            questions:163,
            type:'Objective',
            uploadedOn : '9-11-2320',
            uploadedTime : '3:53:46 AM'
        },
    ]
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
        const { order, orderBy, onRequestSort } =
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
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filesList.length) : 0;
  
    const visibleRows = React.useMemo(
      () =>
        stableSort(filesList, getComparator(order, orderBy)).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        ),
      [order, orderBy, page, rowsPerPage],
    );
  
  return (
    <Box>
        <Banner title={t('bulkUploadHistory.bulkUploadHistory')} crumbs={breadcrumbs} />
        <Container maxWidth="xl">
                <Box sx={{mt:4}}>
                    <Grid container columnGap={1}>
                        <Grid item xs={3}>
                        <Autocomplete
                            disablePortal
                            options={tenants}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField {...params} label={t('commonForm.selectTenant')} />}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label={t('commonForm.startDate')} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label={t('commonForm.endDate')} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl  variant="outlined" fullWidth>
                                <InputLabel>{t('commonForm.search')}</InputLabel>
                                <OutlinedInput  placeholder={t('commonForm.search')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <SearchOutlinedIcon color='primary'/>
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label={t('commonForm.search')}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container columnGap={5} sx={{my:4}}>
                        <Grid item sx>
                                <Typography variant="subtitle1" >
                                    234
                                </Typography>
                                <Typography color="#b1b1b1" fontSize="12px">
                                {t('bulkUploadHistory.totalUploads')}
                                </Typography>
                        </Grid>
                        <Grid item sx>
                                <Typography variant="subtitle1" >
                                    234
                                </Typography>
                                <Typography color="#b1b1b1" fontSize="12px">
                                {t('bulkUploadHistory.objectiveQuestions')}
                                </Typography>
                        </Grid>
                        <Grid item sx>
                                <Typography variant="subtitle1" >
                                    234
                                </Typography>
                                <Typography color="#b1b1b1" fontSize="12px">
                                {t('bulkUploadHistory.subjectiveQuestions')}
                                </Typography>
                        </Grid>
                        <Grid item sx>
                            <Typography variant="subtitle1" >
                                234
                            </Typography>
                            <Typography color="#b1b1b1" fontSize="12px">
                            {t('bulkUploadHistory.codingQuestions')}
                            </Typography>
                        </Grid>
                        <Grid item sx>
                            <Typography variant="subtitle1">
                                234
                            </Typography>
                            <Typography  color="#b1b1b1" fontSize="12px">
                            {t('bulkUploadHistory.stackQuestions')}
                            </Typography>
                        </Grid>
                        <Grid item sx>
                                <Typography variant="subtitle1" >
                                    234
                                </Typography>
                                <Typography  color="#b1b1b1" fontSize="12px">
                                {t('bulkUploadHistory.totalUploads')}
                                </Typography>
                        </Grid>
                    </Grid>
                    <Box className="data-table-wrapper">
                        <TableContainer>
                            <Table>
                                <EnhancedTableHead
                                    order={order}
                                    orderBy={orderBy}
                                    onRequestSort={handleRequestSort}
                                    rowCount={filesList.length}
                                />
                                <TableBody className='data-table-body'>
                                    {visibleRows.map((fileList, index) => {
                                       const labelId = `enhanced-table-checkbox-${index}`;
                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={fileList.id}
                                            >
                                                <TableCell
                                                    id={labelId}
                                                    scope="row"
                                                >
                                                         <Typography variant='body2' color="text.disabled">{fileList.fileName}</Typography>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Typography variant='body2' color="text.disabled">{fileList.userName}</Typography>
                                                    <Typography variant='body2' color="text.disabled">{fileList.userEmail}</Typography>
                                                </TableCell>
                                                <TableCell align="center">                                               
                                                    <Typography variant='body2' color="text.disabled">
                                                        {fileList.categories}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell  align="center">                                               
                                                    <Typography variant='body2' color="text.disabled">
                                                        {fileList.skills}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell variant='body2' align="center">                                               
                                                    <Typography color="text.disabled">
                                                        {fileList.questions}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="left">                                               
                                                    <Typography variant='body2' color="text.disabled">
                                                        {fileList.type}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="left">                                               
                                                    <Typography color="text.disabled" variant='body2'>{fileList.uploadedOn}</Typography> 
                                                    <Typography color="text.disabled" variant='body2'>{fileList.uploadedTime}</Typography> 
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
                    </Box>
                </Box>
        </Container>
    </Box>
  )
}
