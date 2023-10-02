import React, { useState } from 'react'
import { 
    Box, Container, Typography, Switch, TextField, Grid,
    Autocomplete, FormControl, InputLabel, TablePagination, OutlinedInput,
    InputAdornment, TableRow, TableCell, TableBody, TableFooter, Checkbox, IconButton, Table, TableContainer, 
    TableHead, TableSortLabel, Stack
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { visuallyHidden } from '@mui/utils';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import Banner from '../../../_shared/components/banner/banner';
import { useTranslation } from 'react-i18next';
import DeleteDialog from '../../components/deleteDialog/DeleteDialog';

export default function QuestionBankList() {

    const breadcrumbs = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "Question Banks",
            url: ""
        }
    ];
    const {t} = useTranslation();
    const button = ['Create Question Bank', "/create-question-bank"];
    
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
            id: 'name',
            label: 'Question Bank Name',
            sortable: true,
            align: 'left'
        },
        {
            id: 'tenant',
            label: 'Tenant',
            sortable: true,
            align: 'left'
        },
        {
            id: 'questions',
            label: 'Questions',
            sortable: false,
            align: 'left'
        },
        {
            id: 'status',
            label: 'Status',
            sortable: true,
            align: 'left'
        },
        {
            id: 'action',
            label: 'Action',
            sortable: false,
            align: 'right'
        },
    ];
    
    let questionBanksListArray = [
        {
            id: 1,
            name: 'Default Question Bank',
            tenant: 'Yaksha',
            objectiveQuestion: 285,
            codingQuestion: 250,
            subjectiveQuestion: 208,
            stackQuestion: 210,
            status: 'active' 
        },
        {
            id: 2,
            name: 'CA Question Bank',
            tenant: 'CA',
            objectiveQuestion: 300,
            codingQuestion: 240,
            subjectiveQuestion: 108,
            stackQuestion: 320,
            status: 'active' 
        },
        {
            id: 3,
            name: 'Xoriant Question Bank',
            tenant: 'Xoriant',
            objectiveQuestion: 400,
            codingQuestion: 440,
            subjectiveQuestion: 408,
            stackQuestion: 360,
            status: '' 
        },
        {
            id: 4,
            name: 'Cognizant Question Bank',
            tenant: 'Cognizant',
            objectiveQuestion: 300,
            codingQuestion: 240,
            subjectiveQuestion: 108,
            stackQuestion: 310,
            status: 'active' 
        },
        {
            id: 5,
            name: 'My Question Bank',
            tenant: 'Yaksha',
            objectiveQuestion: 285,
            codingQuestion: 250,
            subjectiveQuestion: 208,
            stackQuestion: 210,
            status: 'active' 
        },
        {
            id: 6,
            name: 'Your Question Bank',
            tenant: 'CA',
            objectiveQuestion: 300,
            codingQuestion: 240,
            subjectiveQuestion: 108,
            stackQuestion: 320,
            status: 'active' 
        },
        {
            id: 7,
            name: 'Their Question Bank',
            tenant: 'Xoriant',
            objectiveQuestion: 400,
            codingQuestion: 440,
            subjectiveQuestion: 408,
            stackQuestion: 360,
            status: '' 
        },
        {
            id: 8,
            name: 'Others Question Bank',
            tenant: 'Cognizant',
            objectiveQuestion: 300,
            codingQuestion: 240,
            subjectiveQuestion: 108,
            stackQuestion: 310,
            status: 'active' 
        }
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
        const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
            props;
        const createSortHandler = (property) => (event) => {
            onRequestSort(event, property);
        };
        
        return (
            <TableHead className='data-table-head'>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{
                            'aria-label': 'select all desserts',
                            }}
                        />
                    </TableCell>
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
        numSelected: PropTypes.number.isRequired,
        onRequestSort: PropTypes.func.isRequired,
        onSelectAllClick: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
    };

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [questionBanksList, setQuestionBanksList] = useState(questionBanksListArray);

    const handleQuestionBankStatus = (val) => {
        const modifiedQuestionBank = questionBanksList.map(question => {
            if(question.id === val) {
                return {...question, status: question.status === 'active' ? '' : 'active'};
            }
            return question;
        });
        setQuestionBanksList(modifiedQuestionBank);
    }

  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = questionBanksList.map((n) => n.name);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    function TablePaginationActions(props) {
        const theme = useTheme();
        const { count, page, rowsPerPage, onPageChange } = props;
      
        const handleFirstPageButtonClick = (event) => {
          onPageChange(event, 0);
        };
      
        const handleBackButtonClick = (event) => {
          onPageChange(event, page - 1);
        };
      
        const handleNextButtonClick = (event) => {
          onPageChange(event, page + 1);
        };
      
        const handleLastPageButtonClick = (event) => {
          onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };
      
        return (
          <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
              onClick={handleFirstPageButtonClick}
              disabled={page === 0}
              aria-label="first page"
            >
              {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
              onClick={handleBackButtonClick}
              disabled={page === 0}
              aria-label="previous page"
            >
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
              onClick={handleNextButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="next page"
            >
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
              onClick={handleLastPageButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="last page"
            >
              {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
          </Box>
        );
    }

    TablePaginationActions.propTypes = {
        count: PropTypes.number.isRequired,
        onPageChange: PropTypes.func.isRequired,
        page: PropTypes.number.isRequired,
        rowsPerPage: PropTypes.number.isRequired,
    };
  
    const isSelected = (name) => selected.indexOf(name) !== -1;
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - questionBanksList.length) : 0;
  
    const visibleRows = React.useMemo(
      () =>
        stableSort(questionBanksList, getComparator(order, orderBy)).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        ),
      [order, orderBy, page, rowsPerPage],
    );

    const [deleteItem, setDeleteItem] = React.useState('');
    const [dialog, setDialog] = React.useState(false);
    const [questionDelete, setQuestionDelete] = React.useState(false);
    const dialogOpen = (item) => {
        setDeleteItem(item)
        setDialog(true);
    };
    const dialogClose = () => {
        setDeleteItem('')
        setDialog(false);
        setQuestionDelete(false);
    };
    const deleteQuestion = () => {
        setQuestionDelete(true);
    }
    
    return (
        <Box>
            <Banner title={t('questionBanks.questionBanks')} crumbs={breadcrumbs} bannerButton={button} />
            <Container maxWidth="xl">
                <Box sx={{my:4}}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Autocomplete
                            disablePortal
                            options={tenants}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField {...params} label={t('commonForm.selectTenant')} />}
                            />
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
                </Box>

                <Box className="data-table-wrapper">
                    <TableContainer>
                        <Table>
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={questionBanksList.length}
                            />
                            <TableBody className='data-table-body'>
                                {visibleRows.map((questionBank, index) => {
                                    const isItemSelected = isSelected(questionBank.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                    
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={questionBank.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                {questionBank.name !== "Default Question Bank" && 
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        onClick={(event) => handleClick(event, questionBank.name)}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                }
                                            </TableCell>
                                            <TableCell
                                                id={labelId}
                                                scope="row"
                                            >
                                                <NavLink className='question-bank-link' to="/question-bank-details">{questionBank.name}</NavLink>
                                            </TableCell>
                                            <TableCell align="left">{questionBank.tenant}</TableCell>
                                            <TableCell align="left">
                                                <Box display={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                    <Box>
                                                        <Typography>
                                                            {questionBank.objectiveQuestion}
                                                        </Typography>
                                                        <Typography className='question-type'>
                                                            {t('questionBanks.objective')}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            {questionBank.codingQuestion}
                                                        </Typography>
                                                        <Typography className='question-type'>
                                                            {t('questionBanks.coding')}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            {questionBank.subjectiveQuestion}
                                                        </Typography>
                                                        <Typography className='question-type'>
                                                            {t('questionBanks.subjective')}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            {questionBank.stackQuestion}
                                                        </Typography>
                                                        <Typography className='question-type'>
                                                            {t('questionBanks.stack')}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Switch checked={questionBank.status === 'active' ? true : false}/>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Stack direction="row" spacing={1} justifyContent={'flex-end'}>
                                                    <IconButton aria-label="clone">
                                                        <ContentCopyOutlinedIcon /> 
                                                    </IconButton>
                                                    <IconButton aria-label="detail" color="primary">
                                                        <FindInPageOutlinedIcon />
                                                    </IconButton>
                                                    <IconButton color="warning" aria-label="edit">
                                                        <EditOutlinedIcon />
                                                    </IconButton>
                                                    <IconButton color="error" aria-label="delete"
                                                        disabled={questionBank.name === 'Default Question Bank'}
                                                        onClick={() => dialogOpen(questionBank.name)}
                                                        sx={{visibility: questionBank.name === 'Default Question Bank' ? 'hidden' : 'visible'}}>
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
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={6}
                                    count={questionBanksList.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                        'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
            <DeleteDialog
                open={dialog}
                item={deleteItem}
                deleteStatus={questionDelete}
                handleClose={dialogClose}
                handleDelete={deleteQuestion}
            />
        </Box>
    )
}
