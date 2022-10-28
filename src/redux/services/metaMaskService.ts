import detectEthereumProvider from '@metamask/detect-provider'
import * as MetaMask from '../../utils/MetaMask'

export async function detectProvider() {
  const provider = await detectEthereumProvider()

  if (!provider || provider !== window.ethereum) {
    throw Error()
  }

  return provider
}

export async function fetchNetwork(provider: any) {
  const chainIdAsHex = await provider.request({ method: 'eth_chainId' })
  return MetaMask.findChainById(chainIdAsHex)
}

export async function fetchAccounts(provider: any) {
  return await provider.request({ method: 'eth_requestAccounts' })
}
