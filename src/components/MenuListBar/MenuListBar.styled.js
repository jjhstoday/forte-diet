import styled from 'styled-components';
import { TiHeart } from 'react-icons/ti';
import { ReactComponent as WaterDose } from '../../assets/icons/MenuList/waterDrop.svg';
import { ReactComponent as Donut } from '../../assets/icons/MenuList/donut.svg';
import { ReactComponent as Pencil } from '../../assets/icons/MenuList/pencil.svg';
import { VscTriangleRight } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import { palette, fontSizeKit, fontWeightKit } from 'styles';

const StyledMenuListBar = styled.div`
  color: ${palette.themeDefault};
  width: 70px;
  height: 261px;
  position: absolute;
  top: 30px;
  left: -108px;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: ${fontSizeKit.small};

  span {
    font-weight: ${fontWeightKit.bold};
    font-size: ${fontSizeKit.medium};
  }

  span + span {
    font-size: ${fontSizeKit.medium};
    letter-spacing: 0.2rem;
    margin-top: 6px;
  }
`;

const StyledLike = styled(TiHeart)`
  color: #faafaf;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  display: block;
  margin-top: 20px;

  & + span {
    display: block;
    font-size: ${fontSizeKit.small};
    font-weight: ${fontWeightKit.normal};
    color: #faafaf;
    text-align: center;
    margin-top: -5px;
  }
`;

const StyledContainer = styled(motion.div)``;

const StyledWaterDose = styled(WaterDose)`
  margin: 10px auto 0;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  display: block;
  cursor: pointer;

  & + span {
    display: block;
    font-size: ${fontSizeKit.small};
    font-weight: ${fontWeightKit.normal};

    color: #34b0c0;
    text-align: center;
    margin-top: 3px;
  }
`;

const StyledWaterDoseDialog = styled(motion.div)`
  width: 80px;
  height: auto;
  position: absolute;
  border-radius: 8px;
  top: 45px;
  left: -78px;
  background: rgba(182, 182, 182, 0.4);
  box-shadow: -1px 1px 3px ${palette.themeBrightGray};
  display: flex;
  flex-flow: column;
  font-size: 1.2rem;

  span {
    text-align: center;
    padding: 11px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    opacity: 0.6;
  }

  span + span {
    font-size: ${fontSizeKit.small};
    border-radius: 0;
    margin-top: 0;
    border-top: 1px solid ${palette.themeBrightGray};
  }

  span + span + span + span {
    border-radius: 0 0 8px 8px;
  }

  span:hover {
    background: #34b0c0;
    opacity: 0.8;
  }
`;

const StyledTriangle = styled(VscTriangleRight)`
  position: absolute;
  right: -17px;
  top: 48%;
  width: 25px;
  height: 25px;
  color: ${palette.themeBrightGray};
  opacity: 0.4;
`;

const StyledDonut = styled(Donut)`
  width: 37px;
  height: 37px;
  box-sizing: border-box;
  display: block;
  margin: 5px auto 0;

  & + span {
    display: block;
    font-size: ${fontSizeKit.small};
    font-weight: ${fontWeightKit.normal};

    color: #6c3909;
    text-align: center;
    margin-top: -4px;
    letter-spacing: 0;
  }
`;

const StyledPencil = styled(Pencil)`
  width: 37px;
  height: 37px;
  box-sizing: border-box;
  display: block;
  margin: 10px auto 0;
  cursor: pointer;

  & + span {
    display: block;
    font-size: ${fontSizeKit.small};
    font-weight: ${fontWeightKit.normal};

    color: #ffc219;
    text-align: center;
    margin-top: 4px;
  }
`;

export {
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut,
  StyledPencil,
  StyledWaterDoseDialog,
  StyledTriangle,
  StyledContainer
};
