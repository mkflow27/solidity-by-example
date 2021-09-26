//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract DelegateCallee {
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = _num;
        sender =  msg.sender;
        value = msg.value;
    }

}

contract DelegateCaller {
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _address, uint _num) public payable {
        (bool sent, bytes memory data) = _address.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}