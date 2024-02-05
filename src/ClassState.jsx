import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      loading: false,
      value: '',
    }
  }

  // UNSAFE_componentWillMount(){
  //   console.log("componentWillMount")
  // }
  // componentDidMount(){
  //   console.log("componentDidMount")
  // }

  componentDidUpdate() {
    console.log('actualizacion')

    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo validacion")

        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false })
        }

        console.log("Terminando validacion")
      }, 3000)
    }
  }

  render() {
    const { error, loading, value } = this.state

    return (
      <div className="card">
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escribe el código de seguridad</p>

        {(error && !loading) && (
          <p>Error: el código es incorrecto</p>
        )}

        {loading && (
          <Loading />
        )}

        <input
          value={value}
          placeholder="Código de seguridad"
          onChange={(e) => {
            this.setState({ value: e.target.value })
          }} />

        <button onClick={() => this.setState({ loading: true })}>Comprobar</button>
      </div>
    )
  }
}

export { ClassState }