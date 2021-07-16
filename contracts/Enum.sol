//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Enum {
    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    //Default value of an enum is the first entry
    //Initialize the enum
    Status public status;

    function get() public view returns(Status) {
        return status;
    }

    function set(Status _status) public {
        status = _status;
    }

    function cancel() public {
        status = Status.Canceled;
    }

    //delete resets the enum to the prevous value of 0
    function reset() public {
        //delete keyword assings default values back to the variable
        delete status;
    }

}