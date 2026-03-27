import React from 'react'
import Header from './context_API/pages/header';
import Footer from './context_API/pages/Footer';
import PhotoAlbum from './context_API/components/PhotoAlbum';
import UseEffect from './UseEffect';
import UseRef from './UseRef';

const Page = () =>{
    return(
        <>
        <Header/>
            <UseEffect/>
            <UseRef/>
            {/* <main className="main-content">
                <PhotoAlbum/>
            </main> */}
        <Footer/> 
        </>
    )
}

export default Page;