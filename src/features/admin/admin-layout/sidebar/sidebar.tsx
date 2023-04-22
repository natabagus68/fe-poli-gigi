import Logo from "../../../../common/assets/logo.png";
import Back from "../../../../common/components/icons/back";
import Close from "../../../../common/components/icons/close";

const SidebarLayout = ({ ...props }) => {
    const translate = "-translate-x-80 ";
    return (
        <>
            <div
                className={`fixed w-1/2 md:w-80 h-screen bg-white shadow-lg ${
                    props.showhide ? null : translate
                } duration-1000`}
            >
                <div className="w-full h-16  border-b border-gray-100 shadow-md flex gap-3 items-center px-3">
                    <img src={Logo} alt="" className="w-11 h-12 " />
                    <p className="text-sm font-dancing ">
                        Puskesmas Kecamatan Kemayoran
                    </p>
                    <div
                        onClick={() => {
                            props.setSidebar(!props.showhide);
                        }}
                    >
                        <Close className="w-8 h-8 cursor-pointer hover:scale-75" />
                    </div>
                </div>
                <div className="mt-10 w-full px-5">
                    <ul>
                        <li className="mt-5 text-gray-500 font-jura hover:text-gray-800 cursor-pointer  ">
                            Riwayat Pemeriksaan
                        </li>
                        <li className="mt-5 text-gray-500 font-jura hover:text-gray-800 cursor-pointer  ">
                            Buat Jadwal
                        </li>
                        <li className="mt-5 text-gray-500 font-jura hover:text-gray-800 cursor-pointer  ">
                            Jadwal Saya
                        </li>
                        <li className="mt-5 text-gray-500 font-jura hover:text-gray-800 cursor-pointer  ">
                            Data Diri
                        </li>
                    </ul>

                    <div className="mt-10 border-t border-gray-300  shadow-sm w-full m-auto py-3 flex items-center gap-3">
                        <Back className="w-5 h-5 text-gray-500" />
                        <p className="text-gray-600 hover:text-gray-800 cursor-pointer  ">
                            Logout
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarLayout;
