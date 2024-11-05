import React, { useCallback } from "react"
import { Pagination, PaginationItem, PaginationLink, Button } from "reactstrap"
import { useSearchParams, useLocation, Link, Navigate } from 'react-router-dom'
import '../Pages/Home.css'
import { redirect } from "react-router-dom"

export default React.memo(function CursosPagination({ totalPages }) {

    const [searchParams] = useSearchParams()

    const currentPage = Number(searchParams.get('page')) || 1;
    const pathname = useLocation().pathname;
    const PERPAGE = 6;
    const params = new URLSearchParams(searchParams);

    const generateUrl = useCallback((pageNumber) => {
        params.delete('page');
        params.set('page', pageNumber);
        return (`${pathname}?${params}`);
    }, [pathname, params])

    const pagination = (currentPage < 3) || (currentPage > (totalPages - 2)) ?
        [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages] :
        [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]

    const handleNavigation = (pageNumber) => {
        generateUrl(pageNumber)
        params.set('page', pageNumber);
        redirect(`${pathname}?${params}`);
    };


    return (


        <Pagination >
            <PaginationItem disabled={currentPage===1} >
                <PaginationLink
                    href={`${generateUrl(1)}`}
                    first
                >
                </PaginationLink>
            </PaginationItem>
            {pagination.map((page, index) => (
                <PaginationItem key={index} active={(page === currentPage)}
                    disabled={page === '...'}>

                    <PaginationLink
                        href={`${generateUrl(page)}`} >
                        {page}
                    </PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink
                    href={`${generateUrl(totalPages)}`}
                    last
                />
            </PaginationItem>
        </Pagination>

    )
})