import React, { useState } from "react";
import axios from "axios";
import "./Uploader.css";

function Uploader() {
	const [userInfo, setuserInfo] = useState({
		file: [],
		filepreview: null,
	});
	const handleInputChange = (event) => {
		setuserInfo({
			...userInfo,
			file: event.target.files[0],
			filepreview: URL.createObjectURL(event.target.files[0]),
		});
	};
	const [isSucces, setSuccess] = useState(null);

	//! Check https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
	const submit = async () => {
		const formdata = new FormData();
		formdata.append("avatar", userInfo.file);
		axios
			.post("http://localhost:8080/imageupload", formdata, {
				headers: { "Content-Type": "multipart/form-data" },
			})
			.then((res) => {
				// then print response status
				console.warn(res);
				if (res.data.success === 1) {
					setSuccess("Image upload successfully");
				}
			});
	};
	return (
		<div className='container mr-60'>
			<h3 className='mt-2 mb-8 bg-gradient-to-r from-[#f6ece9] via-[#9a6203] to-orange-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-6xl '>
				The final Meme Uploader!{" "}
			</h3>
			<div className='formdesign'>
				{isSucces !== null ? <h4> {isSucces} </h4> : null}
				<div className='form-row'>
					<label className='mt-2 mb-8 bg-gradient-to-r from-[#f6ece9] via-[#9a6203] to-orange-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-6xl '>Select Image :</label>
					<input
						type='file'
						className='form-control'
						name='upload_file'
						onChange={handleInputChange}
					/>
				</div>
				<div className='form-row'>
					<button
						type='submit'
						className='btn btn-dark'
						onClick={() => submit()}
					>
						{" "}
						Save{" "}
					</button>
				</div>
			</div>

			{userInfo.filepreview !== null ? (
				<img
					className='previewimg'
					src={userInfo.filepreview}
					alt='UploadImage'
				/>
			) : null}
		</div>
	);
}
export default Uploader;
