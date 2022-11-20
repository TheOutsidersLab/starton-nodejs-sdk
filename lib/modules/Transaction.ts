import DefaultModule from '../shared/BasicModule';
import { type $Fetch } from 'ofetch';
import {TransactionCreateResponse, type TransactionResponse} from '../../types/Responses'
import {Network, TransactionCreateBody, type TransactionFetchOptions} from '../../types/Parameters'

export default class Transaction extends DefaultModule {
  constructor(client: $Fetch) {
    super(client);
  }

  getTransactionById (id: string): Promise<TransactionResponse> {
    return this.client(`/transaction/${id}`)
  }
  getTransactions (options?: TransactionFetchOptions): Promise<TransactionResponse[]> {
    return this.client(`/transaction`, { query: options || {} })
  }
  createTransaction<T extends Network> (body: TransactionCreateBody<T>): Promise<TransactionCreateResponse<T>> {
    return this.client('/transaction', { method: 'POST', body })
  }
}
