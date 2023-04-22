import BreadCrums from "../../../../common/components/BreadCrums";

const DetailRiwayat = () => {
    return (
        <>
            <div className="mb-5">
                <BreadCrums data={["Riwayat Pemeriksaan", "Detail"]} />
            </div>
            <div className="w-full py-5 px-3 rounded-md shadow-lg">
                <h1 className="text-2xl mb-3">Gigi Berlubang</h1>
                <h3 className="text-gray-500 mb-3">23-03-12</h3>
                <p className="mb-3">Catatan Dokter:</p>
                <p className="mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    accusamus quo molestias reprehenderit magnam, ipsam eum
                    quaerat sequi praesentium? Repellat aliquam vitae recusandae
                    nihil illo aperiam harum, ab quod ducimus?
                </p>
                <p className="mb-3">Obat:</p>

                {["Amociline", "Bodrexine", "AntiBiotik"].map((item, i) => (
                    <p>-{item}</p>
                ))}
            </div>
        </>
    );
};

export default DetailRiwayat;
