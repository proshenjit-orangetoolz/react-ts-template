// import { createContext, ReactNode, useContext, useState } from 'react';
// import { Alert, Snackbar } from 'convertupleads-theme';
//
// interface SnackbarProviderProps {
//     children: ReactNode;
// }
// interface SnackbarContextType {
//     showSnackbar: (type: string, message: string) => void;
// }
// export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
//     const [snackbarContent, setSnackbarContent] = useState<ReactNode | null>(null);
//     const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);
//
//     const showSnackbar = (type: string, message: string) => {
//         // Your implementation to show the Snackbar
//         const content: JSX.Element = (
//             <Snackbar open={true} autoHideDuration={type === 'success' ? 2000 : 6000} onClose={handleClose}>
//                 <Alert variant='filled' severity={type === 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
//                     {message}
//                 </Alert>
//             </Snackbar>
//         );
//         setSnackbarContent(content);
//     };
//
//     const handleClose = () => {
//         setSnackbarContent(null);
//     };
//
//     return (
//         <SnackbarContext.Provider value={{ showSnackbar }}>
//             {children}
//             {snackbarContent}
//         </SnackbarContext.Provider>
//     );
// };
//
// export const useSnackbar = () => {
//     const context = useContext(SnackbarContext);
//     if (!context) {
//         throw new Error('useSnackbar must be used within a SnackbarProvider');
//     }
//     return context.showSnackbar;
// };
