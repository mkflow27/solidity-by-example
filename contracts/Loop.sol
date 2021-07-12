//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Loop {
    function loop() public pure {
        // a for loop
        // the pure keyword fits here as no variables are read from smart contract storage
        for(uint i = 0; i < 10; i++) {
            if (i == 3) {
                // Skip
                continue;
            }
            if (i == 5) {
                break;
            }
    
        }
        uint j;
        while (j < 10) {
        j++;
        }
    }
}