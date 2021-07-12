//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Mapping {
    //Mapping from an address to uint
    mapping(address => uint) public myMap;

    function get(address _addr) public view returns (uint) {
        //console.log("returning the following addres", _addr); hardhat debugging
        // mapping always returns a value.
        // If the value was never set, it will return a default value.
        return(myMap[_addr]);
    }

    function set(address _addr, uint _i) public {
        //update the value at this address
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
        // reset the value to default
        delete myMap[_addr];
    }
}

contract NestedMapping {
    // nested mapping (mapping from address to another mapping)
    mapping(address => mapping(uint => bool)) public nested;

    function get(address _addr1, uint _i) public view returns (bool) {
        //get values from the nested mapping
        //even when not initialized
        return nested[_addr1][_i];
    }

    function set(address _addr1, uint _i, bool _boo) public {
        nested[_addr1][_i] = _boo;
    }

    function remove(address _addr1, uint _i) public {
        delete nested[_addr1][_i];
    }
}

