import Find from "./filter/Find"
import FilterPrice from "./filter/FilterPrice"
import CheckBox from "./filter/CheckBox"

function SiteBar() {
    return (
        <div className="filter">
            <div className="find-header">Tìm Kiếm</div>
            <div className="filter-box">
                <Find/>
                <FilterPrice/>
                <CheckBox/>
                

            </div>

        </div>
    )
}

export default SiteBar