import { useSearchParams } from "react-router-dom";
export async function useGenerateUrl (pathname, params, pageNumber)  {
    params.delete('page');
    params.set('page', pageNumber);
    return (`${pathname}?${params}`);
  }