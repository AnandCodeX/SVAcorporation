import Modal from "react-modal"
import React,{useState} from "react"
Modal.setAppElement('#root')
export const Team = (props) => {

  const [ModalIsOpen,setModalIsOpen]=useState(false)
  
  let modal =()=>{
    setModalIsOpen(true)
  }

  
  
  return (



    <div id='team' className='text-center'>
      <div className='container'>

        <Modal isOpen={ModalIsOpen} onRequestClose={()=>setModalIsOpen(false)}
         style={{overlay:{background:'grey'},content:{marginTop:'50px'}}}>
          <img src='img/team/1.jpg'/>
          
          {/* <hr style={content:{height:'2px',border-width:'0',color:'gray',background-color:'gray'}}/> */}
          

          <img src='img/team/2.jpg'/>
          <br/>
          <img src='img/team/3.jpg'/> 
          
        </Modal>
       
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team' >
                  <div className='thumbnail' onClick={modal}>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    {console.log(d.img)}
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
