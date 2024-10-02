const BlogPost2 = ({ className }) => {
    return (
        <div className={className}>
            <article className='prose prose-lg mx-auto px-6'>
                <h2>Tahap Kedua</h2>
                <p>Setelah menelusuri halaman tersebut kita akan diarahkan ke sebuah dashboard</p>
                <img src="/images/dashboard.png" alt="dashboard" className="rounded-lg border border-gray-400" />
                <blockquote className="border-l-4 border-blue-400 pl-4 text-gray-600">
                    <p className="text-[1em] leading-[1.5]">
                        <span className="float-left text-[48px] leading-[1] pr-2">K</span>
                        emudian pilih link yang tertera di atas sesuai perangkat yang kalian gunakan, karena saya pengguna windows saya akan memilih <q>Download R for Windows</q>.
                    </p>
                </blockquote>
                <p>Akan muncul sebuah halaman berikut, lalu pilih pada bagian <span className="text-blue-500 text-bold">R for First Time</span></p>
                <img src="/images/rFirstTime.png" alt="Rlang" className="border-gray-rounded" />

                <p>dan akan muncul sebuah halaman berikut, dan klik <span className="text-blue-500 underline">Download R-4.4.1 for Windows.</span></p>
                <img src="/images/install.png" alt="install" className='rounded-lg border border-gray-400' />
                <cite>Kemudian cari dimana file tersebut tersimpan...</cite>
            </article>
        </div>
    )
}

export default BlogPost2