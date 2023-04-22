import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../features/auth/login/login-view";
import Register from "../features/auth/register/register-view";
import LayoutAdmin from "../features/admin/admin-layout";
import RiwayatPemeriksaan from "../features/admin/history/riwayat/riwayat-pemeriksaan-view";
import DetailRiwayat from "../features/admin/history/detail-riwayat/detail-riwayat-view";
import Jadwal from "../features/admin/schedule/jadwal/jadwal-view";
import FormJadwal from "../features/admin/schedule/form-jadwal/form-jadwal-view";
import DataDiri from "../features/admin/me/data-diri/data-diri-view";
import FormDataDiri from "../features/admin/me/form-data-diri/form-data-diri-view";
const Root = () => {
    return <Outlet />;
};

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/pasien-admin",
        element: <LayoutAdmin />,
        children: [
            {
                path: "",
                element: <Root />,
                children: [
                    {
                        path: "",
                        element: <RiwayatPemeriksaan />,
                    },
                    {
                        path: ":id/detail",
                        element: <DetailRiwayat />,
                    },
                ],
            },
            {
                path: "jadwal",
                element: <Root />,
                children: [
                    {
                        path: "",
                        element: <Jadwal />,
                    },
                    {
                        path: "buat-jadwal",
                        element: <FormJadwal />,
                    },
                ],
            },
            {
                path: "me",
                element: <Root />,
                children: [
                    {
                        path: "",
                        element: <DataDiri />,
                    },
                    {
                        path: "buat-data-diri",
                        element: <FormDataDiri />,
                    },
                    {
                        path: ":id/edit-data-diri",
                        element: <FormDataDiri />,
                    },
                ],
            },
        ],
    },
]);
