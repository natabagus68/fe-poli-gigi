import BreadCrums from "../../../../common/components/BreadCrums";

const FormJadwal = () => {
    return (
        <>
            <div className="mb-5">
                <BreadCrums data={["Jadwal", "Buat Jadwal Saya"]} />
            </div>
            <div className="w-full">
                <div className="w-full py-4 px-2 rounded-md shadow-md">
                    <form action="" className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className=" text-gray-400">
                                Tanggal Kedatangan
                            </label>
                            <input
                                type="date"
                                className="w-full py-3 p-2 text-gray-600 rounded-md font-jura outline-none border borger-gray-500"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className=" text-gray-400">
                                Jam Kedatangan
                            </label>
                            <input
                                type="time"
                                className="w-full py-3 p-2 text-gray-600 rounded-md font-jura outline-none border borger-gray-500"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className=" text-gray-400">
                                Keluhan
                            </label>
                            <textarea
                                rows={10}
                                className="w-full py-2 p-2 text-gray-600 rounded-md font-jura outline-none border borger-gray-500"
                            ></textarea>
                        </div>
                        <button className="bg-green-400 text-white text-center w-full rounded-md shadow-md py-4 hover:bg-green-600">
                            Buat Jadwal
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormJadwal;
