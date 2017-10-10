import React from 'react'
import StudentItem from './StudentItem'

// class StudentList extends React.Component {
//   render() {
//     /// A list of students should get passed in and then we should display them
//     const studentItems = this.props.students.map((student, index) => {
//       return <StudentItem key={index} student={student}/>
//     })
//
//     return (
//       <ul>
//         {studentItems}
//       </ul>
//     )
//   }
// }



const StudentList = (props) => {
  console.log(props)
  const studentItems = props.students.map((student, index) => {
        return <StudentItem handleRemove={props.onRemove} key={index} student={student}/>
      })
  return (
    <ul>
      {studentItems}
    </ul>
  )
}

export default StudentList
