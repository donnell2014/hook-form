import React from "react";

const Form = props => {
    return(
        <div>
            <form >
                <div className="form-group">
                    <label htmlFor="firstName"></label>
                    <input type="text" name="firstName" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName"></label>
                    <input type="text" name="lastName" className="form-control" />
                </div>
            </form>
        </div>
    );
}

export default Form