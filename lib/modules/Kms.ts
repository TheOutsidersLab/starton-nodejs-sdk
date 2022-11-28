import DefaultModule from '../shared/BasicModule';
import { type $Fetch } from 'ofetch';
import { type KmsWalletResponse } from "../../types/Responses";

export default class Kms extends DefaultModule {
  constructor(client: $Fetch) {
    super(client);
  }

  getWallets (): Promise<KmsWalletResponse> {
    return this.client<KmsWalletResponse>(`/kms/wallet`)
  }
}
