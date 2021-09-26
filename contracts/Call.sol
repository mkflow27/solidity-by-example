// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";


contract Received {
    event Received(address caller, uint amount, string message);

    fallback() external payable {
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    function foo(string memory _message, uint _x) public payable returns(uint) {
        emit Received(msg.sender, msg.value, _message);
        return _x + 1;
    }    
}

contract Caller {
    event Response(bool success, bytes data);

    //Source Code for Received not available
    //functions are known thought

    function testCallFoo(address payable _addr) public payable {
        (bool sent, bytes memory data) = _addr.call{value: msg.value, gas: 5000}(
            abi.encodeWithSignature("foo(string,uint256)", "called foo", 10)
            //abi.encodeWithSignature("foo(string,uint256)", "call foo", 123)

        );
        require(sent);
        emit Response(sent, data);
    }
    function testCallDoesNotExists(address _addr) public {
        (bool sent, bytes memory data) = _addr.call(abi.encodeWithSignature("notExisting()"));
    
    emit Response(sent, data);
    //console.logBytes32(bytes32 data);
    //console.logString(string memory data);

    }
}