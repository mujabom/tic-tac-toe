import Modal from "@mui/material/Modal";
type Props = {
  onClose: () => void;
  children?: React.ReactNode;
};

export default function NotificationScreen({ onClose ,children}: Props) {
  return (
    // <div onClick={onClose} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
    //   <div className="absolute origin-center my-auto h-52 w-screen bg-cd-semi-navy"></div>
    // </div>
    <Modal onClose={onClose} open className="">
      <div className="absolute top-[50%] translate-y-[-50%] w-full bg-cd-semi-navy">
        {children}
        
      </div>
    </Modal>
  );
}
