import { useState } from 'react';
import { useRecoilState } from 'recoil'
import { transactionsState } from '../../state/transactions'

export const Pagination = () => {
  const [transactions, setTransactions] = useRecoilState(transactionsState)
  const [page, setPage] = useState(0);
  const pageSize = 14;
  const countOfButtons = 5;

  const pageButtons: any = [];

  for (let i = page; i < page + countOfButtons; i++) {
    let pageButtonClasses: Array<string> = ['w-12', 'h-12', 'flex', 'items-center', 'justify-center', 'rounded-lg'];

    if (i === page) {
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
        key={i}
      >
        <span>
          {i + 1}
        </span>
      </button>
    ))
  }

  return (
    <div className='flex justify-center'>
      <div className='flex space-x-2 items-center'>
        <button className='p-3'>
          <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 2L3 14L15 26" stroke={ page ? "#3A80BA" : "#F1F1F1"} strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </button>

        { pageButtons }

        <button className='p-3'>
          <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L14 14L2 26" stroke={ page !== transactions.numberOfTransactions ? "#3A80BA" : "#F1F1F1"} strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
