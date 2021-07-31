import React from "react";

const CartForm = ({ onAction }) => {
  const callOnAction = () => {
    const name = document.getElementById("input-name").value;
    const phone = document.getElementById("input-phone").value;
    const mail = document.getElementById("input-mail").value;
    const confirmacionMail = document.getElementById("input-confirmmail").value;
    if (name === "") alert("Ingresa tu nombre");
    else if (phone === "") alert("Ingresa tu telefono");
    else if (mail === "") alert("Ingresa tu mail");
    else if (mail !== confirmacionMail) alert("Los mails no coinciden");
    else onAction(name, phone, mail, confirmacionMail);
  };
  return (
    <div>
      <h4>Registrate para finalizar tu compra</h4>
      <div className="form-row">
        <div className="col-md-12 mb-3">
          <input
            id="input-name"
            className="form-control form-control-lg"
            type="text"
            placeholder="Ingresa tu nombre"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-12 mb-3">
          <input
            id="input-phone"
            className="form-control form-control-lg"
            type="text"
            placeholder="Ingresa tu Telefono"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-12 mb-3">
          <input
            id="input-mail"
            className="form-control form-control-lg"
            type="text"
            placeholder="Ingresa tu Email"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-12 mb-3">
          <input
            id="input-confirmmail"
            className="form-control form-control-lg"
            type="text"
            placeholder="Confirma tu Email"
          />
        </div>
      </div>
      <button className="btn btn-secondary" onClick={callOnAction}>
        Finalizar compra
      </button>
    </div>
  );
};

export default CartForm;
