// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contract {
    MyContract contract1 = new MyContract();

    function getSelector() public view returns(bytes4, bytes4) {
        return (contract1.function1.selector, contract1.getBalance.selector);
    }

    function callGetValue(uint256 _x) public view returns(uint256) {
        bytes4 selector = contract1.getValue.selector;
        bytes memory data = abi.encodeWithSelector(selector, _x);
        (bool success, bytes memory returnedData) = address(contract1).staticcall(data);
        require(success);
        return abi.decode(returnedData, (uint256));
    }
}


contract MyContract {
    function function1() public {}
    function getBalance(address _address) public view returns (uint256) {}
    function getValue(uint256 _value) public pure returns (uint256) {
        return _value;
    }
}