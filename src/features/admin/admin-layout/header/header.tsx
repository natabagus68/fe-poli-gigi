import Bars from "../../../../common/components/icons/bars";
import Logo from "../../../../common/assets/logo.png";
const HeaderLayout = ({ ...props }) => {
    return (
        <>
            <div className="w-full fixed h-16 bg-green-500 flex items-center px-8 justify-between">
                <div onClick={() => props.setSidebar(!props.sidebar)}>
                    <Bars className="w-8 h-8 text-white cursor-pointer" />
                </div>
                <div>
                    <img src={Logo} alt="" className="w-8 h-9" />
                </div>
            </div>
        </>
    );
};

export default HeaderLayout;
