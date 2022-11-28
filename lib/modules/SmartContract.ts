import { $Fetch } from 'ofetch'
import {
  Network,
  SmartContractByteCodeBody, SmartContractCallBody, SmartContractImportBody,
  SmartContractListOptions, SmartContractReadBody,
  SmartContractTemplateBody
} from '../../types/Parameters'
import {
  SmartContractResponse,
  SmartContractCallResponse,
  SmartContractDeploy,
  SmartContractFunctions,
  SmartContractList, SmartContractReadResponse, SmartContractImportResponse
} from '../../types/Responses'
import DefaultModule from "../shared/BasicModule";

export default class SmartContract extends DefaultModule {
  constructor(client: $Fetch) {
    super(client);
  }

  /** Get a specific smart contract identified by {address} on the network {network}. */
  getSmartContract(network: Network, address: string): Promise<SmartContractResponse> {
    return this.client<SmartContractResponse>(`/smart-contract/${network}/${address}`)
  }
  /** Gets the list of all deployed smart contracts for the network: {network}. */
  getNetworkSmartContracts(network: Network, options?: SmartContractListOptions): Promise<SmartContractList> {
    return this.client<SmartContractList>(`/smart-contract/${network}`, { query: options || {} })
  }
  /** Gets the list of all deployed smart contracts. */
  getAllSmartContracts(options?: SmartContractListOptions): Promise<SmartContractList> {
    return this.client<SmartContractList>(`/smart-contract`, { query: options || {} })
  }
  /** Gets all the functions of the smart contract at address {address} on network {network}. */
  getSmartContractFunctions(network: Network, address: string): Promise<SmartContractFunctions> {
    return this.client<SmartContractFunctions>(`/smart-contract/${network}/${address}/available-functions`)
  }
  /** Uses the bytecode provided by the user to deploy a smart contract.
   * It is possible to only do a simulation by setting the simulate parameter to true
   */
  setByteCodeSmartContract(body: SmartContractByteCodeBody, simulate?: boolean): Promise<SmartContractDeploy> {
    return this.client<SmartContractDeploy>('/smart-contract/from-bytecode', {
      method: 'POST',
      body,
      query: { simulate }
    })
  }
  /** Deploys a smart contract using a template hosted in the Starton Library.
   * It is possible to only do a simulation by setting the simulate parameter to true.
   */
  setTemplateSmartContract(body: SmartContractTemplateBody, simulate?: boolean): Promise<SmartContractDeploy> {
    return this.client<SmartContractDeploy>('/smart-contract/from-template', {
      method: 'POST',
      body,
      query: { simulate }
    })
  }
  /** Calls a function of the smart contract at address {address} on network {network}. */
  callSmartContractFunction(network: Network, address: string, body: SmartContractCallBody, simulate?: boolean): Promise<SmartContractCallResponse> {
    return this.client<SmartContractCallResponse>(`/smart-contract/${network}/${address}/call`, {
      method: 'POST',
      body,
      query: { simulate }
    })
  }
  /** Reads a view of the smart contract at address {address} on network {network}. */
  readSmartContract(network: Network, address: string, body: SmartContractReadBody): Promise<SmartContractReadResponse> {
    return this.client<SmartContractReadResponse>(`/smart-contract/${network}/${address}/read`, {
      method: 'POST',
      body
    })
  }
  /** Import a smart contract in starton project */
  importSmartContract(network: Network, address: string, body: SmartContractImportBody): Promise<SmartContractImportResponse> {
    return this.client<SmartContractImportResponse>(`/smart-contract/${network}/${address}/read`, {
      method: 'POST',
      body: {
        ...body,
        network,
        address
      }
    })
  }
}
