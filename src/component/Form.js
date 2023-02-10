import React from 'react';

function Form ({form, setForm}) {

    function checkArray (event) {
        let a = form.object
        a.push({date:event.target[0].value, long:event.target[1].value})
        return a.sort(sortItem);
    }

    const sortItem = (a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
    };

    const handleSubmit = event => {
        event.preventDefault();
        setForm({object: checkArray(event)});
    }


    return (
    <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group" style={{margin: "20px"}}>
        <input type="date" className="form-control" placeholder="Дата (ДД.ММ.ГГ)" required/>
        </div>
        <div className="form-group">
        <input className="form-control" placeholder="Пройдено км" required/>
        </div>
        <button style={{margin: "20px"}} type="submit" className="btn btn-primary">OK</button>
    </form>
    )
}

export default Form
