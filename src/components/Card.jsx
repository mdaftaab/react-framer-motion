import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion"


function Card({ data, reference }) {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1} dragTransition={{ bounceStiffness:500, bounceDamping: 30 }} className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/50 rounded-[30px] px-8 py-10 overflow-hidden text-white">
                <FaRegFileAlt />
                <p className="text-sm leading-tight mt-5 font-semibold">
                    {data.desc}
                </p>
                <div className="footer absolute bottom-0 w-full left-0">
                    <div className="flex items-center justify-between py-3 mb-3 px-8">
                        <h5>{data.fileSize}</h5>
                        <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                            {
                                data.close ? <AiOutlineClose size=".9em" color="#fff" /> : <LuDownload size=".7em" color="#fff" />
                            }
                        </span>
                    </div>
                    {
                        data.tag.isOpen && (
                        <div className={`tag w-full p-4 ${data.tag.tagColor === "red" ? "bg-red-500" : "bg-green-500"} flex items-center justify-center`}>
                            <h3 className="text-sm font-semibold">
                                {data.tag.tagTitle}
                            </h3>
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    )
}

export default Card