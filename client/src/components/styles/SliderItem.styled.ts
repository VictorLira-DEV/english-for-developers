import styled from 'styled-components';

export const StyledSliderItem = styled.div`
    color: white;
    padding: 40px;
    overflow: hidden;
    text-align: center;
    #quotes-mark {
        font-size: 25px;
    }

    p:last-of-type {
        margin-top: 20px;
        line-height: 2;
    }
    .profile {
        text-align: center;
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 3px solid white;
            margin: 20px 0 10px 0;
        }
        .stars {
            color: rgb(218, 218, 40);
            margin-bottom: 10px;
        }
    }
`;
