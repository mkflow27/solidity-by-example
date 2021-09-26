//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Base {
    function privateFunc() private pure returns(string memory) {
        return "private function called";
    }

    function testPrivateFunc() public pure returns (string memory) {
        return privateFunc();
    }

    function internalFunc() internal pure returns (string memory) {
        return "Internal func called";
    }

    function publicFunc() public pure returns(string memory) {
        return "Public func called";
    }

    function externalFunc() external pure returns (string memory) {
        return "External func called";
    }
}

contract Child is Base {
    function callInternalFunc() public pure returns(string memory) {
        return internalFunc();
    }
}
