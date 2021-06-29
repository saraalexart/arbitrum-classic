/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers'
import { Provider } from '@ethersproject/providers'

import type { RetryableTicketCreator } from '../RetryableTicketCreator'

export class RetryableTicketCreator__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RetryableTicketCreator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RetryableTicketCreator
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'l2CallValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'excessFeeRefundAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'callValueRefundAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'createRetryableTicket',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]