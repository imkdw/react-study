import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

interface IBackdropProps {
  onHideCart(): void;
}

const Backdrop = (props: IBackdropProps) => {
  return <div className={classes.backdrop} onClick={props.onHideCart} />;
};

const ModalOverlay = (props: any) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

interface IModalProps {
  children: React.ReactNode;
  onHideCart(): void;
}

const Modal = (props: IModalProps) => {
  const portalElement = document.getElementById("overlays") as HTMLElement;
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
