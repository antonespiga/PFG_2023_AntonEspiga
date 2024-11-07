import React, { useCallback, useEffect } from "react"
import { Nav } from "reactstrap"
import { useSearchParams, useLocation, Link, useNavigate } from 'react-router-dom'
import '../Pages/Home.css'

export default React.memo(function CursosPagination({ totalPages }) {

    const [searchParams] = useSearchParams()

    const currentPage = Number(searchParams.get('page')) || 1;
    const pathname = useLocation().pathname;
    const params = new URLSearchParams(searchParams);
    const navigate = useNavigate()

    const generateUrl = useCallback((pageNumber) => {
        params.delete('page');
        params.set('page', pageNumber);
        return (`${pathname}?${params}`);
    }, [pathname, params])

    const pagination = (currentPage < 3) || (currentPage > (totalPages - 2)) ?
        [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages] :
        [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]

        useEffect(() => {
            window.scrollTo(top)
        },[params.get('page')])

    const handleNavigation = (pageNumber) => {
        navigate(`${generateUrl(pageNumber)}`);
        
    };

    return (
        <Nav className="pagination">
            <button className="button" disabled={currentPage===1} onClick={(()=> handleNavigation(1))} >
              first
            </button>
            {pagination.map((page, index) => (
                <button className="button"
                        style={currentPage===page? {backgroundColor:"blue"}: {}}
                        key={index} 
                        disabled={page === '...'}
                        onClick={(()=> handleNavigation(page))}
                 >{page} 
                </button>
            ))}
            <button className="button"
                    disabled={currentPage === totalPages}
                    onClick={(()=> handleNavigation(totalPages))}>
              last
            </button>
        </Nav>

        /*<Pagination >
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
        </Pagination>*/

    )
})