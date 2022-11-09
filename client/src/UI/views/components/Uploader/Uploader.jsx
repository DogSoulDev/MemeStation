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
	const submit = async () => {
		const formdata = new FormData();
		formdata.Uploaderend("avatar", userInfo.file);
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
		<div className='bg-black pb-5'>
		<div className='max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8'>
			<div className='sm:flex sm:items-center sm:justify-between'>
				<div className='flex justify-center text-teal-300 sm:justify-start'>
				</div>
				<p className='mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0'>
					UPLOAD &nbsp; YOUR &nbsp; MEME!
				</p>
			</div>
		</div>
			<div className='formdesign'>
				{isSucces !== null ? <h4> {isSucces} </h4> : null}
				<div className='form-row'>
					<input className='flex justify-center form-control'
						type='file'
						name='upload_file'
						onChange={handleInputChange}
					/>
				</div>
				<div className='flex justify-center form-row'>
					<button
						type='submit'
						className='flex justify-center btn btn-dark'
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