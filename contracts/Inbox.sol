pragma solidity ^0.4.25;

contract Inbox {

    string public message;
    
    // constructer method create a intial method to get the message
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage (string newMessage) public {
        message = newMessage;
    }

}