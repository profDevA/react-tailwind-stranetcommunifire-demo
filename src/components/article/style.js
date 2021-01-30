import styled from 'styled-components';

export const HoverContainer = styled.div`
    .article {    
        transition: all .3s ease;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 160%;
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
            transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -120%, 0);
            -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg ) translate3d(0, -120%, 0);
            -webkit-transition: transform 0.7s ease 0s;
            transition: transform 0.7s ease 0s;
            z-index: 1;
        }
    }

    &:hover {
        .article {
            transform: scale(1.01);
            box-shadow: 1px 1px 5px 3px #00000091;
            
            &::after {
                transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 146%, 0);
                -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 146%, 0);
            }
        }
    }

`;