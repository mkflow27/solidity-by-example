// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Variables {
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public {
        uint i = 456;

        //global variables
        uint timestamp = block.timestamp; //current blocks timestamp
        address sender = msg.sender; // sets the address to that of the functions caller
    }
}