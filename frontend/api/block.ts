import axios from 'axios';

const API_URL = process.env.API_URL!;

/**
 * Get latest block or block by number
 *
 * @param setTransactions hook
 * @param params options
 */
export const getBlock = async (params?: {
  tag?: string,
}) => {
  return await axios.get(
    API_URL + '/blocks',
    {
      params,
    }
  )
}
