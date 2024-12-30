const Header = (props) => {
    return (   
      <h1>{props.course}</h1>
    )
  }
  const Part = (props) => {
    return (
      <p>{props.props.name} {props.props.exercises}</p>
    )
  }
  const Content = (props) => {
    return (
    <div>
      <Part props={props.props[0]}/>
      <Part props={props.props[1]}/>
      <Part props={props.props[2]}/>
    </div>
    )
  }

  const Total = (props) => {
    return(
      <p>Number of exercises {props.props.reduce((accul, current) => accul + current.exercises, 0)}</p>
    )
  }



  const App = () => {
    const course = {
      name: 'Half Stack application development',
      part: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
    console.log(course.part)
    return (
      <div>
        <Header course={course.name} />
        <Content props={course.part} />
        <Total props={course.part} />
      </div>
    )
  }

export default App