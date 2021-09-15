// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract FunctionModifier {

    address public owner;
    uint public x = 10;
    bool public locked;

    constructor() {
        owner = msg.sender;
    }

    //checks that the function caller is
    //owner of the contract
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        //Underscoe is a special character
        //in a function modifier telling solidity
        // to execute the rest of the code
        _;
    }

    //Modifiers can take inputs.
    //Checking that addresses are allowed
    modifier validAddress(address _addr) {
        require(_addr != address(0), "Not a valid address");
        _;
    }

    function changeOwner(address _newOwner)
        public
        onlyOwner
        validAddress(_newOwner)
    {
        owner = _newOwner;
    }



    modifier noReentrancy() {
        require (!locked, "no reentrancy");
        locked = true;
        _;
        locked = false;
    }





}

contract TestFallbackFunction {
    // Fallback functions are executed whenever a 
    // particular contract receives plain Ether without 
    // any other data associated with the transaction.

    uint data;

    constructor() public  {
        data = 10;
    }

    fallback () external payable {

    }
}