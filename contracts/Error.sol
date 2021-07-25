// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Error {
    function testRequire(uint _i) public pure{
        // Require should be used to validate conditions:
        // inputs, conditions before execution, return values from
        // other functions
        require(_i > 10, "Input must be bigger than 10");
    }
}