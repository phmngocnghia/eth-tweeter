import contract from "@truffle/contract"

export const getInstance = artifact => {
  const contractObj = contract(artifact)
  console.log({ contractObj });

  contractObj.setProvider(provider())

  return contractObj.deployed();
}