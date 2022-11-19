import { FC } from 'react';

import { TransactionStateI } from '../../state/transactions';

export const Table: FC<{
  className?: string,
  transactions: TransactionStateI,
}> = ({ className, transactions }) => {
  return (
    <div className={'overflow-x-auto ' + className}>
      <table>
        <thead>
          <tr>
            <th>Block number</th>
            <th>Transaction ID</th>
            <th>Sender address</th>
            <th>Recipient's address</th>
            <th>Block confirmations</th>
            <th>Date</th>
            <th>Value</th>
            <th>Transaction Fee</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.transactions.map((transaction) => {
              return (
                <tr key={transaction.hash}>
                  <td className='truncate'>{parseInt(transaction.blockNumber, 16)}</td>
                  <td className='truncate'>
                    <a
                      href={'https://etherscan.io/tx/' + transaction.hash}
                      target="_blank"
                      className='text-blue-500 underline'
                    >
                      {transaction.hash}
                    </a>
                  </td>
                  <td className='truncate'>{transaction.from}</td>
                  <td className='truncate'>{transaction.to}</td>
                  <td className='truncate'>{parseInt(transactions.latestBlockNumber, 16) - parseInt(transaction.blockNumber, 16)}</td>
                  <td className='truncate'>{transaction.to}</td>
                  <td className='truncate'>{transaction.value}</td>
                  <td className='truncate'>date</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
