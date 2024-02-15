export interface WithPagination<T> {
    data: T[];
    meta: {
        current_page: number;
        first_page: number;
        last_page: number;
        last_page_url: string;
        per_page: number;
        total: number;
        to: number;
    };
}
interface SuccessResponseIn<T> {
    status: number;
    success: true;
    message?: string;
    data: T;
}

export interface ErrorResponseInterface {
    status: number;
    success: false;
    message: string;
}

export type ResponseInterface<T> = SuccessResponseIn<T> | ErrorResponseInterface;

export default ResponseInterface;
