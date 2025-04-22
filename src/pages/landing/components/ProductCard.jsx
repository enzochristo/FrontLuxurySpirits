import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingCart, Star, Bookmark } from "lucide-react"
import { set } from "date-fns";
import axios from "axios";



export function ProductCard(nome,volume){
    const [click,setClick] = useState(false);
    const [image,setImg] = useState("/assets/clicked-saved.png");
    const [quantidade, setQuantidade] = useState(1);
    const [stock, setStock] = useState(null);
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        const url = `products/${nome}/${volume}`;
      
        axios.get(url).then((res) => {
          setStock(res.data.stock);
        });
      }, []);
    

      useEffect(() => {
        const url = `products/${nome}`;
      
        axios.get(url).then((res) => {
            setImageUrl(res.data.image);
        });
      }, []);
    

    const alternate = () => {
        setClick(!click);
        if (click) {
          setImg("/assets/clicked-saved.png");
        } else {
          setImg("/assets/non-clicked-saved.png");
        }
      };

    const soma = () =>{ 
        if (quantidade < stock) {
        setQuantidade(quantidade + 1)
      } else {
        toast({ description: "Estoque insuficiente" })
      }}
    
    const subtrai = () =>{ 
        if (quantidade >1) {
        setQuantidade(quantidade - 1)}}
     

    // Não precisa de useffect : ele é interessante quando:
    // Queremos fazer algo depois de renderizar, então queremos fazer uma requisição
    // Isso pode acontecer depois de renderizar, então usamos o use effect, para controlarmos o tipo de requisição
    // e quando ela ocorrerá
    // →  É algo que não está diretamente ligado à renderização da interface, como:
    // → Buscar dados de uma API
    // → Salvar no localStorage
    // → Adicionar um eventListener

    // useState → muda o que é exibido
    // useEffect → executa efeitos colaterais depois da renderização

    return (
        <>
            <Wrapp>
              <DivDoubleIcon>
                <div className="div-stars">
                  <p style={{ fontFamily: "Palatino Linotype, serif" }}>4.8</p>
                  <Star />
                </div>
                <button onClick={alternate}>
                  <img src={image} alt="" />
                </button>
              </DivDoubleIcon>
              <img src={src} alt="" />
              <h3 className="h3-price"></h3>
              <Counter>

                <img src="/assets/quadrado.png" alt=""><button onClick={subtrai}><img src="/assets/minus-icon.png" alt="minus" /></button></img>
                <img src="/assets/quadrado-preto.png" alt="">
                    <p style={{ fontFamily: "Palatino Linotype, serif" }}>{quantidade}</p>
                </img>
                <img src="/assets/quadrado.png" alt=""><button onClick={soma}><img src="/assets/plus-icon.png" alt="plus" /></button></img>
              </Counter>

              <BuyDiv>
                <a href="">
                    <h3>Comprar</h3>
                </a>
                <div style={{
                width: '1px',
                height: '60%',
                backgroundColor: 'white',
                margin: '0 0.5rem'
            }} />

            <button><img src="assets/add-cart-logo.png" alt="" /></button>
              </BuyDiv>
            </Wrapp>
        </>
    );
}

const Wrapp = styled.div `
    border : rgba(37,36,36,.9),solid;
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

const DivDoubleIcon = styled.div `
    display:flex;
    justify-content:space-between;

    .div-stars:
    display:flex;
    gap:.3rem;
`;

const Counter = styled.div `
    display:flex;
    justify-content: space-between;

    .
`;

const BuyDiv = styled.div `
    display: flex;
    justfy-content: space-between
    background-color: #625834;
     padding: 0.5rem;
`;
