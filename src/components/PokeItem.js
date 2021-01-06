import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// const ItemStyle = styled.div`
// 	color: black;
// 	display: inline-table;
// 	margin: 5px;
// 	padding: 5px 5px;
// 	border: 3px solid;
// 	border-color: red;
// 	background: lightyellow;
// 	border-radius: 25px;
// 	font-weight: bold;
// 	text-align: center;
// 	flex-flow: column;
// `;

const PokeName = styled.p`
    text-transform: capitalize;
    `;

const PokeItem = (props) => {
    const [imgUrl, setImgUrl] = useState();
    const [id, setId] = useState();
    const name = props.name;

    useEffect(() => {
        axios.get(props.url).then((resp) => {
            setImgUrl(resp.data.sprites.front_shiny);
            setId(resp.data.id);
        });
    }, [props.url]);

    return (
        <p>
            <a href={`pokemon/${id}`}>
                <img src={imgUrl} alt={name}/>
            </a>
            <PokeName>{name}</PokeName>
        </p>
    );
};

export default PokeItem;