// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SimpleStorage {
    //state variable
    uint public num;

    //you need to send a transaction to write to a state variable
    function set(uint _num) public {
        num = _num;
    }

    //reading from the smart contract without sending a transaction
    function get() public view returns (uint){
        return num;
    }
}