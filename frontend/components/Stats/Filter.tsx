// import { FC } from 'react'

export const Filter = () => {
  return (
    <div className='mb-5 flex items-center'>
      <div className='
        overflow-auto
        inline-flex
        space-x-2
        border-gray-200
        border-solid
        border
        rounded-lg
        p-1
        xl:mr-3
      '>
        <input
          className='px-2 outline-none'
          type="text"
          placeholder='Search...'
        />

        <svg width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1" height="32" fill="#F1F1F1"/>
        </svg>


        <select name="" id="" className='outline-none'>
          <option value="Address">Address</option>
          <option value="Transaction ID">Transaction ID</option>
          <option value="Block number">Block number</option>
        </select>
      </div>

      <button className='bg-primary p-4 rounded-lg'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 6.92313C0 3.10631 3.10351 0 6.92451 0C10.7418 0 13.849 3.1026 13.849 6.92313C13.849 8.42815 13.3664 9.8228 12.5483 10.9597L15.6726 14.0833C16.1076 14.5183 16.1091 15.2281 15.6771 15.6649C15.4538 15.894 15.1591 16 14.8795 16C14.5864 16 14.2988 15.8817 14.0865 15.6695L10.962 12.5457C9.82484 13.3637 8.42986 13.8463 6.92451 13.8463C3.10698 13.8463 0 10.7402 0 6.92313ZM6.92127 2.2472C4.344 2.2472 2.24415 4.3441 2.24415 6.92313C2.24415 9.5027 4.34454 11.6023 6.92127 11.6023C9.5007 11.6023 11.5984 9.49999 11.5984 6.92313C11.5984 4.34681 9.50124 2.2472 6.92127 2.2472Z" fill="white"/>
        </svg>
      </button>
    </div>

  )
}
