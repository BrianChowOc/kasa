import PropTypes from "prop-types";
import styled from "styled-components";

const TagContainer = styled.div`
  height: 25px;
  background-color: #ff6060;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (max-width: 915px) {
    height: 18px;
    font-size: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (max-width: 280px) {
    font-size: 7px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

function Tag({ text }) {
  return <TagContainer>{text}</TagContainer>;
}

Tag.propTypes = {
  text: PropTypes.string,
};

export default Tag;
