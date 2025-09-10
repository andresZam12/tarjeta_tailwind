export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 md:p-10">
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
        
       <section className="bg-white rounded-xl shadow-lg p-6 md:col-span-2">
         <div className="flex flex-col md:flex-row gap-6">

           <div className="flex-shrink-0">
             <img src="lampa.jpg" className="h-48 w-full md:w-48 object-cover rounded-lg" alt="Plant extinction" />
           </div>
    
           <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
              Green plants are going to Extinct about 500 times faster than they should, Study finds.
              </h2>
              <p className="text-sm  text-gray-600">
             If you are the sort of person who just cannot keep a plant alive, you are not alone according to a new study published June 10 in the journal Nature.
              </p>
              <img src="hom1.jpg" className="h-15 w-15" alt="Coffee icon" />
               <h4 className="font-semibold text-gray-600">Alexander parkinson</h4>
            <   p className="text-sm text-gray-500"> Jun 20, 2019</p>
            </div>
          </div>
        </section>


        <aside className="bg-white rounded-xl shadow-lg p-2 flex flex-col gap-2 md:col-span-1 w-40 text-xs mx-10">

          <button className="text-gray-600 hover:text-blue-600 text-left py-2 px-3 rounded-lg hover:bg-blue-50 transition duration-200">🌎Global</button>
          <button className="text-gray-600 hover:text-blue-600 text-left py-2 px-3 rounded-lg hover:bg-blue-50 transition duration-200">🕴🏼Business</button>
          <button className="text-gray-600 hover:text-blue-600 text-left py-2 px-3 rounded-lg hover:bg-blue-50 transition duration-200">📺Entertainment</button>
          <button className="text-blue-600 font-semibold text-left py-2 px-3 rounded-lg bg-blue-100">⚽Sports</button>
          <button className="text-gray-600 hover:text-blue-600 text-left py-2 px-3 rounded-lg hover:bg-blue-50 transition duration-200">♥ Health</button>
        </aside>

      
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto w-170">
        <section className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center">
          <div className="mb-3">
          <img src="cafe.jpg" className="h-60 w-70" alt="Coffee icon" />
            </div>
            <h3 className="font-semibold text-gray-800">How to make the perfect morning coffee, according to the Science</h3>
            <img src="fmuje1.jpg" className="h-10 w-10" alt="Coffee icon" />
        </section>

          <section className="bg-white rounded-xl shadow-lg p-5 h-40 w-90">
            <h3 className="font-semibold text-gray-400 mb-3">Search for article</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for articles"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              <span className="px-2.5 py-1 bg-gray-400 text-white rounded-lg text-xs">#Politics</span>
              <span className="px-2.5 py-1 bg-gray-400 text-white rounded-lg text-xs">#Science</span>
              <span className="px-2.5 py-1 bg-gray-400 text-white rounded-lg text-xs">#Movies</span>
              <span className="px-2.5 py-1 bg-gray-400 text-white rounded-lg text-xs">#Technology</span>
            </div>
          </section>
        </div>


        <section className="bg-white rounded-xl shadow-lg p-5 flex gap-4 items-center md:col-span-1 h-40 mr-30">
          <div className=" bg-gray-300 rounded-full flex items-center justify-center">
            <img src="edifi.jpg" className="h-35 w-30 rounded-2xl" alt="Author avatar" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">An Inspiring Short film</h4>
            <p className="text-sm text-gray-500"> 👁 80.989</p>
          </div>
        </section>

        <div className="bg-white rounded-xl shadow-lg p-6 ">
 
        <div className="flex items-center gap-4 mb-6">
          <img src="cara.jpg" className="h-40 w-30 rounded-2xl" alt="Author avatar" />
          <div className="w-0.5 h-10 bg-gray-300 mr-2">
        </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Alex Morrison</h3>
             <p className="text-sm text-gray-500">Senior Journalist</p>
          </div>
        </div>

  
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">34</p>
              <p className="text-xs text-gray-500">Articles</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">980</p>
              <p className="text-xs text-gray-500">Reference</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">8.9</p>
              <p className="text-xs text-gray-500">Rating</p>
            </div>
          </div>


            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-200">
                Chat
              </button>
              <button className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition duration-200">
                Follow
              </button>
            </div>
          </div>

      </main>
    </div>
  );
}