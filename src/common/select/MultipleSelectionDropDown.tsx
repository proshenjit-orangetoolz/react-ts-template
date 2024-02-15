import { ChangeEvent } from 'react';
import {
    Box,
    Button,
    Chip,
    InputAdornment,
    MenuItem,
    OutlinedInput,
    SearchIcon,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Theme,
    Typography,
    useTheme,
} from 'convertupleads-theme';
import CircularProgress from '@mui/material/CircularProgress';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(id: number, selected: readonly number[] | string[], theme: Theme) {
    return {
        fontWeight:
            (selected as readonly number[])?.indexOf(id) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}
interface props {
    options: {
        id: number;
        fullName: string;
    }[];
    isLoading?: boolean;
    hasMore?: boolean;
    value: number[] | string[];
    onChange: (ids: number[] | string[]) => void;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    handleHasMore?: () => void;
}
const MultipleSelectionDropDown = ({
    options = [],
    value,
    onChange,
    handleSearch,
    isLoading = false,
    hasMore = false,
    handleHasMore,
}: props) => {
    const theme = useTheme();

    const handleChange = (event: SelectChangeEvent<typeof value>) => {
        const {
            target: { value },
        } = event;

        if (value[0] !== undefined) {
            const selectedValues = Array.isArray(value) ? value : [value];
            onChange(selectedValues);
        }
    };

    const findName = (ids: number[] | string[]) => {
        if (ids?.length > 0 && options.length > 0) {
            const filteredNames = options.filter((item) => (value as readonly number[]).includes(item.id));
            return (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {filteredNames.map((item) => (
                        <Chip key={item.id} label={item.fullName} />
                    ))}
                </Box>
            );
        }
    };

    return (
        <Stack spacing={3} sx={{ maxHeight: 'calc(100vh - 62px)', overflowY: 'auto' }}>
            <Select
                multiple
                size={'small'}
                value={value}
                onChange={handleChange}
                input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
                renderValue={(selected) => findName(selected)}
                MenuProps={MenuProps}
            >
                <Stack p={1}>
                    <TextField
                        fullWidth
                        size={'small'}
                        placeholder={'Search'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon sx={{ fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleSearch}
                    />
                </Stack>
                {isLoading ? (
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <CircularProgress size={25} />
                    </Box>
                ) : options?.length > 0 ? (
                    options.map((name) => (
                        <MenuItem key={name?.id} value={name?.id} style={getStyles(name?.id, value, theme)}>
                            {name?.fullName}
                        </MenuItem>
                    ))
                ) : (
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <Typography fontWeight={600} color={theme.palette.grey[600]}>
                            No data found!
                        </Typography>
                    </Box>
                )}
                {hasMore && (
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <Button variant={'text'} onClick={handleHasMore}>
                            Next
                        </Button>
                    </Box>
                )}
            </Select>
        </Stack>
    );
};
export default MultipleSelectionDropDown;
