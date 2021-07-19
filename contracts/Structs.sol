// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Todos {
    struct Todo {
        string text;
        bool completed;
    }

    // array of Todo structs
    Todo[] public todos;

    function create(string memory _text) public {
        // initialization possible via 3 ways
        // call it like a function
        todos.push(Todo(_text, false));
        
        //Key value mapping
        todos.push(Todo({
            text: _text,
            completed: false
        }));

        // initialize an empty struct and update it afterwards
        Todo memory todo;
        todo.text = _text;

        todos.push(todo);
        }

    // due to the public keywords the Todo array with the todos has a getter function
    // the get function is therefor not needed
    function get(uint _index) public view returns (string memory text, bool completed) {
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed);
    }

    // update text
    function update(uint _index, string memory _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }
    // update completed
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed =! todo.completed;
    }
}
