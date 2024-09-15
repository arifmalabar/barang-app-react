import { useState } from "react";
function UpdateBarang(props) {
  const [newData, setNewData] = useState({
    nama_barang: "",
    kategori: "",
    stok: "",
    catatan: "",
  });
  const onChangeHandle = (key, value) => {
    setNewData({ ...newData, [key]: value });
  };
  return (
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Update Data
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Nama Barang</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="masukan nama"
                    value={props.data.nama_barang}
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
                    value={props.data.kategori}
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
                    value={props.data.stok}
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
                    value={props.data.catatan}
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
              class="btn btn-warning text-white"
              onClick={(e) => {
                console.log(newData);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateBarang;
