import React from "react";

const CartForm = ({onAction}) => {
    const callOnAction = () => {
        const name = document.getElementById("input-name").value;
        const phone = document.getElementById("input-phone").value;
        const mail = document.getElementById("input-mail").value;

        onAction(name, phone, mail);
    }
  return (
    <div>
      
        <h4>Registrate para finalizar tu compra</h4>
        <div className="form-row">
            <div className="col-md-12 mb-3">
                <input id="input-name" className="form-control form-control-lg" type="text" placeholder="Ingresa tu nombre"/>
            </div>
        </div>
        <div className="form-row">
            <div className="col-md-12 mb-3">
                <input id="input-phone" className="form-control form-control-lg" type="text" placeholder="Ingresa tu Telefono"/>
            </div>
        </div>
        <div className="form-row">
            <div className="col-md-12 mb-3">
                <input id="input-mail" className="form-control form-control-lg" type="text" placeholder="Ingresa tu Email"/>
            </div>
        </div>
        <button className="btn btn-secondary" onClick= {callOnAction}> 
        Finalizar compra
        </button>

      
    </div>
  );
};

export default CartForm;
