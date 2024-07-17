import "./MobileMessage.scss";

const MobileMessage = () => {
  return (
    <div className="mobileMessage">
      <div className="mobileMessage__container">
        <h2 className="mobileMessage__heading">
          Please visit this website on a tablet or desktop.
        </h2>
        <p className="mobileMessage__text">
          Mobile experience is not optimal (yet).
        </p>
      </div>
    </div>
  );
};

export default MobileMessage;
