import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.custom';

export const ReleasesStyled = styled(Swiper)`
    z-index: 10;
`;

export const ReleaseStyled = styled.li`
    width: fit-content;
    height: 60%;
    min-height: 140px;
    min-width: 140px;
    flex-shrink: 0;

    padding-right: 40px;
    box-sizing: content-box;
`;

const singleStyle = ({ single }) => {
    if (!single) {
        return;
    }

    return css``;
};

export const CoverStyled = styled.img`
    display: block;
    position: relative;
    width: auto;
    height: 100%;
    border-radius: 4px;
    transition: 0.3s;
    z-index: 1;
    box-shadow: -6px 4px 8px rgba(18, 18, 18, 0.24), -6px 4px 12px rgba(18, 18, 18, 0.24);
`;

// TODO: onFocus
export const LinkStyled = styled.a`
    position: relative;
    display: block;
    height: 100%;

    &:hover {
        ${CoverStyled} {
            transform: translateY(-25%);
        }
    }

    ${singleStyle};
`;

export const InfoStyled = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0px;
`;

export const NameStyled = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto';
    color: var(--primary-text);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ArtistStyled = styled.h4`
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
