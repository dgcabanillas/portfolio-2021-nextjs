import React from 'react';
import styled from '@emotion/styled';

const SkillContainer = styled.div`
    width: 90%;
    margin-bottom: 30px;
    padding: 10px;
    box-shadow: -4px -4px 7px #ffffff50, 3px 3px 5px rgb(94 104 121 / 29%);
    display: flex;
    flex-direction: column;
    & > .title {
        min-height: 70px;
        display: flex;
        & > h1 {
            text-align: center;
            font-size: 1.8rem;
            font-weight: 500;
            margin: auto;
        }
    }
    & > p {
        text-align: center;
        min-height: 60px;
    }

    & > .skill-icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        & .skill-icon {
            width: 90px;
            height: 90px;
            margin: 10px;
            overflow: hidden;
            border-radius: 50%;
            position: relative;
            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                padding: 10px;
            }
            & > div {
                position: absolute;
                top: 76%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                height: 100%;
                display: flex;
                z-index: 100;
                & p {
                    width: 100%;
                    line-height: 25px;
                    margin: auto;
                    background-color: rgba(0, 0, 0, .65);
                    text-align: center;
                    color: white;
                    font-size: 1rem;
                    font-weight: 600;
                }
            }
        }
    }

    @media (min-width: 800px) {
        width: 30%;
        & > p {
            min-height: 110px;
        }
    }
`;

const KnowledgeItem = ({ item }) => {
    return (
        <SkillContainer>
            <div className="title">
                <h1>{ item.title }</h1>
            </div>
            <p>{ item.description }</p>
            <div className="skill-icons">
                {
                    item.icons.map(
                        (icon, index) => 
                        <div key={index} className="skill-icon">
                            <img src={icon.image} alt={icon.label}/>
                            <div>
                                <p>{ icon.label }</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </SkillContainer>
    )
}

export default KnowledgeItem
