import { Skeleton, Table, TableCell, TableContainer, TableRow } from 'convertupleads-theme';

interface IProps {
    column: number;
}

const SkeletonTable = ({ column }: IProps) => {
    return (
        <>
            <TableContainer sx={{ maxHeight: 'calc(100% - 150px)' }}>
                <Table variant='bordered' stickyHeader>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <TableRow key={index}>
                            {Array.from({ length: column }).map((_, index) => (
                                <TableCell key={index}>
                                    <Skeleton variant='text' height={30} />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </Table>
            </TableContainer>
        </>
    );
};

export default SkeletonTable;
