import { Skeleton, Stack } from 'convertupleads-theme';

const SkeletonList = () => {
    return (
        <>
            <Stack spacing={1} p={1}>
                <Skeleton variant='rounded' height={35} />
                <Skeleton variant='rounded' height={35} />
                <Skeleton variant='rounded' height={35} />
                <Skeleton variant='rounded' height={35} />
            </Stack>
        </>
    );
};

export default SkeletonList;
