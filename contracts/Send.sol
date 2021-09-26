//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract SendEther {


    function moveViaTransfer(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function moveViaSend(address payable _to) public payable {
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function moveViaCall(address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent);
    }
}

contract ReceiveEther {
    uint content = 0;

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    fallback () external payable {

        //enabling this storage change makes
        //moveViaTransfer, moveViaSend run out of gas 
        //as only 2300 gas are forwarded
        //content = 1;
    }
}