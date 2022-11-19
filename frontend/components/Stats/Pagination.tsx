import { FC, useEffect, useState } from 'react';

function generateButtons(from: number, to: number, setPagination: any) {
  const pageButtons: Array<any> = [];

  for (
    let i = from; i <= to; i++
  ) {
    let pageButtonClasses: Array<string> = ['w-12', 'h-12', 'flex', 'items-center', 'justify-center', 'rounded-lg'];

    if (i === from) {
      pageButtonClasses.push('bg-primary')
      pageButtonClasses.push('text-white');
    } else {
      pageButtonClasses.push('border-2');
      pageButtonClasses.push('border-gray-200');
      pageButtonClasses.push('border-solid');
    }

    pageButtons.push((
      <button
        className={pageButtonClasses.join(' ')}
        data-page={i}
        key={i}
        onClick={() => setPagination(i)}
      >
        <span>
          {i + 1}
        </span>
      </button>
    ))
  }

  return pageButtons;
}

export const Pagination: FC<{
  limit: number,
  numberOfItems: number,
  loadPage: (skip: number, limit: number) => void,
}> = ({
  limit,
  numberOfItems,
  loadPage,
}) => {
  const [page, setPage] = useState(0);
  const countOfButtons = 5;
  const maxPages = Math.floor(numberOfItems / limit);

  useEffect(() => {
    loadPage(limit * page, limit);
  }, [page]);
  console.log(numberOfItems);

  const setPagination = (page: number) => {
    setPage(page);
  }

  // Generate pagination buttons
  const offset = page + countOfButtons;
  let pageButtons: Array<any> = [];

  if (offset > maxPages) {
    pageButtons = generateButtons(page, maxPages, setPagination);
  } else {
    pageButtons = generateButtons(page, offset, setPagination);
  }

  return (
    <div className='flex justify-center'>
      <div className='flex space-x-2 items-center'>
        <button className='p-3' onClick={() => page !== 0 ? setPagination(page - 1) : undefined}>
          <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 2L3 14L15 26" stroke={page !== 0 ? "#3A80BA" : "#F1F1F1"} strokeWidth="4" strokeLinecap="round" />
          </svg>
        </button>

        { pageButtons }

        <button className='p-3' onClick={() => page !== maxPages ? setPagination(page + 1) : undefined}>
          <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L14 14L2 26" stroke={page !== maxPages ? "#3A80BA" : "#F1F1F1"} strokeWidth="4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
