import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const Tugas = ({ className }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik (opsional)
            once: false, // Animasi terjadi sekali saja saat di-scroll
        });
    }, []);

    return (
        <div className={className}>
            <article className="prose prose-lg mx-auto px-6">
                <h2 className="text-3xl mb-6 text-gray-700">
                    Setelah IDE R terinstall maka bisa dijalankan untuk memulai sebuah program...
                </h2>
                <blockquote className="border-l-4 my-3 border-blue-500 pl-4 text-gray-600 italic">"Tahapan Instalasi dan Setup R Programming Language sudah selesai Maka halaman bawah ini saya akan memberikan implementasi sebuah kode program menggunakan R language". <q className="text-bold text-fuchsia-600">Sembari saya mengerjakan tugas Latihan Praktikum Statistika Sederhana. Terimakasih.</q></blockquote>

                <fieldset className="border border-gray-300 p-4">
                    <legend className="text-bold text-gray-600">Latihan 1</legend>
                    <p>1. Buatlah Program untuk menampilkan angka Genap / Ganjil</p>
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src="/images/no1.png" alt="no1" className="border-gray-rounded" />
                    </div>
                    <p>2. Buatlah tampilan program sbb:
                        Untuk menghitung nilai A {">="} 86, B {">="} 70, C {">="} 50
                    </p>
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src="/images/if else.png" alt="ifelse" className="border-gray-rounded" />
                    </div>
                    <p>3.Buatlah program untuk menyimpan 3 buah data pada 3, buah variabel x.y.z.
                        Tampilkan ke-3 variabel tersebut :
                    </p>
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src="/images/tampildata.png" alt="data" className="border-gray-rounded" />
                    </div>
                    <p>
                        4. Buatlah tampilan program sbb:

                        [1] 1

                        [1] 2

                        [1] 3

                        [1] 4

                        [1] 5

                        [1] 6

                        [1] 7

                        (1) 8

                        [1] 9

                        [1] 10

                    </p>
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src="/images/perulangan.png" alt="loop" className="border-gray-rounded" />
                    </div>
                </fieldset>
            </article>
            <hr className="border-gray-300 my-5" />
            <blockquote className="border-l-4 my-3 border-blue-500 pl-4 text-gray-600 italic">
                Sekian Langkah - langkah Instalasi dan Setup R Programming Language beserta contohnya.
                Apabila ada kesalahan mohon di maklumi karena masih tahap belajar :{")"}
            </blockquote>
        </div>
    )
}
export default Tugas