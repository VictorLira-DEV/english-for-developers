import styled from 'styled-components';

interface Iprops {
    color: string;
}

export const StyledCard = styled.div`
    width: 350px;
    border: 1px solid
        ${(props: { color: string }) =>
            (props.color === 'red' && 'rgb(225, 54, 94)') ||
            (props.color === 'blue' && 'rgb(12, 226, 249)') ||
            (props.color === 'purple' && 'rgb(123, 87, 246)')};

    img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
    }

    p {
        color: rgb(136, 136, 136);
        margin-top: -19px;
        padding: 20px;
        line-height: 1.5;
    }

    h2 {
        color: ${(props: { color: string }) =>
            (props.color === 'red' && 'rgb(225, 54, 94)') ||
            (props.color === 'blue' && 'rgb(12, 226, 249)') ||
            (props.color === 'purple' && 'rgb(123, 87, 246)')};
        padding: 10px 20px;
    }
`;
