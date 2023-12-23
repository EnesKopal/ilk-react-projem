import { useState } from 'react'

function UrunListele() {
    // Ürün listesi
    const urunler = [
        {
            id: 1,
            name: "Pizza",
            price: 42
        },
        {
            id: 2,
            name: "Hamburger",
            price: 45
        },
        {
            id: 3,
            name: "Tost",
            price: 25
        },
        {
            id: 4,
            name: "Çorba",
            price: 20
        },
        {
            id: 5,
            name: "Kebao",
            price: 50
        }
    ]

    const urunListesi = () => urunler.map(urun => <li key={urun.id}>{urun.name} - {urun.price}tl</li>);

    return (
        <div>
            <h2>Ürün Listesi</h2>
            <ul>{urunListesi()}</ul>
        </div>
    )
}

export default UrunListele;
