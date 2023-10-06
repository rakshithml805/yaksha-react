import React, { useEffect } from 'react';
import {
    Box, Container, Tooltip, InputLabel, OutlinedInput, InputAdornment, IconButton, TablePagination, ListItemText, Autocomplete, Typography,
    Avatar, FormControl, Grid, TextField, TableContainer, Table, TableHead, TableRow, TableCell, Switch, TableBody, Checkbox,
    TableFooter, TableSortLabel, Stack
} from '@mui/material';
import avatar from '../../../assets/2.jpg';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PropTypes from 'prop-types';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { visuallyHidden } from '@mui/utils';
import { useTranslation } from 'react-i18next';
import Banner from '../../../_shared/components/banner/banner';
import DeleteDialog from '../../../_shared/components/deleteDialog/DeleteDialog';
import { useParams } from 'react-router-dom';
import { FETCH_USER_LIST } from '../../../_store/actions/actions';
import { apiYakshaUrl } from '../../../_api/_urls';
import { getApi } from "../../../_api/_api";
import { NavLink } from 'react-router-dom';

export default function UsersList() {
    const { tenancyName } = useParams();
    const { t } = useTranslation();
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: `/${tenancyName}/dashboard`
        },
        {
            name: "All Users",
            url: "/"
        }
    ]
    // useEffect(async () => {
    //     try {
    //         const { status, body } = await getApi();
    //         if(status===200){
    //             return body;
    //             await setUsers(body.result);
    //         }
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }, [])
    const [users, setUsers] = React.useState([]);
    useEffect(async () => {
        async function fetchMyAPI() {
            try {
                const { status, body } = await getApi(`${apiYakshaUrl}`+'/services/yaksha/User/GetUserDetails');
                if (status === 200) {
                    return body;
                    
                    // await setUsers(body.result);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchMyAPI()
    }, [])

    

    const button = ['Onboard Users', "onboard-user"];
    const usersList = [
        {
            id: '1',
            photo: { avatar },
            name: 'Canon Jenings',
            buisness: 'Engineer',
            tenant: 'yaksha',
            role: 'Admin',
            email: 'user1@gmail.com',
            users: '1233',
            status: true
        },
        {
            id: '2',
            photo: { avatar },
            name: 'Canon Gamers',
            buisness: 'Team Lead',
            tenant: 'yaksha',
            role: 'User',
            email: 'user1@gmail.com',
            users: '1233',
            status: false
        },
        {
            id: '3',
            photo: { avatar },
            name: 'Thomas Jenings',
            buisness: 'Management',
            tenant: 'yaksha',
            role: 'Author',
            email: 'user1@gmail.com',
            users: '1233',
            status: true
        },
        {
            id: '4',
            photo: { avatar },
            name: 'father Jenings',
            buisness: 'Engineer',
            tenant: 'yaksha',
            role: 'Admin',
            email: 'user1@gmail.com',
            users: '1233',
            status: true
        },
        {
            id: '5',
            photo: { avatar },
            name: 'Sam Jenings',
            buisness: 'Marketing',
            tenant: 'yaksha',
            role: 'Author',
            email: 'user1@gmail.com',
            users: '1233',
            status: false
        },
    ]
    const headCells = [
        {
            id: 'name',
            label: 'Name',
            sortable: true,
            align: 'left'
        },
        {
            id: 'email',
            label: 'Email',
            sortable: true,
            align: 'left'
        },
        {
            id: 'buisness',
            label: 'Business Unit',
            sortable: true,
            align: 'left'
        },
        {
            id: 'role',
            label: 'Role',
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
            id: 'status',
            label: 'Status',
            sortable: true,
            align: 'right'
        },
        {
            id: 'actions',
            label: 'Actions',
            sortable: false,
            align: 'center'
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

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = usersList.map((n) => n.name);
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - usersList.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(usersList, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );


    const buisnessUnit = [
        'Engineer',
        'Manager',
        'Development',
        'Team Lead',
    ];
    const rolesList = [
        'Admin',
        'User',
        'Reviewer',
        'Publisher',
    ];

    const [personName, setPersonName] = React.useState([]);
    const tenantsList = ['Yaksha', 'CA', 'NSEIT', 'Cognizant'];

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [personRole, setPersonRole] = React.useState([]);

    const handleRoleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonRole(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [userStatus, setUserStatus] = React.useState({});
    React.useState(() => {
        const initialStatus = {};
        usersList.forEach((user) => {
            initialStatus[user.id] = user.status;
        });
        setUserStatus(initialStatus);
    }, [usersList]);

    // Function to handle toggle switch changes
    const handleSwitchChange = (id) => {
        setUserStatus((prevStatus) => ({
            ...prevStatus,
            [id]: !prevStatus[id],
        }));
    };
    const [deleteItem, setDeleteItem] = React.useState('');
    const [dialog, setDialog] = React.useState(false);
    const [userDelete, setUserDelete] = React.useState(false);
    const dialogOpen = (item) => {
        setDeleteItem(item)
        setDialog(true);
    };
    const dialogClose = () => {
        setDeleteItem('')
        setDialog(false);
        setUserDelete(false);
    };
    const deleteUser = () => {
        setUserDelete(true);
    }
    return (
        <Box>
            <Banner title={t('usersList.allUsers')} crumbs={breadcrumbs} bannerButton={button} />
            <Container maxWidth="xl">
                <Box sx={{ my: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2.5}>
                            <Autocomplete
                                disablePortal
                                required
                                options={tenantsList}
                                renderInput={(params) => <TextField {...params} label={t('commonForm.selectTenant')} />}
                            />
                        </Grid>
                        <Grid item xs={2.5}>
                            <FormControl fullWidth>
                                <InputLabel>{t('commonForm.selectBuisnessUnit')}</InputLabel>
                                <Select
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label={t('commonForm.selectBuisnessUnit')} />}
                                    renderValue={(selected) => selected.join(', ')}
                                >
                                    {buisnessUnit.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2.5}>
                            <FormControl fullWidth>
                                <InputLabel>{t('commonForm.selectRoles')}</InputLabel>
                                <Select
                                    multiple
                                    value={personRole}
                                    onChange={handleRoleChange}
                                    input={<OutlinedInput label={t('commonForm.selectRoles')} />}
                                    renderValue={(selected) => selected.join(', ')}
                                >
                                    {rolesList.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={personRole.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4.5}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel>{t('commonForm.search')}</InputLabel>
                                <OutlinedInput placeholder={t('commonForm.search')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton edge="end">
                                                <SearchOutlinedIcon color='primary' />
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
                                rowCount={usersList.length}
                            />
                            <TableBody className='data-table-body'>
                                {visibleRows.map((userList, index) => {
                                    const isItemSelected = isSelected(userList.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={userList.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    onClick={(event) => handleClick(event, userList.name)}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                id={labelId}
                                                scope="row">
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Avatar alt="" src="{userList.photo}" />
                                                    <NavLink className='question-bank-link' to="user-profile"><Typography variant='body2' color='primary' sx={{ ml: 2 }}>{userList.name}</Typography></NavLink>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant='body2' color='text.primary'>
                                                    {userList.email}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant='body2' color='text.primary'>
                                                    {userList.buisness}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant='body2' color='text.primary'>
                                                    {userList.role}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="left" variant='body2' color='text.primary'>
                                                <Typography variant='body2' color='text.primary'>
                                                    {userList.tenant}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Switch checked={userStatus[userList.id]} onChange={() => handleSwitchChange(userList.id)} />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Stack direction="row" spacing={1} justifyContent={'center'}>
                                                    <Tooltip title={t('common.profile')} placement="top">
                                                        <IconButton aria-label="delete" color="error">
                                                            <BadgeOutlinedIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title={t('common.proctoringSettings')} placement="top">
                                                        <IconButton sx={{ color: "#7696d1" }}>
                                                            <AdminPanelSettingsOutlinedIcon />
                                                        </IconButton>

                                                    </Tooltip>
                                                    <Tooltip title={t('common.resetPassword')} placement="top">
                                                        <IconButton color='success'>
                                                            <LockResetOutlinedIcon />
                                                        </IconButton>

                                                    </Tooltip>
                                                    <Tooltip title={t('common.role')} placement="top">
                                                        <IconButton color='success'>
                                                            <SupervisorAccountOutlinedIcon />
                                                        </IconButton>

                                                    </Tooltip>
                                                    <Tooltip title={t('common.delete')} placement="top">
                                                        <IconButton color="error" onClick={() => dialogOpen(userList.name)}>
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
                                        count={usersList.length}
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
                deleteStatus={userDelete}
                handleClose={dialogClose}
                handleDelete={deleteUser}
            />
        </Box>
    )
}
