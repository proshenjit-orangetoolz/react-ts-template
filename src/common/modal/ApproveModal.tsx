import React from 'react';
import { Button, Divider, LoadingButton, Stack, Typography } from 'convertupleads-theme';
import { ApproveIcon } from '../CustomIcons';

interface fbAppModalInterface {
    onClose: () => void;
    title: string;
    onConfirm?: () => void;
    loading?: boolean;
}

const ApproveModal: React.FC<fbAppModalInterface> = ({ onClose, title, onConfirm, loading }) => {
    return (
        <>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={2} p={3}>
                <ApproveIcon />
                <Typography variant={'subtitle1'} textAlign={'center'}>
                    {title}
                </Typography>
            </Stack>
            <Divider light />
            <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} py={2} px={3} spacing={1.5}>
                <Button fullWidth variant={'tonal'} color={'inherit'} onClick={onClose}>
                    Cancel
                </Button>
                <LoadingButton fullWidth loading={loading} onClick={onConfirm}>
                    Ok
                </LoadingButton>
            </Stack>
        </>
    );
};

export default ApproveModal;
