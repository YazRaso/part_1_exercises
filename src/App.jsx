const Header = (props) => {
    return (   
      <h1>{props.course}</h1>
    )
  }
  const Part = (props) => {
    return (
      <p>{props.props.part} {props.props.exercise}</p>
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
      <p>Number of exercises {props.props.reduce((accul, current) => accul + current.exercise, 0)}</p>
    )
  }



  const App = () => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const arr = [{part: part1, exercise: exercises1}, {part: part2, exercise: exercises2}, {part: part3, exercise: exercises3}]
    const course = 'Half Stack application development'
    return (
      <div>
        <Header course={course} />
        <Content props={arr} />
        <Total props={arr} />
      </div>
    )
  }

export default App