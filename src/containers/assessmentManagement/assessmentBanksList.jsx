import React from 'react'
import {
  Box, Container, Typography, Switch, TextField, Grid,
  Autocomplete, FormControl, InputLabel, TablePagination, OutlinedInput,
  InputAdornment, TableRow, TableCell, TableBody, TableFooter, Checkbox, IconButton, Table, TableContainer,
  TableHead, TableSortLabel, Stack, Tooltip,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Banner from '../../../_shared/components/banner/banner';
import { visuallyHidden } from '@mui/utils';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import DeleteDialog from '../../components/deleteDialog/DeleteDialog';

export default function AssessmentBanksList() {
  const { t } = useTranslation();

  const breadcrumbs = [
    {
      name: "Dashboard",
      url: "/dashboard"
    },
    {
      name: "Assessment Banks",
      url: ""
    }
  ]
  const button = ['Create Assessment Bank', "/create-assessment-bank"];
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
      label: 'Assessment Bank Name',
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
      id: 'assessments',
      label: 'Assessments',
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
      align: 'center'
    },
  ];
  let assessmentBanksListArray = [
    {
      id: 1,
      name: 'Default Assessment Bank',
      tenant: 'Yaksha',
      standardQuestion: 285,
      adaptiveQuestion: 250,
      hackathonQuestion: 208,
      status: true
    },
    {
      id: 2,
      name: 'CA Question Bank',
      tenant: 'CA',
      standardQuestion: 125,
      adaptiveQuestion: 265,
      hackathonQuestion: 808,
      status: true
    },
    {
      id: 3,
      name: 'Xoriant Question Bank',
      tenant: 'Xoriant',
      standardQuestion: 25,
      adaptiveQuestion: 252,
      hackathonQuestion: 258,
      status: false
    },
    {
      id: 4,
      name: 'Cognizant Question Bank',
      tenant: 'Cognizant',
      standardQuestion: 585,
      adaptiveQuestion: 150,
      hackathonQuestion: 268,
      status: false
    },
    {
      id: 5,
      name: 'My Question Bank',
      tenant: 'Yaksha',
      standardQuestion: 485,
      adaptiveQuestion: 650,
      hackathonQuestion: 108,
      status: false
    },
    {
      id: 6,
      name: 'Your Question Bank',
      tenant: 'CA',
      standardQuestion: 285,
      adaptiveQuestion: 250,
      hackathonQuestion: 608,
      status: true
    },
    {
      id: 7,
      name: 'Their Question Bank',
      tenant: 'Xoriant',
      standardQuestion: 285,
      adaptiveQuestion: 270,
      hackathonQuestion: 208,
      status: false
    },
    {
      id: 8,
      name: 'Others Question Bank',
      tenant: 'Cognizant',
      standardQuestion: 385,
      adaptiveQuestion: 850,
      hackathonQuestion: 208,
      status: true
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
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={{ textAlign: headCell.align }}
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
  const [assessmentBanksList, setAssessmentBanksList] = React.useState(assessmentBanksListArray);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = assessmentBanksList.map((n) => n.name);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - assessmentBanksList.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(assessmentBanksList, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );
  const [bankStatus, setBankStatus] = React.useState({});
  React.useState(() => {
    const initialStatus = {};
    assessmentBanksListArray.forEach((bank) => {
      initialStatus[bank.id] = bank.status;
    });
    setBankStatus(initialStatus);
  }, [assessmentBanksListArray]);

  // Function to handle toggle switch changes
  const handleSwitchChange = (id) => {
    setBankStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  const [deleteItem, setDeleteItem] = React.useState('');
  const [dialog, setDialog] = React.useState(false);
  const [bankDelete, setBankDelete] = React.useState(false);
  const dialogOpen = (item) => {
    setDeleteItem(item)
    setDialog(true);
  };
  const dialogClose = () => {
    setDeleteItem('')
    setDialog(false);
    setBankDelete(false);
  };
  const deleteBank = () => {
    setBankDelete(true);
  }

  return (
    <Box>
      <Banner title={t('assessmentBanksList.assessmentBanks')} crumbs={breadcrumbs} bannerButton={button} />
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Autocomplete
                disablePortal
                options={tenants}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label={t('assessmentBanksList.selectTenant')} />}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>{t('commonForm.search')}</InputLabel>
                <OutlinedInput placeholder="Search"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <SearchOutlinedIcon color='primary' />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Search"
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
                rowCount={assessmentBanksList.length}
              />
              <TableBody className='data-table-body'>
                {visibleRows.map((assessmentBank, index) => {
                  const isItemSelected = isSelected(assessmentBank.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={assessmentBank.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        {assessmentBank.name !== "Default Assessment Bank" &&
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            onClick={(event) => handleClick(event, assessmentBank.name)}
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
                        <NavLink to="/assessment-bank-detail">
                          <Typography variant='body2' sx={{ color: '#153776' }}>{assessmentBank.name}</Typography>
                        </NavLink>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant='body2'>{assessmentBank.tenant}</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Box display={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                            <Typography variant='body2'>
                              {assessmentBank.standardQuestion}
                            </Typography>
                            <Typography variant='caption' color='text.secondary'>
                              {t('assessmentBanksList.standard')}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant='body2'>
                              {assessmentBank.adaptiveQuestion}
                            </Typography>
                            <Typography variant='caption' color='text.secondary'>
                              {t('assessmentBanksList.adaptive')}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant='body2'>
                              {assessmentBank.hackathonQuestion}
                            </Typography>
                            <Typography variant='caption' color='text.secondary'>
                              {t('assessmentBanksList.hackathon')}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="left">
                        <Switch checked={bankStatus[assessmentBank.id]} onChange={() => handleSwitchChange(assessmentBank.id)} />
                      </TableCell>
                      <TableCell align="center">
                        <Stack direction="row" spacing={1} justifyContent={'center'}>
                          <Tooltip title={t('common.copy')} placement="top">
                            <IconButton >
                              <ContentCopyOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title={t('common.viewDetails')} placement="top">
                            <IconButton color="primary">
                              <FindInPageOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title={t('common.edit')} placement="top">
                            <IconButton color="warning" >
                              <EditOutlinedIcon />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title={t('common.delete')} placement="top">
                            <IconButton color="error"
                              sx={{ visibility: assessmentBank.name === 'Default Assessment Bank' ? 'hidden' : 'visible' }}
                              onClick={() => dialogOpen(assessmentBank.name)}>
                              <DeleteForeverOutlinedIcon />
                            </IconButton>
                          </Tooltip>
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
              <TableFooter className='data-table-footer'>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={12}
                    count={assessmentBanksList.length}
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
          deleteStatus={bankDelete}
          handleClose={dialogClose}
          handleDelete={deleteBank}
      />
    </Box>
  )
}
