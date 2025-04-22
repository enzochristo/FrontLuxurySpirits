import styled from "styled-components";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import axios from 'axios';
import { useToast } from "@/hooks/use-toast";
import { set } from "date-fns";



export function Header() {
  const { toast } = useToast();

  const [cep,SetCep] = useState("")

  // pegando o campo inputado. Assim que devemos fazer, poderiamos ter feito ultilizando um id, por exemplo
 


  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    console.log("Pesquisar executado");
  }
  
  function handleCEP(e: React.FormEvent) {
    // sempre que usarmos form, temos que usar esse atributo, pois assim temos um maior controle 
    // do que está acontecendo no react, quanto ao get, pois o form iria fazer isso de forma automaica.
    // por isso, ele precisa receber isso como variavel
    e.preventDefault();
   
    if(cep.replace(/\D/g, '').length !== 8){
      toast({
        title: "CEP inválido",
        description: "O CEP deve conter exatamente 8 números.",
      });
      return;
    }

    const clean = cep.replace(/\D/g, '')

  axios
  .get(`https://viacep.com.br/ws/${clean}/json/`)
  .then((response) => {
    const { logradouro, localidade, uf } = response.data;
    toast({
      title: "Endereço encontrado",
      description: `${logradouro}, ${localidade} – ${uf}`,
    });
  })
  .catch(() => {
    toast({
      title: "Falha na busca",
      description: "Tente novamente.",
    });
  });
    SetCep("")
  }

    return (
        <Wrapper>
            <TopBackGroundWrapper>

            <Topdiv>
                <form className="CEP-rec" onSubmit={handleCEP}>
                    <img className="logo-LS" src="/assets/logo.png" alt="Logo LS" />
                    <img className="logo-CEP" src="/assets/location-logo.png" alt="Logo de Localização" />
                    <input type="text" placeholder="Digite seu CEP" value={cep} onChange={e => SetCep(e.target.value)} />
                    </form>
                <nav className="nav-links">
                    <Link to={""}> <img src="/assets/baloon-logo.svg" alt="" className="logo" /> </Link>
                    {/* <Link to={""}> <p>Fale Conosco</p> </Link> */}
                    <Link to={""} ><img src="/assets/user-logo.svg" alt="" className="logo" /></Link>
                    {/* <Link to={""}> <p>Login</p> </Link> */}
                    <Link to={""}>  <img src="/assets/cart-logo.svg" alt="" className="logo" /> </Link>
                    </nav>
            </Topdiv>
            </TopBackGroundWrapper>

            <BottomBackGroundWrapper>
            <BottomDiv>
                <SearchForm onSubmit={handleSearch}>
                    <input className="input-search" type="text" placeholder="Pesquisar"/>
                    <button><img className="search-logo" src="/assets/search-logo.png" alt=""/></button>
                </SearchForm>
                <NavBottom>
                    <Link to={""}>Vinho</Link>
                    <Link to={""}>Whisky</Link>
                    <Link to={""}>Cerveja</Link>
                    <Link to={""}>Vodka</Link>
                </NavBottom>
            </BottomDiv>
            </BottomBackGroundWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    margin:0;
    padding:0;
   display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopBackGroundWrapper = styled.div `
    background-color: black
`;

const BottomBackGroundWrapper = styled.div `
    background-color: #1A1919
`;


const Topdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

    .logo {
        width: 2rem;
        height: 2rem;
        fill: white;
        transition: fill 0.2s;
    }

    a:hover .icon {
        fill: #D8A55C;
    }

  .CEP-rec {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .CEP-rec input {
    margin-left: 1rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    width: 12rem;
  }

  .input-search {
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  color: white;
  width: 15rem;
  padding-left: 1rem;
}


  .logo-LS {
    width: 5rem;
  }

  .logo-CEP {
    width: 2rem;
    margin-left:2rem;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    text-decoration: none;
    padding-right: 0.5rem;
  }

  .nav-links p,
  .nav-links a {
    font-family: "Palatino Linotype", serif;
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav-links p:hover,
  .nav-links a:hover {
    color: #D8A55C;
    cursor: pointer;
  }
`;


const BottomDiv = styled.div `
display:flex;
flex-direction: row;
align-items: center;
justify-content:start;
`;



const SearchForm = styled.form `

display:Flex;
flex-direction: row;
align-items:center;
justify-content: space-around;
background-color: #513821;
min-height: 4rem;

.input-search {
  background: transparent;
  border: none;
  outline: none;
  color: white;
  width: 15rem;
  padding-left: 1rem;
}


  .search-logo{
    width: 1.3rem;
    margin-right:1rem;
    }

  .button {
  background: none;
  border: none;
  cursor: pointer;
  
}

    `;
    
    const NavBottom = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8rem;
    padding-left: 13.3rem;
  
    a {
      font-family: "Palatino Linotype", serif;
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
      transition: color 0.2s;
    }
  
    a:hover {
      color: #D8A55C;
      cursor: pointer;
    }
  `;
  