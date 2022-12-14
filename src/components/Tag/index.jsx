import PropTypes from "prop-types";
import styled from "styled-components";

const TagContainer = styled.div`
  height: 25px;
  width: 115px;
  background-color: #ff6060;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

function Tag({ text }) {
  return <TagContainer>{text}</TagContainer>;
}

Tag.propTypes = {
  text: PropTypes.string,
};

export default Tag;
