import { SplitColorChannelText } from "react-text-fun";
const SplitColor = ({ text }) => {
	return (
		<>
			<SplitColorChannelText text={text} fontSize={100} fill={"#ffffff"} rotation={45} rgbOffset={0.05} addBlur={true} addNoise={false} />
		</>
	);
};
export default SplitColor;
