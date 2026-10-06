import Answares from './Answares'

const  QuestionAnswer=({item,index}) =>{
    return(
        <>
         {item.type =='q' ?( 
          <li key={index} className='flex justify-start p-2'>
<div className='dark:bg-blue-600 bg-violet-700 text-white p-3 rounded-2xl rounded-bl-none max-w-[80%] shadow-sm'>
                <Answares ans={item.Text} totalResult={1} index={index} />
              </div>

              </li>) : item.type == 'a'?(
              <li key={index} className='flex justify-end p-2' >
<div className='dark:bg-gray-800 bg-violet-200 dark:text-white text-slate-900 p-3 rounded-2xl rounded-br-none max-w-[80%] shadow-sm'>
          <Answares ans={item.Anstext} totalResult={1} index={index} />
          </div>
              </li>):null}
        </>
    )
}
export default  QuestionAnswer;