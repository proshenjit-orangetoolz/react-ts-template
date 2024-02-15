import React from 'react';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    ChevronUpDownIcon,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Popover,
    useTheme,
} from 'convertupleads-theme';

interface IProps {
    fieldName: string;
    handleFilter: (data: string, filter: 'ASC' | 'DESC') => void;
}

const AscendingDescendingPopOver = ({ fieldName, handleFilter }: IProps) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSort = (filter: 'ASC' | 'DESC') => {
        handleFilter(fieldName, filter);
        handleClose();
    };

    const open = Boolean(anchorEl);
    return (
        <>
            <IconButton size={'small'} onClick={handleClick}>
                <ChevronUpDownIcon fontSize={'small'} />
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                slotProps={{
                    paper: {
                        style: { borderRadius: '12px' },
                    },
                }}
            >
                <Paper sx={{ p: 1, width: 190 }}>
                    <List sx={{ bgcolor: theme.palette.grey[50], borderRadius: 1.5 }} dense disablePadding>
                        <ListItemButton onClick={() => handleSort('ASC')}>
                            <ListItemIcon>
                                <ArrowUpIcon sx={{ fontSize: '14px' }} />
                            </ListItemIcon>
                            <ListItemText>Ascending</ListItemText>
                        </ListItemButton>
                        <ListItemButton onClick={() => handleSort('DESC')}>
                            <ListItemIcon>
                                <ArrowDownIcon sx={{ fontSize: '14px' }} />
                            </ListItemIcon>
                            <ListItemText>Descending</ListItemText>
                        </ListItemButton>
                    </List>
                </Paper>
            </Popover>
        </>
    );
};

export default AscendingDescendingPopOver;
