import aboutImg from '../assets/about.png'
export default function About() {

    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={aboutImg}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-serif font-bold md:text-4xl dark:text-white">
                            Customers are our first priority 
                        </h2>
                        <p className="mt-6 text-gray-600 dark:text-white">
                          We are committed to serve you our best services. 
                          Just order your desire products. We will knock your door within 24 hours to delivery the products.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-white">
                          We provide cash on delivery. Apart from that, you can use any online payment system to pay.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}