//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract AA {
    string public name = "Contract A";

    function getName() public view returns(string memory) {
        return name;
    }
}

contract BB is AA {

}

contract CC is AA {
    constructor() {
        name = "Contract C";
    }
}