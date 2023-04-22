import BreadCrums from "../../../../common/components/BreadCrums";

const Jadwal = () => {
    return (
        <>
            <div className="mb-5">
                <BreadCrums data={["jadwal Saya"]} />
            </div>
            <div className="w-full">
                <div className="w-full py-4 px-2 rounded-md shadow-md flex flex-col gap-3">
                    <div>
                        <button className="py-3 px-2 text-center text-white bg-red-500 rounded-md  text-sm hove">
                            Batalkan
                        </button>
                    </div>
                    <p className="text-gray-600">Keluhan:</p>
                    <p className="font-bold text-gray-600">Gigi Berlubang</p>
                    <p className="text-gray-600">Tanggal akan Berkunjung:</p>
                    <p className="text-gray-600">24-04-2023</p>
                    <p className="text-gray-600">
                        Jam kedatangan:{" "}
                        <span className="font-bold ml-2">08:00</span>
                    </p>
                    <p className="text-gray-600">
                        Status: <span className="font-bold ml-2">Panding</span>
                    </p>
                    <p className="text-gray-600">
                        Aprove Dari Dockter:
                        <span className="font-bold ml-2">Belum Disetujui</span>
                    </p>
                </div>
            </div>
        </>
    );
};
export default Jadwal;
