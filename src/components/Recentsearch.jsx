function Recentsearch({recenthistory,setRecenthistory,setHistorycheck}) {
    const clearhistory=()=>{
  localStorage.clear();
  setRecenthistory([])
}
const clearselectedhistory =(selectitem)=>{
let history=JSON.parse(localStorage.getItem('history'))
history=history.filter((item)=>{
    if(item != selectitem){
        return item
    }
})
setRecenthistory(history)
localStorage.setItem('history',JSON.stringify(history))
console.log(history,selectitem)
}
return(
    <>
<div className='col-span-1 dark:bg-zinc-800 bg-violet-100 dark:text-white text-slate-900'>            <h1 className='text-xl dark:text-white text-slate-900'>Recent Search
                <button onClick={clearhistory}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f6f2f2"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></button>
            </h1>
            <ul className='text-left overflow-auto text-sm' >
                {
                    recenthistory && recenthistory.map((item,index) =>
                        <div key={index} className="flex justify-between pr-3 py-2">
                        <li key = {index} onClick={() => { setHistorycheck(item), askquestion(); }} className='p-1 pl-5 truncate dark:text-zinc-400 text-slate-900 cursor-pointer dark:hover:bg-zinc-700 hover:bg-violet-200'>{item}</li>
                     <button onClick={()=>clearselectedhistory(item)} className="cursor-pointer bg-zinc-800"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f6f2f2"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                                </button>
                                </div>
                    )       
                }
            </ul>
        </div>
    </>
)
}
export default Recentsearch;