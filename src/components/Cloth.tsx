import { useEffect, useState } from "react";

interface Props {
	vw: number,
	ratio: number
}

class CornerRectangle {
	public a: number;
	public b: number;
	public angle: number;

	constructor(w: number, r: number) {
		this.a = this.calcA(w, r);
		this.b = this.calcB(w, r);
		this.angle = this.calcAngle(r);
	}
	calcA(w: number, r: number): number {
		const commonA = 2 * w * Math.sqrt(1 - (Math.sin(Math.atan(1 / r)) ** 2));
		if (r > 1) {
			return 2 * w * Math.sqrt(1 - (Math.sin(Math.atan(1 / r)) ** 2));
		}
		if (r > 0) {
			return 2 * w * Math.sqrt((1 / (r * r)) - (Math.sin(Math.atan(1 / r)) ** 2));
		}
		return 0;
	}
	calcB(w: number, r: number): number {
		return 2 * w * Math.sin(Math.atan(1 / r));
	}

	calcAngle(r: number): number {
		return Math.atan(1 / r) * 180 / Math.PI;
	}

	calcStyle(): object {
		return {
			width: this.a.toString() + "px",
			height: this.b.toString() + "px",
			transform: `translateX(-50%) translateY(-50%) rotateZ(${-this.angle}deg)`
		}
	}
}


const Cloth = ({ vw, ratio }: Props) => {
	const [w, setW] = useState((window.innerWidth < 400? 0.75 : vw) * window.innerWidth);
	
	const cornerRectangle = new CornerRectangle(w, ratio);
	useEffect(() => {
		const iSetW = ()=>{
			if (window.innerWidth < 340) {
				setW(0.95 * window.innerWidth)
			} else if (window.innerWidth < 700) {
				setW(0.8 * window.innerWidth)
			} else if (window.innerWidth < 1130) {
				setW(0.5 * window.innerWidth)
			} else {
				setW(vw * window.innerWidth)
			}
		}
		//setW((window.innerWidth < 400? 0.75 : vw) * window.innerWidth);
		iSetW()
		
		window.addEventListener("resize", () => {
			//setW((window.innerWidth < 400? 0.75 : vw) * window.innerWidth);
			iSetW()
		})
	}, [vw]);

	return (
		<div className='cloth' style={cornerRectangle.calcStyle()}></div>
	)
}

export default Cloth