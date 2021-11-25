import Link from 'next/link';

export default function PageNotFound() {
  return (
    <>
      <div className="h-screen w-screen border-box sm:pt-20 pt-16 sm:pb-16 pb-8 lg:px-24 md:px-16 sm:px-8 px-8 transition-all duration-500 linear bg-notfound">
        <div className="empty-2-3">
          <div className="container mx-auto flex items-center justify-center flex-col">
            <img className="sm:w-auto w-5/6 sm:mb-16 mb-12 object-cover object-center" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState2/Empty-2-3.png" alt="" />                 
            <div className="text-center w-full">
              <h1 className="title-text text-3xl mb-5 font-semibold text-white">
                Opss! Something Missing
              </h1>
              <p className="caption-text mb-7 lg:mb-16 tracking-wide leading-7">
                The page you’re looking for isn’t found. We <br className="sm:block hidden" /> suggest you Back to Homepage.
              </p>         
              <div className="flex justify-center">
                <Link href="/">
                  <button className="btn-back inline-flex font-semibold text-white lg:text-lg lg:leading-7 py-3 px-4 lg:py-4 lg:px-6 rounded-xl focus:outline-none">
                    Back to Homepage
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
