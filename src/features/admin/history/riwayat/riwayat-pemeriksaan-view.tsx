import BreadCrums from "../../../../common/components/BreadCrums";
import Pagination from "../../../../common/components/Pagination";

const RiwayatPemeriksaan = () => {
    const data = ["Riwayat Pemeriksaan"];
    return (
        <>
            <div className="mb-5">
                <BreadCrums data={data} />
            </div>
            <div className="w-full py-5 flex flex-col items-center justify-center gap-5">
                {/* cards */}
                <div className="w-full py-3 rounded-md shadow-md px-4 hover:scale-95">
                    <h1 className="text-xl ">Gigi Berlubang</h1>
                    <h3 className="mt-3 text-gray-600">23-03-12</h3>
                    <br />
                    <p>Catatan Dokter:</p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et dolores qui nulla necessitatibus officia, quis ex
                        sit, id tempore eum totam tenetur alias a architecto
                        repellendus earum consequatur beatae deserunt.
                    </p>
                </div>

                {/* card 2 */}
                <div className="w-full py-3 rounded-md shadow-md px-4 hover:scale-95">
                    <h1 className="text-xl ">Gigi Berlubang</h1>
                    <h3 className="mt-3 text-gray-600">23-03-12</h3>
                    <br />
                    <p>Catatan Dokter:</p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et dolores qui nulla necessitatibus officia, quis ex
                        sit, id tempore eum totam tenetur alias a architecto
                        repellendus earum consequatur beatae deserunt.
                    </p>
                </div>
                {/* card 3 */}
                <div className="w-full py-3 rounded-md shadow-md px-4 hover:scale-95">
                    <h1 className="text-xl ">Gigi Berlubang</h1>
                    <h3 className="mt-3 text-gray-600">23-03-12</h3>
                    <br />
                    <p>Catatan Dokter:</p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et dolores qui nulla necessitatibus officia, quis ex
                        sit, id tempore eum totam tenetur alias a architecto
                        repellendus earum consequatur beatae deserunt.
                    </p>
                </div>
            </div>
            <div className="w-full py-5 flex justify-center">
                <Pagination page={0} limit={0} totalRow={0} />
            </div>
        </>
    );
};
export default RiwayatPemeriksaan;
