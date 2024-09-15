import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";
import { url_barang } from "../helper/EndPoint";
import TambahBarang from "../tambah_barang/TambahBarang";
import UpdateBarang from "../update_barang/UpdateBarang";
import Swal from "sweetalert2";
function Dashboard() {
  const [barang, setBarang] = useState([]);
  useEffect(() => {
    getDataBarang();
  }, []);
  async function getDataBarang() {
    try {
      const response = await axios.get(url_barang);
      const response_data = await response.data;
      setBarang(response_data);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteDataBarang(id) {
    try {
      const response = await axios.delete(`${url_barang}/${id}`);
      const data_response = await response.data;
      getDataBarang();
      return data_response;
    } catch (error) {
      return "error";
    }
  }
  const [curData, setCurData] = useState({});
  return (
    <div className="container">
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col-md-12">
          <button className="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Tambah Data
          </button>
          <TambahBarang />
        </div>
        <div className="col-md-12">
          <table className="table table-striped" style={{ margin: 15, border: 1 }}>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama barang</th>
                <th>Kategori</th>
                <th>Opsi</th>
              </tr>
            </thead>
            <tbody>
              {barang.map((e) => (
                <ItemBarang data={e} />
              ))}
            </tbody>
          </table>
          <UpdateBarang data={curData} />
        </div>
      </div>
    </div>
  );
  function ItemBarang(props) {
    return (
      <tr>
        <td>1</td>
        <td>{props.data.nama_barang}</td>
        <td>{props.data.kategori}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              Swal.fire({
                title: "Konfirmasi",
                text: "Apakah anda yakin akan menghapus data ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Hapus",
              }).then((result) => {
                if (result.isConfirmed) {
                  const resp = deleteDataBarang(props.data.id);
                  Swal.fire({
                    title: "Berhasil!",
                    text: "Berhasil menghapus data",
                    icon: "success",
                  });
                }
              });
            }}
          >
            Hapus
          </button>
          &nbsp;
          <button
            className="btn btn-warning text-white"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            onClick={(e) => {
              setCurData({});
              setCurData(props.data);
            }}
          >
            Update
          </button>
        </td>
      </tr>
    );
  }
}
export default Dashboard;
