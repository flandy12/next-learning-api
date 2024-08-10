import RatingComponent from "@/components/rating/page";
import Image from "next/image";
const ProductPage = () => {
    return (
        <>
            <section className="grid grid-cols-2 my-5">
                <div>
                    <Image className="rounded" src={'https://images.unsplash.com/photo-1722260613137-f8f5ac432d69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                    width={600}
                    height={300}
                    alt="image" />
                </div>
                <div>
                    <h1 className="space-y-5">Havic HV G-92 Gamepad</h1>
                    <div  className="space-y-5">
                    <RatingComponent rate={3} />
                    </div>
                    <div className="space-y-5">
                        <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>

                    <div className="space-y-5">
                        <div  className="space-y-5">
                            <span>Size</span>
                            <div>
                                <span className="border p-3">xs</span>
                                <span className="border p-3">s</span>
                                <span className="border p-3 bg-red-500">m</span>
                                <span className="border p-3">l</span>
                                <span className="border p-3">xl</span>
                            </div>
                        </div>
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
                </div>
            </section>
           
        </>
    )
}

export default ProductPage;