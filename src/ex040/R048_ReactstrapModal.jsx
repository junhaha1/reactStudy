import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const R048_ReactstrapModal = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    return (
        <div>
            <Button color="warning" onClick={toggle}>Modal 버튼</Button>
            <Modal isOpen={modal} fade={true}>
                <ModalHeader toggle={toggle}>Modal Header</ModalHeader>
                <ModalBody>
                The generated Lorem Ipsum is therefore always free from repetition.
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>확인</Button>
                <Button color="secondary" onClick={toggle}>닫기</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default R048_ReactstrapModal;