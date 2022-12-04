const UserController = artifacts.require('UserController')
const TweetController = artifacts.require('TweetController')
const ContractManager = artifacts.require('ContractManager')

module.exports = (deployer) => {

  // Deploy controller contracts:
  deployer.then(async () => {
    await deployer.deploy(UserController);
    await deployer.deploy(TweetController);
  })
    // Get the deployed storage contract instances:
    .then(() => {
      return Promise.all([
        UserController.deployed(),
        TweetController.deployed(),
        ContractManager.deployed()
      ]);
    })
    .then(([userController, tweetController, manager]) => {

      return Promise.all([
        tweetController.setManagerAddr(manager.address),
        userController.setManagerAddr(manager.address)
      ]);
    })

}