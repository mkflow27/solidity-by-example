//SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

contract Event {
    // Event
    // up to 3 parameters can be cought and emitted
    // Indexed parameters help filter the logs by the index param
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        emit Log(msg.sender, "Hello to console");
        emit Log(msg.sender, "Hello solidity");
        emit AnotherLog();
    }
}
