import { useEffect, useState } from 'react';

export const Table = () => {
  return (
    <div className='overflow-x-auto'>
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
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
