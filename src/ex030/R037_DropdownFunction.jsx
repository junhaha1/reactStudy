import React, {useState, useEffect, use}from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const R037_DropdownFunction = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    let toggle = (e) => {
        let temp = dropdownOpen;
        setDropdownOpen(!temp)
    }

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle = {toggle}>
                <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href="http://example.com/">
                        <DropdownItem>example 사이트로 이동</DropdownItem>
                    </a>
                    <DropdownItem onClick={(e) => alert("Alert 버튼")}>
                        Alert 버튼
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
    );
};

export default R037_DropdownFunction;