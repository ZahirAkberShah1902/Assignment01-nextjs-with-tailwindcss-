
export default async function About(){
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })  
  return(
  <div>
  <h1  className="border-4 border-stone-700 m-40 p-5 text-pink-600 font-bold text-center">About Page</h1>
  </div>
    )
  }