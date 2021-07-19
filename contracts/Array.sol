//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Array {
    // several ways to initialize an array. 
    uint[] public arr;
    uint[] public arr2 = [1,2,3];
    //Fixed sized array, all elements initialize to 0;
    uint[10] public myFixedSizedArr;

    function get(uint _i) public view returns(uint) {
        return arr[_i];
    }

    function getArr() public view returns(uint[] memory) {
        // quick primer on memory keyword
        // Declaring variables in function without memory keyword: Solidity tries 
        // to use storage structure. memory signals to create space at runtime.
        return arr;
    }

    function push(uint _i) public {
        arr.push(_i);
    }

    function pop() public {
        // remove the last entry from the array
        // Decreasing array length by 1
        arr.pop();
    }
}

contract CompactArray {
    uint[] public arr;

    function remove(uint _index) public {
        //Move the last element into the place to delete. 
        arr[_index] = arr[arr.length - 1];
        // remove last item
        arr.pop();
    }

    function test() public {
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        // 1,2,3,4

        remove(1);
        //TODO: add hardhat console logs to check values changes via console

        remove(2);
    }


}