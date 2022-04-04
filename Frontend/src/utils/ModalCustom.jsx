import React, {useRef, useEffect} from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ModalSCSS from './Modal.module.scss';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    borderRadius: 2,

    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    marginTop: 0,
    right: 'auto',
    bottom: 'auto',
    // top:'50%',
    // left:'50%',
    // // overflow:'hidden',
    // height: '100vh',
    height:'100vh',
    objectFit: 'cover',
    
    // overscrollBehavior: 'none',
    overflow: 'scroll',
    // visibility: 'visible'
    // minHeight: '100%',
    // display:'flex',
    // flexDirection: 'column',
    // zIndex: '90'
  };


const ModalCustom = (props) => {
    // const scrollRef = useRef(null);
    // useEffect(() => {
    //     scrollRef.current.scrollTo(0, 0);
    // });

    return (
        // <>
        //     <div className={ModalSCSS.overlay} onClick={props.handleClose} ></div>
        //     <animated.div className={ModalSCSS.modal}>
        //             {props.children}
        //     </animated.div>
        // </>
        <div>
            <Modal
                className='overflow-y-auto'
                // ref={scrollRef}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.isOpen}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={props.isOpen}>
                <Box className={ModalSCSS.modalBox} >
                    {props.children}
                </Box>
                </Fade>
            </Modal>
            {/* className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8/12 p-4 overflow-y-auto' */}
        </div>
    )
}

export default ModalCustom
