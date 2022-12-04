const TweetStorage = artifacts.require('TweetStorage')

contract("tweet", function (/* accounts */) {
  it("can create tweet", async () => {
    const storage = await TweetStorage.deployed()
    const username = web3.utils.fromAscii("tristan")
    const tx = await storage.createTweet(1, "hell")
    console.log({ tx });


    assert.isOk(tx)
  })

  it("can get tweet", async () => {
    const storage = await TweetStorage.deployed()

    const tweet = await storage.tweets.call(1) // Get the data
    const { id, text, userId } = tweet // Destructure the data

    // Check if the different parts contain the expected values:
    assert.equal(parseInt(id), 1)
    assert.equal(text, "hell")
    assert.equal(parseInt(userId), 1)
  })

});
