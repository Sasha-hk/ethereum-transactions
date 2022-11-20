import { timeStamp } from 'console';
import { FC, useEffect, useState } from 'react';

import { getBlock } from '../../api/block';
import { TransactionStateI } from '../../state/transactions';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const Table: FC<{
  className?: string,
  transactions: TransactionStateI,
}> = ({ className, transactions }) => {
  const [timestamps, setTimestamps] = useState<Array<string>>([]);

  useEffect(() => {
    const getBlocks = async () => {
      const timestampsList: Array<any> = [];

      for (let i in transactions.transactions) {
        const { data: { timestamp }} = await getBlock({ tag: transactions.transactions[i].blockNumber });

        const date = new Date(parseInt(timestamp, 16) * 1000);

        timestampsList.push(`${monthNames[date.getMonth()]}-${date.getDate()}-${date.getFullYear()}`);
      }

      setTimestamps(timestampsList);
    }

    getBlocks();
  }, [transactions]);

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
            transactions.transactions.map((transaction, i) => {
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
                  <td className='truncate'>{ transaction.from }</td>
                  <td className='truncate'>{ transaction.to }</td>
                  <td className='truncate'>{ parseInt(transactions.latestBlockNumber, 16) - parseInt(transaction.blockNumber, 16) }</td>
                  <td className='truncate'>{ timestamps[i] }</td>
                  <td className='truncate'>{ parseInt(transaction.value, 16) / 1000000000 / 1000000000 }</td>
                  <td className='truncate'>{ parseInt(transaction.gasPrice, 16) * parseInt(transaction.gas, 16) / 1_000_000_000 / 1_000_000_000 }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
