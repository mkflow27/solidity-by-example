// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


/// @title An increment smart contract
/// @author @mkflow27
/// @notice You can use this contract to increment a number
/// @dev A basic setter function is implemented 
contract Counter {

    uint public count;
    int public isNegativeCount;

    /// @notice get the current count
    /// @dev
    /// @param
    /// @return 
    function get() public view returns (uint) {
        return count;
    }

    function inc() public {
        count += 1;
    }

    function dec() public {
        count -= 1;
    }

    function decToNegativeValue() public {
        isNegativeCount -= 1;
    }
}