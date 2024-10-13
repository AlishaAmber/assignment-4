import Image from "next/image";
import Link from "next/link";

export default function Responsive() {
  return (
    <section className="py-10">
        <div className = "ParentContainer mx-auto">
            <div className = "ChildContainer w-full max-w-lg mx-auto mb-10 bg-red-100">
                <h1 className = "italic text-center font-bold text-xl underline">Trendings</h1>
            </div>
            <div className = "grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-red-100">
                {Posts()}
                {Posts01()}
                {Posts02()}
                {Posts03()}
                {Posts04()}
                {Posts05()}
            </div>
        </div>
    </section>
    
  );
}
function Posts (){
    return(
        <div className = "Items">
            <div className = "Images">
                <Image src="/blog6.jpeg" alt="img" width={210} height={210} className= "scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/> 
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
                <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">Code Your Way to Success:{""}</p>
                <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Want to learn coding but don’t know where to start? This beginner-friendly...{""}</p>
                <Link href = "/code">
                <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
                </Link>
            </div>
        </div>
    );
}
function Posts01(){
    return (
        <div className = "Items">
            <div className = "Images">
                <Image src="/blog5.jpeg" alt="img" width={210} height={210} className=" scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">Healthy Eating, Mindful Living{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Mindful eating encourages us to savor each bite, be present, and listen to our bodies. This blog explains...{""}</p>
            <Link href="/Food">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts02 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src= "/blog1.jpeg"alt="dimmer" width={210} height={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">Serenity in Mindfulness:{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px3">In an age of constant connectivity, mental health often takes a backseat. This blog ...{""}</p>
            <Link href="/Blog">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts03 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src="/blog3.jpeg"alt="img" width={210} height={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">The Electric Revolution:{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">As the world shifts towards sustainability, electric cars have gained immense popularity. This post delves ""</p>
            <Link href="/Electric_car">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts04 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src="/blog2.jpeg" alt="village name" width={210} height={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">A Journey into Simplicity and Nature:{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Village life is a serene escape into simplicity and natural beauty...{""}</p>
            <Link href="/Life">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1;">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts05 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src="/blog4.jpeg" alt="img" width={210} height={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">Simplicity in Design:{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Less is more—minimalist design focuses on clean lines, neutral colors, and simple but elegant furniture. Learn how to make the most of this...{""}</p>
            <Link href="/work">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 padding-top: 0px;">Read More</button>
            </Link>
            </div>
        </div>
      
    );
}