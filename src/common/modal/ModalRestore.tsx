import { Button, Divider, LoadingButton, Stack, Typography } from 'convertupleads-theme';
import { RestoreIcon } from '../CustomIcons';

interface IProps {
    isLoading?: boolean;
    title?: string;
    subtitle?: string;
    onClose: () => void;
    id: number;
    onConfirm: (id: number) => void;
}

const ModalRestore = ({
    isLoading,
    title = 'Are you sure you want to perform restore?',
    subtitle = 'Restoring the deleted item',
    onClose,
    id,
    onConfirm,
}: IProps) => {
    const handleRestore = () => {
        onConfirm(id as number);
    };
    return (
        <>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={2} p={3}>
                <RestoreIcon />
                <Typography variant={'subtitle1'} textAlign={'center'}>
                    {title}
                </Typography>
                <Typography variant={'subtitle2'} textAlign={'center'} color={'gray'}>
                    {subtitle}
                </Typography>
            </Stack>
            <Divider light />
            <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} py={2} px={3} spacing={1.5}>
                <Button variant={'tonal'} color={'inherit'} onClick={onClose}>
                    Close
                </Button>
                <LoadingButton onClick={handleRestore} loading={isLoading}>
                    Restore
                </LoadingButton>
            </Stack>
        </>
    );
};

export default ModalRestore;
