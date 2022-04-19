import { useState } from "react";
import Gambar from '../src/iphone.jpg'

function Produk() {
    const [jumlah, totalAwal] = useState(1);
    const tambahBarang = () => {
        totalAwal(jumlah + 1);
    }
    const kurangBarang = () => {
        totalAwal(jumlah - 1);
    }
    let total = jumlah * 15000000

    return (
        <>
            <center>
                <div className="App">
                    <img src={Gambar} alt="gambar iphone" width={300} height={300} />
                    <h2>Spesifikasi</h2>
                    <p>Layar 6,7 inci OLED (2.778 x 1.284 piksel), 458 ppi | Dimensi 160,8x78,1x7,4 mm, berat: 228 gram | Chipset Apple A14 Bionic</p>
                    <p>Dual SIM: Nano dan e-SIM | Kamera 12 MP Ultra Wide | SO iOS 14 | RAM/ROM 6GB/128GB</p>
                    <p>Lidar Scanner, Fast charging 18 Watt, Wi-Fi 802.11, water resistant IP68, wireless charging 15 Watt</p>
                    <h2>Rp. 15.000.000</h2>
                </div>

                <div className="App">
                    <h3>Jumlah Barang</h3>
                    <div className="App">
                        <button className="produk" onClick={kurangBarang}>-</button>
                        <text>{jumlah}</text>
                        <button className="produk" onClick={tambahBarang}>+</button>

                    </div>
                    <h3>Total Harga</h3>
                    <h2>{total}</h2>
                </div>

            </center>
        </>
    )
}

export default Produk;