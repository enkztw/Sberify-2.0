import Link from 'next/link';
import PropTypes from 'prop-types';
import Swiper, { Autoplay } from 'swiper';

import {
    ArtistStyled,
    CoverStyled,
    InfoStyled,
    LinkStyled,
    NameStyled,
    ReleasesStyled,
    ReleaseStyled
} from './style';

const swiperParams = {
    Swiper,
    modules: [Autoplay],
    ContainerEl: 'section',
    WrapperEl: 'ul',
    slidesPerView: 'auto',
    autoplay: false
};

const Releases = ({ releases }) => (
    <ReleasesStyled {...swiperParams}>
        {releases.map(({ id, name, images, artists, album_type }) => (
            <ReleaseStyled key={id}>
                <Link href={`/album/${id}`} passHref>
                    <LinkStyled single={album_type === 'single'}>
                        <CoverStyled src={images[0].url} alt="" />
                        <InfoStyled>
                            <NameStyled>{name}</NameStyled>
                            <ArtistStyled>{artists[0].name}</ArtistStyled>
                        </InfoStyled>
                    </LinkStyled>
                </Link>
            </ReleaseStyled>
        ))}
    </ReleasesStyled>
);

Releases.propTypes = {
    releases: PropTypes.array
};

export default Releases;
