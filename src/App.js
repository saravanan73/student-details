
import { useState } from 'react';
import './App.css';
import './static/css/style.scss'

function App() {
  const [studentAllList, setStudentAllList] = useState([])
  const [studentDetail, setStudentDetail] = useState({})
  const handleChange=(e)=>{
    setStudentDetail({...studentDetail,[e.target.name]:e.target.value})
  }
  const getStudentDetail=(e)=>{
    e.preventDefault()
    setStudentAllList([...studentAllList,{...studentDetail}])
    studentDetail.rollNo=""
    studentDetail.userName=""
    console.log(studentAllList)
  }

  return (
    <div className="App">
      <form className='form_tag' onSubmit={getStudentDetail} >
        <h2>Student Detail</h2>
        <label className='rollNo_label'>
          <input type="text"
            placeholder='Enter Student Roll No' 
            name="rollNo"
            onChange={handleChange}
            value={studentDetail.rollNo} 
            ></input>
        </label>
        <label className='userename'>

          <input type="text"  
            placeholder='Enter Student User Name'  
            name="userName"
            value={studentDetail.userName}
            onChange={handleChange}
            ></input>
        </label>
          <button  type='submit' 
          className='submit_btn'
            >submit
          </button>
      </form>
      {studentAllList.length > 0 ?
      <div className='table_list'>
      
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Student Name</th>
          </tr>
        </thead>
        <tbody>
            {studentAllList.map(item => {
                return(<tr><td>{item.rollNo}</td>
                <td>{item.userName}</td></tr>
                )
              }
              )}
        </tbody>
        </table> 
      </div>:""}
    </div>
  );
}

export default App;
