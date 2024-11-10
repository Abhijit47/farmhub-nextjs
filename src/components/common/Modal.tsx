import { Button, Modal } from 'react-bootstrap';

type Props = {
  isOpen: boolean;
  onToggleModal: () => void;
};

export default function PopUpModal({ isOpen, onToggleModal }: Props) {
  return (
    <Modal
      show={isOpen}
      onHide={onToggleModal}
      backdrop='static'
      centered={true}
      keyboard={false}
      size='lg'
      // className='modal-dialog modal-lg'
      onBackdropClick={onToggleModal}>
      <Modal.Header closeButton>
        <Modal.Title className='text-primary'>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-primary'>
        I will not close if you click outside me. Do not even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onToggleModal}>
          Close
        </Button>
        <Button variant='primary'>Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}
