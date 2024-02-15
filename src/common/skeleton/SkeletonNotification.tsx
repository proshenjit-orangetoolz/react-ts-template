import { Box, Skeleton, Stack, useTheme } from 'convertupleads-theme';

const SkeletonNotification = () => {
    const theme = useTheme();

    return (
        <Box>
            {Array.from({ length: 6 }).map((_, index) => (
                <Stack
                    key={index}
                    direction='row'
                    alignItems='center'
                    justifyContent={'space-between'}
                    sx={{
                        minWidth: 0,
                        p: 4,
                        borderBottom: 1,
                        borderColor: theme.palette.other.divider,
                    }}
                    spacing={0}
                >
                    <Stack direction='row' spacing={2}>
                        <Skeleton variant='circular' height={50} width={50} />
                        <Stack spacing={1}>
                            <Skeleton variant='rounded' height={20} width={280} />
                            <Skeleton variant='rounded' height={20} width={120} />
                        </Stack>
                    </Stack>
                </Stack>
            ))}
        </Box>
    );
};

export default SkeletonNotification;
