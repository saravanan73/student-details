
import { useState } from 'react';
import './App.css';
import './static/css/style.scss'

function App() {
  const [studentDetail, setStudentDetail] = useState( [{
    rollNo:123456,
    userName:"Rajappa"
},
{
    rollNo:123457,
    userName:"Siva"
},
{
    rollNo:123456,
    userName:"Raja"
},
{
    rollNo:123458,
    userName:"Sasi"
},
{
  rollNo:123457,
  userName:"Siva"
},
{
  rollNo:123456,
  userName:"Raja"
},
{
  rollNo:123458,
  userName:"Sasi"
},])
  const getStudentDetail=(e)=>{
    e.preventDefault()
  }

  return (
    <div className="App">
      <form className='form_tag'>
        <h2>Student Detail</h2>
        <label className='rollNo_label'>
          <input type="text"
            placeholder='Enter Student Roll No' 
            name="rollNo"
            value={studentDetail.rollNo} 
            ></input>
        </label>
        <label className='userename'>
          <input type="text"  
            placeholder='Enter Student User Name'  
            name="username"
            value={studentDetail.useName}></input>
        </label>
          <button  type='submit' 
          className='submit_btn'
            onChange={(e)=>{setStudentDetail(e.target.value)}}
            onClick={getStudentDetail}
            >submit
          </button>
      </form>
      <div className='table_list'>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Student Name</th>
          </tr>
        </thead>
        <tbody>
            {studentDetail.map(item => {
                return(<tr><td>{item.rollNo}</td>
                <td>{item.userName}</td></tr>
                )
              }
              )}
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
