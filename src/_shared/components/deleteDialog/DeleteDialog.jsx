import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, Divider, Slide, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTranslation } from 'react-i18next';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function DeleteDialog({open, item, deleteStatus, handleClose, handleDelete}) {
    const {t} = useTranslation();
    return (
    <>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="delete-tag-dialog"
        >
            <DialogContent className='d-flex justify-center align-center flex-column' sx={{width: 500}}>
                {!deleteStatus && (
                <>
                    <ErrorOutlineIcon color="warning" sx={{fontSize: "4rem"}} />
                    <Typography variant='h1' sx={{my:3}} color='text.primary'>{t('common.areYouSure')}</Typography>
                    <Typography variant='body1' sx={{mb:1}} color="text.secondary">{t('common.youWantDelete')}</Typography>
                    <Typography variant='body2' sx={{mb:3}} color="text.red" fontWeight={700}>{`"${item}"`}</Typography>
                </>
                )}
                {deleteStatus && (
                <>
                    <CheckCircleOutlineIcon color="success" sx={{fontSize: "4rem"}} />
                    <Typography variant='h1' sx={{my:4}} color='text.primary'>{t('manageTags.tagDeletedSuccessfully')}</Typography>
                </>
                )}
            </DialogContent>
            <Divider />
            <DialogActions>
                {!deleteStatus && (
                <>
                    <Button variant='contained' color="secondary" onClick={handleClose}>{t('common.cancel')}</Button>
                    <Button variant='contained' color="primary" onClick={handleDelete}>{t('common.delete')}</Button>
                </>
                )}
                {deleteStatus && (
                    <Button variant='contained' color="primary" onClick={handleClose}>{t('common.ok')}</Button>
                )}
            </DialogActions>
        </Dialog>
    </>
    )
}

export default DeleteDialog;