/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

const ImageComponent = ({ mypic }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div className='xl:col-span-1 flex justify-center items-center mt-5'>
            <img
                src={mypic}
                className='h-72 w-72 object-cover rounded-full cursor-pointer'
                alt="notfound"
                onClick={openModal}
            />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="flex justify-center items-center "
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <button onClick={closeModal} className="block absolute top-4 left-0 lg:left-10 z-50 m-4  text-white"><FaTimes size={24} /></button>
                <div className="relative">
                {/* <button onClick={closeModal} className="block md:hidden absolute top-28 md:top-0 left-0 md:left-10 m-4 z-50 text-black"><FaTimes size={24} /></button> */}
                    <img src={mypic} className='max-w-full max-h-full mt-5 border-none ' alt="notfound" />
                </div>
            </Modal>
        </div>
    );
};

export default ImageComponent;
