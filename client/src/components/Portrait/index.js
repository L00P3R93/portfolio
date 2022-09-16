import './style.scss'

const Portrait = () => {
    return (
        <div id="portrait">
            <img
                src={require('../../assets/images/1x/avatar-me-2020.png')}
                alt="Developer_IMG"
                className="img-fluid"
            />
        </div>
    )
}

export default Portrait