import { Button, Divider, Stack, Typography } from 'convertupleads-theme';
import { ApproveIcon } from '../CustomIcons';
import { useEffect, useState } from 'react';

interface IProps {
    type?: string;
    title?: string;
    subtitle?: string;
    onClose: () => void;
    id?: string | undefined;
}

const ModalUndo = ({ type, title, subtitle, onClose, id }: IProps) => {
    const [progress, setProgress] = useState(5);

    const handleUndo = () => {
        onClose();
        console.log('Undo: ', type, id);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress - 1);
        }, 900);
        return () => {
            clearInterval(timer);
        };
    }, []);

    setTimeout(() => {
        onClose();
    }, 5000);
    return (
        <>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={2} p={3}>
                <ApproveIcon />
                <Typography variant={'subtitle1'} textAlign={'center'}>
                    {title}
                </Typography>
                <Typography variant={'subtitle2'} textAlign={'center'}>
                    {subtitle}
                </Typography>
            </Stack>
            <Divider light />
            <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} py={2} px={3} spacing={1.5}>
                <Button variant={'tonal'} color={'inherit'} onClick={onClose}>
                    Close {progress}
                </Button>
                <Button onClick={handleUndo}>Undo</Button>
            </Stack>
        </>
    );
};

export default ModalUndo;
