import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 8px;
	border-radius: 8px;
	border: 1px solid #ccc;
	margin: 16px 16px;
	width: 350px;
	height: 150px;
	align-content: center;
`;

export const WrapperTitle = styled.h2`
	font-size: 18px;
	font-weight: bold;
	margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
	font-size: 16px;
	font-weight: bold;
	margin: 8px 0;
	color: #2d3748;
`;

export const WrapperLink = styled.a`
background: #fff;
border-radius: 5px;
width: 100%;
padding: 24px;
display: flex;
align-items: center;
transition: transform 0.2s;

&:hover {
  transform: translateX(6px);
}

& + a {
  margin-top: 16px;
}

img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

div {
  margin: 0 16px;
  flex: 1;

  strong {
    font-size: 20px;
    color: #3d3d4d;
  }

  p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 4px;
  }
}

svg {
  margin-left: auto;
  color: #cbcbd6;
}
}
`;
