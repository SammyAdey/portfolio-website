import { DistortionText } from "react-text-fun";

const Distortion = ({ text }) => {
	return (
		<>
			<DistortionText text={text} fontSize={100} speed={1.5} rotation={45} distortX={0.5} distortY={0.3} noiseAmplitude={0.8} noiseVolatility={1.2} />
		</>
	);
};
export default Distortion;
