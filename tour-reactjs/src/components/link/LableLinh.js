// import { useEffect, useState } from "react"
// import EventEmitter from "../../utils/EventEmitter"
// export default function LableLinh(){

//     const [logs, setLogs] = useState(["ssss","eee"])

//     useEffect(()=>{
//         const onNewLog = (eventData)=>{
//             setLogs(prev=>({
//                 ...prev, eventData
//             }))
//         }

//         const listener = EventEmitter.addListener('newLogs',onNewLog )
//         return () =>{
//             listener.remove()
//         }
//     })
//     return(
//         <div>
//             {logs.map(log =>(
//                 <div key={log}>{log}</div>
//             ))}
//         </div>
//     )
// }