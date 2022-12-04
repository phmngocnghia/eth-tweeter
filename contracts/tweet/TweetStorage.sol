// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../helpers/BaseStorage.sol";

contract TweetStorage is BaseStorage {
    mapping(uint256 => Tweet) public tweets;

    struct Tweet {
        uint256 id;
        string text;
        address userAddress;
        uint256 postedAt;
    }

    uint256 latestTweetId = 0;

    function createTweet(address _userAddress, string memory _text)
        public
        onlyController
        returns (uint256)
    {
        latestTweetId++;

        tweets[latestTweetId] = Tweet(
            latestTweetId,
            _text,
            _userAddress,
            block.timestamp
        );

        return latestTweetId;
    }
}
