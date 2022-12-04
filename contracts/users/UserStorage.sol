pragma solidity >=0.4.22 <0.9.0;

import "../helpers/BaseStorage.sol";

contract UserStorage is BaseStorage {
    mapping(address => Profile) profiles;
    mapping(bytes32 => bool) public usernames;

    struct Profile {
        address id;
        bytes32 username;
    }

    function createUser(bytes32 _username, address _address)
        public
        onlyController
        returns (uint256)
    {
        profiles[_address] = Profile(_address, _username);
        usernames[_username] = true;
    }
}
