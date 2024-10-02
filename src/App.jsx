import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import BlogPost2 from './components/BlogPost2';
import BlogPost3 from './components/BlogPost3';
import UnderHeader from './components/UnderHeader';
import Tugas from './components/Tugas';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className='srcroll scroll-smooth' id='awal'>
      <Header />
      <UnderHeader />
      <main>
        <BlogPost className={"bg-gray-400 w-full lg:h-[120vh] sm:h-[135vh] pt-4"} />
        <ScrollToTopButton />
        <BlogPost2 className={"w-full lg:h-[259vh] sm:h-[160vh] mt-5"} />
        <BlogPost3 className={"bg-gray-400 w-full lg:h-[897vh] sm:h-[500vh] p-3"} />
        <Tugas className={"w-full lg:h-[450vh] sm:has-[300vh]:] p-3"} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
