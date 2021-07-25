// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Function {
    // returning multiple functions
    // pure refers to no storage/memory var is being used in the function
    // function has no input and does not access storage vars -> pure
    // public: EOA or contracts can call this function
    function returnMany() public pure returns (uint, bool, uint) {
        return(1, true, 2);
    }
    // Return values can be given named.
    function named() public pure returns (uint x, bool b, uint y) {
        return(1, true, 2);
    }

    // Return values can be assigned to their name.
    // In this case the resturn statement can be ommited.
    function assigned() public pure returns (uint x, bool b, uint y) {
        x = 1;
        b = true;
        y = 2;
    }

    function destructingAssignments() 
        public pure returns (uint, bool, uint, uint, uint) {
            (uint i, bool b, uint j) = returnMany();

            //values can be left out.
            (uint x, , uint y) = (4, 5, 6);

            return (i,b,j,x,y);
        }

    function arrayInput(uint[] memory _arr) public  {
        //left blank
    }

    //arrays can be used for putput
    uint[] public arr;
    
    function arrayOutput() public view returns (uint[] memory) {
        return arr;
    }


}