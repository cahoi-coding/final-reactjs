import {price} from './filter/CheckBox';

function Tour(props) {

    return (
        <a href={props.source} className="tour c-4">
            <img className="tour-img" src={props.img} alt="tour-img" />
            <div className="tour-content">
                <div>
                    <h2 className="tour-name">{props.name}</h2>
                    <p className="tour-adress">{props.adress}</p>
                    <div>{price[props.supplier_id - 1].name}</div>
                </div>
                <div className="line"></div>
                <div className="row tour-row-buy ">
                    <div className="col row  ">
                        <div className="col">Từ</div>
                        <div className="col tour-price">{props.price} đ</div>
                    </div>
                    <div className="col"><button className="tour-btn" >Đặt ngay</button></div>
                </div>
            </div>
        </a>
    )
}

export default Tour