//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Wallet {
    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function deposit() public payable {

    }

    function withdraw() public onlyOwner {
        (bool sent, ) = owner.call{value: address(this).balance}("");
        require(sent);
    }

}