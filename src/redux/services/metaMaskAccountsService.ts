export async function fetchMetaMaskAccounts() {
  return await window.ethereum.request({ method: 'eth_requestAccounts' })
}
