export default interface IRequest<T> {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: T
}