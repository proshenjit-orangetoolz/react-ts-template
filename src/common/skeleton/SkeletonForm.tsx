import { Grid, Skeleton, Stack, SxProps } from 'convertupleads-theme';

interface IProps {
    count: number;
    styling?: SxProps;
}

const SkeletonForm = ({ count, styling }: IProps) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <Grid container direction={'column'} key={index} sx={styling}>
                    <Stack mb={-1}>
                        <Skeleton variant='text' width={120} height={25} />
                    </Stack>
                    <Skeleton variant='text' width={'100%'} height={60} />
                </Grid>
            ))}
        </>
    );
};

export default SkeletonForm;
