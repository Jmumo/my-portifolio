import React,{useEffect, useState} from 'react'
import sanityClient from '../Client.js'




function Project() {
  
    const [projectData,setProjectData] = useState(null)

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            hostlink,
            github,
             mainImage{
               asset->{
                   _id,
                   url
               },
               alt
           },
            tags
        }`).then((data)=>setProjectData(data))
        
       
        .catch(console.error);
    },[])

    

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my projects</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project,index)=>(
                    <article className="relative rounded-lg shadow-xl bg-white p-14">
                        <h3 className="text-gray-800  text-3xl font-bold mb-2 hover:text-red-800">
                            <a href={`${project.hostlink}`}
                            alt={project.title}
                            target ="_blank"
                            rel="noopener noreferrer"
                            > {project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold ">
                                 Finished on:{" "}
                                </strong>
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className ="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <div className="mt-3 mb-3">
                            <img  
                            src={project.mainImage.asset.url}
                            alt={project.mainImage.alt}

                            className="rounded object-contain"
                            // style={{
                            //   maxHeight:"300px",
                            //   maxWidth:"300px",
                            // }}
                            />
                           
                             </div>  

                         
                           { project.hostlink && <a href={`${project.hostlink}`} rel="noopener noreferrer" target="_blank" className="text-red-500  mt-3font-bold hover:underline hover:text-red-400 ">
                            View Project Online:{" "}
                            <span role = "img" aria-label="right pointer"></span>
                            </a>
                           }
 
                            <a href={`${project.github}`} rel="noopener noreferrer" target="_blank" className="text-red-500  mt-3font-bold hover:underline hover:text-red-400 ">
                            View Project Github:{" "}
                            <span role = "img" aria-label="right pointer"></span>
                            </a>
                            <p className="my-6 text-md text-gray-800 leading-relaxed prose">{project.description}</p>
                            
                        </div>

                      
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Project
