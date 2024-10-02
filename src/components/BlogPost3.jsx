const BlogPost3 = ({ className }) => {
    return (
        <div className={className}>
            <article className='prose prose-lg mx-auto px-6 py-3 text-white'>
                <h2 className="text-3xl font-bold mb-6 text-white">Tahap Selanjutnya adalah Setup R IDE</h2>
                <blockquote className="border-l-4 border-red-400 pl-4 text-gray-200 italic">
                    "Note!, sebelum itu temukan dulu file R IDE yang ter-unduh tadi yaa.
                    Kalau sudah mari lanjutkan!"
                </blockquote>
                <p>Setelah menemukan file R IDE lalu tekan 2 kali dan akan muncul pop up seperti berikut :</p>
                <div className="flex justify-center align-center">
                    <img src="/images/setup1.png" alt="setup1" className="rounded-lg" />
                </div>
                <blockquote className="border-l-4 border-blue-400 pl-4 text-gray-200 italic">Silahkan pilih bahasa yang ingin digunakan!</blockquote>

                <p>Kemudian akan muncul informasi seperti gambar dibawah</p>
                <div className="flex justify-center align-center">
                    <img src="/images/setup2.png" alt="setup2" className="rounded-lg border border-gray-400" />
                </div>
                <cite>Tekan Next untuk meelanjutkan</cite>
                <p>Kemudian kita diminta untuk menentukan lokasi dimana kita akan menyimpan sebuah folder khusus <code className="text-white">R Lang</code></p>
                <div className="flex justify-center align-center">
                    <img src="/images/dir.png" alt="dir" className="rounded-lg border border-gray-400" />
                </div>
                <p>Kemudian akan muncul beberapa checkbox yang bisa kita pilih/sesuaikan dengan kebutuhan kita.</p>
                <div className="flex justify-center align-center">
                    <img src="/images/pilihan.png" alt="check" className="rounded-lg border border-gray-400" />
                </div>
                <p>setelah itu klik <code className="text-white">Next</code></p>
                <p>dibawah kita diberi opsi pilihan saat memulai lalu tekan <code className="text-white">Next</code></p>
                <div className="flex justify-center align-center">
                    <img src="/images/changeName.png" alt="change" className="rounded-lg border border-gray-400" />
                </div>
                <p>Selanjutnya kita akan diberi kesempatan untuk mengganti nama folder, tetapi jika tidak ingin mengganti maka tekan <code className="text-white">Next</code></p>
                <div className="flex justify-center align-center">
                    <img src="/images/cn.png" alt="cn" className="rounded-lg border border-gray-400" />
                </div>

                <p>Lalu pilih atau centang yang diperlukan dan tekan <code className="text-white">Next</code></p>
                <div className="flex justify-center align-center">
                    <img src="/images/check.png" alt="check" className="rounded-lg border border-gray-400" />
                </div>
                <p>Kemudian tunggu hingga progres selesai lalu tekan <code className="text-white">Finish</code></p>
                <div className="flex justify-center align-center">
                    <img src="/images/finish.png" alt="finish" className="rounded-lg border border-gray-400" />
                </div>
            </article>
        </div>
    )
}

export default BlogPost3