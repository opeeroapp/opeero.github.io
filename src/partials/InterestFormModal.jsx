import React from 'react';

import Modal from '../utils/Modal';


function InterestFormModal(formModalOpen, setFormModalOpen) {

    return (

              <Modal id="modal" show={formModalOpen} handleClose={() => setFormModalOpen(false)}>
              <div className='relative pb-9/16'>
                <iframe className="absolute w-full h-full" src="https://forms.gle/aCYXTHfJ94sEpDbY6" title="Interest Form"></iframe>
              </div>
            </Modal>
    );

}

export default InterestFormModal;