// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Error {
    function testRequire(uint _i) public pure{
        // Require should be used to validate conditions:
        // inputs, conditions before execution, return values from
        // other functions
        require(_i > 10, "Input must be bigger than 10");
    }

    function testRevert(uint _i) pure public {
        //
        //
        //
        if (_i < 10) {
            revert("Input must be greater than 10");
        }
    }

    uint public num;

    function testAssert() view public {
        // Assert should only be used to test for internal errors
        // and to check invariants

        // Here we assert that num is always equal to 0
        // since it is impossible to update the value of num
        assert(num == 0);
    }

    
}