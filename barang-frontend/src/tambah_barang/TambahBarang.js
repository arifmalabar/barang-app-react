import axios from "axios";
import { useState } from "react";
import { url_barang } from "../helper/EndPoint";

function TambahBarang() {
  const [newData, setNewData] = useState({
    nama_barang: "",
    kategori: "",
    stok: "",
    catatan: "",
  });
  const onChangeHandle = (key, value) => {
    setNewData({ ...newData, [key]: value });
  };
  async function tambahData() {
    try {
      const response = await axios.post(url_barang, newData);
      const data = await response.data;
      console.log(data);
      window.location.href = "";
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Tambah Data
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Nama Barang</label>
                  <input
                    className="form-control"
                    placeholder="masukan nama"
                    onChange={(e) => {
                      onChangeHandle("nama_barang", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Kategori</label>
                  <input
                    className="form-control"
                    placeholder="masukan kategori"
                    onChange={(e) => {
                      onChangeHandle("kategori", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Stok</label>
                  <input
                    className="form-control"
                    placeholder="masukan kategori"
                    type="number"
                    onChange={(e) => {
                      onChangeHandle("stok", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Catatan</label>
                  <textarea
                    className="form-control"
                    placeholder="masukan nama"
                    cols={10}
                    rows={5}
                    onChange={(e) => {
                      onChangeHandle("catatan", e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn btn-success"
              onClick={(e) => {
                tambahData();
              }}
            >
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TambahBarang;
