import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const fetchTransactions = (setTransactions: any, params?: {
  limit?: number,
  skip?: number,
  address?: string,
  transactionId?: string,
  blockNumber?: string,
}) => {
  axios.get(
    API_URL + '/transactions',
    {
      params,
    }
  ).then((r) => {
    setTransactions(r.data);
  });
}
