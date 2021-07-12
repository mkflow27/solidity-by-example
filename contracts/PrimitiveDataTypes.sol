// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Primitives {
    bool public boo = true;

    uint8 public u8 = 1;
    uint256 public u256 = 456;
    uint public u = 123; //uint is alias for uint256

    int8 public i8 = -1;
    int256 public i256 = 456;
    int public i = -123; // int is the same as int 256

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    // Default values
    // Unassigned variables have default value

    bool public defaultBoo; // false
    uint public defaulUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // defaults to burderAddress
}