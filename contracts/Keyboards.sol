// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Keyboards {
    // You can kinda think of it as the easiest database you’ve ever worked with!
    string[] public createdKeyboards;

    function getKeyboards() view public returns (string[] memory) {
        return createdKeyboards;
    }

    function create(string calldata _description) external {
        createdKeyboards.push(_description);
    }
}
