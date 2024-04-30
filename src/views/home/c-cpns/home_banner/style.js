import styled from "styled-components";
import coverImg from '@/assets/img/cover_01.jpeg'

export const BannerWrapper=styled.div`
  /* 
    * background: url("../../../../assets/img/cover_01.jpeg");
    * 这种因为传入的是字符串webpack会对其进行打包路径就不再是这个路径
  */
  height: 529px;
  /* background: url(${coverImg}) center/cover; */
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover; 
`