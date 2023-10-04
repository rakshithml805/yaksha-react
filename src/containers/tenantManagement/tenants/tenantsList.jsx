import React from 'react';
import {
    Container, Box, Typography, FormControl, InputLabel, OutlinedInput,
    Checkbox, Switch, InputAdornment, IconButton, Table, TableBody, TablePagination, Stack,
    TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TableFooter, Tooltip,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import tenantlogo from '../../../assets/yaksha.png';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PropTypes from 'prop-types';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { visuallyHidden } from '@mui/utils';
import Banner from '../../../_shared/components/banner/banner';
import DeleteDialog from '../../../_shared/components/deleteDialog/DeleteDialog';

export default function TenantsList() {
    const { t } = useTranslation();

    const breadcrumbs = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "Manage Tenants",
            url: "/"
        }
    ]
    const button = ['Onboard Tenant', "/create-tennant"];
    const tenantsListArray = [
        {
            id: 1,
            tenantname: 'Yaksha',
            display: 'yaksha',
            admin: 'User 1',
            email: 'user1@gmail.com',
            users: '1233',
            status: true
        },
        {
            id: 2,
            tenantname: 'Capegemini',
            display: 'Capegemini',
            admin: 'User 2',
            email: 'user2@gmail.com',
            users: '133',
            status: false
        },
        {
            id: 3,
            tenantname: 'Cognizant',
            display: 'Cognizant',
            admin: 'User 3',
            email: 'user3@gmail.com',
            users: '163',
            status: false
        },
        {
            id: 4,
            tenantname: 'Xoraint',
            display: 'Xoriant',
            admin: 'User 4',
            email: 'user4@gmail.com',
            users: '1243',
            status: false
        },
        {
            id: 5,
            tenantname: 'CA',
            display: 'CA',
            admin: 'User 5',
            email: 'user5@gmail.com',
            users: '1933',
            status: true
        },
    ]
    const headCells = [
        {
            id: 'name',
            label: '',
            sortable: false,
            align: 'left'
        },
        {
            id: 'tenantname',
            label: 'Tenant Name',
            sortable: true,
            align: 'left'
        },
        {
            id: 'displayname',
            label: 'Display Name',
            sortable: true,
            align: 'left'
        },
        {
            id: 'admin',
            label: 'Admin',
            sortable: true,
            align: 'left'
        },
        {
            id: 'users',
            label: 'Users',
            sortable: true,
            align: 'center'
        },
        {
            id: 'status',
            label: 'Status',
            sortable: true,
            align: 'center'
        },
        {
            id: 'action',
            label: 'Action',
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
    const [tenantsList, setTenantsList] = React.useState(tenantsListArray);
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = tenantsList.map((n) => n.id);
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
        )
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - TenantsList.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(tenantsList, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    const [tenantStatus, setTenantStatus] = React.useState({});
    React.useState(() => {
        const initialStatus = {};
        tenantsListArray.forEach((tenant) => {
            initialStatus[tenant.id] = tenant.status;
        });
        setTenantStatus(initialStatus);
    }, [tenantsListArray]);

    // Function to handle toggle switch changes
    const handleSwitchChange = (id) => {
        setTenantStatus((prevStatus) => ({
            ...prevStatus,
            [id]: !prevStatus[id],
        }));
    };
    const [deleteItem, setDeleteItem] = React.useState('');
    const [dialog, setDialog] = React.useState(false);
    const [tenantDelete, setTenantDelete] = React.useState(false);
    const dialogOpen = (item) => {
        setDeleteItem(item)
        setDialog(true);
    };
    const dialogClose = () => {
        setDeleteItem('')
        setDialog(false);
        setTenantDelete(false);
    };
    const deleteTenant = () => {
        setTenantDelete(true);
    }

    return (
        <Box>
            <Banner title="Manage Tags" crumbs={breadcrumbs} bannerButton={button} />
            <Container maxWidth="xl">
                <Box sx={{ my: 4 }}>
                    <FormControl variant="outlined" sx={{ width: '30%' }}>
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
                                rowCount={tenantsList.length}
                            />
                            <TableBody className='data-table-body'>
                                {visibleRows.map((tenant, index) => {
                                    const isItemSelected = isSelected(tenant.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={tenant.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                {tenant.tenantname !== "Yaksha" &&
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        onClick={(event) => handleClick(event, tenant.id)}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                }
                                            </TableCell>
                                            <TableCell width='150px'>
                                                <img src={tenantlogo} />
                                            </TableCell>
                                            <TableCell id={labelId} scope="row">
                                                <Typography variant='body2'>{tenant.tenantname}</Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant='body2'>
                                                    {tenant.display}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant='body2'>
                                                    {tenant.admin}
                                                </Typography>
                                                <Typography variant="caption">
                                                    {tenant.email}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography variant='body2'>
                                                    {tenant.users}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Switch checked={tenantStatus[tenant.id]} onChange={() => handleSwitchChange(tenant.id)} />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Stack direction="row" spacing={1} justifyContent={'center'}>
                                                    <Tooltip title={t('common.users')} placement="top">
                                                        <IconButton>
                                                            <GroupOutlinedIcon color='primary' />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title={t('common.edit')} placement="top">
                                                        <IconButton aria-label="delete" color="primary">
                                                            <EditOutlinedIcon color="warning" />
                                                        </IconButton>

                                                    </Tooltip>
                                                    <Tooltip title={t('common.delete')} placement="top">
                                                        <IconButton color="error"
                                                            onClick={() => dialogOpen(tenant.tenantname)}
                                                            sx={{ visibility: tenant.tenantname === 'Yaksha' ? 'hidden' : 'visible' }}>
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
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={12}
                                        count={tenantsList.length}
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
                deleteStatus={tenantDelete}
                handleClose={dialogClose}
                handleDelete={deleteTenant}
            />
        </Box>
    )
}
