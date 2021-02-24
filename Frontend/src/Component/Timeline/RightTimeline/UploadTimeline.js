import React, { useState, useEffect } from "react";
import axios from "axios";
import Address from '../../../config/config'
// import { useParams } from 'react-router-dom'


function UploadTimeline(props) {
	// function UploadTimeline() {
		const [name, setname] = useState("");
		const [image, setimage] = useState();
		const [Description,setDescription] = useState("")
		const [Daate,setDaate] = useState("")
		const [dataReceived, setdataReceived] = useState({});
		const [Form, setForm] = useState("");
		const [post,setPost] = useState([])
		const fun = props.setTrue;

	let submitbtn = e => {
		const dat=new Date().toLocaleString()
		setDaate(dat)
		console.log(dat) 
		// console.log(post);
		e.preventDefault();
	


		
	
console.log(name)
console.log(Description)


	//send image to backend node 
		const data = new FormData();
		data.append("name", name);
		data.append("image", image);
		data.append("Description", Description);
		data.append("Daate",Daate)

		axios.post(Address.address[9], data).then(response => {
		fun(true);
		setdataReceived(response);
			
			

		});	
				};

	
	//Get AXIOS CALL FETCH IMAGE DETAILS




	const createform = () => {
		setForm(true);
		
		};

	const hideform = () => {
		setForm(false);
		}


	return (
		<div>
			<div className='rght_btn'>
				<span className='rght_btn_icon'>
					<img src='/images/btn_iconb.png' alt='up' />
				</span>
				<span className='btn_sep'>
					<img src='/images/btn_sep.png' alt='sep' />
				</span>

				<a href='#' onClick={createform}>
					Upload Post
				</a>
		
			</div>
			
			{Form ?(
			<form action='/Timeline' method='post' enctype='multipart/form-data' onSubmit={submitbtn}>
				<label />
				NAME:
				<input
					type='text'
					id='name'
					name='name'
					onChange={e => {
						
						setname(e.target.value);
					}}

					
				/><br/>

				<label />
				Description:
				<input
					type='text'
					id='desc'
					name='desc'
					onChange={e => {
						
						setDescription(e.target.value);
					}}

					
				/><br/>
				
				<input
					type='file'
					id='file'
					name='image'
					onChange={e => {
						setimage(e.target.files[0]);
					}}
				/>
				<input name='image' type='submit'  onClick={submitbtn}  />
				 {Form ?(<input name="done" type="submit" value="Done" onClick={hideform} />):(true)}
				{/* <input name='image' type='submit' onClick={submitbtn} /> */}
			</form>)
			:(false )}

			<h1>{dataReceived.data}</h1>
			
			{/* <h1>{console.log(name)}</h1> */}
		</div>
	);
}

export default UploadTimeline;
