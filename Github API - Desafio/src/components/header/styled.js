import styled from "styled-components";
import { shade } from "polished";

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 4px 400px;
	margin-bottom: 30px;

	input {
		flex: 1;
		height: 70px;
		padding: 0 24px;
		border: 2px solid #fff;
		border-radius: 5px 0px 0px 5px;
		color: #3a3a3a;
		border-right: 0;

		&::placeholder {
			color: #a8a8b3;
		}
	}

	button {
		width: 160px;
		background-color: #04d361;
		border-radius: 0px 5px 5px 0px;
		border: 0;
		color: #fff;
		font-weight: bold;
		transition: background-color 0.2s;

		&:hover {
			background-color: ${shade(0.2, "#04d361")};
		}

		span {
			font-weight: bold;
			color: #ffff;
		}
	}
`;
