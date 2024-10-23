

export default function Home(){
  return(
<div>

<h1 className="border-4 border-stone-700 m-40 p-5 text-pink-600 font-bold text-center">Hello gentleman! its my first project at nextjs using tailwind</h1>
</div>
  )
}

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

export default function Contact(){
    return(
  <div>
  <h1  className="border-4 border-stone-700 m-40 p-5 text-pink-600 font-bold text-center">Contact Page</h1>
  </div>
    )
  }

export default function Details(){
    return(
  <div>
  <h1  className="border-4 border-stone-700 m-40 p-5 text-pink-600 font-bold text-center">For further details</h1>
  </div>
    )
  }import {error} from "console"

export default function Job(){
  throw new Error ('JOb page not yet implemented')
  return(
  <div>
  <h1>Job Page</h1>
  </div>
    )
  }
//nested function: job/programming
export default function Programming(){
    return(
  <div>
  <h1  className="border-4 border-stone-700 m-40 p-5 text-pink-600 font-bold text-center">Programming Page</h1>
  </div>
    )
  }
