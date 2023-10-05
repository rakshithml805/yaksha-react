import {
    Avatar, Box, Button, Container, Divider, Grid, Typography, Tab, Card, CardContent,
    TableHead, TableCell, TableRow, TableSortLabel, TableContainer, Table, TableBody, Tooltip, Stack
} from '@mui/material'
import React from 'react'
import avatar from '../../../assets/2.jpg'
import { useTranslation } from 'react-i18next';
import Banner from '../../../_shared/components/banner/banner';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { IconButton } from '@mui/material';


export default function AssessmentDriveDetail() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { t } = useTranslation();

    const breadcrumbs = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "Assesment Drive",
            url: "/assessment-drive"
        },
        {
            name: "Assesments Drive Detail",
            url: ""
        }
    ];
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
    return (
        <Box>
            <Banner title="Assessment Drive Title" crumbs={breadcrumbs} />
            <Container maxWidth="xl" >
                <Grid container columnSpacing={1} sx={{ mt: 2 }} xs={12}>
                    <Grid item xs={3}>
                        <Box className="d-flex justify-space-between" sx={{ mb: 2, mt: 1 }}>
                            <Box className="d-flex justify-space-between align-center">
                                <Avatar src={avatar} alt='avatar' />
                                <Box sx={{ ml: 1 }}>
                                    <Typography variant='body1'>First NAme Last Name</Typography>
                                    <Typography variant='caption' color='primary'>{t('common.author')}</Typography>
                                </Box>
                            </Box>
                            <Box className="d-flex justify-space-between align-top">
                                <CalendarMonthOutlinedIcon color='error' />
                                <Box sx={{ ml: 1 }}>
                                    <Typography variant='body1'>21 june 2018</Typography>
                                    <Typography variant='caption' color='primary'>{t('common.createdOn')} </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Divider></Divider>
                        <Box>
                            <Box className="d-flex justify-space-between align-center" sx={{ my: 2 }}>
                                <Typography variant='h2'>{t('common.upcommingSchedules')}</Typography>
                                <Button variant='outlined'>{t('common.schedule')}</Button>
                            </Box>
                            <Grid container rowSpacing={2}>
                                {upcommingSchedulesList.map((item) =>
                                (
                                    <Grid item key={item.id} xs={12}>
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
                    </Grid>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }}></Divider>
                    <Grid item xs sx={{ paddingLeft: '0px !important' }}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} className='tab-menu-container'>
                                        <Tab label={t('common.basicInfo')} value="1" />
                                        <Tab label={t('common.levels')} value="2" />
                                        <Tab label={t('common.schedules')} value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Typography variant='h2' sx={{ mb: 2 }}>{t('common.description')}</Typography>
                                    <Typography lineHeight={2} color='text.secondary'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta dicta reiciendis fuga dolorem. Optio a tempora ex excepturi harum dolorum iusto,
                                        autem odio minima assumenda, placeat nam animi expedita quam totam magnam voluptatem. Ex veritatis cupiditate eos soluta adipisci perferendis,
                                        consectetur, aperiam sit, ab reiciendis provident consequuntur praesentium nemo?
                                    </Typography>
                                    <Typography variant='h2' sx={{ mb: 2, mt: 4 }}>{t('testTracker.instruction')}</Typography>
                                    <Typography lineHeight={2} color='text.secondary'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta dicta reiciendis fuga dolorem. Optio a tempora ex excepturi harum dolorum iusto,
                                        autem odio minima assumenda, placeat nam animi expedita quam totam magnam voluptatem. Ex veritatis cupiditate eos soluta adipisci perferendis,
                                        consectetur, aperiam sit, ab reiciendis provident consequuntur praesentium nemo?
                                    </Typography>
                                </TabPanel>
                                <TabPanel value="2">
                                    <Grid container spacing={3}>
                                        {
                                            assessmentsBankList.map((assessment) =>
                                            (
                                                <Grid item xs={12} sm={6} md={6} key={assessment.id}>
                                                    <Typography variant='subtitle1'>{assessment.level}</Typography>
                                                    <Card sx={{ border: '1px solid #c4c4c4' }}>
                                                        <CardContent sx={{ position: 'relative' }}>
                                                            <Box className="d-flex justify-space-between align-center">
                                                                <Box>
                                                                    {
                                                                        assessment.status === "Scheduled" ? (
                                                                            <Box sx={{ padding: '0px 5px', backgroundColor: '#f0fadd', borderRadius: '4px', display: 'flex', width: 'fit-content' }}>
                                                                                <Typography variant='caption' sx={{ color: '#6a941b' }}>{assessment.status}</Typography>
                                                                                <Typography variant='caption' sx={{ color: '#153776', ml: 1 }}>{assessment.schedulevalue}</Typography>
                                                                            </Box>
                                                                        ) : (null)
                                                                    }
                                                                    {
                                                                        assessment.status === "Published" ? (
                                                                            <Typography variant='caption' sx={{ padding: '0px 5px', backgroundColor: '#e8f2fb', color: '#2768a8', borderRadius: '4px' }}>{assessment.status}</Typography>
                                                                        ) : (null)
                                                                    }
                                                                    {
                                                                        assessment.status === "Drafts" ? (
                                                                            <Typography variant='caption' sx={{ padding: '0px 5px', backgroundColor: '#ffe8c3', color: '#ff9e02', borderRadius: '4px' }}>{assessment.status}</Typography>
                                                                        ) : (null)
                                                                    }
                                                                </Box>
                                                                <Box className="d-flex justify-space-between ">
                                                                    <Typography>{assessment.startDate}</Typography>
                                                                    <Typography sx={{ mx: 1 }}> - </Typography>
                                                                    <Typography>{assessment.endDate}</Typography>
                                                                </Box>
                                                                <Button variant='outlined'>{t('common.schedule')}</Button>
                                                            </Box>
                                                            <Box sx={{ width: '70%', mt: 1 }}>
                                                                <Typography variant='body2' color="text.secondary" sx={{ maxHeight: '44px', overflow: 'hidden' }}>{assessment.category}</Typography>
                                                                <Typography variant='caption' color="text.disabled" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{assessment.skills}</Typography>
                                                            </Box>
                                                            <Typography variant='subtitle1' sx={{ maxHeight: '56px', overflow: 'hidden', my: 1 }}>{assessment.name}</Typography>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                                                                <Box className='d-flex flex-start'>
                                                                    <AnalyticsOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                                        <Typography variant='body1'>{assessment.type}</Typography>
                                                                        <Typography variant='caption' color="text.disabled" >{t('common.type')}</Typography>
                                                                    </Box>

                                                                </Box>
                                                                <Box className='d-flex flex-start'>
                                                                    <LayersOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                                        <Typography variant='body1'>{assessment.sections}</Typography>
                                                                        <Typography variant='caption' color="text.disabled">{t('common.sections')}</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box className='d-flex flex-start'>
                                                                    <AccessTimeOutlinedIcon sx={{ fontSize: '18px' }} color='error' />
                                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                                        <Typography variant='body1'>{assessment.duration}</Typography>
                                                                        <Typography variant='caption' color="text.disabled">{t('common.duration')}</Typography>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="3">
                                    <Box>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant='h2'>{t('common.upcommingSchedules')}</Typography>
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
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
