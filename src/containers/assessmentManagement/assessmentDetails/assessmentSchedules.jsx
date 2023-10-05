import React, { useState } from 'react';
import {
    Avatar, Box, Button, Container, Divider, Grid, Typography, Tab, Card, CardContent,
    TableHead, TableCell, TableRow, TableSortLabel, TableContainer, Table, TableBody, Tooltip, Stack
} from '@mui/material'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { visuallyHidden } from '@mui/utils';
import { IconButton } from '@mui/material';


const upcommingSchedulesList = [
    {
        id: 1,
        type: 'Public Link',
        startDate: '12 Aug 2023 - 10:30 AM',
        endDate: '12 Aug 2023 - 10:30 AM'
    },
    {
        id: 2,
        type: 'Invited',
        startDate: '12 Aug 2023 - 10:30 AM',
        endDate: '12 Aug 2023 - 10:30 AM'
    }
];

const AssessmentSchedules = () => {
    const upcommingSchedulesList = [
        {
            id: 1,
            type: 'Public Link',
            startDate: '12 Aug 2023 - 10:30 AM',
            endDate: '12 Aug 2023 - 10:30 AM'
        },
        {
            id: 2,
            type: 'Invited',
            startDate: '12 Aug 2023 - 10:30 AM',
            endDate: '12 Aug 2023 - 10:30 AM'
        }
    ];
    const assessmentsBankList = [
        {
            id: 1,
            level: 'Level 1',
            status: 'Scheduled',
            startDate: '12th Oct 2013 ',
            endDate: '12th Oct 2013 ',
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Hackathon',
            sections: 3,
            duration: " 10 Mins"
        },
        {
            id: 2,
            level: 'Level 2',
            status: 'Scheduled',
            startDate: '12th Oct 2013 ',
            endDate: '12th Oct 2013 ',
            category: 'Category Name',
            skills: 'Skill List,Skill List,Skill List',
            name: 'Angular with C#, MSSQL - Assessment title Lorem Ipsom are sample text for',
            type: 'Hackathon',
            sections: 3,
            duration: " 10 Mins"
        }
    ];
    const pastSchedulesList = [
        {
            id: 1,
            type: 'Public Link and Invite',
            startDate: '12 Aug 2022',
            startTime: '10:30 AM',
            endDate: '12 Aug 2022',
            endTime: '10:30 AM',
            users: '3242'
        },
        {
            id: 2,
            type: 'Invites',
            startDate: '12 Aug 2022',
            startTime: '10:30 AM',
            endDate: '12 Aug 2022',
            endTime: '10:30 AM',
            users: '3242'
        },
        {
            id: 3,
            type: 'Public Link',
            startDate: '12 Aug 2022',
            startTime: '10:30 AM',
            endDate: '12 Aug 2022',
            endTime: '10:30 AM',
            users: '3242'
        },
    ]
    const headCells = [
        {
            id: 'scheduleType',
            label: 'Schedule Type',
            sortable: true,
            align: 'left'
        },
        {
            id: 'startDate',
            label: 'Start Date',
            sortable: true,
            align: 'left'
        },
        {
            id: 'endDate',
            label: 'End Date',
            sortable: true,
            align: 'left'
        },
        {
            id: 'users',
            label: 'Users',
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - pastSchedulesList.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(pastSchedulesList, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );
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
        onRequestSort: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
    };
    const { t } = useTranslation();
    return (
        <Box>
            <Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant='h6'>{t('common.upcommingSchedules')}</Typography>
                </Box>
                <Grid container rowSpacing={2}>
                    {upcommingSchedulesList.map((item) =>
                    (
                        <Grid item key={item.id} xs={6}>
                            <Box sx={{ borderLeft: '5px solid', pl: 2, borderColor: 'text.disabled' }}>
                                <Typography variant='caption' color='text.secondary'>
                                    {item.type}
                                </Typography>
                                <Box className="d-flex align-center" sx={{ my: 0.5 }}>
                                    <InsertInvitationOutlinedIcon color='error' />
                                    <Typography variant='caption' color='text.secondary'>
                                        {item.startDate}
                                    </Typography>
                                    <Typography variant='caption' color='text.secondary' sx={{ mx: 1 }}>
                                        -
                                    </Typography>
                                    <Typography variant='caption' color='text.secondary'>
                                        {item.endDate}
                                    </Typography>
                                </Box>
                                <Typography variant='caption' color='primary'>
                                    {t('common.viewDetails')}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 3 }}></Divider>

            <Box sx={{ mb: 2 }}>
                <Typography variant='h2' sx={{ mb: 2 }}>{t('common.pastSchedules')}</Typography>
                <Box className="data-table-wrapper">
                    <TableContainer>
                        <Table>
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={pastSchedulesList.length}
                            />
                            <TableBody className='data-table-body'>
                                {visibleRows.map((schedule, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={schedule.id}
                                        >
                                            <TableCell
                                                id={labelId}
                                                scope="row"
                                            >
                                                <Typography variant='body2' color="text.disabled">{schedule.type}</Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant='body2' color="text.disabled">{schedule.startTime}</Typography>
                                                <Typography variant='body2' color="text.disabled">{schedule.startDate}</Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant='body2' color="text.disabled">{schedule.endTime}</Typography>
                                                <Typography variant='body2' color="text.disabled">{schedule.endDate}</Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant='body2' color="text.disabled">
                                                    {schedule.users}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Stack direction="row" spacing={1} justifyContent={'center'}>
                                                    <Tooltip title={t('common.viewCandidates')} placement="top">
                                                        <IconButton aria-label="delete" color="text.disabled">
                                                            <GroupOutlinedIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title={t('common.extendValidity')} placement="top">
                                                        <IconButton color='error'>
                                                            <EventOutlinedIcon />
                                                        </IconButton>

                                                    </Tooltip>
                                                    <Tooltip title={t('common.scheduleLink')} placement="top">
                                                        <IconButton sx={{ color: "#7696d1" }}>
                                                            <LaunchOutlinedIcon />
                                                        </IconButton>

                                                    </Tooltip>
                                                    <Tooltip title={t('common.download')} placement="top">
                                                        <IconButton color='primary'>
                                                            <FileDownloadOutlinedIcon />
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
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    )
}

export default AssessmentSchedules;