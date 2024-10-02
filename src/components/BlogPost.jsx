import React from 'react';

const BlogPost = ({ className }) => {
    return (
        <div className={className}>
            <article className="prose prose-lg mx-auto px-6 color-text">
                <h2 className="text-3xl font-bold mb-6 color-text">Tahapan Instalasi dan Setup R Programming Language</h2>
                <h3 className='text-inherit'>Tahap Awal</h3>
                <p> Langkah pertama buka browser apapun itu yang tersedia pada laptop/komputer anda, lalu pada bagian pencarian tekan alamat link berikut <a href="https://cran.r-project.org/" className='italic text-blue-400'>https://cran.r-project.org/</a></p>

                <img src="/images/kotak_pencarian.png" alt="search-box" className='rounded-lg border border-gray-400 mb-3 pb-3' />
            </article >
        </div >
    );
};

export default BlogPost;
