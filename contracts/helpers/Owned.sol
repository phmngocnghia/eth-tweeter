// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Owned {
    address public ownerAddr;

    constructor() public {
        ownerAddr = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddr);
        _;
    }

    function transferOwnership(address _newOwner) public {
        require(msg.sender == ownerAddr);

        // The new address cannot be null:
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }
}
