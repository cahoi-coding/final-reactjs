import  { useState, useEffect } from 'react';
import EventEmitter from "../../utils/EventEmitter";

const prices = [
    {
        id: 0,
        name: "Tất cả",
        min: -100000000000000000000000000000,
        max: 100000000000000000000000000000
    },
    {
        id: 1,
        name: "từ 0 đến 500.000",
        min: 0,
        max: 500
    },
    {
        id: 2,
        name: "từ 500.000 đến 1000.000",
        min: 500,
        max: 1000
    },
    {
        id: 3,
        name: "từ 1000.000",
        min: 1000,
        max: 100000000000000000000000000000
    }
]

function FilterPrice()
{
    const [condition, setCondition] = useState({})
    const [check, setCheck] = useState(0)

    const onChangePriceFilter = (priceCondition, id) => {
        setCondition(priceCondition)
        setCheck(id)
    }

    useEffect(() => {
        setCondition(condition)
        setCheck(check)
        raisePriceFilterEvent()
    }, [condition, check]);

    const raisePriceFilterEvent = () =>
    {
        console.log('raise');
        EventEmitter.emit('priceFilter', {
            condition: condition,
            create_at: new Date()
        });
    }

    return (
        <div className="find-box">
            <div className="find-header second-header">Khoảng giá</div>
            {
                prices.map((priceCondition, index) => (
                    <div key={priceCondition.id}>
                        <input 
                            key={index} className='filt-radio' type="radio"
                            checked={priceCondition.id === check}
                            onChange={() => onChangePriceFilter(priceCondition, priceCondition.id)}/>
                        <span>{priceCondition.name}</span>
                    </div>
                ))
            }
            <div className="line-find"></div>
        </div>
    )
}

export default FilterPrice