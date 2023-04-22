import BreadCrums from "../../../../common/components/BreadCrums";

const DataDiri = () => {
    return (
        <>
            <div className="mb-5">
                <BreadCrums data={["Data diri"]} />
            </div>
            <div className="w-full px-4 py-3 rounded-md shadow-md flex flex-col gap-3">
                <p className="text-sm">Nama: Pasien</p>
                <p className="text-sm">Tanggal, lahir: 16-05-2001</p>
                <p className="text-sm">Jenis Kelamin: Pria</p>
                <p className="text-sm">Nomor Handphone: 085162544149</p>
                <p className="text-sm">Email: pasien@gmail.com</p>
                <p className="text-sm">Alamat:</p>
                <p className="text-sm">
                    Kab Kediri, Kec.Gurah Ds.Sumbercangkring
                </p>
                <p className="text-sm">Status Pernikahan: Belum Kawin</p>
                <p className="text-sm">Kontak Darurat: 123456789012</p>
                <p className="text-sm">Hubungan: Saudara</p>
                <p className="text-sm">Berat Badan: 86kg</p>
                <p className="text-sm">tinggi Badan: 175cm</p>
                <p className="text-sm">Pengguna ARV aktiv: ya</p>
                <p className="text-sm">Lama Penggunaan: 3 tahun</p>
                <button className="text-black px-2 py-2 rounded-md bg-yellow-300 text-center mt-4 hover:bg-yellow-600">
                    Edit Data
                </button>
            </div>
        </>
    );
};

export default DataDiri;
