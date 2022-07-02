import Tour from "./Tour"
import SiteBar from "./SiteBar"

import { useState, useEffect } from 'react';
import EventEmitter from '../utils/EventEmitter';
import axios from 'axios';

function Content()
{

    const [tours, setTour] = useState([]);
    const [priceCondition, setPriceCondition] = useState({
        min: -100000000000000000000000000000,
        max: 100000000000000000000000000000
    });
    const [supplierCondition, setSupplierCondition] = useState([]);

    useEffect(() => {
        setPriceCondition(priceCondition);
        setSupplierCondition(supplierCondition);

        const searchListener = EventEmitter.addListener('search', onSearchingEvent);
        const priceFilterListener = EventEmitter.addListener('priceFilter', onPriceFilterEvent);
        const supplierFilterListener = EventEmitter.addListener('supplierFilter', onSupplierFilterEvent);

        const request = {
            params: {
                price_range: [priceCondition.min, priceCondition.max],
                suppliers: supplierCondition
            }
        }
        axios.get(`http://127.0.0.1:8000/api/tours/get-by-condition`, request)
            .then(res => {
                setTour(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));

        return () => {
            searchListener.remove();
            priceFilterListener.remove();
            supplierFilterListener.remove();
        }
    }, [priceCondition, supplierCondition])

    const onSearchingEvent = (eventData) =>
    {
        const request = {
            params: {
                keyword: eventData.keyword
            }
        }
        axios.get(`http://127.0.0.1:8000/api/tours/get-by-keyword`, request)
            .then(res => {setTour(res.data);})
            .catch(error => console.log(error));
    }

    const onPriceFilterEvent = (eventData) =>
    {
        setPriceCondition(eventData.condition);
    }

    const onSupplierFilterEvent = (eventData) =>
    {
        setSupplierCondition(eventData.suppliers)
    }

    return (
        <div className="row content">
            <div className="col c-3">
                <SiteBar />
            </div>
            <div className="col c-9 row">
                {tours.map(tour =>(
                    <Tour
                        key={tour.tour_id}
                        img={tour.tour_image}
                        source={tour.tour_source}
                        name={tour.tour_title}
                        price={tour.tour_price}
                        adress={tour.tour_location}
                        supplier_id={tour.supplier_id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Content