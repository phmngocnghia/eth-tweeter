// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../helpers/BaseController.sol";
import "../ContractManager.sol";
import "./UserStorage.sol";

contract UserController is BaseController {
    function createUser(bytes32 _username) public returns (uint256 _newUserId) {
        ContractManager _manager = ContractManager(managerAddr);

        address _userStorageAddr = _manager.getAddress("UserStorage");
        UserStorage _storage = UserStorage(_userStorageAddr);

        require(_username > 0);
        require(_storage.usernames(_username) == false);

        return _storage.createUser(_username, msg.sender);
    }
}
