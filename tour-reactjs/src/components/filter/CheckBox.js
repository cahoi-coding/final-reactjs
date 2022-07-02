

// function CheckBox(props) {
//     return (
//         <div>
//             <input type="checkbox" id={props.id} name={props.name} value={props.value}/>
//             <label htmlFor={props.id}> {props.text}</label>
//         </div>
//     )
// }

// export default CheckBox

// import CheckBox from "./CheckBox"
import { useState, useEffect } from 'react';
import EventEmitter from "../../utils/EventEmitter";

export const price = [
    {
        id: 1,
        name: "VN TOUR"
    },
    {
        id: 2,
        name: "SAO VIET"
    },
    {
        id: 3,
        name: "TEST"
    }
]

function CheckBox() {

    const [check, setCheck] = useState([])

    useEffect(() => {
        setCheck(check)
        raiseSupplierFilterEvent()
    }, [check]);

    const raiseSupplierFilterEvent = () =>
    {
        // console.log(check);
        EventEmitter.emit('supplierFilter', {
            suppliers: check,
            create_at: new Date()
        })
    }

    const tick = (id) => {
        setCheck(
            prev => {
                if (check.includes(id)) {
                    return check.filter(item => item !== id)
                }
                else {
                    return [...prev, id]
                }
            }
        )
    }

    return (
        <div className="find-box">
            <div className="find-header second-header">Nha Cung Cap</div>
            {
                price.map(price => (
                    <div key={price.id}>
                        <input type="checkBox"
                            checked={check.includes(price.id)}
                            onChange={() => tick(price.id)}
                        /> {price.name}
                    </div>
                ))
            }
        </div>
    )
}

export default CheckBox

