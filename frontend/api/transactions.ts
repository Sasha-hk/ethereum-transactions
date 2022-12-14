import axios from 'axios';

const API_URL = process.env.API_URL!;

export const getTransactions = (setTransactions: any, params?: {
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
