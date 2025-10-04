// server.js
const express = require("express");
const app = express();
const port = 8001;

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

const articles = [
    {
        id: 1,
        title: "Belajar Express.js untuk Pemula",
        urlimage: "https://mijen.semarangkota.go.id/2023/10/01/batikmijen/",
        description: "Batik adalah salah satu warisan budaya Indonesia yang telah diakui oleh UNESCO sebagai Warisan Kemanusiaan untuk...",
        author: "Raden Walangsungsang"
    },
    {
        id: 2,
        title: "Membuat API dengan Node.Js",
        urlimage: "https://ugm.ac.id/id/berita/pragmatisme-keserakahan-dan-kegagalan-membangun-sistem-jadi-akar-persoalan-korupsi-di-indonesia/",
        description: "Belakangan ini, kasus korupsi yang menelan kerugian negara dalam jumlah besar kembali menjadi sorotan publik.",
        author: "Empu Gandring"
    },
    
];
// Endpoint GET /api/test/getarticle
app.get("/api/test/getarticle", (req, res) => {
    res.json({
        status: "success",
        data: articles
    });
});
