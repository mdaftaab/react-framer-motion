import { useRef } from "react"
import Card from "./Card"


function Forntground() {

    const ref = useRef(null);

    const data = [
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            fileSize:'4mb',
            close:false,
            tag: {
                isOpen:true,
                tagTitle: "Download Now",
                tagColor:"green"
            }
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            fileSize:'2mb',
            close:false,
            tag: {
                isOpen:true,
                tagTitle: "Download Now",
                tagColor:"green"
            }
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            fileSize:'3mb',
            close:true,
            tag: {
                isOpen:true,
                tagTitle: "Close",
                tagColor:"red"
            }
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            fileSize:'4mb',
            close:false,
            tag: {
                isOpen:true,
                tagTitle: "Download Now",
                tagColor:'green'
            }
        }
    ]

    return (
        <div ref={ref} className="fixed top-0 lef-0 z-[3] w-full h-full flex gap-6 flex-wrap m-5">
            {
                data.map((item, index)=>(
                    <Card key={index} data={item} reference={ref}/>
                ))
            }
        </div>
    )
}

export default Forntground