// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../../assets/img/logo.jpg";

// const Onboarding = () => {
// 	const [logo, setLogo] = useState(true);
// 	const [btnFirstPage, setBtnFirstPage] = useState(true);

// 	useEffect(() => {
// 		setTimeout(() => {
// 			setLogo(false);
// 		}, 800000);
// 	}, []);
// 	const handleLogo = () => {
// 		setLogo(false);
// 	};
// 	return (
// 		<div className='splash_card'>
// 			{logo ? (
// 				<div className='intro'>
// 					<div className='overlap-group'>
// 						<Link className='linkSkip' to='/login'>
// 							<div className='skip inter-normal-outrageous-orange-14px'>
// 								skip
// 							</div>
// 						</Link>
// 						<div onClick={logo} className='logo-container'>
// 							<img src='true' alt='logo' className='logo animate-enter' />
// 							<div className='logo-sub-title'>
// 								<span className='span0'>Matching never sounded so </span>
// 								<span className='span1'>good</span>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			) : (
// 				<div
// 					setLogo={setLogo}
// 					btnFirstPage={btnFirstPage}
// 					setBtnFirstPage={setBtnFirstPage}
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default Onboarding;
