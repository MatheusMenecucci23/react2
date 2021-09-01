import { TextField, Button } from "@material-ui/core";
import React,{useState} from "react";

function DadosUsuario({aoEnviar}) {
  //controlando o formulário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      aoEnviar({email, senha})
    }}>
      <TextField
      value={email}
      onChange={(event)=>{
        setEmail(event.target.value)
      }}
        id="email"
        label="Email"
        type="email"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      ></TextField>
      <TextField
      value={senha}
      onChange={(event)=>{
        setSenha(event.target.value)
      }}
        id="senha"
        label="Senha"
        type="password"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
