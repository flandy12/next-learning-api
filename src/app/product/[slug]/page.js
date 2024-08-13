'use client';
import RatingComponent from "@/components/rating/page";
import CardProduct from "@/components/cards/page";
import PopUp from "@/components/popup/page";
import Image from "next/image";
import { useState } from "react";
import { randomIntFromInterval } from "@/helper/halper";

const ProductPage = () => {

    const [product, setProduct] = useState({
        total : 0,
        title : null,
        size : '',
    });

    const items = [0, 1, 2];

    const [errors, setErrors] = useState({ message: [] });

    const [isError, setIsError] = useState(false);

    const selectSize = (e) => {
        // console.log(e.target.getAttribute('data-target'));
        const sizeData = e.target.getAttribute('data-target');
        setProduct(
           { ...product, size : sizeData}
        );
    }

    const increase = () => {
        setProduct(
            { ...product, total : product.total + 1}
         );
    };

    const reduction = () => {
        setProduct(
            { ...product, total : product.total > 0 ? product.total - 1 : 0 }
        );
    };

    const buyProduct = () => {
        
        let newErrors = [];

        // Validasi total
        if (typeof product.total !== 'number' || product.total < 1) {
            newErrors.push('Silahkan tambahkan Terlebih dahulu');
        }

        // Validasi size
        if (product.size === '') {
            newErrors.push('Silahkan tambahkan Size dahulu');
        }

        // Set errors jika ada
        if (newErrors.length > 0) {
            setErrors({ message: newErrors });
            setIsError(true);
        } else {
            setIsError(false);
            // Lakukan aksi jika tidak ada error, misalnya, beli produk
            alert('berhasil beli')
            localStorage.setItem('product', JSON.stringify(product));
            window.location.href = '/'
        }
    }

    const PopUpMessage = ({isShowing,error}) => {

        const [errors, setErrors] = useState(error);
    
        const closeBtn = () => {
            setIsError(false);
        }
    
        return (
        <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className={`${isError ? '' : 'hidden'}  overflow-y-auto  overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto">
            
                <div className="relative bg-slate-100 rounded-lg shadow pb-5 ">
            
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            Error!
                        </h3>
                        <button onClick={closeBtn} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="static-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
            
                    {Array.isArray(errors.message) && errors.message.length > 0 && (
                        <div className="ms-5">
                            {errors.message.map((error, index) => (
                                <p key={index} className="text-red-500">
                                    {error}
                                </p>
                            ))}
                        </div>
                    )}
            
                   
                </div>
            </div>
        </div>
        )
    }

    return (
        <>
            <div>
                <PopUpMessage error={errors} isShowing={isError}/>
            </div>

            <section className="grid grid-cols-2 my-5">
                <div>
                    <Image className="rounded" src={'https://images.unsplash.com/photo-1722260613137-f8f5ac432d69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                    width={600}
                    height={300}
                    alt="image" />
                </div>
                <div>
                    <h1 className="space-y-5 text-xl font-semibold">Havic HV G-92 Gamepad</h1>
                    <input type="hidden" value={'Havic HV G-92 Gamepad'} id="product"></input>
                    <div  className="my-2">
                        <RatingComponent rate={3} />
                    </div>
                    <div className="my-5">
                        <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>

                    <div className="space-y-5">
                        <div  className="flex align-content-center align-items-center gap-2">
                            <span className="w-8 h-8">Size</span>
                            <div className="space-x-3">
                                <button className={`border px-2 w-8 h-8 ${product.size == 'xs' ? 'bg-red-500 text-white' : ''}`} onClick={selectSize} data-target="xs">xs</button>
                                <button className={`border px-2 w-8 h-8 ${product.size == 's' ? 'bg-red-500 text-white' : ''}`} onClick={selectSize} data-target="s">s</button>
                                <button className={`border px-2 w-8 h-8 ${product.size == 'm' ? 'bg-red-500 text-white' : ''}`} onClick={selectSize} data-target="m">m</button>
                                <button className={`border px-2 w-8 h-8 ${product.size == 'l' ? 'bg-red-500 text-white' : ''}`} onClick={selectSize} data-target="l">l</button>
                                <button className={`border px-2 w-8 h-8 ${product.size == 'xl' ? 'bg-red-500 text-white' : ''}`} onClick={selectSize} data-target="xl">xl</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <button className="border px-2 py-2 w-12" onClick={reduction}>-</button>
                        <button className="border px-6 py-2 bg-red-500 w-24 text-white">{product.total}</button>
                        <button className="border px-2 py-2 w-12" onClick={increase}>+</button>
                        <button className="border px-12 py-2 ms-3 bg-red-500 text-white" onClick={buyProduct}>Buy</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="my-5">
                    <span className="border-s-4 border-red-500 ps-5 text-xl">Related Item</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    <div>  
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <a href="#">
                                <img className="rounded-t-lg" src={'https://images.unsplash.com/photo-1722260613137-f8f5ac432d69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <div>
                                    <span>Rp.1200.0000</span>
                                    <RatingComponent rate={3}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {items.map((item, index) => (
                        <div key={index}>
                            <CardProduct 
                                image={'https://images.unsplash.com/photo-1722260613137-f8f5ac432d69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                                title={'Noteworthy technology acquisitions 2021'}
                                price={'Rp.1200.0000'}
                                rating={randomIntFromInterval(1,5)}
                            />
                        </div>
                    ))}
                  
                </div>
            </section>
           
        </>
    )
}

export default ProductPage;