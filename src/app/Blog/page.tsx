// Blog PAge 
// Loading page

export default async function Blog(){
    await new Promise((resolve) => {
        setTimeout(resolve,2000);
})
    return(
        <div className="bg-pink-300 h-screen">
            <h1 className="text-gray-700 text-center hover:ring-offset-blue-900 m-g p-2 font-semibold "><b><u><i>Blog</i></u></b></h1>
            <p className="text-center text-orange-900 font-serif m-5 p-5"><b>As we move further into 2024, the landscape of web development continues to evolve at an astonishing pace. New technologies, frameworks, and user expectations are reshaping how developers build websites and applications.</b></p>
        </div>
)
}