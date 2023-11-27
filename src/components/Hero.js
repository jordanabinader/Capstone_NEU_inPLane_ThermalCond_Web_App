import React from 'react'
import ScrollToTest from './ScrollToTest'

const Hero = () => {
  return (
    <div className="bg-grey h-screen">
        <div className="relative isolate px-6 pt-14 lg:px-10">
            {/* Background shapes */}
            <div className="absolute inset-x-0 -top-0 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8080] to-[#65656d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
            </div>

            {/* Main content area */}
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Democratizing In-Plane Thermal Conductivity</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">with a low-cost device and using the Ångström method for reliable and repeatable measurement.</p>
                    
                    {/* Links and ScrollToTest */}
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <ScrollToTest />
                        <a href="https://pubmed.ncbi.nlm.nih.gov/36725582/#:~:text=Abstract" className="text-sm font-semibold leading-6 text-gray-900">About the Ångström method <span aria-hidden="true">→</span></a>
                    </div>
                    {/* Image under the links */}
                    <div className="mt-20">
                        <img
                            className="mx-auto max-h-12 w-full object-contain lg:col-span-1"
                            src="dapsLogo.png"
                            alt="Daps Logo"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff8080] to-[#65656d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                {/* Background shape styles omitted for brevity */}
            </div>
        </div>
    </div>
  )
}

export default Hero
