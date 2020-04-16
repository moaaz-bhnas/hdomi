import { memo } from 'react';
import { 
  StyledBanner,
  Container,
  BannerImg
} from './style';
import banner from '../../img/banner.jpg';

const Banner = () => {
  return (
    <StyledBanner>
      <BannerImg src={banner} alt="banner" />
    </StyledBanner>
  );
}

export default memo(Banner);