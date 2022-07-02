import React, {useState, useEffect} from "react";

import EventEmitter from "../../utils/EventEmitter";

function Find()
{
    const [keywords, setKeyword] = useState("");

    const raiseSearchingEvent = () =>
    {
        EventEmitter.emit('search', {
            keyword: keywords,
            create_at: new Date()
        });
    }

    const onChangeSearchBar = (event) =>
    {
        setKeyword(event.target.value)
    }

    return(
        <div  className="find-box">
            <input onChange={event => onChangeSearchBar(event)} className="input-find"/>
            <button onClick={raiseSearchingEvent} className="btn-find">Tìm kiếm</button>
            <div className="line-find"></div>
        </div>
    )
}

export default Find