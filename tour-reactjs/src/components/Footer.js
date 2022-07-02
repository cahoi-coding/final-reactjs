function Li(props) {
    return <div className="li">{props.name}</div>;
}
function LiHead(props) {
    return <div className="li-head">{props.name}</div>;
}



function Footer() {
    return (
        <div className="footer row ">
            <div className="col c-3 ">
                <img className="logo-footer" src="https://storage.googleapis.com/vntravel-fe/0d5ac4fb4d69ef463fd14901a50e40ca/7d071d09703cffcc06f2b600ae4248a8/b2b6347ad285f9d45bac5b742aea2b21.png" alt="logo" />
            </div>
            <div className="col c-9 space-evenly">
                <div className="row">

                    <div className="col c-4">
                        <LiHead name="DỊCH VỤ"></LiHead>
                        <Li name="Sự Kiện"></Li>
                        <Li name="Tour"></Li>
                    </div>

                    <div className="col c-4">
                        <LiHead name="VỀ CHÚNG TÔI"></LiHead>
                        <Li name="Mytour.vn"></Li>
                        <Li name="Mytourevent"></Li>
                    </div>

                    <div className="col c-4">
                        <LiHead name="LIÊN HỆ"></LiHead>
                        <Li name="1900 2083"></Li>
                        <Li name="event@mytour.vn"></Li>
                        <Li name="Văn Phòng: Tầng 11 tòa nhà Peak View, 36 Hoàng Cầu, Đống Đa, Hà Nội"></Li>
                        <Li name="190020Showroom: 168 Xã Đàn, Phương Liên, Đống Đa, Hà Nội83"></Li>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-line"></div>
                    <p className="footer-sub">Mytour là thành viên của VNTravel Group, một trong những tập đoàn đứng đầu Đông Nam Á về du lịch trực tuyến và các dịch vụ liên quan</p>
                    <img className="footer-img" src="https://w.ladicdn.com/s1050x350/5fa8e8ddd5a5b24b341709bc/group-1189-20201223100726.png" alt="a" />
                </div>
            </div>
        </div>
    )
}
export default Footer