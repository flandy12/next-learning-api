import img from "../../../../public/image/qrcode.png"

console.log('footer di render');

export default function Footer() {
    return(
        <footer className="bg-black mt-10">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8  px-8 py-6 lg:py-8 md:grid-cols-5">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Exclusive</h2>
                        <ul className="text-white">
                            <li className="mb-4">
                                <a href="#" className="hover:underline font-medium"><h4>Subscribe</h4></a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Get 10% off your first order</a>
                            </li>
                            <li className="flex">
                                <form action="submit" className="flex">
                                <label className="relative block">
                                    <input
                                        className="placeholder:italic placeholder:text-slate-400 block bg-black w-full border border-2 rounded-md py-2 pl-3 pr-9 shadow-sm focus:outline-none focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                        placeholder="Enter your email"
                                        type="text"
                                        name="search"
                                    />
                                    <a href="#">
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>
                                    </span>
                                    </a>
                                    </label>


                                </form>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Support</h2>
                        <ul className=" text-white text-sm font-light">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Jl. Pahlawan</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">rivalfahrezi27@gmail.com</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">089519235409</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Account</h2>
                        <ul className="text-white font-light text-sm">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">My Account</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Login / Register</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Cart</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Whistlist</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Quick Link</h2>
                        <ul className="text-white text-sm font-light">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">FAQ</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Download App</h2>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-gray-400  text-xs font-light">Save 3$ with App New User Only</a>
                            </li>
                            <li className="mb-4">
                                <div className="grid grid-rows-3 grid-flow-col gap-4">
                                    <div className="row-span-3 ... bg-white"><a href="#"><img src="../../../../public/image/qrcode.png" alt="QRCode" className="max-w-full"/></a></div>
                                    <div className="col-span-2 ... bg-red-600"><a href="#"><img src="../../public/image/google-play-store.png" alt="GPlayStore" /></a></div>
                                    <div className="col-span-2  ... bg-orange-400"><a href="#"><img src="../../public/asset/app-store.png" alt="AppStore" /></a></div>
                                </div>
                            </li>
                            <li className="text-white flex">
                                <span className="[&>svg]:h-5 [&>svg]:w-5 pr-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 320 512">
                                        <path
                                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                    </svg>
                                </span>
                                <span className="[&>svg]:h-5 [&>svg]:w-5 pr-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512">
                                        <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </span>
                                    <span className="[&>svg]:h-5 [&>svg]:w-5 pr-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 512 512">
                                            <path
                                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                        </svg>
                                    </span>
                                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 448 512">
                                            <path
                                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                        </svg>
                                    </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="pb-3 border-gray-800" />
                <div className="w-full flex justify-center">
                    <p className="text-white text-gray-500 pb-5">© Copyright Rimel 2024. All right reserved</p>
                </div>
            </div>
        </footer>
    )
}