import React from 'react'
import { Button, Modal } from 'react-bootstrap';

const ModalP = ({show,hide,res})=> (
  

      <>  
        <Modal show={show} onHide={hide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={hide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </>
    
  )
  
export default ModalP