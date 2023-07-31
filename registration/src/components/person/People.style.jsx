import { styled } from "styled-components";

export const StyledPeople = styled.div`
    display:flex;

    ul {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        .person {
            padding: 20px;
            border: 1px solid #d3d3d3;

            div{
                width:250px;

                .buttons {
                    display: flex;
                    justify-content: space-around;
                }
                
            }
        }
    }
`;