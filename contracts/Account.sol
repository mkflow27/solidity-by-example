// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Account {
    uint public balance;
    uint public constant MAX_UINT = 2 ** 256 - 1;

    function deposit(uint _amount) public {
        uint oldBalance = balance;
        uint newBalance = balance + _amount;

        //thoughts for testing


        // balance + _amount does not overflow if balance 
        // and _amount >= balance
        require(newBalance >= oldBalance, "Overflowy");

        balance = newBalance;
        assert(balance >= oldBalance);
    }

    function withdraw(uint _amount) public {
        uint oldBalance = balance;

        //balance - _amount does not underflow if balance >= _amount
        require(balance >= _amount, "Underflow");

        if (balance < _amount) {
            revert("Underflow");
        }

        balance -= _amount;

        assert (balance <= oldBalance);
    }
}