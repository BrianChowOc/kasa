import styled from "styled-components";
import PropTypes from "prop-types";

const ImgStyle = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

function HostImg({ img }) {
  return <ImgStyle src={img} alt="host" />;
}

HostImg.propTypes = {
  rating: PropTypes.string,
};
export default HostImg;
