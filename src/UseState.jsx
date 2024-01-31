import React from "react"

const SECURITY_CODE = 'paradigma'

const UseState = ({ name }) => {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  })

  const handleChange = (event) => {
    setState({
      ...state,
      value: event.target.value,
    });
    console.log(event.target.value);
  }

  React.useEffect(() => {
    console.log('Empezando el efecto');
    if (state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación xd");
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false
          });
        }
        console.log("Terminando la validación");
      }, 1500);
    }
    console.log('Terminando el efecto');
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>

        {(state.error && !state.loading) && (
          <p>El código es es incorrecto</p>
        )}

        {state.loading && (
          <p>Cargando ...</p>
        )}

        <input
          type='text'
          placeholder='código de seguridad'
          value={state.value}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            setState({
              ...state,
              loading: true
            });
          }}
        >Comprobar</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>¿Seguro que quieres eliminar UseState?</p>
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true,
            })
          }}
        >Si, eliminar</button>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              value: '',
            })
          }}
        >No, volver</button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con exito</p>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: '',
            })
          }}
        >Recuperar UseState</button>
      </React.Fragment>
    )
  }
}

export { UseState }